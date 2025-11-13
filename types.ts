
export enum Actor {
  USER = 'User Action',
  ADMIN = 'Admin Action',
  SYSTEM = 'Platform Behavior',
}

export interface WorkflowStep {
  id: number | string;
  title: string;
  actor: Actor;
  description: string;
  branches?: WorkflowStep[];
  isFinal?: boolean;
}
