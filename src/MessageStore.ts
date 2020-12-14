import IStoreWriter from './IStoreWriter';
import IStoreReader from './IStoreReader';

export default class MessageStore {
    writer: IStoreWriter;
    reader: IStoreReader;

    constructor (writer: IStoreWriter, reader: IStoreReader){
        if(writer === null) {
            throw new Error("writer argument cannot be null")
          }
          if(reader === null) {
            throw new Error("reader argument cannot be null")
          }
          this.writer = writer;
          this.reader = reader;
    }

    public save (id: number, message: string) {
        this.writer.save(id, message);
    }
    public read(id: number): string {
        return this.reader.read(id);
    }
    
}
