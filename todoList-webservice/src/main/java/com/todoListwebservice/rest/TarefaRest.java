package com.todoListwebservice.rest;

import java.util.List;

import com.todoListwebservice.domain.Tarefa;
import com.todoListwebservice.repository.TarefaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/tarefas")
public class TarefaRest {

    @Autowired
    private TarefaRepository tarefaRepository;

    @GetMapping
    public List<Tarefa> findAll() {
        return this.tarefaRepository.findAll();
    }

    @GetMapping(path = { "/{id}" })
    public Tarefa findOne(@PathVariable Long id) {
        return this.tarefaRepository.getOne(id);
    }

    @PostMapping
    public Tarefa save(@RequestBody Tarefa tarefa) {
        return this.tarefaRepository.save(tarefa);
    }

    @DeleteMapping(path = { "/{id}" })
    public ResponseEntity<?> delete(@PathVariable Long id) {
        this.tarefaRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
