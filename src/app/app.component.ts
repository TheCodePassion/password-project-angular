import { Component } from '@angular/core';
import { PasswordStrengthService } from './services/password-strength.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password: string = '';
  passwordStrength: string = '';
  strengthPercentage: number = 0;

  constructor(public passwordStrengthService: PasswordStrengthService) {}

  updatePasswordStrength(): void {
    this.passwordStrength = this.passwordStrengthService.getPasswordStrength(
      this.password
    );
    this.strengthPercentage =
      this.passwordStrengthService.calculateStrengthPercentage(
        this.passwordStrength
      );
  }
}
