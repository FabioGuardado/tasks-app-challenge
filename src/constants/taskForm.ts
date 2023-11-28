import { ITaskForm, PointEstimate, Status } from '../interfaces/task';

export const TASKS_FORM_ACTION_TYPES = {
  UPDATE: 'UPDATE',
  CREATE: 'CREATE',
};

export const FORM_INITIAL_STATE: Partial<ITaskForm> = {
  name: '',
  tags: [],
  dueDate: '',
  pointEstimate: PointEstimate.ZERO,
  assigneeId: '',
  status: Status.TODO,
};

export const ACTION_BUTTONS_LABELS = {
  CREATE: 'Create',
  UPDATE: 'Update',
};
