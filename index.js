var app = new Vue({
    el: '#app',
    data: {
        todos: [],
        newTodoText: '',
        nextTodoId: 1
    },
    created: function () {
        this.todos.push({ id: 1, text: this.newTodoText, done: false });
    },
    methods: {
        add: function (id, event) {
            if (event.target.value !== '') {
                let todo = this.todos.find(x => x.id === id);
                todo.text = event.target.value;
                let emptyTodos = this.todos.filter(x => x.text === '');
                if (emptyTodos.length === 0) {
                    this.todos.push({ id: ++this.nextTodoId, text: this.newTodoText, done: false });
                }
            }
        },
        remove: function(start) {
            this.todos.splice(start, 1);
        },
        move: function(index, direction) {
            if (direction === 'up') {
                if (index === 0) {
                    return;
                }
                index--;
            }
    
            if (direction === 'down') {
                if(index === this.todos.length - 1) {
                    return;
                }
            }
    
            let todo = this.todos[index];
            this.todos.splice(index + 2, 0, todo);
            this.todos.splice(index, 1);
        }
    }
})