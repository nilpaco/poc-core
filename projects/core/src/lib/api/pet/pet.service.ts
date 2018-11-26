import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pet } from './../../models';

@Injectable({
	providedIn: 'root'
})
export class PetService {
	private url: string = 'https://petstore.swagger.io/v2/pet/';

	constructor(private http: HttpClient) {}

	getPetById(id: number): Observable<any> {
		return this.http.get(this.url + id).pipe(
			map((res: Pet) => {
				return res;
			})
		);
	}

	getPetIdsByStatus(status: string): Observable<number[]> {
		return this.http.get(this.url + 'findByStatus?status=' + status).pipe(
			map((res: Pet[]) => {
				return res.map((res2) => res2.id);
			})
		);
	}
}
