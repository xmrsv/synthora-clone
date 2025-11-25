import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { TrustedByComponent } from './components/trusted-by/trusted-by';
import { FrameworkStatsComponent } from './components/framework-stats/framework-stats';
import { PillarsComponent } from './components/pillars/pillars';
import { PhilosophyComponent } from './components/philosophy/philosophy';
import { UseCasesComponent } from './components/use-cases/use-cases';
import { TestAgentComponent } from './components/test-agent/test-agent';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    HeroComponent,
    TrustedByComponent,
    FrameworkStatsComponent,
    PillarsComponent,
    PhilosophyComponent,
    UseCasesComponent,
    TestAgentComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('synthora-clone');
}
