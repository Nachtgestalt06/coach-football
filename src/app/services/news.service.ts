import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    constructor(private http: HttpClient) {
    }

    listNews() {
        const url = `${environment.baseUrl}/noticias`;
        return this.http.get(url).pipe(
            map((res: any) => res.response)
        );
    }
}
