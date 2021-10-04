import { NgModule } from '@angular/core';

import { DragDropHostDirective } from './drag-drop-host.directive';
import { DraggableDirective } from './draggable.directive';
import { DroppableDirective } from './droppable.directive';

@NgModule({
  declarations: [DraggableDirective, DragDropHostDirective, DroppableDirective],
  exports: [DraggableDirective, DragDropHostDirective, DroppableDirective],
})
export class DirectivesModule {}
