(() => {

    function anElement(element, props, children) {
        if (isClass(element)) {
            return handleClass(element, props);
        } else if (isFunction(element)) {
            return element(props);
        } else {
            console.log(props)
            return handleHTMLelement(element, props, children);
        }
    }

    function handleClass(classComponent, props) {
        const component = new classComponent(props);
        return component.render();
    }

    function handleHTMLelement(element, props, children) {
        console.log(element)
        const anElement = document.createElement(element);
        children.forEach(child => {
            if (typeof child === "object") {
                anElement.appendChild(child);
            }
            else {
                anElement.innerHTML += child;
            }
        });
        console.log(props)
        Object.keys(props).forEach(propName => {
            console.log(propName)
            if (/^on.*$/.test(propName)) {
                anElement.addEventListener(
                    propName.substring(2).toLowerCase(),
                    props[propName]
                );
            } else {
                anElement.setAttribute(propName, props[propName]);
            }
        })
        return anElement;
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