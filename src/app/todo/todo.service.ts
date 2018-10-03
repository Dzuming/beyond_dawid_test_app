import {Injectable} from '@angular/core';
import {BeyondService} from '@getbeyond/ng-beyond-js';
import {Observable, of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {Task} from 'src/app/shared/interfaces/task/task.model';

@Injectable()
export class TodoService {
  private resource: any;

  constructor(
    private beyondService: BeyondService
  ) {
    this.resource = this.beyondService.api.resource('wtm_task');
  }

  getTasks(): Observable<any> {
    return this.resource.find()
      .pipe(
        mergeMap((response) => {
          return of(response['results']);
        })
      );
  }

  saveTask(task: Task) {
    this.resource.save(task);
  }
}
