import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private prefix:String = 'abnt_nbr_15985';
  private db:any = localStorage;

  constructor() {
  }

  create(table:String, obj:any):any {
    // find all local objects
    let objs:any[] = this.findAll(table);

    // generate id
    obj.id = uuid();
    objs.push(obj);

    this.db.setItem(this.prefix + '_' + table, JSON.stringify(objs));

    return obj;
  }

  update(table:String, obj:any) {
    let objs:any[] = this.findAll(table);
    let objIndex = -1;
    objs.forEach((o, i) => {
      if(obj.id === o.id) {
        objIndex = i;
        return ;
      }
    });

    if(objIndex < 0) {
      throw 'Object not found!';
    }

    objs[objIndex] = obj;

    this.db.setItem(this.prefix + '_' + table, JSON.stringify(objs));
  }

  delete(table: String, id: String) {
    let objs:any[] = this.findAll(table);
    let objIndex = -1;
    objs.forEach((o, i) => {
      if(id === o.id) {
        objIndex = i;
        return ;
      }
    });

    if(objIndex < 0) {
      throw 'Object not found!';
    }

    objs.splice(objIndex, objIndex + 1);

    this.db.setItem(this.prefix + '_' + table, JSON.stringify(objs));
  }

  findAll(table:String):any[] {
    return JSON.parse(this.db.getItem(this.prefix + '_' + table)) || [];
  }

  findById(table:String, id:String):any {
    let objs:any[] = this.findAll(table);

    let objFound = null;
    objs.forEach((obj) => {
      if(obj.id === id) {
        objFound = obj;
        return ;
      }
    });

    return objFound;
  }
}
