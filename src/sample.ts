export const add = (a: number, b: number): number
 => a+b;

type MyType = string | number;
const aData : MyType[] = [];

type User= {
  name: string;
  age : number;
}

const user1: User = {
  name: 'Pepe',
  age: 34,
}

type ArithmeticFunction = (a:number, b:number) => number;

const product : ArithmeticFunction =(a:number, b:number) => a*b;

const substraction = (a:unknown, b:any) =>{
  if(typeof a !== 'number') throw new Error('Invalid data'); // Guarda de tipo
  return a - b
};
substraction('pepe',99)

export type UserType={
  name:string;
  passwd: string;
  age: string;

}
export interface UserType = {
  name: string;
  passwd: string;
  age: string;
};

export interface Repo{
  getAll: () => string[];
  create: (_value: string) =>void
}
