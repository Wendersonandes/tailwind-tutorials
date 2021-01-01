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
  static targets = [ "menu", "menuIcon", "button" ]
	static classes = ["hide", "reveal"]
	static values = { isOpen: Boolean, closeIcon: String, pileIcon: String }

  connect() {
		this.set_classes()
		this.set_menu_icon()
  }

	toggle(){
		this.isOpenValue = !this.isOpenValue
		this.set_classes()
		this.set_menu_icon()
	}

	set_classes(){
		if(this.isOpenValue){
			this.menuTarget.classList.add(this.revealClass)
			this.menuTarget.classList.remove(this.hideClass)
		}else{
			this.menuTarget.classList.add(this.hideClass)
			this.menuTarget.classList.remove(this.revealClass)
		}
	}

	set_menu_icon(){
		let html = ""
		if(this.isOpenValue){
			html = document.getElementById(this.pileIconValue).innerHTML
		}else{
			html = document.getElementById(this.closeIconValue).innerHTML
		}
		this.menuIconTarget.innerHTML = html
	}
}
