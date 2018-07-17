import { Directive, OnInit, ElementRef, Input, Renderer2 } from '@angular/core';
@Directive({

    // tslint:disable-next-line:directive-selector
    selector: '[ResaltarDirective]'
})

export class ResaltarDirective implements OnInit {
    constructor(private elRef: ElementRef, private renderer: Renderer2) { }
    // tslint:disable-next-line:no-input-rename
    @Input('ResaltarDirective') plan = '';
    ngOnInit() {
        if (this.plan === 'gratuito' {
            this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
            this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
        })
    }
}
