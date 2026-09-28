import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common"

@Component({
    selector: 'app-achievements-section',
    templateUrl: './achievements.template.html',
    styleUrl: './achievements.styles.css',
    imports: [ NgOptimizedImage ]
})
export class AchievementsSectionComponent {}