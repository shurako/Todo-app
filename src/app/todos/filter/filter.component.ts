import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from '../../../models/Filter';
import { Todo } from '../../../models/Todo';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filters!: Filter[]
  @Input() todos!: Todo[];
  @Input() filteredTodos!: Todo[];
  @Output() filteredTodosChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.filters = [{
      content: 'All',
      selected: true,
    },
    { 
      content: 'Done',
      selected: false,
    }
  ]
  }


  handleFilter(i: number) {
    this.filters.map( (filter, index) => {if(index === i){ filter.selected = true} else { filter.selected = false}})
    if (i === 1) { this.filterDone() }
    else { this.filterAll() }

    this.filteredTodosChange.emit(this.filteredTodos);
  }

  filterDone() {
    this.filteredTodos = this.todos.filter(todo => todo.completed === true)
    return this.filteredTodos
  }

  filterAll() {
    this.filteredTodos = this.todos;
    return this.filteredTodos
  }
}
