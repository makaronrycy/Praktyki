function addToDo(name,date,time){
    const html =`<li class="item">
        <i class="far fa-check-circle"></i>
        <span class="text">${name}</span>
        <span class="deadline-date">${date}</span>
        <span class="deadline-time">${time}</span>
        <i class="far fa-times-circle"></i>
        </li>`;
    const position = "beforeend";
    list.insertAdjacentHTML(position,html);
}
window.onload = function(){
    const list = document.getElementById("list");
    const inputName = document.getElementById("item-name");
    const inputDeadlineDate = document.getElementById("item-deadlineDate");
    const inputDeadlineTime = document.getElementById("item-deadlineTime");
    const check = "fa-check-circle";
    const uncheck = "fa-circle";
    document.addEventListener("keyup",function(event){
        if(event.key == "Enter"){
            const name = inputName.value;
            const date = inputDeadlineDate.value;
            const time = inputDeadlineTime.value;
            if(name){
                if(date || time){
                    addToDo(name,date,time,"false");
                }else{
                    addToDo(name,"","","false");
                }
            }
            inputName.value = "";
            inputDeadlineDate.value = "";
            inputDeadlineTime.value = "";
        }

    });
    document.addEventListener("click",function(){

    })
}
