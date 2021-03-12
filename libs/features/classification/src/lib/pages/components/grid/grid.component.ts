import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fs from '../../../+state';

@Component({
  selector: 'seedx-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent implements OnInit {
  items$: Observable<fs.Entity[]>;

  testItems: fs.Entity[] = [
    { Status: 'KWS_KERIDOS', Row: 1, Column: 1, id: 'Class-0004' },
    { Status: 'KWS_KERIDOS', Row: 1, Column: 2, id: 'Class-0004' },
    { Status: 'KWS_KERIDOS', Row: 1, Column: 3, id: 'Class-0004' },
    { Status: 'KWS_KERIDOS', Row: 4, Column: 1, id: 'Class-00016' },
    { Status: 'KWS_KERIDOS_YG', Row: 4, Column: 2, id: 'Class-00016' },
    { Status: 'KWS_KERIDOS', Row: 1, Column: 4, id: 'Class-0003' },
    { Status: 'KWS_KERIDOS', Row: 1, Column: 5, id: 'Class-0003' },
    { Status: 'KWS_KERIDOS', Row: 3, Column: 1, id: 'Class-0009' },
    { Status: 'KWS_KERIDOS_YG', Row: 3, Column: 2, id: 'Class-0009' },
    { Status: 'KWS_KERIDOS', Row: 3, Column: 3, id: 'Class-00012' },
    { Status: 'KWS_KERIDOS', Row: 3, Column: 4, id: 'Class-00012' },
    { Status: 'KWS_KERIDOS', Row: 2, Column: 1, id: 'Class-0005' },
    { Status: 'KWS_KERIDOS', Row: 1, Column: 6, id: 'Class-0001' },
    { Status: 'KWS_KERIDOS', Row: 1, Column: 7, id: 'Class-0001' },
    { Status: 'KWS_KERIDOS_YG', Row: 2, Column: 2, id: 'Class-0007' },
    { Status: 'KWS_KERIDOS_YG', Row: 2, Column: 3, id: 'Class-0005' },
    { Status: 'KWS_KERIDOS_YG', Row: 2, Column: 4, id: 'Class-0007' },
    { Status: 'KWS_KERIDOS_YG', Row: 2, Column: 5, id: 'Class-0005' },
    { Status: 'KWS_KERIDOS_YG', Row: 2, Column: 6, id: 'Class-0007' },
    { Status: 'KWS_KERIDOS', Row: 3, Column: 5, id: 'Class-00010' },
    { Status: 'KWS_KERIDOS', Row: 3, Column: 6, id: 'Class-00011' },
    { Status: 'KWS_KERIDOS_YG', Row: 3, Column: 7, id: 'Class-00010' },
    { Status: 'KWS_KERIDOS', Row: 3, Column: 8, id: 'Class-00011' },
    { Status: 'KWS_KERIDOS_YG', Row: 3, Column: 9, id: 'Class-00011' },
    { Status: 'KWS_KERIDOS', Row: 4, Column: 3, id: 'Class-00013' },
    { Status: 'KWS_KERIDOS_YG', Row: 4, Column: 4, id: 'Class-00013' },
    { Status: 'KWS_KERIDOS_YG', Row: 2, Column: 7, id: 'Class-0006' },
    { Status: 'KWS_KERIDOS_YG', Row: 1, Column: 9, id: 'Class-0002' },
    { Status: 'KWS_KERIDOS', Row: 1, Column: 8, id: 'Class-0002' },
    { Status: 'KWS_KERIDOS', Row: 2, Column: 8, id: 'Class-0008' },
    { Status: 'KWS_KERIDOS_YG', Row: 2, Column: 9, id: 'Class-0006' },
    { Status: 'KWS_KERIDOS_YG', Row: 4, Column: 5, id: 'Class-00014' },
    { Status: 'KWS_KERIDOS', Row: 4, Column: 6, id: 'Class-00015' },
    { Status: 'KWS_KERIDOS_YG', Row: 4, Column: 7, id: 'Class-00014' },
    { Status: 'KWS_KERIDOS', Row: 4, Column: 8, id: 'Class-00015' },
    { Status: 'KWS_KERIDOS_YG', Row: 4, Column: 9, id: 'Class-00015' },
  ];

  constructor(private store: Store<fs.State>) {}

  ngOnInit(): void {
    console.log('init');
    // this.items$ = this.store.select(fs.Query.getEntities);
  }
}
