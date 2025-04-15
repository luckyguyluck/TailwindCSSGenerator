

function Structuer(components){
    
    var classgroup;
    console.log(components)
    if(components) classgroup += {components}
    console.log(classgroup);

    return(
        <div className="w-full mb-4">
            <code className="bg-cyan-400 dark:bg-cyan-900">
                {classgroup}
            </code>
        </div>
    )
}

export default Structuer