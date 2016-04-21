import {Component} from 'angular2/core';
import {NasaService} from '../../services/nasa.service';

@Component({
    selector: 'nasa-route',
    providers: [NasaService],
    template:`
<div *ngFor="#apod of apods">
<h2 class="text-center">Astronomy Picture of the Day</h2>
<h3>{{apod.title}}</h3>
<h5>{{apod.copyright}}</h5>
<h5>{{apod.date}}</h5>
<img class="img-responsive img-thumbnail" src="{{apod.hdurl}}">
<p>{{apod.explanation}}</p>

</div>
`,
})

export class NasaComponent {
    public apods=[];
    public copyright;
    public date;
    public explanation;
    public hdurl;
    public title;
    public url;

    constructor(private _nasaService: NasaService) {
        this.getAPOD();
    }


    getAPOD() {
        this._nasaService.getAPOD().subscribe(
            // the first argument is a function which runs on success
            data => { this.apods = [data]},
            // the second argument is a function which runs on error
            err => console.error(err),
            // the third argument is a function which runs on completion
            () => console.log('done loading apod')
        );

    }
}