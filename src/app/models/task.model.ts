export class Task {
    private id: number;
    private title: string;
    private description: string;
    private date: Date;
    private isCompleted: boolean;
    private checkbox: Array<string>;

    constructor(id: number, title: string, description: string, date: Date, isCompleted: boolean, checkbox: Array<string>) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.isCompleted = isCompleted;
        this.checkbox = checkbox;
    }
}
