import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { map, Observable, of, switchMap, timer } from 'rxjs';
import { AddService } from 'src/app/serices/Services/userData';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor(private addService:AddService) { }

   get customRequiredWithNoSpace() : ValidatorFn{
    
        return (ctrl:AbstractControl) : ValidationErrors | null => {
          const value : string = ctrl.value;
          if(value && value.trim().indexOf(" ") > -1){
            return {'spaceFoundValidator' : true}
          }else
            return null;
        }
    
      }

    get evenNumberValidator() : ValidatorFn{
    
          return (ctrl : AbstractControl) : ValidationErrors | null => {
    
            let value = ctrl.value || 0;
    
            if(value % 2 === 0){
              return null;
            }else{
              return {'evenNumberValidator':true, message : value + ": is not an even number",};
            }
    
          }
    
      }

  get validateUserName$() : AsyncValidatorFn {
    return (ctrl:AbstractControl) : Observable< ValidationErrors | null> => {
        let value = ctrl.value;
        if(value){

          const result = timer(300).pipe(switchMap(() => this.addService.validateUser(value).pipe(map(resp => {
              if(resp.found){
                  return {'duplicateValidator':true}
              }else{
                  return null;
              }
            }))));
            return result;
        }else
          return of(null);
    }
  }
}
