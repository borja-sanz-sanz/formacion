type Person = {
    name: string,
    age: number,
    address: string
}

type User = {
    nick: string,
    email: string
}

type UserPerson = Person & User

type OptionalPerson = Partial<Person>

type RequiredPerson = Required<Person>

type RedOnlyPereson = Readonly<Person>

type PickPerson = Pick<Person, "name" | "age">

type PickPerson = Omit<Person, "name" | "age">


interface IPerson {
    name: string,
    age: number
}

const persona: IPerson = {name:}

class Person implements IPerson{
    constructor (){

    }

    public test(){

    }

    private test(){
        
    }
}