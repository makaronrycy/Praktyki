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
            addToDo(item.id, item.name, item.datetime, item.done, item.trash);
        });
    };

    //dodawanie ToDo
    function addToDo(id,name,datetime,done,trash){
        if(trash){
            return;
        }
        const deadline = new Date(datetime);
        const completed = done ? check : uncheck;
        const cross = done ? crossout : "";
        const due = true;
        const clockDiv = due ?`
            <div id="clockdiv${id}">
                <span class="days">:</span>
                <span class="hours">:</span>
                <span class="minutes">:</span>
                <span class="seconds">:</span>
            </div>`:"";
        const html =`<li class="item">
            <i class="far ${completed}" id="${id}" job="complete"></i>
            <p class="text${cross}">${name}</p>
            ${clockDiv}
            <i class="far fa-times-circle" id="${id}" job="delete"></i>
            </li>`;
        const position = "beforeend";
        list.insertAdjacentHTML(position,html);
        initializeClock('clockdiv', deadline, id);
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

    list.addEventListener("click",function(event){
        const element = event.target;
        const job = element.attributes.job.value;
        if(job == "complete"){
            checkToDo(element);
        }else if(job == "delete"){
            removeToDo(element);
        }
        localStorage.setItem("ToDo",JSON.stringify(store));
    });
    clear.addEventListener("click",function(){
        localStorage.clear();
        location.reload();
    });

    document.addEventListener("keyup",function(event){
        if(event.key == "Enter"){
            const name = inputName.value;
            const date = inputDeadlineDate.value;
            const time = inputDeadlineTime.value;
            const datetime = date+" "+time;
            if(name){
                if(datetime){
                    addToDo(id,name,datetime,false,false);
                    store.push(
                        {
                            id:     id,
                            name:   name,
                            datetime: datetime,
                            done:   false,
                            trash:  false
                        }
                    );
                    id++;
                    localStorage.setItem("ToDo", JSON.stringify(store));
                }
            }
            inputName.value = "";
            inputDeadlineDate.value = "";
            inputDeadlineTime.value = "";
            
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
        const elementId = element.concat(id);
        const clock = document.getElementById(elementId);
        const daysSpan = clock.querySelector('.days');
        const hoursSpan = clock.querySelector('.hours');
        const minutesSpan = clock.querySelector('.minutes');
        const secondsSpan = clock.querySelector('.seconds');
      
        function updateClock() {
          const t = getTimeRemaining(endtime);
      
          daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      
          if (t.total <= 0) {
            removeToDo()
            clearInterval(timeinterval);

          }
        }
      
        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
      }
      
      //const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
      
};