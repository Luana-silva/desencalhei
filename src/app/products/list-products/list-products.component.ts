import { ChangeDetectionStrategy, Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Route, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { OrderPipe } from 'ngx-order-pipe';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],   
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListProductsComponent implements OnInit {

  @ViewChild('inputTag') inputTag: ElementRef
  

  p: number = 1;
  order: any = 'products.id'
  sortedCollection: any = []
  reverse: boolean = false

  products: any[] = [
    { id: 1, nameSalesman: 'Vitoria', name: 'Calça mom jeans', price: '75', image: 'https://res-5.cloudinary.com/enjoei/image/upload/c_fill,fl_lossy.progressive,h_294,q_60,w_276/auxqzac8bypp5mogxxt7.jpg', localidade: 'SP', data: '10/09/2018'},
    { id: 2, nameSalesman: 'Brenda', name: 'Sapatilha', price: '232', image: 'https://res-3.cloudinary.com/enjoei/image/upload/c_fill,fl_lossy.progressive,h_294,q_60,w_276/yygi2vn9ulugnx7v7cd6.jpg', localidade: 'RJ', data: '20/09/2018'},
    { id: 3, nameSalesman: 'Brenda', name: 'Oxford glitter', price: '120', image: 'https://res-3.cloudinary.com/enjoei/image/upload/c_fill,fl_lossy.progressive,h_294,q_60,w_276/nldnkysmmho9gd212hxr.jpg', localidade: 'MG', data: '10/08/2018'},
    { id: 4, nameSalesman: 'Sérgio', name: 'Tênis nike branco', price: '140', image: 'https://res-4.cloudinary.com/enjoei/image/upload/c_fill,fl_lossy.progressive,h_294,q_60,w_276/olr2vhkgofewdwiiqxdq.jpg', localidade: 'SP', data: '10/11/2018'},
    { id: 5, nameSalesman: 'Bruna', name: 'Moleton preto', price: '75', image: 'https://res-2.cloudinary.com/enjoei/image/upload/c_fill,fl_lossy.progressive,h_294,q_60,w_276/jr8sgb2y3ngarn3bcqan.jpg', localidade: 'AL', data: '10/09/2018'},
    { id: 6, nameSalesman: 'Eloisa', name: 'Jaqueta melida', price: '280', image: 'https://res-4.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/zll6xelagjwrzpdldyim.jpg', localidade: 'PE', data: '10/04/2018'},
    { id: 7, nameSalesman: 'Maria', name: 'Saia xadrez', price: '59', image: 'https://res-5.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/tm5jwebncm7ez0hjksb3.jpg', localidade: 'SP', data: '10/04/2018'},
    { id: 8, nameSalesman: 'Daniela', name: 'Vestidinho verão', price: '55', image: 'https://res-3.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/kdq0cje1ufhykyh1vqyi.jpg', localidade: 'MS', data: '10/09/2018'},
    { id: 9, nameSalesman: 'Bárbara', name: 'Pretinho básico', price: '150', image: 'https://res-4.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/gkn4dkt0to4cq3z4tvvd.jpg', localidade: 'SP', data: '01/11/2018'},
    { id: 10, nameSalesman: 'Gabriel', name: 'Armação de grau', price: '52', image: 'https://res-5.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/uxtfem8sygqhlnlk9lu5.jpg', localidade: 'RJ', data: '01/11/2018'},
    { id: 11, nameSalesman: 'Lívia', name: 'Blusa jeans', price: '30', image: 'https://res-2.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/m8hhh6vpizomhbck2p73.jpg', localidade: 'PR', data: '11/11/2018'},
    { id: 0, nameSalesman: 'Izabel', name: 'Blusa teste teste', price: '75', image: 'https://res-5.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/t6kmgvfvhpapb8gec23r.jpg', localidade: 'RS', data: '01/03/2018'},
    { id: 12, nameSalesman: 'Lílian', name: 'Saia pareo', price: '150', image: 'https://res-5.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/xrbcmai31vpooofz9rlt.jpg', localidade: 'SP', data: '01/01/2018'},
    { id: 13, nameSalesman: 'Izabel', name: 'Blusa off white', price: '75', image: 'https://res-5.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/t6kmgvfvhpapb8gec23r.jpg', localidade: 'RS', data: '01/03/2018'},
    { id: 13, nameSalesman: 'Izabel', name: 'Blusa off white', price: '75', image: 'https://res-5.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/t6kmgvfvhpapb8gec23r.jpg', localidade: 'RS', data: '01/03/2018'},
    { id: 13, nameSalesman: 'Izabel', name: 'Blusa off white', price: '75', image: 'https://res-5.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/t6kmgvfvhpapb8gec23r.jpg', localidade: 'RS', data: '01/03/2018'},
    { id: 13, nameSalesman: 'Izabel', name: 'Blusa off white', price: '75', image: 'https://res-5.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/t6kmgvfvhpapb8gec23r.jpg', localidade: 'RS', data: '01/03/2018'},
    { id: 13, nameSalesman: 'Izabel', name: 'Blusa off white', price: '75', image: 'https://res-5.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/t6kmgvfvhpapb8gec23r.jpg', localidade: 'RS', data: '01/03/2018'},
    { id: 13, nameSalesman: 'Izabel', name: 'Blusa off white', price: '75', image: 'https://res-5.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/t6kmgvfvhpapb8gec23r.jpg', localidade: 'RS', data: '01/03/2018'},
    { id: 13, nameSalesman: 'Izabel', name: 'Blusa off white', price: '75', image: 'https://res-5.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/t6kmgvfvhpapb8gec23r.jpg', localidade: 'RS', data: '01/03/2018'},
    { id: 13, nameSalesman: 'Izabel', name: 'Blusa off white', price: '75', image: 'https://res-5.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/t6kmgvfvhpapb8gec23r.jpg', localidade: 'RS', data: '01/03/2018'},
    { id: 13, nameSalesman: 'Izabel', name: 'Blusa off white', price: '75', image: 'https://res-5.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/t6kmgvfvhpapb8gec23r.jpg', localidade: 'RS', data: '01/03/2018'},
    { id: 13, nameSalesman: 'Izabel', name: 'Blusa off white', price: '75', image: 'https://res-5.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/t6kmgvfvhpapb8gec23r.jpg', localidade: 'RS', data: '01/03/2018'},
    { id: 13, nameSalesman: 'Izabel', name: 'Blusa off white', price: '75', image: 'https://res-5.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/t6kmgvfvhpapb8gec23r.jpg', localidade: 'RS', data: '01/03/2018'},
    { id: 13, nameSalesman: 'Izabel', name: 'Blusa off white', price: '75', image: 'https://res-5.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/t6kmgvfvhpapb8gec23r.jpg', localidade: 'RS', data: '01/03/2018'},
    { id: 13, nameSalesman: 'Izabel', name: 'Blusa off white', price: '75', image: 'https://res-5.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/t6kmgvfvhpapb8gec23r.jpg', localidade: 'RS', data: '01/03/2018'},
    { id: 13, nameSalesman: 'Izabel', name: 'Blusa off white', price: '75', image: 'https://res-5.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/t6kmgvfvhpapb8gec23r.jpg', localidade: 'RS', data: '01/03/2018'},
    { id: 28, nameSalesman: 'Fabiana', name: 'Vestido t-shirt farm', price: '120', image: 'https://res-3.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/kaebxrfpjexv9rkawwpj.jpg', localidade: 'RS', data: '01/03/2018'}
  ];

  public config: PaginationInstance = { 
    id: 'custom',
    itemsPerPage: 25,
    currentPage: 1
};

inputs : any = 'recentes'

  categorias = [
    {id: 1, name: 'Feminino', select: false},
    {id: 2, name: 'Masculino', select: false},
    {id: 3, name: 'Infantil', select: false}
  ]

  marcas = [
    {id: 1, name: 'Nike', select: false},
    {id: 2, name: 'Adidas', select: false},
    {id: 3, name: 'Puma', select: false}
  ]

  estados = [
    {id: 1, name: 'Novo', select: false},
    {id: 2, name: 'Usado', select: false}
  ]

  fretes = [
    {id: 1, name: 'Grátis', select: false},
    {id: 2, name: 'Retirar no local', select: false}
  ]

  

  constructor(private fb: FormBuilder, private orderPipe: OrderPipe, private route: ActivatedRoute) { 
    this.sortedCollection = orderPipe.transform(this.products, 'products.id');

    console.log(this.route);
  }

  orderForm: FormGroup

  selectCategory() {
    
  }

  setOrder(event) {
    if(this.order === event.target.value) {
      this.reverse = !this.reverse;
    }

    this.order = event.target.value 
  }

  ngOnInit() {
      this.orderForm = this.fb.group({
        ordem: this.fb.control('Mais recentes')
      })

      //console.log(this.route.url.value[0].path)
      //console.log(this.route.url.value[1].path)
  }

  
}