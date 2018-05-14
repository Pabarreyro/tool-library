import { Tool } from './tool.model';

export class User {
  constructor(
    public username: string,
    public email: string,
    public tools: Tool[],
    public lateFee: number,
    public overdue: boolean
  ) { }
}
