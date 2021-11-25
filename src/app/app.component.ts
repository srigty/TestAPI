import { Component } from '@angular/core';

import { TestService } from './test.service';
import { testcls } from './Test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'TestAPI';
list:testcls[]=[]

p: number = 1;

  constructor(private service:TestService){}

   ngOnInit(){
    this.getTodoList()
   }

  getTodoList(){
    this.title="test"
this.service.getTodos().subscribe(respose=>{
  this.list=respose;
  console.log(this.list)
})

  }


}
