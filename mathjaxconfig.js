MathJax.Hub.Config({
    TeX: {
      equationNumbers: { autonumber: &quot;AMS&quot; },
      Macros: {
        DL:   &quot;{\\mathrm{DL}}&quot;,
        JL:   &quot;{\\mathrm{JL}}&quot;,
		    LoP:  &quot;{\\mathrm{LP}}&quot;,
        DLP:  &quot;{\\DL\\oplus_{\\JL}\\LoP}&quot;,
        PROVES:  &quot;{\\,\\vdash\\,}&quot;,
		    MODELS:  &quot;{\\,\\vDash\\,}&quot;,
		    AND:  &quot;{\\,\\wedge\\,}&quot;,
		    OR:  &quot;{\\,\\vee\\,}&quot;,
        IMP:  &quot;{\\,\\rightarrow\\,}&quot;,
        NOT:  &quot;{\\lnot}&quot;,
        FALSE:  &quot;{\\bot}&quot;,
        JUST: [&quot;{{#1}:{#2}}&quot;,2],
	      WITH: &quot;{\\,\\mathop{\\&amp;}\\,}&quot;,
        HASH: &quot;{\\,\\boxtimes\\,}&quot;,
        OK:   [&quot;{\\mathrm{OK}\\left({#1}\\right)}&quot;,1],
        STAR: [&quot;{{#1}^*}&quot;,1]
      }
    }
});
MathJax.Ajax.loadComplete("http://flengyel.github.io/mathjaxconfig.js");

