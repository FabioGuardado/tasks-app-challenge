import { gql } from '@apollo/client';

export const GET_TASKS = gql`
  query getAllTasks {
    tasks(input: { status: IN_PROGRESS }) {
      id
      name
      tags
      dueDate
      pointEstimate
      assignee {
        avatar
        fullName
      }
    }
  }
`;

export const GET_TASK_BY_ID = '';
