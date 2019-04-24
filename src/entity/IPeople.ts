export interface IPeople {
    id: string
    name: string
    age: string
}

export interface IStudent extends IPeople{
    teachers: ITeacher[]
}

export interface ITeacher extends IPeople{
    students: IStudent[]
}

export class Student implements IStudent{
    age: string;
    id: string;
    name: string;
    teachers: ITeacher[];
}

export class Teacher implements ITeacher{
    age: string;
    id: string;
    name: string;
    students: IStudent[];
}
