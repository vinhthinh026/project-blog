import { Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { ApplicationProperties } from "src/app/config/application.properties";

@Component({
	selector: "app-paging",
	templateUrl: "./paging.component.html",
	styleUrls: ["./paging.component.css"]
})
export class PagingComponent implements OnInit {
  @Input() totalRecord = 0;
  @Input() currentPage: any;
  @Output() currentPageChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() eventHandler: EventEmitter<any> = new EventEmitter();

  recordInPage = ApplicationProperties.RECORD_IN_PAGE;
  totalPage = 0;
  arrPage: number[] = [];
  firstInitPage = true;
  constructor() { }

  ngOnInit(): void {
  	this.totalPage = Math.ceil(this.totalRecord / this.recordInPage);
  }

  ngOnChanges(): void {
  	this.totalPage = Math.ceil(this.totalRecord / this.recordInPage);
  	if (this.arrPage.length < this.totalPage) {
  		this.initArrayPage();
  	}
  }

  initArrayPage() {
  	for (let i = 1; i <= this.totalPage; i++) {
  		this.arrPage.push(i);
  	}
  }

  selectPage(page: number) {
  	window.scroll(0, 0);
  	this.currentPage = page;
  	this.eventHandler.emit(this.currentPage);
  }

  previousPage() {
  	if (this.currentPage > 1) {
  		this.currentPage--;
  		this.selectPage(this.currentPage);
  	}
  }

  nextPage() {
  	if (this.currentPage < this.totalPage) {
  		this.currentPage++;
  		this.selectPage(this.currentPage);
  	}
  }

}
