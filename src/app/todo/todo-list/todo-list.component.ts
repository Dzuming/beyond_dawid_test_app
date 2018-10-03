import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {TodoService} from '../todo.service';
import {Task} from 'src/app/shared/interfaces/task/task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})

export class TodoListComponent implements OnInit, OnDestroy {
  public formGroup: FormGroup;
  private subscriptions = new Subscription();
  private getTaskSub: Subscription;

  constructor(
    private todoService: TodoService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      tasks: this.fb.array([])
    });

    this.getTaskSub = this.todoService.getTasks().subscribe((tasks) => {
      for (const task of tasks) {
        const formGroup = Task.asFormGroup(task);

        this.subscriptions.add(
          formGroup.valueChanges.subscribe((value: Task) => {
            this.todoService.saveTask(value);
          })
        );

        (this.formGroup.get('tasks') as FormArray).push(formGroup);
      }
    });
  }

  ngOnDestroy() {
    this.getTaskSub.unsubscribe();
    this.subscriptions.unsubscribe();
  }
}
