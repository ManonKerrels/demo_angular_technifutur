import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { PlatService } from 'src/app/services/plat-service.service';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {

  id: number;

  constructor(route: ActivatedRouteSnapshot, private platService: PlatService) {
    const param_id = route.paramMap.get('id');
    this.id = param_id ? parseInt(param_id) : -1;

    if(this.id && this.id > 0){
      platService.getPlat(this.id);
    }
   }

  ngOnInit(): void {
  }

}
