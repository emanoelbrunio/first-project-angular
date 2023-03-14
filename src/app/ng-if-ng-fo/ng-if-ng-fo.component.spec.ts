import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfNgFoComponent } from './ng-if-ng-fo.component';

describe('NgIfNgFoComponent', () => {
  let component: NgIfNgFoComponent;
  let fixture: ComponentFixture<NgIfNgFoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfNgFoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIfNgFoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
