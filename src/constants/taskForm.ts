import { ITask, Status } from '../interfaces/task';

export const TASKS_FORM_ACTION_TYPES = {
  UPDATE: 'UPDATE',
  CREATE: 'CREATE',
};

export const FORM_INITIAL_STATE: ITask = {
  name: undefined,
  tags: [],
  dueDate: '',
  pointEstimate: undefined,
  assigneeId: undefined,
  status: Status.BACKLOG,
};
