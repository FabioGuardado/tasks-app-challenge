export interface ITask {
  id: string;
  name: string;
  tags: Tags[];
  dueDate: string;
  pointEstimate: PointEstimate;
  status: Status;
  assignee?: Assignee;
}
export interface ITaskForm {
  id?: string;
  name: string;
  tags: Tags[];
  dueDate: string;
  pointEstimate: PointEstimate;
  status: Status;
  assigneeId?: string;
  assignee?: Assignee;
}

export enum Tags {
  ANDROID = 'ANDROID',
  IOS = 'IOS',
  NODE_JS = 'NODE_JS',
  RAILS = 'RAILS',
  REACT = 'REACT',
}

export enum PointEstimate {
  ZERO = 'ZERO',
  ONE = 'ONE',
  TWO = 'TWO',
  FOUR = 'FOUR',
  EIGHT = 'EIGHT',
}

export enum Status {
  BACKLOG = 'BACKLOG',
  CANCELLED = 'CANCELLED',
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
  TODO = 'TODO',
}

type Assignee = {
  id: number;
  avatar: string;
  fullName: string;
};
