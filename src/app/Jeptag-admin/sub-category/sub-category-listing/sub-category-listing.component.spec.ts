import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryListingComponent } from './sub-category-listing.component';

describe('SubCategoryListingComponent', () => {
  let component: SubCategoryListingComponent;
  let fixture: ComponentFixture<SubCategoryListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCategoryListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
