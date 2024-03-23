import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzlesGroupComponent } from './puzzles-group.component';

describe('PuzzlesGroupComponent', () => {
  let component: PuzzlesGroupComponent;
  let fixture: ComponentFixture<PuzzlesGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuzzlesGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PuzzlesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
