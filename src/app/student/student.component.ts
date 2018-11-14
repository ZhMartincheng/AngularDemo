import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'student-root',
  templateUrl: './student.component.html',

})
export class StudentComponent {
    me:Student[]=[{
        name:'admin',
        age:15,
        className:'一年级'
        },
        {
        name:'testing',
        age:16,
        className:'二年级'
        },
        {
            name:'martin',
            age:28,
            className:'三年级'
            }
        ];
        

    public addStudentInfo(name:string,age:number,className:string){
        const me=age/3;
        this.me.push({
            name:name,
            age:age
            ,className:className
        });
    
    }
 
}
