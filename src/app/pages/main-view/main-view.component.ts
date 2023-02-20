import { Component } from '@angular/core';
import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { Column } from 'src/app/models/column.model';
import { Board } from 'src/app/models/board.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {

  
doneList: string|CdkDropList<any>;
board: Board = new Board ('Test Board',[
  new Column('Ideas',[
    "Crear negocio",
    "Dar soluciones al trabajo",
    "lluvia de ideas"
  ]),
  new Column('Investigar', [
    "Fornas de negocio",
    "negocios establecidos",
    "nichos de producción"
  ]),
  new Column('Hacer', [
    "Reuniones de grupo",
    "Debates sobre propuestas",
    "avanzar sobre las etapas"
  ]),
  new Column('Hecho', [
    "Calendario de trabajo",
    "planificación de ceremonias"
  ]),
  
]);

constructor(){

this.doneList = '';
}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  
}
