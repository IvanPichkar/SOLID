import IStoreWriter from "./IStoreWriter"
import IStoreReader from "./IStoreReader";

export default class StoreLogger implements IStoreReader, IStoreWriter {
    writer: IStoreWriter;
    reader: IStoreReader;

    constructor (_writer: IStoreWriter, _reader: IStoreReader){
        this.writer = _writer;
        this.reader = _reader;
    }
    public save(id: number, message: string): void{
        this.saving(id);
        try {
            this.writer.save(id, message);
        } catch (err) {
            this.errorSaving(id)
        }
        this.saved(id);
    }
    public read(id: number): string{
        this.reading(id)
        var retValue = this.reader.read(id);
        if(retValue === undefined){
            this.fileNotFound(id)
        } else {
            this.returning(id)
        }
        return retValue;
    }
    public saving(id: number): void {
        console.log(`Saving message ${id}.`);
    }
    public saved(id: number): void {
        console.log(`Message saved: ${id}.`);
    }
    public reading(id: number): void {
        console.log(`Reading message: ${id}.`);
    }
    public isExists(exists: boolean): void {
        console.log(`File exists: ${exists}.`);
    }
    public fileNotFound(id: number): void {
        console.log(`No message ${id} found`);
    }
    public returning(id: number): void {
        console.log(`Returning message ${id}.`);
    }
    public errorSaving(id:number): void {
        console.log(`Saving fail ${id}.`);
    }
}