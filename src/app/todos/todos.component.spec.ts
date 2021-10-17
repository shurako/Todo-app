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

  it('should remove todo', () => {
    component.removeTodo(1)
    expect(component.todos = [{
      content: 'Note 2',
      completed: false,
    }])
  })

  it('should add todo', () => {
    fixture.componentInstance.inputTodo = 'Test note'
    fixture.componentInstance.addTodo()
    expect(fixture.componentInstance.todos = [...fixture.componentInstance.todos, { content: 'Test note', completed: false}])

  })
  
  

  it('should init toggleDone function on button click and mark todo as done', fakeAsync(() => {
    spyOn(component, 'toggleDone');
  
    const button = fixture.debugElement.nativeElement.querySelector('.check');
    button.click()
    component.toggleDone(1)
    expect(fixture.componentInstance.toggleDone).toHaveBeenCalled;   
    expect(fixture.componentInstance.todos = [{content: 'note 1', completed: true}, ...fixture.componentInstance.todos])

  }));


});



