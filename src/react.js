(() => {

    function anElement(element, children) {
        const anElement = document.createElement(element);
        anElement.innerHTML = children.join(" ");
        return anElement;
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