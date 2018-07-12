import {Creator} from  '../../dist/nerdcreator';


export class Footer extends Creator{
    render(){
        return(
            `
        <footer class="page-footer green draken-4">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h5 class="white-text">Nerdjs</h5>
                    <p class="grey-text text-lighten-4">By Marcio Alves</p
                </div>
                <div class="col l4 offset-l2 s12">
                    <h5 class="white-text">Links</h5>
                    <ul>
                    <li><a class="grey-text text-lighten-3" href="#!">Getting Started</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">Tutorials</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">GitHub</a></li>
                   
                </div>
            </div>
            </div>
            <div class="footer-copyright">
            <div class="container">
            Licence MTI
           
            </div>
        </div>
        </footer>

            `
        )
    }
}
customElements.define('nd-footer',Footer);