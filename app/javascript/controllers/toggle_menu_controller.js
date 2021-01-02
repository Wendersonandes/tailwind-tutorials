// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "menu", "closeIcon", "pileIcon" ]
	static classes = ["hide", "reveal"]
	static values = { isOpen: Boolean }

  connect() {
		this.set_classes()
  }

	toggle(){
		this.isOpenValue = !this.isOpenValue
		this.set_classes()
	}

	set_classes(){
		if(this.isOpenValue){
			this.reveal(this.closeIconTarget)
			this.reveal(this.menuTarget)
			this.hide(this.pileIconTarget)
		}else{
			this.reveal(this.pileIconTarget)
			this.hide(this.closeIconTarget)
			this.hide(this.menuTarget)
		}
	}

	reveal(el){
		el.classList.add(this.revealClass)
		el.classList.remove(this.hideClass)
	}

	hide(el){
		el.classList.add(this.hideClass)
		el.classList.remove(this.revealClass)
	}
}
