import { Component, input, InputSignal, OnInit, signal } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
    selector: 'app-community-frame',
    template: `
    <div class="community-frame">
        <div class="thumb-frame">
            <div class="thumb">
            <img [ngSrc]="imgUrl()" fill [alt]="title()"/> 
        </div>
        </div>
        <div class="text">
            <h3>{{ title() }}</h3>
            <p>{{ description() }}</p>
        </div>
    </div>
    `,

    styles: `
        .community-frame {
            width: 280px;
            box-shadow: 0px 1.39px 2.78px 0px rgba(171, 190, 209, 0.2);      

            display: flex;
            flex-direction: column;
            padding: 20px;
        }

        .community-frame .thumb-frame {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .community-frame .thumb {
            position: relative;
            width: 100px;
            height: 80px;
        }

        .community-frame .text {
            text-align: center;

            display: flex;
            flex-direction: column;
            gap: 5px;
            flex: 1;
        }
    `,
    imports: [NgOptimizedImage]
})
export class CommunityFrameComponent implements OnInit {
    public imgUrl: InputSignal<string> = input.required<string>();
    public title: InputSignal<string> = input.required<string>()
    public description: InputSignal<string> = input.required<string>();

    constructor() { }


    ngOnInit(): void {
        console.log(`The value of imgUrl is: ${this.imgUrl()}`);
    }
}