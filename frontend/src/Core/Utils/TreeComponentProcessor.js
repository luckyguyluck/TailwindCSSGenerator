let ClassBlueprint = {};

export const ComponentBuilder = (pathArray = ["root"], tagName, ClassObj = {}, content) => {
    if (!pathArray || !tagName || !ClassObj) {
        return ClassBlueprint;
    }

    let current = ClassBlueprint;

    for (let i = 0; i < pathArray.length; i++) {
        const path = pathArray[i];
        if (!current[path]) {
            current[path] = {};
        }
        current = current[path];
    }

    if (!current.tagName) {
        current.tagName = tagName;
    }

    if (!current.styles) {
        current.styles = {};
    }

    // Apply all styles from ClassObj
    for (const cssType in ClassObj) {
        if (!current.styles[cssType]) {
            current.styles[cssType] = {};
        }

        for (const key in ClassObj[cssType]) {
            current.styles[cssType][key] = ClassObj[cssType][key];
        }
    }

    if (content !== undefined) {
        current.component = content;
    }

    console.log(JSON.stringify(ClassBlueprint));
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
