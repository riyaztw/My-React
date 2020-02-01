const Hello = function () {
    return React.createElement("p", null, "Functional Component");
}
const helloWorld = React.createElement("h1", null, "Hello World")
const HelloFunctionalComponent = React.createElement(Hello, null, null);
const parent = React.createElement(
    "div",
    null,
    helloWorld,
    HelloFunctionalComponent,
    "I'm a parent component"
)

class ClassComponent {
    render() {
        return React.createElement("h3", null, "Class component");
    }
}
const classComponent = React.createElement(ClassComponent, null, null);
ReactDOM.render(classComponent, document.getElementById("root"))