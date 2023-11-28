import { ITask } from '../interfaces/task';

type GroupedDataType = {
  [propName: string]: ITask[];
};

type DinamycGroupedDataObjectKey<T> = keyof T;

const groupTasksByStatus = (tasks: ITask[]) =>
  tasks.reduce((acc: GroupedDataType, currentValue: ITask) => {
    acc[currentValue.status as DinamycGroupedDataObjectKey<typeof acc>] = [
      ...(acc[currentValue.status as DinamycGroupedDataObjectKey<typeof acc>] ||
        []),
      currentValue,
    ];
    return acc;
  }, {});

export default groupTasksByStatus;
