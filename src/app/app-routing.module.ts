import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { BlogsComponent } from "./blogs/blogs.component";
import { DetailBlogComponent } from "./blogs/detail-blog/detail-blog.component";

const routes: Routes = [
	{
		path: "blog",
		component: AppComponent,
		children: [
			{
				path: "",
				component: BlogsComponent
			},
			{
				path: ":id",
				component: DetailBlogComponent
			},
		],
	},
	{ path: "**", redirectTo: "404" }

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
