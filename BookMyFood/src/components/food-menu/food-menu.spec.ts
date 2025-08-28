import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMenu } from './food-menu';

describe('FoodMenu', () => {
  let component: FoodMenu;
  let fixture: ComponentFixture<FoodMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
