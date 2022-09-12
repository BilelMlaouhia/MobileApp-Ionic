import { Injectable } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private nativeStorage: NativeStorage) { }



  setItemInNativeStorage(item: any, itemName: string){
    this.nativeStorage.setItem('myitem', item).then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );
  }

 getItemFromNativeStorage(itemName: string): any{
  return this.nativeStorage.getItem(itemName)
  .then(
    data => console.log(data),
    error => console.error(error)
  );
 }

  getAllItemsFromNativeStorage(): any[]{
    let tab=[];
    const res=[];
    this.nativeStorage.keys()
    .then(data=>{
      tab=data;
      tab.forEach(k=>{
        res.push({item:k,value:this.getItemFromNativeStorage(k)});
      });
    })
    .catch(err=>console.log('error getting all items '+err)
    );
    return res;
  }

  removeItemFromNativeStorag(item: string): void{
    this.nativeStorage.remove(item);
  }

  clearNativeStorage(){
    this.nativeStorage.clear();
  }

}
 // constructor(private sql: SQLiteOriginal, private sqlObj: SQLiteObject, private storage: Storage) { }

  // public createDB(dbName: string): void{
  //   this.sql.create({
  //     name:dbName,
  //     location:'default'
  //   }).then((db: SQLiteObject)=>{
  //       db.executeSql(`create table if not exists items(
  //         title CHAR(16) PRIMARY KEY,
  //         city CHAR(16),
  //         country CHAR(16),
  //         keyWords CHAR(400),
  //         selected BOOL,

  //       )`,[]);
  //   }).catch(err=>console.log('db error: '+err)
  //   );
  // }
  // public createTable(dbName: string, tableName: string): void{
  //  this.sqlObj.openDBs();
  // }
