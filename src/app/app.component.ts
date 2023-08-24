import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DropDown';

 // branch:string="";

 branch:any;
 
  fg = new FormGroup(
    {
      branch:new FormControl(null)
    }
  );


  doodleblueBranch=[{id : 1, city: 'Chennai', needed:50},
  {id : 2, city: 'Mumbai'},
  {id : 3, city: 'Gurgon'},
  {id : 4, city: 'Delhi'},
  {id : 5, city: 'Gujarat'},
  {id : 6, city: 'Bangalore'}
  ];

  itemSelect(e:any){
    console.log(e)
  }
  // ng Form Handling Method
  // submit(){
  //   console.log(this.branch);
  // }

  submit1(){
   console.log(this.fg['controls']['branch'].value);
  }
}
