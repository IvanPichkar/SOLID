export default class DifferentLogger{
    public saving(id: number): void {
        this.logMethod(`Saving message ${id}.`);
    }
    public saved(id: number): void {
        this.logMethod(`Message saved: ${id}.`);
    }
    public reading(id: number): void {
        this.logMethod(`Reading message: ${id}.`);
    }
    public isExists(exists: boolean): void {
        this.logMethod(`File exists: ${exists}.`);
    }
    public fileNotFound(id: number): void {
        this.logMethod(`No message ${id} found`);
    }
    public return(id: number): void {
        this.logMethod(`Returning message ${id}.`);
    }
    public saveError(err: Error): void {
        this.logMethod(`Saving fail ${err}.`);
    }
    private logMethod(message: string): void {
        console.log(`different log - ${message}`);
    }
}