import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from './home.service'
import { SERVICE_URL } from '../../utils/constants'
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('arrowPrev') arrowPrevEl: any
  @ViewChild('arrowNext') arrowNextEl: any


  products: any[] = [
    { id: 1, nameSalesman: 'Vitoria', name: 'Calça mom jeans', price: '75', image: 'https://res-5.cloudinary.com/enjoei/image/upload/c_fill,fl_lossy.progressive,h_294,q_60,w_276/auxqzac8bypp5mogxxt7.jpg'},
    { id: 2, nameSalesman: 'Brenda', name: 'Sapatilha', price: '232', image: 'https://res-3.cloudinary.com/enjoei/image/upload/c_fill,fl_lossy.progressive,h_294,q_60,w_276/yygi2vn9ulugnx7v7cd6.jpg'},
    { id: 3, nameSalesman: 'Brenda', name: 'Oxford glitter', price: '120', image: 'https://res-3.cloudinary.com/enjoei/image/upload/c_fill,fl_lossy.progressive,h_294,q_60,w_276/nldnkysmmho9gd212hxr.jpg'},
    { id: 4, nameSalesman: 'Sérgio', name: 'Tênis nike branco', price: '140', image: 'https://res-4.cloudinary.com/enjoei/image/upload/c_fill,fl_lossy.progressive,h_294,q_60,w_276/olr2vhkgofewdwiiqxdq.jpg'},
    { id: 5, nameSalesman: 'Bruna', name: 'Moleton preto', price: '75', image: 'https://res-2.cloudinary.com/enjoei/image/upload/c_fill,fl_lossy.progressive,h_294,q_60,w_276/jr8sgb2y3ngarn3bcqan.jpg'},
    { id: 6, nameSalesman: 'Eloisa', name: 'Jaqueta melida', price: '280', image: 'https://res-4.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/zll6xelagjwrzpdldyim.jpg'},
    { id: 7, nameSalesman: 'Maria', name: 'Saia xadrez', price: '59', image: 'https://res-5.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/tm5jwebncm7ez0hjksb3.jpg'},
    { id: 8, nameSalesman: 'Daniela', name: 'Vestidinho verão', price: '55', image: 'https://res-3.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/kdq0cje1ufhykyh1vqyi.jpg'}
  ];


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
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };
  
  
  banners: any[] = [];

  tags: any[] = [
    { id: 1, name: 'Camisa', select: false },
    { id: 2, name: 'Vestido', select: false},
    { id: 3, name: 'Arranjo floral', select: false },
    { id: 4, name: 'Sapato', select: false},
    { id: 5, name: 'Blazer', select: false},
    { id: 6, name: 'Colar', select: false},
    { id: 7, name: 'Taça de cristal', select: false},
    { id: 8, name: 'Acessório de mesa', select: false},
    { id: 9, name: 'Colete', select: false},
    { id: 10, name: 'Colar', select: false},
    { id: 11, name: 'Blazer', select: false},
    { id: 12, name: 'Taça de cristal', select: false},
    { id: 13, name: 'Camisa', select: false},
    { id: 14, name: 'Noiva', select: false},
    { id: 15, name: 'Noivo', select: false},
    { id: 16, name: 'Bolo', select: false},
    { id: 17, name: 'Tapete', select: false},
    { id: 18, name: 'Flores', select: false},
    { id: 19, name: 'Vasos', select: false},
    { id: 20, name: 'Talheres', select: false},
    { id: 21, name: 'Convidados', select: false},
    { id: 22, name: 'Bolo', select: false},
    { id: 23, name: 'Docinhos', select: false},
    { id: 24, name: 'Bebida', select: false},
    { id: 25, name: 'Buquê', select: false}
  ]

  favTags: any[] = []
  status: boolean = false;

  //SERVICE_URL = SERVICE_URL
  constructor(private homeService: HomeService) {

  }
 
  ngOnInit() {
    
    this.homeService.banners({type: 'DESKTOP'})
      .subscribe(banners => this.banners = banners)

  }


  handleArrowPrev() {
    this.arrowPrevEl.nativeElement.click();
  }

  handleArrowNext() {
    this.arrowNextEl.nativeElement.click();
  }


  selectedTags(tag) {
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
    console.log(this.tags)
  }
  
  getUrl(idBanner: string): string {
    let url = SERVICE_URL + '/DesencalheiWs/rs/banner/bannerImage/' + idBanner + '/DESKTOP';
    return url;
  }

  favotiteProducts(product) {
    console.log(product);
  }
}
