import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pet } from './../../models';
import { AbstractService } from '../abstract.service';

@Injectable({
	providedIn: 'root'
})
export class PetService extends AbstractService {

	constructor(protected http: HttpClient) {
		super('pet', http);
	}

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
