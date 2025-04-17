import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/product';
import { AddService } from 'src/app/serices/Services/userData';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  userItem:UserInfo[]=[]


     constructor( private addService : AddService){}
  ngOnInit(): void {
    this.loadingAllserDetails()
  }


     loadingAllserDetails(){
      this.addService.loadALlUsers().subscribe( resp => {
       this.userItem = resp

      })
     }

     onDeleting(id:string){
       this.addService.deletingItem(id).subscribe(resp =>{
            console.log(resp)
            this.loadingAllserDetails();
       });
    

     }

     

}
