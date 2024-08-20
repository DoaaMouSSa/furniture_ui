import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class PasswordValidator {
  // Validator for matching passwords
  static matchPassword: ValidatorFn = (form: AbstractControl): ValidationErrors | null => {
    const password = form.get('password')?.value;
    const retypePassword = form.get('retypePassword')?.value;
    return password === retypePassword ? null : { passwordMismatch: true };
  };
}
