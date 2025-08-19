class Employee {
    name: string;
    protected position: string;
    private _salary: number;

    constructor(name: string, position: string, salary: number) {
        this.name = name;
        this.position = position;
        this._salary = salary;
    }

    getDetails():string{
        return `Name: ${this.name}, Position: ${this.position}`;
    }

    showSalary():string{
        return `Salary: $${this._salary}`;
    }
}

const emp = new Employee("Alice", "Manager", 5000);
console.log(emp.getDetails());
console.log(emp.showSalary());
console.log(emp.name)
// console.log(emp._salary)
// console.log(emp.position)


