import { TarefaService } from './../services/tarefa.service';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../domain/tarefa';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.scss']
})
export class TarefaComponent implements OnInit {

  tarefas: Array<Tarefa> = [];
  tarefa: Tarefa = new Tarefa();

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.findAll();
  }

  save() {
    this.tarefaService.save(this.tarefa).subscribe(tarefa => this.findAll());
  }

  findAll() {
    this.tarefaService.findAll().subscribe(tarefas => this.tarefas = tarefas);
  }

  deletar(id: number) {
    this.tarefaService.delete(id).subscribe(() => this.findAll());
  }

}
