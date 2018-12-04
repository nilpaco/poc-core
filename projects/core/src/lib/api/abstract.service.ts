import { environment } from "./../../environments/environment";
import { Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

export class AbstractService {

    protected url: string = environment.baseUrl;

    protected requestOptions: RequestOptions = new RequestOptions({
        headers: new Headers({ 'Content-Type': 'application/json' })
    });

    /**
     * Creates an instance of AbstractService.
     * @param string entityName
     */
    constructor(entityName: string, protected http: HttpClient) {
        this.url += entityName + '/';
    }

    /**
     * Generic function to get an entity
     *
     * @param number [id] optional parameter
     * @returns (Observable<any>)
     */
    get(id?: number): Observable<any> {
        const urlApi = id ? this.url + id : this.url;
        return this.http.get(urlApi).pipe(
            map((res: Response) => {
                const r = res;
                if (id) {
                    return r;
                } else {
                    return {
                        r,
                        pagination: {}
                    }
                }
            })
        )
    }

    /**
     * Generic function to post an entity
     *
     * @param any [body] required parameter
     * @returns (Observable<any>)
     */
    post(body: any): Observable<any> {
        return this.http.post(this.url, body);
    }

    // search()

    // delete()

}