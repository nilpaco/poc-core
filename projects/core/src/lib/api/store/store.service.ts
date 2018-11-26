import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class StoreService {
	private url: string = 'https://petstore.swagger.io/v2/store/';

	constructor(private http: HttpClient) {}

	getStoreInventory(): Observable<any> {
		return this.http.get(this.url + 'inventory').pipe(
			map((res) => {
				return res;
			})
		);
	}

}
