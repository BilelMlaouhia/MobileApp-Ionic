import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@awesome-cordova-plugins/sqlite/ngx';




@Injectable({
  providedIn: 'root'
})
export class StorageSqliteService {
  myDB: SQLiteObject ;

  f=0;

  constructor( private sqlite: SQLite) {
    this.createDB();
  }

 public async  createDB(){
  await this.sqlite.create({
      name: 'Billys_DB',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.myDB =db;
        return db;
      }).catch(e => console.log(e));
  }

  public async insertIntoTable(val: string){
   await this.myDB.executeSql(`insert into favFramework values(null,'${val}')`)
    .then(data=>{
      console.log('result after adding '+JSON.stringify(data));
    }).catch(e => console.log(e));
  }

  public createTable(){
    this.myDB.executeSql('create table favFramework (id integer primary key autoincrement,name VARCHAR(32))', [])
    .then((data) => console.log('Executed SQL '+JSON.stringify(data)))
    .catch(e => console.log(e));
  }

  public  getDataFromDB(){
     return this.myDB.executeSql('select * from favFramework',[]);
  }

  public deleteFromDB(tableName: string, id: number){
    return this.myDB.executeSql(`delete from ${tableName} where id=${id} `);
  }

  public updateFromDB(newVal: string, id: number){
    return this.myDB.executeSql(`update favFramework set name= '${newVal}' where id=${id} `);
  }
}
