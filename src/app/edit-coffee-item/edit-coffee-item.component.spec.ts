import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCoffeeItemComponent } from './edit-coffee-item.component';

describe('EditCoffeeItemComponent', () => {
  let component: EditCoffeeItemComponent;
  let fixture: ComponentFixture<EditCoffeeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCoffeeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCoffeeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
