(() => {

    function div(children) {
        const aDiv = document.createElement("div");
        aDiv.innerHTML = children.join(" ");
        return aDiv;
    }

    function createElement(element, props, ...children) {
        return div(children)
    }

    window.React = {
        createElement
    }

    window.ReactDOM = {
        render: (element, domElement) => { domElement.appendChild(element) }
    }
})();