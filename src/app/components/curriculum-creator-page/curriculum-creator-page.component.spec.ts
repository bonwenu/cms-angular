import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CurriculumCreatorPageComponent } from './curriculum-creator-page.component';
import { MatProgressSpinnerModule} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CurriculumCreatorPageComponent', () => {
  let component: CurriculumCreatorPageComponent;
  let fixture: ComponentFixture<CurriculumCreatorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [

        CurriculumCreatorPageComponent
      ],

      imports: [

        MatProgressSpinnerModule,
        MatCardModule,
        DragDropModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatToolbarModule,
        MatDialogModule,
        MatGridListModule,
        MatCheckboxModule,
        MatMenuModule,
        FormsModule,
        MatTooltipModule,
        ToastrModule.forRoot(),
        HttpClientTestingModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumCreatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
