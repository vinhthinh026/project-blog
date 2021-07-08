import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PathAPI } from "../common/path-api";
import { BlogModel } from "./blog";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class BlogService {
	constructor(private httpClient: HttpClient) { }
	getAllBlog(): Observable<BlogModel[]> {
		return this.httpClient.get<BlogModel[]>(PathAPI.PATH_BLOG_LIST);
	}

	getBlogListPagination(page: number, size: number): Observable<BlogModel[]> {
		return this.httpClient.get<BlogModel[]>(PathAPI.PATH_BLOG_LIST.concat(`/?page=${ page }&limit=${ size }`));
	}

	sortBlogList(sortBy: string, option: string): Observable<BlogModel[]> {
		return this.httpClient.get<BlogModel[]>(PathAPI.PATH_BLOG_LIST.concat(`/?sortBy=${ sortBy }&order=${ option }`));
	}

	searchBlog(value: string): Observable<BlogModel[]> {
		return this.httpClient.get<BlogModel[]>(PathAPI.PATH_BLOG_LIST.concat(`/?search=${ value }`));
	}
}
