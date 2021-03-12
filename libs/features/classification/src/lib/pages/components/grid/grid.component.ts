import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassificationService } from '../../../classification.service';
import { ClassificationEntity } from '../../../dp';

@Component({
  selector: 'seedx-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent implements OnInit {
  items$: Observable<ClassificationEntity[]>;

  constructor(private srv: ClassificationService) {}

  ngOnInit(): void {
    this.items$ = this.srv.state();
  }
}
