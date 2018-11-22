import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class CoreService {
	private url: string = 'https://petstore.swagger.io/v2/pet/';

	constructor(private http: HttpClient) {}

	getPetById(id: number): Observable<any> {
		return this.http.get(this.url + id).pipe(
			map((res: Pet) => {
				res.id = 10;
				return res;
			})
		);
	}

	findPetByStatus(status: string): Observable<string[]> {
		return this.http.get(this.url + 'findByStatus?status=' + status).pipe(
			map((res: Pet[]) => {
				return res.map((res2) => res2.name);
			})
		);
	}
}

export interface Pet {
	id: number;
	category: { id: number; name: string };
	name: string;
	photoUrls: string[];
	tags: { id: number; name: string }[];
	status: string;
}
