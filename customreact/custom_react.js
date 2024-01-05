function customReact(ReactElement,container){
    const domElement = document.createElement(ReactElement.type);
    domElement.innerHTML = ReactElement.children;
    // domElement.setAttribute('href',ReactElement.props.href);
    // domElement.setAttribute('target',ReactElement.props.target);
    // container.appendChild(domElement);

    for(i in ReactElement.props){
        domElement.setAttribute(i,ReactElement.props[i]);
    }
    container.appendChild(domElement);
}
const ReactElement = {
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank",
    },
    children:"Click me to visit google",
};
const root = document.querySelector('#root');
customReact(ReactElement,root);
