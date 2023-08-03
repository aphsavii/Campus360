import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeImageService {

  private dataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  getData() {
    return this.dataSubject.asObservable();
  }

  refreshData(data: any) {
    this.dataSubject.next(data);
  }
}
