import { Injectable } from '@angular/core';
import { environment } from '@assets';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { ClassificationEntity } from './dp';

@Injectable({
  providedIn: 'root',
})
export class ClassificationService {
  private bu = `${environment.api}/api/classification`;
  private state$: WebSocketSubject<ClassificationEntity[]>;

  state(): Observable<ClassificationEntity[]> {
    this.state$ = webSocket(`ws://${this.bu}/ws`);
    return this.state$;
  }
}
