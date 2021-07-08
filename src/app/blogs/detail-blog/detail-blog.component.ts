import { Component, OnInit } from "@angular/core";
import { BlogModel } from "../blog";
import { BindDataService } from "../../common/service/bind-data.service";

@Component({
	selector: "app-detail-blog",
	templateUrl: "./detail-blog.component.html",
	styleUrls: ["./detail-blog.component.css"]
})
export class DetailBlogComponent implements OnInit {

  dataBlog!: BlogModel;

  constructor(
    private binDataService : BindDataService
  ) { }

  ngOnInit(): void {
  	// get data detail in Observablel
  	this.binDataService.dataChange.subscribe(res => {
  		this.dataBlog = res[0];
  	});
  }
}
