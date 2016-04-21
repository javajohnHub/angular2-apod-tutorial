import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

@Injectable()
export class NasaService {

    constructor(private http:Http) {
    }
    getAPOD() {
        return this.http.get('https://api.nasa.gov/planetary/apod?api_key=[YOUR API KEY HERE]').map((res:Response) => res.json());
    }

}
