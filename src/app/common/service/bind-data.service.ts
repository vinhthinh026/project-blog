import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class BindDataService {
  private data : BehaviorSubject<any> = new BehaviorSubject<any>("");
  dataChange : Observable<any> = this.data.asObservable();
  constructor() { }
  
  bindEvent(text : any){
  	this.data.next(text);
  }
}
