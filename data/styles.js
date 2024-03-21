var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "BioPAX_SIF",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "shape" : "ellipse",
      "color" : "rgb(0,0,0)",
      "border-width" : 2.0,
      "border-opacity" : 1.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 12,
      "border-color" : "rgb(0,0,0)",
      "height" : 40.0,
      "background-opacity" : 0.49019607843137253,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "width" : 60.0,
      "background-color" : "rgb(255,153,153)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "background-color" : "rgb(153,204,255)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "target-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "content" : "",
      "font-size" : 10,
      "width" : 4.0,
      "text-opacity" : 1.0,
      "line-color" : "rgb(0,0,0)",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "color" : "rgb(0,0,0)",
      "opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "edge[interaction = 'controls-expression-of']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'chemical-affects']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'controls-state-change-of']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'controls-phosphorylation-of']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of-chemical']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'used-to-produce']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'consumption-controled-by']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'controls-production-of']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'catalysis-precedes']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'interacts-with']",
    "css" : {
      "line-color" : "rgb(0,85,0)"
    }
  }, {
    "selector" : "edge[interaction = 'chemical-affects']",
    "css" : {
      "line-color" : "rgb(240,144,0)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-state-change-of']",
    "css" : {
      "line-color" : "rgb(0,0,192)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of']",
    "css" : {
      "line-color" : "rgb(112,0,0)"
    }
  }, {
    "selector" : "edge[interaction = 'consumption-controled-by']",
    "css" : {
      "line-color" : "rgb(255,51,0)"
    }
  }, {
    "selector" : "edge[interaction = 'reacts-with']",
    "css" : {
      "line-color" : "rgb(0,255,0)"
    }
  }, {
    "selector" : "edge[interaction = 'neighbor-of']",
    "css" : {
      "line-color" : "rgb(0,170,0)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-expression-of']",
    "css" : {
      "line-color" : "rgb(0,160,160)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-phosphorylation-of']",
    "css" : {
      "line-color" : "rgb(0,0,255)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of-chemical']",
    "css" : {
      "line-color" : "rgb(160,0,0)"
    }
  }, {
    "selector" : "edge[interaction = 'used-to-produce']",
    "css" : {
      "line-color" : "rgb(247,85,0)"
    }
  }, {
    "selector" : "edge[interaction = 'in-complex-with']",
    "css" : {
      "line-color" : "rgb(240,0,160)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-production-of']",
    "css" : {
      "line-color" : "rgb(0,204,240)"
    }
  }, {
    "selector" : "edge[interaction = 'catalysis-precedes']",
    "css" : {
      "line-color" : "rgb(112,0,160)"
    }
  }, {
    "selector" : "edge[interaction = 'interacts-with']",
    "css" : {
      "line-color" : "rgb(0,85,0)",
      "target-arrow-color" : "rgb(0,85,0)",
      "source-arrow-color" : "rgb(0,85,0)"
    }
  }, {
    "selector" : "edge[interaction = 'chemical-affects']",
    "css" : {
      "line-color" : "rgb(240,144,0)",
      "target-arrow-color" : "rgb(240,144,0)",
      "source-arrow-color" : "rgb(240,144,0)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-state-change-of']",
    "css" : {
      "line-color" : "rgb(0,0,192)",
      "target-arrow-color" : "rgb(0,0,192)",
      "source-arrow-color" : "rgb(0,0,192)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of']",
    "css" : {
      "line-color" : "rgb(112,0,0)",
      "target-arrow-color" : "rgb(112,0,0)",
      "source-arrow-color" : "rgb(112,0,0)"
    }
  }, {
    "selector" : "edge[interaction = 'consumption-controled-by']",
    "css" : {
      "line-color" : "rgb(255,51,0)",
      "target-arrow-color" : "rgb(255,51,0)",
      "source-arrow-color" : "rgb(255,51,0)"
    }
  }, {
    "selector" : "edge[interaction = 'reacts-with']",
    "css" : {
      "line-color" : "rgb(0,255,0)",
      "target-arrow-color" : "rgb(0,255,0)",
      "source-arrow-color" : "rgb(0,255,0)"
    }
  }, {
    "selector" : "edge[interaction = 'neighbor-of']",
    "css" : {
      "line-color" : "rgb(0,170,0)",
      "target-arrow-color" : "rgb(0,170,0)",
      "source-arrow-color" : "rgb(0,170,0)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-expression-of']",
    "css" : {
      "line-color" : "rgb(0,160,160)",
      "target-arrow-color" : "rgb(0,160,160)",
      "source-arrow-color" : "rgb(0,160,160)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-phosphorylation-of']",
    "css" : {
      "line-color" : "rgb(0,0,255)",
      "target-arrow-color" : "rgb(0,0,255)",
      "source-arrow-color" : "rgb(0,0,255)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of-chemical']",
    "css" : {
      "line-color" : "rgb(160,0,0)",
      "target-arrow-color" : "rgb(160,0,0)",
      "source-arrow-color" : "rgb(160,0,0)"
    }
  }, {
    "selector" : "edge[interaction = 'used-to-produce']",
    "css" : {
      "line-color" : "rgb(247,85,0)",
      "target-arrow-color" : "rgb(247,85,0)",
      "source-arrow-color" : "rgb(247,85,0)"
    }
  }, {
    "selector" : "edge[interaction = 'in-complex-with']",
    "css" : {
      "line-color" : "rgb(240,0,160)",
      "target-arrow-color" : "rgb(240,0,160)",
      "source-arrow-color" : "rgb(240,0,160)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-production-of']",
    "css" : {
      "line-color" : "rgb(0,204,240)",
      "target-arrow-color" : "rgb(0,204,240)",
      "source-arrow-color" : "rgb(0,204,240)"
    }
  }, {
    "selector" : "edge[interaction = 'catalysis-precedes']",
    "css" : {
      "line-color" : "rgb(112,0,160)",
      "target-arrow-color" : "rgb(112,0,160)",
      "source-arrow-color" : "rgb(112,0,160)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "size_rank_0",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "shape" : "rectangle",
      "color" : "rgb(51,51,51)",
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 9,
      "border-color" : "rgb(0,0,0)",
      "height" : 12.0,
      "background-opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "width" : 12.0,
      "background-color" : "rgb(204,204,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "target-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "content" : "",
      "font-size" : 10,
      "width" : 2.0,
      "text-opacity" : 1.0,
      "line-color" : "rgb(76,76,76)",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "color" : "rgb(0,0,0)",
      "opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Curved",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "shape" : "ellipse",
      "color" : "rgb(102,102,102)",
      "border-width" : 7.0,
      "border-opacity" : 1.0,
      "text-valign" : "bottom",
      "text-halign" : "right",
      "font-size" : 14,
      "border-color" : "rgb(255,255,255)",
      "height" : 18.0,
      "background-opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "width" : 18.0,
      "background-color" : "rgb(254,196,79)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "target-arrow-shape" : "triangle",
      "source-arrow-color" : "rgb(255,255,255)",
      "source-arrow-shape" : "none",
      "content" : "",
      "font-size" : 10,
      "width" : 3.0,
      "text-opacity" : 1.0,
      "line-color" : "rgb(255,255,255)",
      "target-arrow-color" : "rgb(255,255,255)",
      "line-style" : "solid",
      "color" : "rgb(0,0,0)",
      "opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Marquee",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "shape" : "ellipse",
      "color" : "rgb(102,102,102)",
      "border-width" : 10.0,
      "border-opacity" : 1.0,
      "text-valign" : "bottom",
      "text-halign" : "center",
      "font-size" : 12,
      "border-color" : "rgb(255,255,255)",
      "height" : 20.0,
      "background-opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "width" : 20.0,
      "background-color" : "rgb(0,204,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,0,102)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "target-arrow-shape" : "triangle",
      "source-arrow-color" : "rgb(255,255,255)",
      "source-arrow-shape" : "none",
      "font-size" : 8,
      "width" : 2.0,
      "text-opacity" : 1.0,
      "line-color" : "rgb(255,255,255)",
      "target-arrow-color" : "rgb(255,255,255)",
      "line-style" : "dashed",
      "color" : "rgb(102,102,102)",
      "opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "content" : "data(interaction)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "default",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "shape" : "roundrectangle",
      "color" : "rgb(0,0,0)",
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 12,
      "border-color" : "rgb(204,204,204)",
      "height" : 35.0,
      "background-opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "width" : 75.0,
      "background-color" : "rgb(137,208,245)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "target-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "content" : "",
      "font-size" : 10,
      "width" : 2.0,
      "text-opacity" : 1.0,
      "line-color" : "rgb(132,132,132)",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "color" : "rgb(0,0,0)",
      "opacity" : 1.0,
      "font-family" : "Dialog",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Gradient1",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "shape" : "ellipse",
      "color" : "rgb(204,204,204)",
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "text-valign" : "bottom",
      "text-halign" : "right",
      "font-size" : 8,
      "border-color" : "rgb(0,0,0)",
      "height" : 30.0,
      "background-opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "width" : 30.0,
      "background-color" : "rgb(0,0,0)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "target-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "content" : "",
      "font-size" : 10,
      "width" : 1.0,
      "text-opacity" : 1.0,
      "line-color" : "rgb(102,102,102)",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "color" : "rgb(0,0,0)",
      "opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Solid",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "shape" : "ellipse",
      "color" : "rgb(0,0,0)",
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 14,
      "border-color" : "rgb(0,0,0)",
      "height" : 40.0,
      "background-opacity" : 1.0,
      "font-family" : "Dialog",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "width" : 40.0,
      "background-color" : "rgb(102,102,102)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "target-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "font-size" : 10,
      "width" : 12.0,
      "text-opacity" : 1.0,
      "line-color" : "rgb(204,204,204)",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "color" : "rgb(0,0,0)",
      "opacity" : 1.0,
      "font-family" : "Dialog",
      "font-weight" : "normal",
      "content" : "data(interaction)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Sample2",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "shape" : "ellipse",
      "color" : "rgb(102,102,102)",
      "border-width" : 15.0,
      "border-opacity" : 1.0,
      "text-valign" : "center",
      "text-halign" : "right",
      "font-size" : 20,
      "border-color" : "rgb(255,255,255)",
      "height" : 50.0,
      "background-opacity" : 1.0,
      "font-family" : "HelveticaNeue-Light",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "width" : 50.0,
      "background-color" : "rgb(58,127,182)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "target-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "content" : "",
      "font-size" : 10,
      "width" : 20.0,
      "text-opacity" : 1.0,
      "line-color" : "rgb(255,255,255)",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "color" : "rgb(0,0,0)",
      "opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Directed",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "shape" : "ellipse",
      "color" : "rgb(51,153,255)",
      "border-width" : 5.0,
      "border-opacity" : 1.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 8,
      "border-color" : "rgb(145,145,145)",
      "height" : 45.0,
      "background-opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "width" : 45.0,
      "background-color" : "rgb(255,255,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,0,102)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "target-arrow-shape" : "triangle",
      "source-arrow-color" : "rgb(204,204,204)",
      "source-arrow-shape" : "none",
      "font-size" : 12,
      "width" : 5.0,
      "text-opacity" : 1.0,
      "line-color" : "rgb(204,204,204)",
      "target-arrow-color" : "rgb(204,204,204)",
      "line-style" : "solid",
      "color" : "rgb(51,153,255)",
      "opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "content" : "data(interaction)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Sample3",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "shape" : "ellipse",
      "color" : "rgb(206,206,206)",
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "text-valign" : "bottom",
      "text-halign" : "right",
      "font-size" : 14,
      "border-color" : "rgb(255,255,255)",
      "height" : 20.0,
      "background-opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "width" : 20.0,
      "background-color" : "rgb(239,101,72)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[Type = 'Aerospace Engineer / Missile Engineer']",
    "css" : {
      "background-color" : "rgb(219,219,255)"
    }
  }, {
    "selector" : "node[Type = 'Chemical Enginer']",
    "css" : {
      "background-color" : "rgb(254,224,144)"
    }
  }, {
    "selector" : "node[Type = 'Mechanical Engineer / Geotechnical Engineer / Geologist']",
    "css" : {
      "background-color" : "rgb(128,205,193)"
    }
  }, {
    "selector" : "node[Type = 'Aerospace Engineer / Electromagnetic Engineer']",
    "css" : {
      "background-color" : "rgb(255,219,219)"
    }
  }, {
    "selector" : "node[Type = 'Rocket Project']",
    "css" : {
      "background-color" : "rgb(122,1,119)"
    }
  }, {
    "selector" : "node[Type = 'Veterinarian / Virologist']",
    "css" : {
      "background-color" : "rgb(8,88,158)"
    }
  }, {
    "selector" : "node[Type = 'Autonomous Air Vehicles Research']",
    "css" : {
      "background-color" : "rgb(90,174,97)"
    }
  }, {
    "selector" : "node[Type = 'Theory']",
    "css" : {
      "background-color" : "rgb(78,179,211)"
    }
  }, {
    "selector" : "node[Type = 'Load Engineer']",
    "css" : {
      "background-color" : "rgb(255,0,255)"
    }
  }, {
    "selector" : "node[Type = 'Ophthalmologist / Surgeon']",
    "css" : {
      "background-color" : "rgb(178,171,210)"
    }
  }, {
    "selector" : "node[Type = 'Research and Development Centre']",
    "css" : {
      "background-color" : "rgb(221,52,151)"
    }
  }, {
    "selector" : "node[Type = 'Chemical Engineer']",
    "css" : {
      "background-color" : "rgb(253,174,97)"
    }
  }, {
    "selector" : "node[Type = 'Aerospace Engineer / Space Architect']",
    "css" : {
      "background-color" : "rgb(0,0,255)"
    }
  }, {
    "selector" : "node[Type = 'Electronic Engineer']",
    "css" : {
      "background-color" : "rgb(0,255,255)"
    }
  }, {
    "selector" : "node[Type = 'Aeronautics, and Space Research']",
    "css" : {
      "background-color" : "rgb(255,0,0)"
    }
  }, {
    "selector" : "node[Type = 'Aerospace Engineer / Technology Engineer']",
    "css" : {
      "background-color" : "rgb(178,24,43)"
    }
  }, {
    "selector" : "node[Type = 'Aircraft Designer']",
    "css" : {
      "background-color" : "rgb(253,219,199)"
    }
  }, {
    "selector" : "node[Type = 'Hydroelectric Project']",
    "css" : {
      "background-color" : "rgb(219,255,255)"
    }
  }, {
    "selector" : "node[Type = 'Statistician/ Economist/ Civil Engineer']",
    "css" : {
      "background-color" : "rgb(140,45,4)"
    }
  }, {
    "selector" : "node[Type = 'Aerospace Engineer / Physicist / Mathematician']",
    "css" : {
      "background-color" : "rgb(73,73,255)"
    }
  }, {
    "selector" : "node[Type = 'Aerospace Engineer/ Physicist']",
    "css" : {
      "background-color" : "rgb(244,165,130)"
    }
  }, {
    "selector" : "node[Type = 'Electrical Engineer']",
    "css" : {
      "background-color" : "rgb(116,173,209)"
    }
  }, {
    "selector" : "node[Type = 'Missile Engineer / Air Vehicle Engineer']",
    "css" : {
      "background-color" : "rgb(178,171,210)"
    }
  }, {
    "selector" : "node[Type = 'Radio Signal Project for Rockets']",
    "css" : {
      "background-color" : "rgb(247,104,161)"
    }
  }, {
    "selector" : "node[Type = 'Aerospace Engineer / Missile Engineer / Bomb Engineer / Weapon Engineer']",
    "css" : {
      "background-color" : "rgb(146,146,255)"
    }
  }, {
    "selector" : "node[Type = 'Medical Officer']",
    "css" : {
      "background-color" : "rgb(53,151,143)"
    }
  }, {
    "selector" : "node[Type = 'Lawyer']",
    "css" : {
      "background-color" : "rgb(255,219,255)"
    }
  }, {
    "selector" : "node[Type = 'Meteorologist / Bioclimatologist / University Professor']",
    "css" : {
      "background-color" : "rgb(1,102,94)"
    }
  }, {
    "selector" : "node[Type = 'Physicist']",
    "css" : {
      "background-color" : "rgb(67,147,195)"
    }
  }, {
    "selector" : "node[Type = 'Artificial Satelite Project']",
    "css" : {
      "background-color" : "rgb(146,197,222)"
    }
  }, {
    "selector" : "node[Type = 'Physiologist / Medical Researcher']",
    "css" : {
      "background-color" : "rgb(247,252,185)"
    }
  }, {
    "selector" : "node[Type = 'Aerospace Engineer / Bomb Engineer']",
    "css" : {
      "background-color" : "rgb(255,146,146)"
    }
  }, {
    "selector" : "node[Type = 'Biologist / Medicine Scientist']",
    "css" : {
      "background-color" : "rgb(127,188,65)"
    }
  }, {
    "selector" : "node[Type = 'Crystallographer']",
    "css" : {
      "background-color" : "rgb(224,243,248)"
    }
  }, {
    "selector" : "node[Type = 'Aerospace Engineer']",
    "css" : {
      "background-color" : "rgb(255,73,73)"
    }
  }, {
    "selector" : "node[Type = 'Aerospace Engineer / Technology Engineer / Bomb Engineer']",
    "css" : {
      "background-color" : "rgb(214,96,77)"
    }
  }, {
    "selector" : "node[Type = 'Physcist / Nuclear Scientist']",
    "css" : {
      "background-color" : "rgb(158,188,218)"
    }
  }, {
    "selector" : "node[Type = 'Material Scientist']",
    "css" : {
      "background-color" : "rgb(191,129,45)"
    }
  }, {
    "selector" : "node[Type = 'Scientific Research']",
    "css" : {
      "background-color" : "rgb(254,153,41)"
    }
  }, {
    "selector" : "node[Type = 'Mechanical Engineer']",
    "css" : {
      "background-color" : "rgb(246,232,195)"
    }
  }, {
    "selector" : "node[Type = 'Atomic Bomb Project']",
    "css" : {
      "background-color" : "rgb(217,240,211)"
    }
  }, {
    "selector" : "node[Type = 'Architect']",
    "css" : {
      "background-color" : "rgb(209,229,240)"
    }
  }, {
    "selector" : "node[Type = 'Missile Engineer']",
    "css" : {
      "background-color" : "rgb(254,224,182)"
    }
  }, {
    "selector" : "node[Type = 'Chemical Engineer / Luftwaffe aviator / Rocket Scientist']",
    "css" : {
      "background-color" : "rgb(244,109,67)"
    }
  }, {
    "selector" : "node[Type = 'Telecommunications Engineer / Technology Engineer']",
    "css" : {
      "background-color" : "rgb(227,26,28)"
    }
  }, {
    "selector" : "node[Type = 'Pathologist / Physician']",
    "css" : {
      "background-color" : "rgb(128,115,172)"
    }
  }, {
    "selector" : "node[Type = 'Electrical Engineer / Mechanical Engineer']",
    "css" : {
      "background-color" : "rgb(69,117,180)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "target-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "content" : "",
      "font-size" : 10,
      "width" : 2.0,
      "text-opacity" : 1.0,
      "line-color" : "rgb(255,255,255)",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "color" : "rgb(0,0,0)",
      "opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Big Labels",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "shape" : "ellipse",
      "color" : "rgb(51,51,51)",
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 24,
      "border-color" : "rgb(0,0,0)",
      "height" : 5.0,
      "background-opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "width" : 5.0,
      "background-color" : "rgb(255,255,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,0,102)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "target-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "content" : "",
      "font-size" : 10,
      "width" : 1.0,
      "text-opacity" : 1.0,
      "line-color" : "rgb(183,183,183)",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "color" : "rgb(0,0,0)",
      "opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "BioPAX",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "shape" : "ellipse",
      "color" : "rgb(0,0,0)",
      "border-width" : 2.0,
      "border-opacity" : 1.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 12,
      "border-color" : "rgb(0,102,102)",
      "height" : 20.0,
      "background-opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "width" : 20.0,
      "background-color" : "rgb(255,255,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'SimplePhysicalEntity']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Rna']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'BiochemicalReaction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'GeneticInteraction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Interaction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TransportWithBiochemicalReaction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Conversion']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'ComplexAssembly']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Protein']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'RnaRegion']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "shape" : "diamond"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Degradation']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Control']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReactionRegulation']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'PhysicalEntity']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'DnaRegion']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'SmallMolecule']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Dna']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Modulation']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'MolecularInteraction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReaction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Catalysis']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Transport']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Protein-phosphorylated']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'BiochemicalReaction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'GeneticInteraction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Interaction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TransportWithBiochemicalReaction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Conversion']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'ComplexAssembly']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Degradation']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Control']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReactionRegulation']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Modulation']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'MolecularInteraction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReaction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Catalysis']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Transport']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "border-color" : "rgb(0,102,102)"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'BiochemicalReaction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'GeneticInteraction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Interaction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TransportWithBiochemicalReaction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Conversion']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'ComplexAssembly']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Degradation']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Control']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReactionRegulation']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Modulation']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'MolecularInteraction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReaction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Catalysis']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Transport']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "background-color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "target-arrow-shape" : "none",
      "source-arrow-color" : "rgb(64,64,64)",
      "source-arrow-shape" : "none",
      "content" : "",
      "font-size" : 10,
      "width" : 1.0,
      "text-opacity" : 1.0,
      "line-color" : "rgb(64,64,64)",
      "target-arrow-color" : "rgb(64,64,64)",
      "line-style" : "solid",
      "color" : "rgb(0,0,0)",
      "opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_NONCOMPETITIVE']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_OTHER']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'ACTIVATION']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_UNCOMPETITIVE']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'cofactor']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'ACTIVATION_ALLOSTERIC']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'right']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_ALLOSTERIC']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'controlled']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'contains']",
    "css" : {
      "target-arrow-shape" : "circle"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_UNKMECH']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_IRREVERSIBLE']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_COMPETITIVE']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'ACTIVATION_UNKMECH']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'ACTIVATION_NONALLOSTERIC']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "size_rank_1",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "shape" : "rectangle",
      "color" : "rgb(51,51,51)",
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 9,
      "border-color" : "rgb(0,0,0)",
      "height" : 12.0,
      "background-opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "width" : 12.0,
      "background-color" : "rgb(204,204,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "target-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "content" : "",
      "font-size" : 10,
      "width" : 2.0,
      "text-opacity" : 1.0,
      "line-color" : "rgb(76,76,76)",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "color" : "rgb(0,0,0)",
      "opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Minimal",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "shape" : "rectangle",
      "color" : "rgb(51,51,51)",
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 9,
      "border-color" : "rgb(0,0,0)",
      "height" : 42.0,
      "background-opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "width" : 42.0,
      "background-color" : "rgb(255,255,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "target-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "content" : "",
      "font-size" : 10,
      "width" : 2.0,
      "text-opacity" : 1.0,
      "line-color" : "rgb(76,76,76)",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "color" : "rgb(0,0,0)",
      "opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Ripple",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "shape" : "ellipse",
      "color" : "rgb(19,58,96)",
      "border-width" : 20.0,
      "border-opacity" : 1.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 8,
      "border-color" : "rgb(51,153,255)",
      "height" : 50.0,
      "background-opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "width" : 50.0,
      "background-color" : "rgb(255,255,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,204)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "target-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "content" : "",
      "font-size" : 10,
      "width" : 3.0,
      "text-opacity" : 1.0,
      "line-color" : "rgb(51,153,255)",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "color" : "rgb(0,0,0)",
      "opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Universe",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "shape" : "ellipse",
      "color" : "rgb(255,255,255)",
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 18,
      "border-color" : "rgb(0,0,0)",
      "height" : 40.0,
      "background-opacity" : 1.0,
      "font-family" : "Monospaced",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "width" : 40.0,
      "background-color" : "rgb(0,0,0)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "target-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "content" : "",
      "font-size" : 10,
      "width" : 2.0,
      "text-opacity" : 1.0,
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-style" : "dashed",
      "color" : "rgb(0,0,0)",
      "opacity" : 1.0,
      "font-family" : "Dialog",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "default black",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "shape" : "ellipse",
      "color" : "rgb(204,204,204)",
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "text-valign" : "bottom",
      "text-halign" : "right",
      "font-size" : 12,
      "border-color" : "rgb(0,153,0)",
      "height" : 15.0,
      "background-opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "width" : 15.0,
      "background-color" : "rgb(255,255,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "target-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "content" : "",
      "font-size" : 10,
      "width" : 2.0,
      "text-opacity" : 1.0,
      "line-color" : "rgb(0,153,0)",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "color" : "rgb(0,0,0)",
      "opacity" : 1.0,
      "font-family" : "Dialog",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Nested Network Style",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "shape" : "ellipse",
      "color" : "rgb(0,0,0)",
      "border-width" : 2.0,
      "border-opacity" : 1.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 12,
      "border-color" : "rgb(0,0,0)",
      "height" : 40.0,
      "background-opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "width" : 60.0,
      "background-color" : "rgb(255,255,255)",
      "content" : "data(shared_name)"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "text-valign" : "bottom"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "color" : "rgb(0,102,204)"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "border-color" : "rgb(0,102,204)"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "background-color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "target-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "content" : "",
      "font-size" : 10,
      "width" : 1.0,
      "text-opacity" : 1.0,
      "line-color" : "rgb(64,64,64)",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "color" : "rgb(0,0,0)",
      "opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "size_rank",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "shape" : "rectangle",
      "color" : "rgb(51,51,51)",
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 9,
      "border-color" : "rgb(0,0,0)",
      "height" : 12.0,
      "background-opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "width" : 12.0,
      "background-color" : "rgb(204,204,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "target-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "content" : "",
      "font-size" : 10,
      "width" : 2.0,
      "text-opacity" : 1.0,
      "line-color" : "rgb(76,76,76)",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "color" : "rgb(0,0,0)",
      "opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Sample1",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "shape" : "ellipse",
      "color" : "rgb(51,51,51)",
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 10,
      "border-color" : "rgb(0,0,0)",
      "height" : 25.0,
      "background-opacity" : 1.0,
      "font-family" : "Dialog",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "width" : 25.0,
      "background-color" : "rgb(127,205,187)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "target-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "font-size" : 10,
      "width" : 1.0,
      "text-opacity" : 1.0,
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "color" : "rgb(51,51,51)",
      "opacity" : 1.0,
      "font-family" : "Dialog",
      "font-weight" : "normal",
      "content" : "data(interaction)"
    }
  }, {
    "selector" : "edge[interaction = 'pp']",
    "css" : {
      "line-style" : "solid"
    }
  }, {
    "selector" : "edge[interaction = 'pd']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]