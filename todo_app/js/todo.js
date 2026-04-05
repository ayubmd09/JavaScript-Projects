/* this function gets the task from input*/
function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');

    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/* add new task */
function add() {
    var task = document.getElementById('task').value;

    var todos = get_todos();
    todos.push(task);

    localStorage.setItem('todo', JSON.stringify(todos));

    document.getElementById("task").value = "";
    show();

    return false;
}

/* remove task */
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();

    todos.splice(id, 1);

    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

/* display tasks */
function show() {
    var todos = get_todos();

    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] +
            '<button class="remove" id="' + i + '">x</button></li>';
    }
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    // attach remove event
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}

/* add button click */
document.getElementById('add').addEventListener('click', add);

/* initial display */
show();