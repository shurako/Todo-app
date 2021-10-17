import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'
import { faCheck, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos!: Todo[];
  filteredTodos!: Todo[];
  inputTodo!: string
  faTrash = faTrash;
  faCheck = faCheck;
  faPlus = faPlus;


  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Note 1',
        completed: false,
      },
      {
        content: 'Note 2',
        completed: false,
      }
    ];

    this.filteredTodos = this.todos;

  }


  toggleDone(id: number) {
    this.todos.map((todo, i) => {
      if (id === i) { todo.completed = !todo.completed; }
    })
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    })

    this.inputTodo = ''
  }

  removeTodo(id: number) {
    this.todos.map((todo, i) => {
      if (id === i) { this.todos.splice(i, 1); }
    })
  }
}
