let ClassBlueprint = {};

export const ComponentBuilder = (pathArray = ["root"], tagName, cssType, key, value, content) => {
    if (!pathArray || !tagName || !cssType || !key || !value) {
        return ClassBlueprint; // Return if any required parameters are missing
    }

    // Start from the root
    let current = ClassBlueprint;

    // Loop through the pathArray to navigate to the right depth in the tree
    for (let i = 0; i < pathArray.length; i++) {
        const path = pathArray[i];
        if (!current[path]) {
            current[path] = {}; // Create the path if it doesn't exist
        }
        current = current[path]; // Move to the next level
    }

    // If the target element has no 'tagName' yet, assign it
    if (!current.tagName) {
        current.tagName = tagName;
    }

    // Initialize styles if they don’t exist
    if (!current.styles) {
        current.styles = {};
    }

    // Assign the CSS property (like width, height, etc.) to the target element
    if (!current.styles[cssType]) {
        current.styles[cssType] = {};
    }

    // Assign specific key-value for the given CSS property (e.g., "top", "left", "width")
    current.styles[cssType][key] = value;

    // If there's content, assign it to the 'content' property in the component
    if (content !== undefined) {
        current.component = content;
    }

    return ClassBlueprint;
};


export const deleteComponent = (pathArray = []) => {
    if (!pathArray || pathArray.length === 0) return;

    let current = ClassBlueprint;
    let parents = [];

    // Traverse and keep track of parents
    for (let i = 0; i < pathArray.length - 1; i++) {
        const key = pathArray[i];
        if (!current[key]) return; // Path does not exist
        parents.push([current, key]); // [parentObj, key]
        current = current[key];
    }

    const targetKey = pathArray[pathArray.length - 1];

    if (current[targetKey]) {
        delete current[targetKey];

        // Optional cleanup: remove empty parent component blocks
        for (let i = parents.length - 1; i >= 0; i--) {
            const [parentObj, key] = parents[i];
            if (Object.keys(parentObj[key]).length === 0) {
                delete parentObj[key];
            } else {
                break;
            }
        }
    }
};
