
export const tailwindPrefixes = {
    width: {
      prefix: "w",
      scales: [1, 2, 4, 8, 10, "1/2" , " 1/4 " , "full", "screen"],
    },
    height: {
      prefix: "h",
      scales: [1, 2, 4, 6, 8, 10, "auto", "full", "screen"],
    },
    margin: {
      rounded : {
        prefix: "m",
        scales: [0, 1, 2, 4, 8, 12, 16, "auto"],
      },
      bot: {
        prefix: "mb",
        scales: [0, 1, 2, 4, 8, 12, 16, "auto"],
      },
      top: {
        prefix: "mt",
        scales: [0, 1, 2, 4, 8, 12, 16, "auto"],
      },
      left: {
        prefix: "ms",
        scales: [0, 1, 2, 4, 8, 12, 16, "auto"],
      },
      right: {
        prefix: "me",
        scales: [0, 1, 2, 4, 8, 12, 16, "auto"],
      },
    },
    padding: {
      rounded:{
        prefix: "p",
        scales: [0, 1, 2, 4, 8, 12, 16],
      },
      top : {
        prefix : "pt",
        scales: [0, 1, 2, 4, 8, 12, 16],
      },
      bot : {
        prefix : "pb",
        scales: [0, 1, 2, 4, 8, 12, 16],
      },
      left : {
        prefix : "ps",
        scales: [0, 1, 2, 4, 8, 12, 16],
      },
      right : {
        prefix : "pe",
        scales: [0, 1, 2, 4, 8, 12, 16],
      },
    },
    text_size: {
      prefix: "text",
      scales: ["base","xs", "sm", "base", "lg", "xl", "2xl" ,"3xl", "4xl" , "5xl" , "6xl" , "7xl" , "8xl" , "9xl"
      ],
    },
    z_index: {
      prefix: "z",
      scales: [0, 10, 20, 30, 40, 50],
    },
    position: {
      type: "static",
      values: ["static", "relative", "absolute", "fixed", "sticky"],
    },
    display : {
        type : "property",
        values : ["flex" , "grid"],
    },
    flex_direction: {
        type: "sub-property",
        requires: "flex",  // Only when display is 'flex'
        prefix: "flex",
        values: ["row", "row-reverse", "col", "col-reverse"],
    },
    
    flex_wrap: {
        type: "sub-property",
        requires: "flex",  // Only when display is 'flex'
        prefix: "flex",
        values: ["wrap", "wrap-reverse", "nowrap"],
    },
    
    justify_content: {
        type: "sub-property",
        requires: "flex",  // Only when display is 'flex'
        prefix: "justify",
        values: ["start", "end", "center", "between", "around", "evenly"],
    },
    
    align_items: {
        type: "sub-property",
        requires: "flex",  // Only when display is 'flex'
        prefix: "items",
        values: ["start", "end", "center", "baseline", "stretch"],
    },
    
    align_self: {
        type: "sub-property",
        requires: "flex",  // Only when display is 'flex'
        prefix: "self",
        values: ["auto", "start", "end", "center", "stretch"],
    },
    
    align_content: {
        type: "sub-property",
        requires: "flex",  // Only when display is 'flex'
        prefix: "content",
        values: ["center", "start", "end", "between", "around", "evenly"],
    },
    
    gap: {
        type: "sub-property",
        requires: ["flex", "grid"],  // Can be used with either 'flex' or 'grid'
        prefix: "gap",
        values: [0, 1, 2, 4, 6, 8, 10, 16],
    },
    
      // Grid-specific properties
    grid_template_columns: {
        type: "sub-property",
        requires: "grid",  // Only when display is 'grid'
        prefix: "grid-cols",
        values: [1, 2, 3, 4, 5, "auto", "minmax(100px, 1fr)", "repeat(auto-fill, minmax(100px, 1fr))"],
    },
    
    grid_template_rows: {
        type: "sub-property",
        requires: "grid",  // Only when display is 'grid'
        prefix: "grid-rows",
        values: [1, 2, 3, 4, "auto"],
    },
    
    grid_auto_flow: {
        type: "sub-property",
        requires: "grid",  // Only when display is 'grid'
        prefix: "grid-flow",
        values: ["row", "column", "dense"],
    },
    
    grid_auto_columns: {
        type: "sub-property",
        requires: "grid",  // Only when display is 'grid'
        prefix: "grid-cols",
        values: ["auto", "min-content", "max-content"],
    },
    
    grid_auto_rows: {
        type: "sub-property",
        requires: "grid",  // Only when display is 'grid'
        prefix: "grid-rows",
        values: ["auto", "min-content", "max-content"],
    },
    
    justify_items: {
        type: "sub-property",
        requires: "grid",  // Only when display is 'grid'
        prefix: "justify-items",
        values: ["start", "end", "center", "stretch"],
    },
    
    align_items_grid: {
        type: "sub-property",
        requires: "grid",  // Only when display is 'grid'
        prefix: "items",
        values: ["start", "end", "center", "stretch"],
    },
    
    justify_content_grid: {
        type: "sub-property",
        requires: "grid",  // Only when display is 'grid'
        prefix: "justify-content",
        values: ["start", "end", "center", "stretch", "between", "around"],
    },
    
    align_content_grid: {
       type: "sub-property",
       requires: "grid",  // Only when display is 'grid'
       prefix: "content",
       values: ["start", "end", "center", "stretch", "between", "around"],
    },
  }
  