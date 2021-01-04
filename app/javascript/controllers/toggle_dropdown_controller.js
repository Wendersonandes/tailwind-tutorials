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
  static targets = [ "menu", "closer"]
	static classes = ["hide", "reveal"]
	static values = { isOpen: Boolean }

  connect() {
		this.set_classes()
		document.addEventListener('keydown', this.toggleWithKeyboard.bind(this))
  }

	disconnect(){
		document.removeEventListener('keydown', this.toggleWithKeyboard)
	}

	toggle(){
		this.isOpenValue = !this.isOpenValue
		this.set_classes()
	}

	toggleWithKeyboard(e){
		if(e.key === 'Esc' || e.key === 'Escape' && this.isOpenValue === true){
			this.toggle()
		}
	}

	set_classes(){
		if(this.isOpenValue){
			this.reveal(this.menuTarget)
			this.reveal(this.closerTarget)
		}else{
			this.hide(this.menuTarget)
			this.hide(this.closerTarget)
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
