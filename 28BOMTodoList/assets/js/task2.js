// document.addEventListener("DOMContentLoaded", () => {
    const addInput = document.querySelector(".add-input");
    const listContainer = document.querySelector(".list");
    const addBtn = document.querySelector(".add-btn");
    const deleteAll=document.querySelector(".delete-all")
    
    let taskNumber = 1;

    let api = [
        {
            id: 1,
            title: "Do homework",
            done: false, 
        }
    ];

    addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let newTodo = {
            id: api.length + 1,
            title: addInput.value.trim(),
            done: false,
        };

        if (!newTodo.title) {
            alert("Please write a task");
            return;
        }

        api.push(newTodo);
        console.log(api);
        // if(api.length>1){
        //     api.splice(0,api.length-1)
        // }
        // listContainer.innerHTML="";
        renderTasks();
        addInput.value = "";
     
       
    });

    addInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            addBtn.click();
        }
    });

    function renderTasks() {
        listContainer.innerHTML = "";
        api.forEach((todo, index) => {
            const li = document.createElement("li");
            const label = document.createElement("label");
            const spantask = document.createElement("span");

            const taskNum = document.createElement("span");
            taskNum.classList.add("task-num");
            taskNum.textContent = `${taskNumber + index}. `;

            const actionsDiv = document.createElement("div");
            actionsDiv.classList.add("actions");

            const buttonEdit = document.createElement("button");
            buttonEdit.classList.add("edit");
            buttonEdit.textContent = "Edit 🖉";

            const buttonDelete = document.createElement("button");
            buttonDelete.classList.add("delete");
            buttonDelete.textContent = "Delete 🗑";

            const buttonDid = document.createElement("button");
            buttonDid.classList.add("did");
            buttonDid.classList.add("did")
            buttonDid.textContent="Did ☑";
            const checkbox = document.createElement("button");
            checkbox.type = "checkbox";
            // checkbox.classList.add("checkbox");

            // buttonDid.appendChild(checkbox);

            actionsDiv.appendChild(buttonEdit);
            actionsDiv.appendChild(buttonDelete);
            actionsDiv.appendChild(buttonDid);

            label.appendChild(taskNum);
            label.appendChild(spantask);
            li.appendChild(label);
            li.appendChild(actionsDiv);

            spantask.textContent = todo.title;

            listContainer.appendChild(li);
            if( todo.done){
                spantask.style.textDecoration="line-through";
                li.style.backgroundColor="rgb(143, 236, 143)";
                li.style.border="1px solid rgb(143, 236, 143)";
                buttonDid.style.backgroundColor="red";
                buttonDelete.style.pointerEvents="auto"
            }
            else{
                
                spantask.style.textDecoration="none";
                li.style.backgroundColor="rgb(230, 118, 118)";
                li.style.border="1px solid rgb(230, 118, 118)";
                buttonDid.style.backgroundColor="green";
                buttonDelete.style.pointerEvents = "none";
             }
            buttonDelete.addEventListener("click",()=>{
                
                api.splice(index,1);
                console.log(api);
                renderTasks();
            })
            deleteAll.addEventListener("click",()=>{
                api.splice(index,api.length);
                console.log(api);
                    renderTasks();
                
            })
            buttonEdit.addEventListener("click",()=>{
              const edited= prompt("edit",spantask.textContent);
              if (edited!=null && edited!="") {
                api[taskNumber-1].title=edited;
                renderTasks();
              }
              else{
                alert("task cannot be empty!!!!!!")
              }
            console.log(api);
          
            })

            buttonDid.addEventListener("click",()=>{
                todo.done = !todo.done; 
                renderTasks();

          
            })
        });
    }

    renderTasks();


  
// });
