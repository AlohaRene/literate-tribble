interface Todo {
    id: number;
    text: string;
}

let todos: Todo[] = [];

function addTodo() {
    const inputElement = document.getElementById('todo-input') as HTMLInputElement;
    const text = inputElement.value.trim();

    if (text !== '') {
        const newTodo: Todo = {
            id: todos.length + 1,
            text: text,
        };

        todos.push(newTodo);
        inputElement.value = '';

        renderTodos();
    }
}

function renderTodos() {
    const todoListElement = document.getElementById('todo-list') as HTMLUListElement;
    todoListElement.innerHTML = '';

    todos.forEach((todo) => {
        const liElement = document.createElement('li');
        liElement.textContent = todo.text;
        todoListElement.appendChild(liElement);
    });
}
