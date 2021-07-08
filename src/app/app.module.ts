import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BlogsComponent } from "./blogs/blogs.component";
import { PagingComponent } from "./common/paging/paging.component";
import { FormsModule } from "@angular/forms";
import { JwtInterceptor } from "./common/auth/jwt.interceptor";
import { DetailBlogComponent } from "./blogs/detail-blog/detail-blog.component";
import { ErrorInterceptor } from "./common/auth/error.interceptor";

@NgModule({
	declarations: [
		AppComponent,
		BlogsComponent,
		PagingComponent,
		DetailBlogComponent,
	],
	imports: [
		FormsModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
