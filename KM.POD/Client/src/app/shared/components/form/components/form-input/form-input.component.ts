import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UnsubscribableComponent } from '../../../base-unsubscribe/unsubscribable.component';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';

@Component({
  selector: 'km-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputComponent extends UnsubscribableComponent implements OnInit, ControlValueAccessor {
  @Input() public max;

  @Input() public label = 'Label';

  @Input() public classes: string;

  @Input() public disabled = false;

  @Input() public type = 'text';

  @Input() public id = `${new Date().getUTCMilliseconds()}`;

  @Input() public isRequired = false;

  @Input() public placeholder = '';

  @Input() public editButton = false;

  @Output() public valueEmitter = new EventEmitter();

  public control: FormControl = new FormControl();

  public currentLength = 0;

  constructor(private changeDetection: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    this.registerListeners();
  }

  writeValue(value: any): void {
    this.control.setValue(value);
    this.changeDetection.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    isDisabled ? this.control.disable() : this.control.enable();
  }

  public emitValue(): void {
    this.valueEmitter.emit(this.control.value);
  }

  private propagateChange = (_: any) => {};

  private onTouched = () => {};

  private registerListeners(): void {
    this.control.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.propagateChange(value);
        this.handleCurrentLength(value);
      });
  }

  private handleCurrentLength(value): void {
    this.currentLength = value ? value.length : 0;

    this.changeDetection.markForCheck();
  }
}
