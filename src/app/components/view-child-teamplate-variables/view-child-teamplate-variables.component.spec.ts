import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildTeamplateVariablesComponent } from './view-child-teamplate-variables.component';

describe('ViewChildTeamplateVariablesComponent', () => {
  let component: ViewChildTeamplateVariablesComponent;
  let fixture: ComponentFixture<ViewChildTeamplateVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildTeamplateVariablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildTeamplateVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
