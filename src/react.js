(() => {

    function anElement(element, props, children) {
        if (isClass(element)) {
            return handleClass(element);
        } else if (isFunction(element)) {
            return element(props);
        } else {
            return handleHTMLelement(element, children);
        }
    }

    function handleClass(classComponent) {
        const component = new classComponent();
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

    window.React = {
        createElement
    }

    window.ReactDOM = {
        render: (element, domElement) => { domElement.appendChild(element) }
    }
})();