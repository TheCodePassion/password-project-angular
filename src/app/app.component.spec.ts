import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PasswordStrengthService } from './services/password-strength.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule],
      providers: [PasswordStrengthService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should update password strength and percentage on password input', () => {
    component.password = 'TestPassword123!';
    component.updatePasswordStrength();
    expect(component.passwordStrength).toBe('green');
    expect(component.strengthPercentage).toBe(100);
  });

  it('should set password strength to "gray" if password length is 0', () => {
    component.password = '';
    component.updatePasswordStrength();
    expect(component.passwordStrength).toBe('gray');
  });

  it('should apply CSS class based on password strength', () => {
    component.password = 'TestPassword123!';
    component.updatePasswordStrength();
    const strengthIndicator =
      fixture.nativeElement.querySelector('.strength-section');
    expect(strengthIndicator.classList.contains('green')).toBe(true);
  });
});
