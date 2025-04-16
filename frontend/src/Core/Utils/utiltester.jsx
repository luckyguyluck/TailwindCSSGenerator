import { ComponentBuilder , deleteComponent } from "./TreeComponentProcessor";

function UtilsTester() {
    ComponentBuilder(["root"], "div", "width", "default", "w-full");
    ComponentBuilder(["root", "component" , "root.1"], "section", "margin", "top", "mt-4" , "");
    ComponentBuilder(["root", "component", "root.2"], "article", "padding", "bottom", "pb-6" , "");
    ComponentBuilder(["root", "component", "root.1" , "component", "root.1.1"], "form", "height", "default", "h-48", "Form Content");
    
    deleteComponent(["root" , "component" , "root.1"])

    const blueprint = ComponentBuilder(); // just returns the current state

    console.log(blueprint);

    return (
        <pre>
            <code>{JSON.stringify(blueprint, null, 2)}</code>
        </pre>
    );
}

export default UtilsTester;
