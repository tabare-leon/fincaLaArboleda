import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PqrsPage } from './pqrs.page';

describe('PqrsPage', () => {
  let component: PqrsPage;
  let fixture: ComponentFixture<PqrsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PqrsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
