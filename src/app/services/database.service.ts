import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

export abstract class DatabaseService {

  private prefix:String = 'abnt_nbr_15985';
  private db:any = localStorage;
  private table:String;

  constructor(table:String) {
    this.table = table;
  }

  public create(obj:any):any {
    // find all local objects
    let objs:any[] = this.findAll();

    // generate id
    obj.id = uuid();
    objs.push(obj);

    this.db.setItem(this.prefix + '_' + this.table, JSON.stringify(objs));

    return obj;
  }

  update(obj:any) {
    let objs:any[] = this.findAll();
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

    this.db.setItem(this.prefix + '_' + this.table, JSON.stringify(objs));
  }

  delete(id: String) {
    let objs:any[] = this.findAll();
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

    this.db.setItem(this.prefix + '_' + this.table, JSON.stringify(objs));
  }

  findAll():any[] {
    return JSON.parse(this.db.getItem(this.prefix + '_' + this.table)) || [];
  }

  findById(id:String):any {
    let objs:any[] = this.findAll();

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
