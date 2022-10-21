import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    window.addEventListener('load', () => {
      const stuff = document.querySelector('#mappers-bg::before');
      console.log(stuff);
    });
  }



}
