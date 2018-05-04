'use strict';

class SahibindenComHelper extends Helper {

  clickFromListSahibinden(elementId){
	  let browser = this.helpers['WebDriverIO'].browser;
	  
	  return browser.execute(function(id) {
		  var selectedElement = document.querySelectorAll(id)[0];
		  if(selectedElement !== undefined){
			selectedElement.click();
		  }
      },elementId);
	  
  }
  
  setSahibindenCheckState(elementId, willBeChecked){
	  let browser = this.helpers['WebDriverIO'].browser;

	return browser.execute(function(id, checkState) {
		document.getElementById(id).checked = checkState;
    },elementId, willBeChecked);

  }
  
}

module.exports = SahibindenComHelper;