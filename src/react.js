(() => {

    function anElement(element, props, children) {
        if (isClass(element)) {
            return handleClass(element, props);
        } else if (isFunction(element)) {
            return element(props);
        } else {
            return handleHTMLelement(element, props, children);
        }
    }

    function handleClass(classComponent, props) {
        const component = new classComponent(props);
        return component.render();
    }

    function handleHTMLelement(element, props, children) {
        const anElement = document.createElement(element);
        children.forEach(child => appendChild(anElement, child));
        Object.entries(props).forEach(([propName, propValue]) => appendProp(anElement, propName, propValue))
        return anElement;
    }

    function appendChild(element, child) {
        if (typeof child === "object") {
            element.appendChild(child);
        }
        else {
            element.innerHTML += child;
        }
    }

    function appendProp(element, propName, propValue) {
        if (shouldAddEventListener(propName)) {
            element.addEventListener(propName.substring(2).toLowerCase(), propValue);
        }
        else {
            element.setAttribute(propName, propValue);
        }
    }

    function createElement(element, props, ...children) {
        console.log(element, props)
        return anElement(element, props, children)
    }

    class Component {
        constructor(props) {
            this.props = props;
        }
    }

    window.React = {
        createElement,
        Component,
    }

    window.ReactDOM = {
        render: (element, domElement) => { domElement.appendChild(element) }
    }
})();