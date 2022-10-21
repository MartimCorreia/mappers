import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["slider", "first", "second", "third"];
  connect() {

    let counter = 0;
    const slideCount = document.querySelectorAll('#slider-wrapper ul li').length;
    const slideWidth = document.querySelector('#slider-wrapper').offsetWidth;
    const totalWidth = slideCount * slideWidth + 'px';
    const slider = document.querySelector("#slider-wrapper ul");
    let leftPosition = 0;
    let secondRound = false;

    slider.style.width = totalWidth;

    setInterval(() => {
      this.firstTarget.className = "content hidden";
      this.thirdTarget.className = "content hidden";
      this.secondTarget.className = "content hidden";
      if(counter === slideCount){
        counter = 0;
      }

      switch (counter) {
        case 0:
          leftPosition = `-${counter++ * slideWidth}px`;
          slider.style.left = leftPosition;
          this.firstTarget.className = "content showing";
          break;

          case 1:
            leftPosition = `-${counter++ * slideWidth}px`;
            slider.style.left = leftPosition;
            this.secondTarget.className = "content showing";
            break;

            case 2:
              leftPosition = `-${counter++ * slideWidth}px`;
              slider.style.left = leftPosition;
              this.thirdTarget.className = "content showing";
              break;
            }
    }, 5000);
  }
}
