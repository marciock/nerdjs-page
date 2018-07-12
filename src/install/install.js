import {Creator} from   '../../dist/nerdcreator';

export class Install extends Creator{

    render(){
        return(
            `
            <div>
                <h2>Installation</h2>
                <p>For installation requires the installed <a href="http://nodjs.org" class="waves-effect waves-teal btn-flat">Nodejs</a> environment and the  <a href="https://npmjs.com" class="waves-effect waves-teal btn-flat">NPM</a> package manager.
                Using the terminal, execute the following command:</p>
                <blockquote class="blue-grey darken-4">
                    <div style="padding:2em;" >
                    <h5 class="white-text">$>npm install -g nerdjs-init</h5>
                    </div>
                </blockquote>
                <p>This is the global install of the Nerdjs cli application. Create a folder and access it. Then type the command in the terminal:</p>
                <blockquote class="blue-grey darken-4">
                    <div style="padding:2em;" >
                    <h5 class="white-text">$project> nerdjs-init</h5>
                    </div>
                </blockquote>
                <p>
                Will automatically be installed. After installation just start developing your application.</p>
                <p>You will need to compile your code for production:</p>
                <blockquote class="blue-grey darken-4">
                    <div style="padding:2em;" >
                    <h5 class="white-text">$project> npm run build</h5>
                    </div>
                </blockquote>


            <div>

            `
        )
    }
}

customElements.define('nd-install',Install);