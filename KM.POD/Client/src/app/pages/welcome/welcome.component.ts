import { ChangeDetectionStrategy, Component } from '@angular/core';
import { citiesData } from '../../../mocks/cities/cities-data.mock';

@Component({
  selector: 'km-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent {
  public cities: { id: string; name: string }[] = citiesData;
}
