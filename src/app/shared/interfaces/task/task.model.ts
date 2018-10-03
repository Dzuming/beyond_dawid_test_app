import {FormControl, FormGroup, Validators} from '@angular/forms';

export class Task {
  constructor (
    public id: number,
    public description: string,
    public is_complete: boolean
  ) {}

  static asFormGroup(task?: Task): FormGroup {
    const { id = null, description = null, is_complete = null } = task;

    return new FormGroup({
      id: new FormControl(id),
      description: new FormControl(description, [Validators.required]),
      is_complete: new FormControl(is_complete)
    });
  }
}
