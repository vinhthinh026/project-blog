import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
	constructor() { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const currentUser: any = JSON.parse(localStorage.getItem("access_token") || "{}"); // get access_token in localStorage
		const language = localStorage.getItem("setting-language") ? localStorage.getItem("setting-language") : "jp"; // get language setting in localStorage
		if (currentUser.access_token) { // check if token exists
			request = request.clone({
				setHeaders: {
					Authorization: `${currentUser.token_type} ${currentUser.access_token}`, //set token in request header
				}
			});
		} else {
			request = request.clone({
				setHeaders: {
                    
				}
			});
		}
		return next.handle(request);
	}
}
