import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  public heroe: any;
  public termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private heroesService: HeroesService) {
    this.activatedRoute.params.subscribe((params) => {
      this.heroe = this.heroesService.getHeroe(params.id);
      if (params.termino) {
        this.termino = params.termino;
      }
    });
  }

  ngOnInit() {
  }

  regresar() {
    const route = ['/heroes'];
    if (this.termino) {
      route.push(this.termino);
    }
    this.router.navigate(route);
  }
}
