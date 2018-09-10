import { Component, OnInit, Input, AfterViewChecked, OnChanges } from '@angular/core';
import { grid } from '../models/user';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  pages:number[]=[];
  headers:string[]=[];
  pagesLength:number;
  previousDisabled:boolean = true;
  nextDisabled:boolean = false;
  currentPage:number = 1;
  searchText:string;
  tableData:grid[] = [];
  totalGridData:grid[] = [];
  totalGridDataVal:grid[] = [];
  infiniteScrollLenInitial:number=8;
  eachInfiniteScroll:number=2;
  constructor(private filterService:FilterService) { }


  @Input('totalData') totalData:grid[] = [];
  @Input('itemsPerPage') itemsEachPage:number;
  @Input('headers') headerData:string[];
  @Input('disablePagination') disableFlag:boolean;
  ngOnInit() {

    if(!this.disableFlag)
    {
      this.calculateTotalPages();
      // this.totalGridData = this.totalData;
      this.totalGridDataVal = this.totalData;
    }
      
    else
      {
        this.tableData = this.totalGridData.slice(0,this.infiniteScrollLenInitial);
        
      }
    // this.headers = ["first","last","age"];   
    console.log("this.headers",this.headerData);
  }

  onScrollDown(){
    let len = this.tableData.length;
    if(this.tableData.length < this.totalGridData.length)
    {
      for(let i = len ; i <= (len+this.eachInfiniteScroll) ; i++ )
      {
        this.tableData.push(this.totalGridData[i]);
      }
    }
     
    
    console.log("scrolled down");
  }


  onScrollUp()
  {
      let len = this.tableData.length;
    
      this.tableData = this.totalGridData.slice(len,len-4);
    
    console.log("scrolled up");
    
  }

    filter(){
      this.totalGridDataVal = this.filterService.filterData(this.totalData,this.searchText,this.headerData);
      console.log("totalGridDataVal",this.totalGridDataVal);
    }
    
  

  // populate the pages array that will show the pagination
  calculateTotalPages(){
      this.pagesLength = Math.ceil(this.totalData.length/this.itemsEachPage);
      for(let i=1;i<=this.pagesLength;i++)
      {
        this.pages.push(i);
      }
      if(this.pages.length == 1)
      {
        this.previousDisabled = true;
        this.nextDisabled = true;
      }
  }

  // sorting
  sort(direction,prop:string){
    this.totalGridDataVal = this.filterService.sortData(this.totalGridDataVal,direction,prop);
     
  }
  
 
  // Click of next button
  nextPage(){
    let tempNo:number;
    tempNo = this.currentPage;
    if(this.currentPage < this.pagesLength)
      tempNo+=1;
    this.changePage(tempNo);
  }


  // Click of previous button
  previousPage(){
    let tempNo:number 
    tempNo = this.currentPage;
    if(this.currentPage > 1 )
      tempNo-=1;
    this.changePage(tempNo);
  }

  

  changePage(pageNo:number){
    console.log(pageNo);
    if(pageNo === this.currentPage)
      return;
    this.currentPage = pageNo;    
    this.previousDisabled = this.currentPage > 1 ? false:true;
    this.nextDisabled = this.currentPage < this.pagesLength ? false:true;
  }

}
