import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('inputTodo') txtInputTodo!: ElementRef;

  chkCompleted: FormControl = new FormControl();
  txtInput: FormControl = new FormControl();

  editing: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
  }

  edit() {
    this.editing = true;

    setTimeout(() => {
      this.txtInputTodo.nativeElement.select();
    }, 1);
  }

  finishEdit() {
    this.editing = false;
  }
}
