class Task{
    private readonly _createdBy: string;
    title: string;
    description: string;
    completed: boolean;

    constructor(title: string, description: string, createdBy: string) {
        this.title = title;
        this.description = description;
        this._createdBy = createdBy;
        this.completed = false;
    }

    get createdBy(): string {
        return this._createdBy;
    }

    toggleStatus(): void {
        this.completed = !this.completed;
    }

    getDetails(): string {
        return `Task: ${this.title} - ${this.description} - ${this.completed ? 'Completed' : 'Pending'}`;
    }

    static createSampleTasks(): Task[] {
        return [
            new Task("Complete homework", "Finish math exercises", "Charlie"),
            new Task("Buy groceries", "Get milk, bread, and eggs from the store", "Alice")
        ];
    }


}

const task1 = new Task("Complete homework", "Finish math exercises", "Charlie");
task1.toggleStatus();
console.log(task1.getDetails());

const task2 = new Task("Clean room", "Clean the room", "Mary");
console.log(task2.getDetails());

const tasks = Task.createSampleTasks();
tasks.forEach(task => console.log(task.getDetails()));
