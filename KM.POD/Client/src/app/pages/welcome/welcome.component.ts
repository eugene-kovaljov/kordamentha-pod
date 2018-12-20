import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { citiesData } from '../../../mocks/cities/cities-data.mock';

@Component({
  selector: 'km-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent {
  public cities: { id: string; name: string }[] = citiesData;
  public textHided: boolean = false;
  public initialHide: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 768) {
      this.textHided = this.initialHide;
    } else {
      this.textHided = false;
      this.initialHide = true;
    }
  }

  public changeTextState(): void {
    this.textHided = !this.textHided;
    this.initialHide = false;
  }
}
