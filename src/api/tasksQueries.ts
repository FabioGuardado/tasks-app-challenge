import { gql } from '@apollo/client';

export const GET_TASKS = gql`
  query getAllTasks {
    tasks(input: {}) {
      id
      name
      pointEstimate
      dueDate
      assignee {
        id
        fullName
        avatar
      }
      status
      tags
    }
  }
`;

export const GET_TASKS_BY_NAME = gql`
  query getTasksByName($name: String) {
    tasks(input: { name: $name }) {
      id
      name
      pointEstimate
      dueDate
      assignee {
        id
        fullName
        avatar
      }
      status
      tags
    }
  }
`;

export const CREATE_TASK = gql`
  mutation createTask(
    $assigneeId: String
    $name: String!
    $dueDate: DateTime!
    $pointEstimate: PointEstimate!
    $status: Status!
    $tags: [TaskTag!]!
  ) {
    createTask(
      input: {
        assigneeId: $assigneeId
        name: $name
        dueDate: $dueDate
        pointEstimate: $pointEstimate
        status: $status
        tags: $tags
      }
    ) {
      id
      name
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation updateTask(
    $id: String!
    $assigneeId: String
    $name: String!
    $dueDate: DateTime!
    $pointEstimate: PointEstimate!
    $status: Status!
    $tags: [TaskTag!]!
  ) {
    updateTask(
      input: {
        id: $id
        assigneeId: $assigneeId
        name: $name
        dueDate: $dueDate
        pointEstimate: $pointEstimate
        status: $status
        tags: $tags
      }
    ) {
      id
      name
    }
  }
`;

export const DELETE_TASK = gql`
  mutation deleteTask($id: String!) {
    deleteTask(input: { id: $id }) {
      id
      name
    }
  }
`;
