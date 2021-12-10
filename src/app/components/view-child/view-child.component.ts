import { Component, ElementRef, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { ViewChildTeamplateVariablesComponent } from '../view-child-teamplate-variables/view-child-teamplate-variables.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.less']
})
export class ViewChildComponent {

  // Titles for examples
  public viewChildTitle = "ViewChild";
  public viewChildTemplateVariables = "Binding ViewChild to Template Variables";
  public viewChildDonElementLinkedComponent = "DOM element linked to the component";
  public injectingDomElementForComponent = "Template reference injecting the <ViewChildTeamplateVariablesComponent> Dom element";
  
  // ViewChild
  @ViewChild(CounterComponent, { static: false })
  private counterComponent: CounterComponent | undefined;

  public increment() { this.counterComponent?.increment(); }
  public decrement() { this.counterComponent?.decrement(); }

  // Binding ViewChild to Template Variables
  public name = "Jhon";
  @ViewChild("nameText", { static: false })
  // Note: ElementRef is not recommended if cross-platform is required in the future.
  private nameParagraph: ElementRef | undefined;

  public change(): void {
    if (this.nameParagraph !== undefined) {
      this.nameParagraph.nativeElement.textContent = "Mike";
    }
  }

  // Template reference injecting the <ViewChildTeamplateVariablesComponent> Dom element
  @ViewChild("nameTextComponent")
  private nameComponent: ViewChildTeamplateVariablesComponent | undefined;

  public componentChange() {
    if (this.nameComponent !== undefined) {
      this.nameComponent.name = "Smith"
    }
  }

  // DOM element linked to the component
  // Note: ElementRef is not recommended if cross-platform is required in the future.
  @ViewChild('domElementComponent', { read: ElementRef })
  private domElementComponent: ElementRef | undefined;

  public domElementComponentChange() {
    if (this.domElementComponent !== undefined) {
      this.domElementComponent.nativeElement.querySelector("p").textContent = "MisterX";
    }
  }

}
