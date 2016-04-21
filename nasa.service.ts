import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

@Injectable()
export class NasaService {

    constructor(private http:Http) {
    }
    getAPOD() {
        return this.http.get('https://api.nasa.gov/planetary/apod?api_key=TxpAbzBJkgazWhEkL2WIyZW2rsnEFx2Ns7Wmrey0').map((res:Response) => res.json());
    }

}