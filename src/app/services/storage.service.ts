import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private sql: SQLite, private sqlObj: SQLiteObject) { }

  public createDB(dbName: string): void{
    this.sql.create({
      name:dbName,
      location:'default'
    }).then((db: SQLiteObject)=>{
        db.close().then(()=>console.log('db '+dbName +'closed')
        );
    }).catch(err=>console.log('db error: '+err)
    );
  }
  public addToDb(dbName: string, val: any): void{
   // this.sqlObj.openDBs().
  }

}
