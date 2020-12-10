import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemoryEventComponent } from './components/memory-event-card/memory-event-card.component';

const routes: Routes = [{ path: '', component: MemoryEventComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
