import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  getPasswordStrength(password: string): string {
    const length = password.length;
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (length === 0) {
      return 'gray';
    } else if (length < 8) {
      return 'red';
    } else if (hasLetters && hasDigits && hasSymbols) {
      return 'green';
    } else if (
      (hasLetters && hasSymbols) ||
      (hasLetters && hasDigits) ||
      (hasDigits && hasSymbols)
    ) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

  calculateStrengthPercentage(strength: string): number {
    if (strength === 'green') {
      return 100;
    } else if (strength === 'yellow') {
      return 75;
    } else if (strength === 'red') {
      return 50;
    } else {
      return 0;
    }
  }
}
