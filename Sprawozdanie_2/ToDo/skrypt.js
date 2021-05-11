
let data = localStorage.getItem("ToDo");

window.onload = function(){
    const list = document.getElementById("list");
    const inputName = document.getElementById("item-name");
    const inputDeadlineDate = document.getElementById("item-deadlineDate");
    const inputDeadlineTime = document.getElementById("item-deadlineTime");
    const clear = document.querySelector(".clear");
    const check = "fa-check-circle";
    const uncheck = "fa-circle";
    const crossout = "lineThrough";
    const failure = "fail";
    
    let store, id;

    if(data){
        store = JSON.parse(data);
        loadToDo(store);
        id = store.length;
    }else{
        store = [];
        id = 0;
    };
    
    //ładowanie ToDo
    function loadToDo(table){
        table.forEach(function(item){
            addToDo(item.id, item.name, item.datetime, item.done, item.trash, item.fail);
        });
    };
    clear.addEventListener("click",function(){
        localStorage.clear();
        location.reload();
    });
    //dodawanie ToDo
    function addToDo(id,name,datetime,done,trash,fail){
        if(trash){
            return;
        }
        if(fail){
            var cross = failure
        }else{
            var cross = done ? crossout : ""
        }
        const completed = done ? check : uncheck; 
        const checked = fail ? "":`<i class="far ${completed} co" id="${id}" job="complete"></i>`;
        const clockDiv = fail || done || datetime == null ? "":`
            <div id="clockdiv${id}">
                <span class="days"></span>
                <span class="hours"></span>
                <span class="minutes"></span>
                <span class="seconds"></span>
            </div>`;
            
        const html =`<li class="item">
            <p class="text ${cross}">${name}</p>
            ${clockDiv}
            ${checked}
            <i class="far fa-times-circle del" id="${id}" job="delete"></i>
            <i class="fas fa-pen" id="${id}" job="edit"></i> 
            </li>`;
        const position = "beforeend";
        list.insertAdjacentHTML(position,html);
        if(fail==false && done == false && datetime != null){
            initializeClock('clockdiv', datetime, id);
        }
    };

    function checkToDo(element){
        element.classList.toggle(check);
        element.classList.toggle(uncheck);
        element.parentNode.querySelector(".text").classList.toggle(crossout);
        store[element.id].done = store[element.id].done ? false : true;
    };
    //usuwanie ToDo
    function removeToDo(element){
        element.parentNode.parentNode.removeChild(element.parentNode);
        store[element.id].trash = true;
    };
    function editToDo(element){
        const edit = window.prompt("Na jaką nazwe chcesz zmienić ToDo?","Posprzątać pokój");
        element.parentNode.querySelector(".text").innerHTML = edit;
        store[element.id].name = edit;
    }
    
    function failToDo(element,failId){
        console.log(element);
        const storeId = failId;
        console.log("Failed!")
        element.parentNode.querySelector(".text").classList.toggle(failure);
        store[storeId].fail = true;
        element.remove();
    }

    list.addEventListener("click",function(event){
        const element = event.target;
        const job = element.attributes.job.value;
        if(job == "complete"){
            checkToDo(element);
        }else if(job == "delete"){
            removeToDo(element);
        }else if(job == "edit"){
            editToDo(element);
        }
        localStorage.setItem("ToDo",JSON.stringify(store));
    });
    

    document.addEventListener("keyup",function(event){
        if(event.key == "Enter"){
            const name = inputName.value;
            const date = inputDeadlineDate.value;
            const time = inputDeadlineTime.value;
            if(date){
                var datetime = new Date(date+" "+time);
            }else{
                var datetime = null;
            }
            if(name){
                if(Date.parse(datetime)>Date.now()||datetime == null){
                    addToDo(id,name,datetime,false,false,false);
                    store.push(
                        {
                            id:     id,
                            name:   name,
                            datetime: datetime,
                            done:   false,
                            trash:  false,
                            fail: false
                        }
                    );
                }
                else{
                    window.alert("Nie możesz dawać zadań na przeszłość");
                }
                id++;
            }
            inputName.value = "";
            inputDeadlineDate.value = "";
            inputDeadlineTime.value = "";
            localStorage.setItem("ToDo", JSON.stringify(store));
                }
        
    });
    
    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        
        return {
          total,
          days,
          hours,
          minutes,
          seconds
        };
      }
      
      function initializeClock(element, endtime,id) {
          console.log("Konsola");
        const elementId = element.concat(id);
        const clock = document.getElementById(elementId);
        const daysSpan = clock.querySelector('.days');
        const hoursSpan = clock.querySelector('.hours');
        const minutesSpan = clock.querySelector('.minutes');
        const secondsSpan = clock.querySelector('.seconds');
      
        function updateClock() {
          const t = getTimeRemaining(endtime);
      
          daysSpan.innerHTML = t.days+":";
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2)+":";
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)+":";
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      
          if (t.total <= 0) {
              clearInterval(timeinterval);
                store.forEach(function(item){
                if(Date.parse(item.datetime)<=Date.now() && (item.trash) == false && (item.done)==false){
                    
                    console.log(item.id);
                    const clockElement = document.getElementById("clockdiv"+ item.id);
                    failToDo(clockElement,item.id);
                    localStorage.setItem("ToDo", JSON.stringify(store));
                }
            })
          }
        }
        const timeinterval = setInterval(updateClock, 1000);
        updateClock();
      }
};