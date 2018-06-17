import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetPageTitle } from '../../main/main-store/actions/index';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { USER_DATA } from '../../../../mocks/users/users-data.mock';
import { MatTableDataSource, Sort } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


export interface UserData {
  name: string;
  contacts: { email: string, phone: string };
  office: string;
  inactive?: boolean;
  isExpanded?: boolean;
  workload: UserDataJob[];
}

export interface UserDataJob {
  job: string;
  permission: string;
  claims: number;
}

export class UserDataSource extends MatTableDataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): BehaviorSubject<any> {
    const rows = [];
    USER_DATA.forEach(element => rows.push(element, {
      detailRow: true,
      element,
      detailDataSource: new MatTableDataSource(element.workload)
    }));
    return new BehaviorSubject(rows);
  }

  disconnect() {
  }
}

@Component({
  selector: 'km-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', visibility: 'hidden'})),
      state('expanded', style({height: '*', visibility: 'visible'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDashboardComponent implements OnInit {
  public displayedColumns = ['name', 'contacts', 'office', 'workload'];
  public worklogDisplayedColumns = ['job', 'permission', 'claims'];
  public userDataSource = new UserDataSource();

  public get hasData() {
    return USER_DATA.length > 0;
  }

  constructor(private store: Store<any>) {
  }

  public ngOnInit() {
    this.store.dispatch(new SetPageTitle('KM Users'));
  }

  public workloadData(data: UserData) {
    return data.workload;
  }

  public isExpansionDetailRow = (i: number, row: any) => row.hasOwnProperty('detailRow');

  public userDataSortChanged(sort: Sort) {
  }

  public userWorklogSortChange(sort: Sort) {
  }
}
