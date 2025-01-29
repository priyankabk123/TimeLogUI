import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTimeLogComponent } from './add-new-time-log.component';

describe('AddNewTimeLogComponent', () => {
  let component: AddNewTimeLogComponent;
  let fixture: ComponentFixture<AddNewTimeLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewTimeLogComponent]
    });
    fixture = TestBed.createComponent(AddNewTimeLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
