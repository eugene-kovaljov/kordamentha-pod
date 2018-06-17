import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit,
  Output
} from '@angular/core';
import { SimpleChanges } from '@angular/core';

interface PageItem {
  pageNumber?: number;
  isDots?: boolean;
}

@Component({
  selector: 'km-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input()
  public totalItems = 10;

  @Input()
  public set itemsPerPage(value: number) {
    if (value <= 0) {
      this._itemsPerPage = 1;
    } else {
      this._itemsPerPage = value;
    }
  }

  @Input()
  public currentPage = 1;

  @Output()
  public pageChanged: EventEmitter<number> = new EventEmitter();

  public pageItems: PageItem[];

  private _itemsPerPage = 2;

  private rangeOfPages = 3;

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  public ngOnInit(): void {
    this.calculatePageItems();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.calculatePageItems();
  }

  public onPageClicked(pageItem: PageItem): void {
    this.pageChanged.emit(pageItem.pageNumber);
    this.currentPage = pageItem.pageNumber;
    this.calculatePageItems();
    this.changeDetector.markForCheck();
  }

  private calculatePageItems() {
    this.pageItems = [];
    for (let i = 1; i <= this.totalItems; i++) {
      if (i <= this.rangeOfPages ||
        (i > this.currentPage - this.rangeOfPages / 2
          && i < this.currentPage + this.rangeOfPages / 2)
        || i > this.totalItems - this.rangeOfPages) {
        if (this.pageItems[this.pageItems.length - 1] && i !== this.pageItems[this.pageItems.length - 1].pageNumber + 1) {
          this.pageItems.push({isDots: true, pageNumber: Math.floor( i / 2)});
        }
        this.pageItems.push({pageNumber: i});
      }
    }
  }
}
