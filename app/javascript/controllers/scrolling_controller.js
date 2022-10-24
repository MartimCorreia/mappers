import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    window.addEventListener('load', () => {
      document.getElementById('mappers-bg').className += " loaded";
      const horizontalLines = document.querySelectorAll('.horizontal-line');
      horizontalLines.forEach(line => {
        line.className += " loaded-h";
      })
    });

  }
}
