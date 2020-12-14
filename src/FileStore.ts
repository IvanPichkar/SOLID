import fs from 'fs';
import path from 'path';
import IFileLocator from './IFileLocator';
import IStoreWriter from './IStoreWriter';
import IStoreReader from './IStoreReader';

export default class FileStore implements IStoreReader, IStoreWriter, IFileLocator{
  directory: string;

  constructor(public _directory: string) {
    this.directory = _directory;
  }

  public save (id: number, message: string): void {
    var fileFullName = this.getFileInfo(id);
    fs.writeFileSync(fileFullName, message);
  }

  public read(id: number): string {
    var fileFullName = this.getFileInfo(id);
    var exists = fs.existsSync(fileFullName);
    if(!exists) {
      return ''
    }
    return fs.readFileSync(fileFullName, {encoding: 'ascii'});;
  }

  // Private method to prepare the full file info
  public getFileInfo(id: number): string {
    return path.join(__dirname, this.directory, `${id}.txt`)
  }
}