(() => {

    function anElement(element, children) {
        if (typeof element === "function") {
            return element();
        } else {
            const anElement = document.createElement(element);
            children.forEach(child => {
                if (typeof child === "object") {
                    anElement.appendChild(child);
                } else {
                    anElement.innerHTML += child;
                }
            });
            return anElement;
        }
    }

    function createElement(element, props, ...children) {
        return anElement(element, children)
    }

    window.React = {
        createElement
    }

    window.ReactDOM = {
        render: (element, domElement) => { domElement.appendChild(element) }
    }
})();