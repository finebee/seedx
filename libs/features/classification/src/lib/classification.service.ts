import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { ClassificationEntity } from './dp';

@Injectable({
  providedIn: 'root',
})
export class ClassificationService {
  private state$: WebSocketSubject<ClassificationEntity[]>;

  state(): Observable<ClassificationEntity[]> {
    this.state$ = webSocket(`ws://localhost:5000/api/classification/ws`);
    return this.state$;
  }
}
