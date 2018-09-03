import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service'
import { SERVICE_URL } from '../../utils/constants'
import { NgxCarouselModule } from 'ngx-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public carouselOne: NgxCarouselModule;

  banners: any[];

  banners2: any[];

  //SERVICE_URL = SERVICE_URL
  constructor(private homeService: HomeService) {

  }

  ngOnInit() {

    this.homeService.banners({type: 'MOBILE'})
      .subscribe(banners => this.banners = banners)
  }


  getUrl(idBanner: string): string {
    let url = SERVICE_URL + '/DesencalheiWs/rs/banner/bannerImage/' + idBanner + '/DESKTOP';
    return url;
  }

}
