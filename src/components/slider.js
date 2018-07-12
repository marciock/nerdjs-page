import {Creator} from '../../dist/nerdcreator';

export class Slider extends Creator{
    render(){
        const slider=[
            {
                title:'Nerdjs',
                slogan:'Javascript programing',
                src:'./img/img1.jpg'
            },
            {
                title:'Javascript Language',
                slogan:'create web components',
                src:'./img/img2.jpg'
            },
            {
                title:'Fast production',
                slogan:'Quick development',
                src:'./img/img3.jpg'
            },

        ]
        return(
            `
            <div class="slider">
            <ul class="slides">
            ${
                slider.map((f)=>{
                    return(
                        `
                        <li>
                        <img src="${f.src}"> <!-- random image -->
                        <div class="caption center-align">
                          <h3>${f.title}</h3>
                          <h5 class="light grey-text text-lighten-3">${f.slogan}</h5>
                        </div>
                      </li>

                        `
                    )
                }).join('')

            }
              
             
          </div>

            `
        )
    }
    callBack(){

        let elems=document.querySelectorAll('.slider');
        instances=M.Slider.init(elems,{indicators:false});
    }
}
customElements.define('nd-slider',Slider);