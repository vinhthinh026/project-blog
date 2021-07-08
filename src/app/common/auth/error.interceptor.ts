import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	constructor(
	) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): any {
		return next.handle(request).pipe(catchError(err => {
			if (err.status === 401) {
				// logic handle
			}

			if (err.status === 403) {
				// logic handle
			}

			if (err.status === 400) {
				// logic handle
			}

			if (err.status === 500) {
				// logic handle
			}
			console.log(err);
			return throwError(err.status);
		}));
	}
}
