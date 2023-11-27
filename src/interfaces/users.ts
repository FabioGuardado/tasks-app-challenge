export interface IUserSummary {
  id: string;
  avatar: string;
  fullName: string;
}

export interface IUser {
  id: string;
  avatar: string;
  fullName: string;
  email: string;
  type: UserType;
  createdAt: string;
  updatedAt: string;
}

export enum UserType {
  ADMIN = 'ADMIN',
  CANDIDATE = 'CANDIDATE',
}

export default IUserSummary;
