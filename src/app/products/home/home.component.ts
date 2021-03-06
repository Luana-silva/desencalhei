import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from './home.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Constants } from '../../utils/constants'
import { NguCarouselConfig } from '@ngu/carousel';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/auth/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('arrowPrev') arrowPrevEl: any
  @ViewChild('arrowNext') arrowNextEl: any

  loading: boolean = false;

  categories: any[] = [];
  products: any[] = [];

  productsSaleOff: any[] = [];

  preferences: any[] = [];

  banners: any[] = [];
  home = [];

  favTags: any[] = []


  public carouselBanner: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 1,
    speed: 250,
    point: {
      visible: true
    },
    load: 4,
    loop: true,
    velocity: 0,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };


  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 4, lg: 4, all: 0 },
    slide: 1,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)',
    loop: true
  };


  //SERVICE_URL = SERVICE_URL
  constructor(private homeService: HomeService, private authService: AuthService, public  router: Router) {

  }

  ngOnInit() {

    this.homeService.getCategories()
      .subscribe(categories => this.categories = categories)


    this.homeService.banners({type: 'DESKTOP'})
      .subscribe(banners => this.banners = banners)

    this.homeService.getHome()
      .subscribe(home => {
        this.home = home['data']
        this.products = home['data'].listFeatured;
        this.productsSaleOff = home['data'].listSaleOff;
       }
      )

      this.homeService.getPreferences()
        .subscribe(preferences => this.preferences = preferences['data'])
  }


  handleArrowPrev() {
    this.arrowPrevEl.nativeElement.click();
  }

  handleArrowNext() {
    this.arrowNextEl.nativeElement.click();
  }

  logged() {
    return this.authService.isLoggedIn();
  }

  selectTags(tag) {
    let isExisting = !this.favTags.some(t => t.id == tag.id);

    if(isExisting) {
      this.favTags.push(tag);
    } else {
      this.favTags = this.favTags.filter(t => t.id != tag.id)
    } 

  }

  sendTags() {
    //console.log(this.favTags)
    //localStorage.setItem('tags',  JSON.stringify(this.favTags))
    //console.log(this.tags)
    console.log(this.favTags)
    //this.homeService.sendTags(this.tags);
    this.loading = true;

    if(!this.logged()) {
      setTimeout(()=> {
        this.router.navigate(['/login'])
      }, 1000)
    }
  }

  getUrl(idBanner: string): string {
    let url = `${Constants.SERVICE_URL}${Constants.SERVICE_PROJECT}banner/bannerImage/${idBanner}/DESKTOP`;
    return url;
  }

  favoriteProducts(product) {
    console.log(product);
  }
}
