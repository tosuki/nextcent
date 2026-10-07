import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
    selector: 'app-hero-section',
    templateUrl: './hero-section.template.html',
    styleUrl: './hero-section.styles.css',
    imports: [NgOptimizedImage]
})
export class HeroSectionComponent { }