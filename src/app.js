import '@webcomponents/custom-elements';


import {Creator} from '../dist/nerdcreator';
import {NdView} from '../dist/nerdrouter';

import NavBar from './components/navbar';
import Home from './components/home';
import Slider from './components/slider';
import Footer from './components/footer';
export class Apps extends Creator{

  
  render(){
    
  
    return (
      `<div>
        
        <nd-navbar></nd-navbar>
        <nd-slider></nd-slider>
        
        <nd-view>
        
          <nd-home></nd-home>
        </nd-view>
        <nd-footer></nd-footer>
      </div>`
    )
  }
  callBack(){

    const slider=document.querySelector('nd-slider');

    //slider.style.zIndex="-3";
  }

  
  }
  window.suportCustomElements="customElements" in window;
 
  customElements.define('nd-app',Apps);
  
 
      
  
  
  
  
  
  