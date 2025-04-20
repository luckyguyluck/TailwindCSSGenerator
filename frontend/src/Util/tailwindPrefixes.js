
export const TailwindLayoutClasses = {
  width: {
    default: {
      label : "Width",
      prefix: "w", 
      scales: [1, 2, 4, 8, 10, "1/2", "1/4", "full", "screen"] },
    min: { 
      label : "Min-Width",
      prefix: "min-w", 
      scales: [1, 2, 4, 8, 10, "1/2", "1/4", "full", "screen"] },
    max: { 
      label : "Max-Width",
      prefix: "max-w", 
      scales: [1, 2, 4, 8, 10, "1/2", "1/4", "full", "screen"] },
  },
  height: {
    default: { 
      label : "Height",
      prefix: "h", 
      scales: [1, 2, 4, 6, 8, 10, "auto", "full", "screen"] },
    min: { 
      label : "Min-Height",
      prefix: "min-h", 
      scales: [1, 2, 4, 6, 8, 10, "auto", "full", "screen"] },
    max: { 
      label : "Max-Height",
      prefix: "max-h", 
      scales: [1, 2, 4, 6, 8, 10, "auto", "full", "screen"] },
  },
}

export const TailwindBoxClasses = {
  margin: {
    default: { 
      label : "Margin",
      prefix: "m", 
      scales: [0, 1, 2, 4, 8, 12, 16, "auto"] },
    top: { 
      label : "Margin Top",
      prefix: "mt", 
      scales: [0, 1, 2, 4, 8, 12, 16, "auto"] },
    bot: { 
      label : "Margin Bot",
      prefix: "mb", 
      scales: [0, 1, 2, 4, 8, 12, 16, "auto"] },
    left: { 
      label : 'Margin Left',
      prefix: "ms", 
      scales: [0, 1, 2, 4, 8, 12, 16, "auto"] },
    right: { 
      label : "Margin Right",
      prefix: "me", 
      scales: [0, 1, 2, 4, 8, 12, 16, "auto"] },
  },
  padding: {
    default: { 
      label : "Padding",
      prefix: "p", 
      scales: [0, 1, 2, 4, 8, 12, 16] },
    top: { 
      label : "Padding Top",
      prefix: "pt", 
      scales: [0, 1, 2, 4, 8, 12, 16] },
    bot: { 
      label : "Padding Bot",
      prefix: "pb", 
      scales: [0, 1, 2, 4, 8, 12, 16] },
    left: { 
      label : "Padding Left",
      prefix: "ps", 
      scales: [0, 1, 2, 4, 8, 12, 16] },
    right: { 
      label : "Padding Right",
      prefix: "pe", 
      scales: [0, 1, 2, 4, 8, 12, 16] },
  },
};

export const TailwindBasicClasses = {
  text_size: {
    prefix: "text",
    scales: ["base", "xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"],
  },
  shadow:{
    prefix : "shadow",
    scaled : ["sm","md","lg","xl","2xl"]
  },
  z_index: {
    prefix: "z",
    scales: [0, 10, 20, 30, 40, 50],
  },
}

export const TailwindComplexClasses = {
  position: {
    type: "static",
    values: ["static", "relative", "absolute", "fixed", "sticky"],
  },
  display: {
    type: "property",
    values: ["flex", "grid"],
  },
  flex_direction: {
    type: "sub-property",
    prefix: "flex",
    values: ["row", "row-reverse", "col", "col-reverse"],
  },
  flex_wrap: {
    type: "sub-property",
    prefix: "flex",
    values: ["wrap", "wrap-reverse", "nowrap"],
  },
  justify_content: {
    type: "sub-property",
    prefix: "justify",
    values: ["start", "end", "center", "between", "around", "evenly"],
  },
  align_items: {
    type: "sub-property",
    prefix: "items",
    values: ["start", "end", "center", "baseline", "stretch"],
  },
  align_self: {
    type: "sub-property",
    prefix: "self",
    values: ["auto", "start", "end", "center", "stretch"],
  },
  align_content: {
    type: "sub-property",
    prefix: "content",
    values: ["center", "start", "end", "between", "around", "evenly"],
  },
  gap: {
    type: "sub-property",
    prefix: "gap",
    values: [0, 1, 2, 4, 6, 8, 10, 16],
  },
  grid_template_columns: {
    type: "sub-property",
    prefix: "grid-cols",
    values: [1, 2, 3, 4, 5, "auto", "minmax(100px, 1fr)", "repeat(auto-fill, minmax(100px, 1fr))"],
  },
  grid_template_rows: {
    type: "sub-property",
    prefix: "grid-rows",
    values: [1, 2, 3, 4, "auto"],
  },
  grid_auto_flow: {
    type: "sub-property",
    prefix: "grid-flow",
    values: ["row", "column", "dense"],
  },
  grid_auto_columns: {
    type: "sub-property",
    prefix: "grid-cols",
    values: ["auto", "min-content", "max-content"],
  },
  grid_auto_rows: {
    type: "sub-property",
    prefix: "grid-rows",
    values: ["auto", "min-content", "max-content"],
  },
  justify_items: {
    type: "sub-property",
    prefix: "justify-items",
    values: ["start", "end", "center", "stretch"],
  },
  align_items_grid: {
    type: "sub-property",
    prefix: "items",
    values: ["start", "end", "center", "stretch"],
  },
  justify_content_grid: {
    type: "sub-property",
    prefix: "justify-content",
    values: ["start", "end", "center", "stretch", "between", "around"],
  },
  align_content_grid: {
    type: "sub-property",
    prefix: "content",
    values: ["start", "end", "center", "stretch", "between", "around"],
  },
};

export const TailwindColorClasses = {
  colors : ["red" , 'orange' , 'amber' , 'yellow' , 'lime' , 'green' , 'teal' , 'cyan' , 'sky' , 'blue' , 'indigo' , 'violet' , 'purple', 'fuchsia' , 'pink' , 'rose' , 'slate' , 'gray' , 'zinc' , 'neutral' , 'stone'],
  prefixes : {
    background : "bg",
    text : "text",
    border : "border",
    ring : "ring",
    shadow : "shadow",
    outline : "outline"
  },
  shades : [50,100,200,300,400,500,600,700,800,900,950],
};
