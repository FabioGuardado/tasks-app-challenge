export interface ITask {
  id?: number;
  name?: string;
  tags?: Tags[];
  dueDate?: Date | string;
  pointEstimate?: PointEstimate;
  status?: Status;
  assigneeId?: number;
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
