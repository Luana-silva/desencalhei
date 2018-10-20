import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';
import { Categories } from './categories.model';
import { Constants } from '../../utils/constants';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private headerService: HeaderService) { }

  categories: Categories;
  typeImage: string = 'normal';

  ngOnInit() {  

    this.headerService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  getUrl(id: string, typeImage: string) {
    return `${Constants.SERVICE_URL}${Constants.SERVICE_PROJECT}category/categoryImage/${id}/${typeImage}`
  }

  mouseEnter(event, id){
    event.src= this.getUrl(id, 'selected')  
  }

  mouseOver(event, id) {
    event.src = this.getUrl(id, 'normal')
  }

}