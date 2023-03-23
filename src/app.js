const doc={
    tbody:document.querySelector("#tbody")
};

const state = {
    host: "http://localhost:8000/",
    todos: []
};

getTodos();

function getTodos(){
    let url =state.host + "todos";
    fetch(url)
    .then(response => response.json())
    .then(result => {
        console.log(result)
    });
};
