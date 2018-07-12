/*
NerdJS is a framework in which your libraries develop varied concepts and standardized solutions for client-side development. This Frontend tool has great relevance in relation to other frameworks in the market. It allows you to create customized web components that interact, allowing you to generate a SPA (Single Page Application) environment. With its state controller, it has a complete interaction between these components.
NerdJS is fully object oriented, displaying a very intuitive and flexible developer interface, making it easy to perform and produce. The interface context allows the tool to be worked in groups, as it meets many requirements related to the Design Pattern.

*/

import {Creator} from '../../dist/nerdcreator';

export class Intro extends Creator{

    render(){
        return(
             `
             <div class="row">
                <h1>Getting Started</h1>
                <h2>Intro</h2>
                <p><b>Nerdjs</b> is a framework in which your libraries develop varied concepts and standardized solutions for client-side development. This Frontend tool has great relevance in relation to other frameworks in the market. It allows you to create customized web components that interact, allowing you to generate a SPA (Single Page Application) environment. With its state controller, it has a complete interaction between these components.
                <b>Nerdjs</b> is fully object oriented, displaying a very intuitive and flexible developer interface, making it easy to perform and produce. The interface context allows the tool to be worked in groups, as it meets many requirements related to the Design Pattern.
             <div>

             `
        )
    }
}
customElements.define('get-start',Intro);