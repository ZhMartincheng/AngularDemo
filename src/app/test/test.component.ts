import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'test-root',
  templateUrl: './test.component.html',

})
export class TestComponent implements  OnInit  {
    @Input() names:any = {}
  //定义一个输出的
  @Output() foo = new EventEmitter<string>()

  todo(event:any){
    this.foo.emit('你好');
  }
  ngOnInit() {
  }


}

