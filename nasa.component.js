System.register(['angular2/core', '../../services/nasa.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, nasa_service_1;
    var NasaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (nasa_service_1_1) {
                nasa_service_1 = nasa_service_1_1;
            }],
        execute: function() {
            NasaComponent = (function () {
                function NasaComponent(_nasaService) {
                    this._nasaService = _nasaService;
                    this.apods = [];
                    this.getAPOD();
                }
                NasaComponent.prototype.getAPOD = function () {
                    var _this = this;
                    this._nasaService.getAPOD().subscribe(function (data) { _this.apods = [data]; }, function (err) { return console.error(err); }, function () { return console.log('done loading apod'); });
                };
                NasaComponent = __decorate([
                    core_1.Component({
                        selector: 'nasa-route',
                        providers: [nasa_service_1.NasaService],
                        template: "\n<div *ngFor=\"#apod of apods\">\n<h2 class=\"text-center\">Astronomy Picture of the Day</h2>\n<h3>{{apod.title}}</h3>\n<h5>{{apod.copyright}}</h5>\n<h5>{{apod.date}}</h5>\n<img class=\"img-responsive img-thumbnail\" src=\"{{apod.hdurl}}\">\n<p>{{apod.explanation}}</p>\n\n</div>\n",
                    }), 
                    __metadata('design:paramtypes', [nasa_service_1.NasaService])
                ], NasaComponent);
                return NasaComponent;
            }());
            exports_1("NasaComponent", NasaComponent);
        }
    }
});
