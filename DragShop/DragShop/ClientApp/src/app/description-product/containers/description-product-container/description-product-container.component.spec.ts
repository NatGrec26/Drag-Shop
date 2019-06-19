import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionProductContainerComponent } from './description-product-container.component';

describe('DescriptionProductContainerComponent', () => {
  let component: DescriptionProductContainerComponent;
  let fixture: ComponentFixture<DescriptionProductContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionProductContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionProductContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
