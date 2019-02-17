import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroes: any = [];
  public termino: string;

  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params && params.termino) {
        this.termino = params.termino;
        this.heroes = this.heroesService.buscarHeroe(params.termino);
      } else {
        this.heroes = this.heroesService.getHeroes();
      }
    });
  }

  verHeroe(id) {
    const route = ['/heroe'];
    if (this.termino) {
      route.push(this.termino);
    }
    route.push(id);
    this.router.navigate(route);
  }

}
