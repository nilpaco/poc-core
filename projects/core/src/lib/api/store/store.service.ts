import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AbstractService } from '../abstract.service';

@Injectable({
	providedIn: 'root'
})
export class StoreService extends AbstractService {

	constructor(protected http: HttpClient) {
		super('store', http);
	}

	getStoreInventory(): Observable<any> {
		return this.http.get(this.url + 'inventory').pipe(
			map((res) => {
				return res;
			})
		);
	}

}
