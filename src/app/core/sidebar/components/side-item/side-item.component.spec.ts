import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideItemComponent } from './side-item.component';

describe('SideItemComponent', () => {
  let component: SideItemComponent;
  let fixture: ComponentFixture<SideItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideItemComponent]
    });
    fixture = TestBed.createComponent(SideItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
