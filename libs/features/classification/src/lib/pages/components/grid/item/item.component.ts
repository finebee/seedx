import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ClassificationEntity } from '../../../../dp';

@Component({
  selector: 'seedx-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {
  @Input() data: ClassificationEntity;
}
