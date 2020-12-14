import IStoreWriter from './IStoreWriter';
import IStoreReader from './IStoreReader'

export default class CacheStore implements IStoreReader, IStoreWriter {
    cache: { [key: number]: string };
    writer: IStoreWriter;
    reader: IStoreReader;

    constructor(_writer: IStoreWriter, _reader: IStoreReader) {
        this.cache = {};
        this.reader = _reader;
        this.writer = _writer;
    }

    public save(id: number, message: string): void {
        this.writer.save(id, message);
        this.addOrUpdate(id, message);
    }

    public read(id: number): string {
        if(this.exists(id)) {
            return this.cache[id];
        }
        var retValue = this.reader.read(id);
        if(retValue !== undefined) {
          this.addOrUpdate(id, retValue);
        }
        return retValue;
    } 

    public addOrUpdate(id: number, message: string): void{
        this.cache[id] = message;
    }

    public exists(id: number): boolean{
        return !!this.cache[id];
    }
}