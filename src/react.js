(() => {

    function anElement(element, props, children) {
        if (isClass(element)) {
            return handleClass(element, props);
        } else if (isFunction(element)) {
            return element(props);
        } else {
            return handleHTMLelement(element, children);
        }
    }

    function handleClass(classComponent, props) {
        const component = new classComponent(props);
        return component.render();
    }

    function handleHTMLelement(element, children) {
        const anElement = document.createElement(element);
        children.forEach(child => {
            if (typeof child === "object") {
                anElement.appendChild(child);
            }
            else {
                anElement.innerHTML += child;
            }
        });
        return anElement;
    }

    function createElement(element, props, ...children) {
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