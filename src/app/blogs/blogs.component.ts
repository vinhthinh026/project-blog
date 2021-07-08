import { Component, OnInit } from "@angular/core";
import { BindDataService } from "../common/service/bind-data.service";
import { Utilities } from "../common/utilites";
import { ApplicationProperties } from "../config/application.properties";
import { BlogModel } from "./blog";
import { BlogService } from "./blog.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-blogs",
	templateUrl: "./blogs.component.html",
	styleUrls: ["./blogs.component.css"]
})
export class BlogsComponent implements OnInit {

  blogList: BlogModel[] = [];
  recordInPage = ApplicationProperties.RECORD_IN_PAGE;
  totalRecord: any;
  currentPage: any = 1;
  sortByCreatedAt = "";
  valueSearch = "";

  constructor(
    private blogService: BlogService,
    private util: Utilities,
    private bindDataService: BindDataService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  	this.sortByCreatedAt = this.util.SORT_BY.ASC;
  	this.getAllBlogList();
  	this.getBlogPagination();
  }

  getAllBlog(): void {
  	this.blogService.getAllBlog().toPromise().then(res => {
  		this.blogList = res;
  	});
  }

  // get all blog using RxJs
  getAllBlogList() {
  	this.blogService.getAllBlog().subscribe(
  		next => {
  			this.totalRecord = next.length;
  		},
  		error => this.blogList = []
  	);
  }

  onSelectPage(pageSelect: number) {
  	this.currentPage = pageSelect;
  	this.getBlogPagination();
  }

  getBlogPagination() {
  	this.blogService.getBlogListPagination(this.currentPage, this.recordInPage).subscribe(
  		next => {
  			this.blogList = next;
  		},
  		error => this.blogList = []
  	);
  }

  sortList() {
  	const option = (this.sortByCreatedAt == "1") ? "asc" : "desc";
  	this.blogService.sortBlogList("createdAt", option).subscribe(
  		next => {
  			this.blogList = next;
  		},
  		error => this.blogList = []
  	);
  }

  searchBlog() {
  	this.blogService.searchBlog(this.valueSearch).subscribe(
  		next => {
  			this.blogList = next;
  		},
  		error => this.blogList = []
  	);
  }

  detailBlog(idBlog: number) {
  	// filter blog in bloglist
  	const result = this.blogList.filter((value) => {
  		return value.id == idBlog;
  	});

  	// bind data Observable
  	this.bindDataService.bindEvent(result);
  	this.router.navigate(["/blog", idBlog]);
  }
}
