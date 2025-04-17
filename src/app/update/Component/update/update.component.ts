import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { AddService } from 'src/app/serices/Services/userData';
import { ValidatorService } from 'src/app/services/validator-service/validator.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent  implements OnInit {
     
  id: string | null | undefined

  userDetails = new FormGroup ({
    name: new FormControl('', { validators: [Validators.required, this.validatorService.customRequiredWithNoSpace], 
       asyncValidators:[this.validatorService.validateUserName$]}),
    age: new FormControl('', { validators: [Validators.required, this.validatorService.evenNumberValidator] })  })
    
 
  
    constructor( private addService : AddService,
             private activatedRoute:ActivatedRoute,
             private  router:Router,
            private validatorService: ValidatorService){

 
    }
    ngOnInit(): void {

      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      this.valueByid()
    }
    
 onUpdate (){
  if(this.id){
    let updateValue = this.userDetails.value as any
    this.addService.updateUser (this.id, updateValue).subscribe(resp =>{
      console.log(resp)
      this.router.navigateByUrl("/")
    })
  }
}

valueByid(){
      if(this.id){
        this.addService.gettingUserById(this.id).subscribe( resp =>{
             this.userDetails.setValue({
               name: resp.name,
               age: resp.age
             })
             console.log(resp)    
        }) } }

}

