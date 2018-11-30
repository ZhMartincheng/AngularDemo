import{RouterModule,Routes} from "@angular/router";
import { NgModule } from "@angular/core";
import { StudentComponent } from "./student/student.component";
import { About } from "./about/about.component";

const route:Routes=[
{path:'',redirectTo:'student',pathMatch:'full'},
{path:'student',component:StudentComponent},
{path:'about',component:About},
]
@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}