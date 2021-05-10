class ToDo{
    constructor(name,deadline,completed){
        this.name = name;
        this.deadline = deadline;
        this.completed = completed;
    }
    addToDo(name,deadline){
        const text =`<li class="item">
        <p class="text">${name}</p>
        <p class="deadline">${deadline}</p>
        </li>`;
    }
}