import {Creator} from '../../dist/nerdcreator';

export class NavBar extends Creator{

    render(){
        return(
            `
            <div>
                
                <nav>
                    <div class="nav-wrapper green">
                     <div class="brand-logo" style="margin-left:1em;margin-top:-0.5em;"><img src="./img/nerdjs.svg"/></div>
                   
                        <ul class="right hide-on-med-and-down" style="margin-right:3em;">
                        <li>v0.0.2</li>
                        <li><a href="https://github.com/marciock/nerdjs-skeleton" >GitHub<i class="material-icons right">cloud_download</i></a></li>
                           
                        </ul>
                    </div>
                </nav>
                
            </div>

            `
        )
    }
}
customElements.define('nd-navbar',NavBar);