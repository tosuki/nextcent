import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
    selector: 'app-clients-section',
    imports: [NgOptimizedImage],
    templateUrl: './clients-section.template.html',
    styleUrl: './clients-section.styles.css'
})
export class ClientSectionComponent { }