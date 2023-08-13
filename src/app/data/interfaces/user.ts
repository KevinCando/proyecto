import { Role } from './role';
import { Worker } from './worker';

export interface User {
    id: number;
    roleId: number;
    workId: number;
    name: string;
    pass: string;
    dateCreate: string;
    role: Role;
    worker: Worker;
}
