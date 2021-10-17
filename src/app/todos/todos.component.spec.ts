import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add todo', () => {
    fixture.componentInstance.inputTodo = 'Test note'
    fixture.componentInstance.addTodo()
    expect(fixture.componentInstance.todos = [...fixture.componentInstance.todos, { content: 'Test note', completed: false}])
  
  })



});



