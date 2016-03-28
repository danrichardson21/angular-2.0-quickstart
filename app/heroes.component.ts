import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';


@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit{ 
   
    selectedHero:Hero;
    public heroes:Hero[];
    
    onSelect(hero:Hero){
        this.selectedHero = hero;
    }
    
    constructor(private _heroService:HeroService,
                private _router:Router){
        
    }
    
    getHeroes(){
        this._heroService.getHeroes().then(heroes => this.heroes = heroes;
    }
    
    ngOnInit(){
        this.getHeroes();
    }
    
    gotoDetail(){
        
        let link = ["HeroDetail", {id: this.selectedHero.id}];
        this._router.navigate(link);
    }
    
}

