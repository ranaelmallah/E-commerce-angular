import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input() data:any={};
@Output() item =new EventEmitter();
// @Output() itemid =new EventEmitter();


addbutton:boolean=false;
amount:number=0;
add(){
this.item.emit({item:this.data,quantity:this.amount})
}
// getid(){
//   this.itemid.emit({itemid:this.data})
// }
}
