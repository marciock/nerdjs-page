import {Creator} from  '../../dist/nerdcreator';


export class Library extends Creator{
    render(){
        return(
            `
            
            <div>
                <h2>Libraries</h2>

                <h3>Nerdcreator Library Package</h3>
                <p>
                <b>Nerdjs</b> creates its own web components using a library package class  <b>NerdCreator</b>. It is a class that generates an inheritance (extends) with the existing native JavaScript class since version 6. Every component, when generated, must be an inheritance (extends) of the <b>Creator</b> class.
                While creating a component, other components may belong as your child, along with other HTML tags.
                Other class extending is a <b>Generator</b> class, where this is possible programing only javascript language.
                The manipulation of <b>CSS</b> can be done conventionally within the tags, during the creation of the component, however, in this framework <b>CSS</b> class files are not yet imported by the Webpack, and for this reason they are deployed by the main file "index.html", using is tagged <b>'LINK'</b>.</p>

                <blockquote style="margin-top:5em;margin-bottom:5em;">
                <p>Other methods are designed to manage the states, actions, and properties of the component in which it is being developed. The written methods are:</p>
                <ul>
                    <li><b>render</b> - Existing only in <b>Creator</b> class, this is a form of getter method, where it returns all tags, components and databinds to be rendered. All of these elements that will be rendered are written within a literal interpolation (Templates strings) native to the most recent versions of JavaScript.</li>
                    <li><b>callBack</b> - Existing only in <b>Creator</b> class, this is a form of getter method, which returns any extra functions that the developer wants to implement within the inherited class.</li>
                    <li><b>create</b> - Existing only in <b>Generator</b> class, this is a form of getter method, where it returns all tags, components and databinds to be rendered. this method allows the developer to use only javascript in its web components. </li>
                    <li><b>getProps</b> - Returns any property or attribute designed for the parent component.</li>
                    <li><b>setState</b> - This is a setter method , in which it adds a new state to be reused between the child elements of the created component.</li>
                </ul>
               </blockquote>

               <h3>Nerdrouter Library Package</h3>
               <p> The <b>Nerdrouter</b> package, manages the routes of a web application. Initially only the routes prepared for actions on the Single Page Application were developed, using the native Hash property of the location method in JavaScript. The use of this property is only for initial signaling, since there will be no functionality if there is a refresh of the page from the location method or an enter in the address bar of the browser. If it occurs as a security level, it will return to the home page. This effect was created to prevent malicious injections during the application of the Single Page.</p>
                <blockquote style="margin-top:5em;margin-bottom:5em;">
                    <ul>
                        <li>The library package contains some main classes, which will be descristas below:</li>
                        <li><b>NdView</b> - This is an extended component of the native class HTMLElement, which makes it possible to open any request made by the <b>NdLink</b> class. This component compares content after the hash displayed in the URL and the value added in the "url" property of the <b>NdLink</b> class. The extracted component of this class is named \<\nd-view\>\.</li>
                        <li><b>NdLink</b> - This is an extended component of the native class HTMLElement, which has the HTML tag "a" (<a> </a>) as its child. The NdLink class requires two custom properties to be populated during use: url and component. The "url" property consumes the contents of the hash in which the NdView class will compare and the "component" property will treat which component will be added as the child of the <b>NdView</b> class. The component extracted from the <b>NdLink</b> class is named \<\nd-link url = "..." component = "..."\>\</li>
                        <li><b>NdClick</b> - Is an inherited (extends) component of the native HTMLElement class, which aims to override the onClick function of the HTML elements in your Virtual DOM. Due to the literal interpolation of the render method, the functions and methods do not work within the onclick's native JavaScript event. For this reason, the parent component is added to the element that needs this event. The function must be added by state using "this.setState ('function', 'function created'). The "function" attribute is required. The extracted component of the <b>NdClick</b> class is named \<\nd-click function = "this.state.function ()"\>\</li>
                        <li><b>NerdRouter</b> - A class that when instantiated can accumulate URLs and related Components as if it were a sort of index. Initially it was designed to accept only Hash Routes (routes with #). Your goal is to store the routes in which they will be tested later when the URLs contained in the address bar are triggered by a Reload (page reload). This way they will also be able to recharge the registered and connected components.</li>
                    </ul>
                </blockquote>

                <h3>Nerdhttp Library Package</h3>
                <p>This library is intended to manage the / JSON APIs. It uses only two classes: <b>NdGet</b> and <b>NdPost</b>.</p>
                <blockquote style="margin-top:5em;margin-bottom:5em;">
                    <ul>
                        <li><b>NdGet</b>- This class is responsible for actions via GET. For its use it is necessary to instantiate this class and to use it within a "state function", created by the developer.</li>
                        <li><b>NdPost</b>- This class is responsible for actions via POST. For its use it is necessary to instantiate this class and to use it within a "state function", created by the developer.</li>
                    </ul>
                </blockquote>

                

            </div>
            `
        )
    }
}
customElements.define('nd-lib',Library);