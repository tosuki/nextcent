import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
    selector: 'app-calendar-section',
    templateUrl: './calendar-section.template.html',
    styleUrl: './calendar-section.styles.css',
    imports: [NgOptimizedImage]
})
export class CalendarSectionComponent {}