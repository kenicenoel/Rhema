import { Component, Input } from '@angular/core';

@Component({
  selector: 'loading',
  template: `
    <lottie-animation-view
    [options]="lottieConfig"
    (animCreated)="handleAnimation($event)">
  </lottie-animation-view>
    `,
    styles: [`

    `]
})
export class LoadingComponent {

  public lottieConfig: Object;
    private anim: any;
    private animationSpeed: number = 1;
    animations: any [] = [
      {
        key: 'progress-bar',
        anim: 'assets/imgs/anim/progress_bar.json'
      },
      {
        key: 'like',
        anim: 'assets/imgs/anim/like.json'
      },
      {
        key: 'checked-done',
        anim: 'assets/imgs/anim/checked_done.json'
      },
      {
        key: 'wave',
        anim: 'assets/imgs/anim/wave.json'
      }
    ]
 
    @Input() key: string;
    constructor() 
    {
      var animPath = this.animations[this.animations.findIndex(animation => animation.key == this.key)];
        this.lottieConfig = {
            path: animPath,
            autoplay: true,
            loop: true
        };
    }
 
    handleAnimation(anim: any) {
        this.anim = anim;
    }

}
