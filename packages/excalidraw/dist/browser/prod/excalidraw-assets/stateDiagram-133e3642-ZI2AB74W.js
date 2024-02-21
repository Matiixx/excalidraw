import{a as v,g as N,h as U}from"./chunk-4VQ2IKIK.js";import{a as T,b as C}from"./chunk-BZYWAROE.js";import"./chunk-GEGBGQUV.js";import{Ka as O,b as I,c as _,da as B,h as H,ha as z,na as t,oa as F,w as R,y as W,z as q}from"./chunk-B7LZIDS3.js";import{a as P}from"./chunk-M2JW2GFW.js";import{f as L}from"./chunk-SXMPUQ6M.js";P();var bt=L(I(),1),Bt=L(_(),1),St=L(q(),1);var A={},Z=(e,a)=>{A[e]=a},j=e=>A[e],Y=()=>Object.keys(A),D=()=>Y().length,K={get:j,set:Z,keys:Y,size:D},Q=e=>e.append("circle").attr("class","start-state").attr("r",t().state.sizeUnit).attr("cx",t().state.padding+t().state.sizeUnit).attr("cy",t().state.padding+t().state.sizeUnit),V=e=>e.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",t().state.textHeight).attr("class","divider").attr("x2",t().state.textHeight*2).attr("y1",0).attr("y2",0),tt=(e,a)=>{let o=e.append("text").attr("x",2*t().state.padding).attr("y",t().state.textHeight+2*t().state.padding).attr("font-size",t().state.fontSize).attr("class","state-title").text(a.id),d=o.node().getBBox();return e.insert("rect",":first-child").attr("x",t().state.padding).attr("y",t().state.padding).attr("width",d.width+2*t().state.padding).attr("height",d.height+2*t().state.padding).attr("rx",t().state.radius),o},et=(e,a)=>{let o=function(c,m,f){let S=c.append("tspan").attr("x",2*t().state.padding).text(m);f||S.attr("dy",t().state.textHeight)},s=e.append("text").attr("x",2*t().state.padding).attr("y",t().state.textHeight+1.3*t().state.padding).attr("font-size",t().state.fontSize).attr("class","state-title").text(a.descriptions[0]).node().getBBox(),l=s.height,p=e.append("text").attr("x",t().state.padding).attr("y",l+t().state.padding*.4+t().state.dividerMargin+t().state.textHeight).attr("class","state-description"),i=!0,r=!0;a.descriptions.forEach(function(c){i||(o(p,c,r),r=!1),i=!1});let w=e.append("line").attr("x1",t().state.padding).attr("y1",t().state.padding+l+t().state.dividerMargin/2).attr("y2",t().state.padding+l+t().state.dividerMargin/2).attr("class","descr-divider"),x=p.node().getBBox(),g=Math.max(x.width,s.width);return w.attr("x2",g+3*t().state.padding),e.insert("rect",":first-child").attr("x",t().state.padding).attr("y",t().state.padding).attr("width",g+2*t().state.padding).attr("height",x.height+l+2*t().state.padding).attr("rx",t().state.radius),e},it=(e,a,o)=>{let d=t().state.padding,s=2*t().state.padding,l=e.node().getBBox(),p=l.width,i=l.x,r=e.append("text").attr("x",0).attr("y",t().state.titleShift).attr("font-size",t().state.fontSize).attr("class","state-title").text(a.id),x=r.node().getBBox().width+s,g=Math.max(x,p);g===p&&(g=g+s);let c,m=e.node().getBBox();a.doc,c=i-d,x>p&&(c=(p-g)/2+d),Math.abs(i-m.x)<d&&x>p&&(c=i-(x-p)/2);let f=1-t().state.textHeight;return e.insert("rect",":first-child").attr("x",c).attr("y",f).attr("class",o?"alt-composit":"composit").attr("width",g).attr("height",m.height+t().state.textHeight+t().state.titleShift+1).attr("rx","0"),r.attr("x",c+d),x<=p&&r.attr("x",i+(g-s)/2-x/2+d),e.insert("rect",":first-child").attr("x",c).attr("y",t().state.titleShift-t().state.textHeight-t().state.padding).attr("width",g).attr("height",t().state.textHeight*3).attr("rx",t().state.radius),e.insert("rect",":first-child").attr("x",c).attr("y",t().state.titleShift-t().state.textHeight-t().state.padding).attr("width",g).attr("height",m.height+3+2*t().state.textHeight).attr("rx",t().state.radius),e},at=e=>(e.append("circle").attr("class","end-state-outer").attr("r",t().state.sizeUnit+t().state.miniPadding).attr("cx",t().state.padding+t().state.sizeUnit+t().state.miniPadding).attr("cy",t().state.padding+t().state.sizeUnit+t().state.miniPadding),e.append("circle").attr("class","end-state-inner").attr("r",t().state.sizeUnit).attr("cx",t().state.padding+t().state.sizeUnit+2).attr("cy",t().state.padding+t().state.sizeUnit+2)),nt=(e,a)=>{let o=t().state.forkWidth,d=t().state.forkHeight;if(a.parentId){let s=o;o=d,d=s}return e.append("rect").style("stroke","black").style("fill","black").attr("width",o).attr("height",d).attr("x",t().state.padding).attr("y",t().state.padding)},st=(e,a,o,d)=>{let s=0,l=d.append("text");l.style("text-anchor","start"),l.attr("class","noteText");let p=e.replace(/\r\n/g,"<br/>");p=p.replace(/\n/g,"<br/>");let i=p.split(z.lineBreakRegex),r=1.25*t().state.noteMargin;for(let w of i){let x=w.trim();if(x.length>0){let g=l.append("tspan");if(g.text(x),r===0){let c=g.node().getBBox();r+=c.height}s+=r,g.attr("x",a+t().state.noteMargin),g.attr("y",o+s+1.25*t().state.noteMargin)}}return{textWidth:l.node().getBBox().width,textHeight:s}},rt=(e,a)=>{a.attr("class","state-note");let o=a.append("rect").attr("x",0).attr("y",t().state.padding),d=a.append("g"),{textWidth:s,textHeight:l}=st(e,0,0,d);return o.attr("height",l+2*t().state.noteMargin),o.attr("width",s+t().state.noteMargin*2),o},X=function(e,a){let o=a.id,d={id:o,label:a.id,width:0,height:0},s=e.append("g").attr("id",o).attr("class","stateGroup");a.type==="start"&&Q(s),a.type==="end"&&at(s),(a.type==="fork"||a.type==="join")&&nt(s,a),a.type==="note"&&rt(a.note.text,s),a.type==="divider"&&V(s),a.type==="default"&&a.descriptions.length===0&&tt(s,a),a.type==="default"&&a.descriptions.length>0&&et(s,a);let l=s.node().getBBox();return d.width=l.width+2*t().state.padding,d.height=l.height+2*t().state.padding,K.set(o,d),d},J=0,ot=function(e,a,o){let d=function(r){switch(r){case N.relationType.AGGREGATION:return"aggregation";case N.relationType.EXTENSION:return"extension";case N.relationType.COMPOSITION:return"composition";case N.relationType.DEPENDENCY:return"dependency"}};a.points=a.points.filter(r=>!Number.isNaN(r.y));let s=a.points,l=R().x(function(r){return r.x}).y(function(r){return r.y}).curve(W),p=e.append("path").attr("d",l(s)).attr("id","edge"+J).attr("class","transition"),i="";if(t().state.arrowMarkerAbsolute&&(i=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,i=i.replace(/\(/g,"\\("),i=i.replace(/\)/g,"\\)")),p.attr("marker-end","url("+i+"#"+d(N.relationType.DEPENDENCY)+"End)"),o.title!==void 0){let r=e.append("g").attr("class","stateLabel"),{x:w,y:x}=O.calcLabelPosition(a.points),g=z.getRows(o.title),c=0,m=[],f=0,S=0;for(let u=0;u<=g.length;u++){let h=r.append("text").attr("text-anchor","middle").text(g[u]).attr("x",w).attr("y",x+c),y=h.node().getBBox();f=Math.max(f,y.width),S=Math.min(S,y.x),B.info(y.x,w,x+c),c===0&&(c=h.node().getBBox().height,B.info("Title height",c,x)),m.push(h)}let E=c*g.length;if(g.length>1){let u=(g.length-1)*c*.5;m.forEach((h,y)=>h.attr("y",x+y*c-u)),E=c*g.length}let n=r.node().getBBox();r.insert("rect",":first-child").attr("class","box").attr("x",w-f/2-t().state.padding/2).attr("y",x-E/2-t().state.padding/2-3.5).attr("width",f+t().state.padding).attr("height",E+t().state.padding),B.info(n)}J++},b,G={},dt=function(){},ct=function(e){e.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},gt=function(e,a,o,d){b=t().state;let s=t().securityLevel,l;s==="sandbox"&&(l=H("#i"+a));let p=s==="sandbox"?H(l.nodes()[0].contentDocument.body):H("body"),i=s==="sandbox"?l.nodes()[0].contentDocument:document;B.debug("Rendering diagram "+e);let r=p.select(`[id='${a}']`);ct(r),new T({multigraph:!0,compound:!0,rankdir:"RL"}).setDefaultEdgeLabel(function(){return{}});let x=d.db.getRootDoc();$(x,r,void 0,!1,p,i,d);let g=b.padding,c=r.node().getBBox(),m=c.width+g*2,f=c.height+g*2,S=m*1.75;F(r,f,S,b.useMaxWidth),r.attr("viewBox",`${c.x-b.padding}  ${c.y-b.padding} `+m+" "+f)},lt=e=>e?e.length*b.fontSizeFactor:1,$=(e,a,o,d,s,l,p)=>{let i=new T({compound:!0,multigraph:!0}),r,w=!0;for(r=0;r<e.length;r++)if(e[r].stmt==="relation"){w=!1;break}o?i.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:w?1:b.edgeLengthFactor,nodeSep:w?1:50,isMultiGraph:!0}):i.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:w?1:b.edgeLengthFactor,nodeSep:w?1:50,ranker:"tight-tree",isMultiGraph:!0}),i.setDefaultEdgeLabel(function(){return{}}),p.db.extract(e);let x=p.db.getStates(),g=p.db.getRelations(),c=Object.keys(x);for(let n of c){let u=x[n];o&&(u.parentId=o);let h;if(u.doc){let y=a.append("g").attr("id",u.id).attr("class","stateGroup");h=$(u.doc,y,u.id,!d,s,l,p);{y=it(y,u,d);let k=y.node().getBBox();h.width=k.width,h.height=k.height+b.padding/2,G[u.id]={y:b.compositTitleSize}}}else h=X(a,u);if(u.note){let y={descriptions:[],id:u.id+"-note",note:u.note,type:"note"},k=X(a,y);u.note.position==="left of"?(i.setNode(h.id+"-note",k),i.setNode(h.id,h)):(i.setNode(h.id,h),i.setNode(h.id+"-note",k)),i.setParent(h.id,h.id+"-group"),i.setParent(h.id+"-note",h.id+"-group")}else i.setNode(h.id,h)}B.debug("Count=",i.nodeCount(),i);let m=0;g.forEach(function(n){m++,B.debug("Setting edge",n),i.setEdge(n.id1,n.id2,{relation:n,width:lt(n.title),height:b.labelHeight*z.getRows(n.title).length,labelpos:"c"},"id"+m)}),C(i),B.debug("Graph after layout",i.nodes());let f=a.node();i.nodes().forEach(function(n){n!==void 0&&i.node(n)!==void 0?(B.warn("Node "+n+": "+JSON.stringify(i.node(n))),s.select("#"+f.id+" #"+n).attr("transform","translate("+(i.node(n).x-i.node(n).width/2)+","+(i.node(n).y+(G[n]?G[n].y:0)-i.node(n).height/2)+" )"),s.select("#"+f.id+" #"+n).attr("data-x-shift",i.node(n).x-i.node(n).width/2),l.querySelectorAll("#"+f.id+" #"+n+" .divider").forEach(h=>{let y=h.parentElement,k=0,M=0;y&&(y.parentElement&&(k=y.parentElement.getBBox().width),M=parseInt(y.getAttribute("data-x-shift"),10),Number.isNaN(M)&&(M=0)),h.setAttribute("x1",0-M+8),h.setAttribute("x2",k-M-8)})):B.debug("No Node "+n+": "+JSON.stringify(i.node(n)))});let S=f.getBBox();i.edges().forEach(function(n){n!==void 0&&i.edge(n)!==void 0&&(B.debug("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(i.edge(n))),ot(a,i.edge(n),i.edge(n).relation))}),S=f.getBBox();let E={id:o||"root",label:o||"root",width:0,height:0};return E.width=S.width+2*b.padding,E.height=S.height+2*b.padding,B.debug("Doc rendered",E,i),E},ht={setConf:dt,draw:gt},kt={parser:v,db:N,renderer:ht,styles:U,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,N.clear()}};export{kt as diagram};
