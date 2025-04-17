import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { map, Observable, of, switchMap, timer } from 'rxjs';
import { AddService } from 'src/app/serices/Services/userData';
import { ValidatorService } from 'src/app/services/validator-service/validator.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  userDetails = new FormGroup ({
   name: new FormControl('', { validators: [Validators.required, this.validatorService.customRequiredWithNoSpace], 
      asyncValidators:[this.validatorService.validateUserName$]}),
   age: new FormControl('', { validators: [Validators.required, this.validatorService.evenNumberValidator] })  })
   

  constructor( private addService : AddService,
    private validatorService:ValidatorService
  ){}

  onAdding(){
      let value = this.userDetails.value as any
        this.addService.addUser(value).subscribe( resp => {
          this.userDetails.reset()
    })
  }


    


}