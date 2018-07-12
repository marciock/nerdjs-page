import {Creator} from '../../dist/nerdcreator';

import Intro from '../intro/intro';
import Install from '../install/install';
import Library from '../library/library';


export class Home extends Creator{

    render(){
        return(
            `
            <div class="container" style="margin-top:5em;">
            
                <get-start></get-start>
                
                <nd-install></nd-install>
                <nd-lib></nd-lib>
            </div>
            `
        )
    }
}
customElements.define('nd-home',Home);