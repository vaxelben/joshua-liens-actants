import*as p from"https://cdn.jsdelivr.net/npm/d3@7/+esm";import{P as N}from"./vendor-ByTJSjIS.js";(function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function h(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=h(i);fetch(i.href,o)}})();const j=[{id:"Joshua Goldberg",level:0},{id:"Australi Witness",level:0},{id:"Moon Metropolis",level:0},{id:"Michael Slay",level:0},{id:"Tanya Cohen",level:0},{id:"European88",level:0},{id:"Metropolis Forever",level:0},{id:"Ryoko Tamada",level:0},{id:"Emily Goldstein",level:0},{id:"Elton Simpson",parent:"Australi Witness",level:1},{id:"Nadir Soofi",parent:"Australi Witness",level:1},{id:"Mariam Veiszadeh",parent:"Michael Slay",level:1},{id:"Andrew Anglin",parent:"Michael Slay",level:1},{id:"Milo Yiannopoulos",parent:"Moon Metropolis",level:1},{id:"Reddit",parent:"European88",level:1},{id:"Josh Bornstein",parent:"Joshua Goldberg",level:1},{id:"Lindsay Campbell",parent:"Joshua Goldberg",level:1},{id:"Shaun King",parent:"Moon Metropolis",level:1},{id:"Gamergate",parent:"Moon Metropolis",level:1},{id:"Elise Potaka",parent:"Joshua Goldberg",level:1},{id:"Luke McMahon",parent:"Joshua Goldberg",level:1},{id:"Pamela Geller",parent:"Australi Witness",level:1},{id:"James Taranto (WSJ)",parent:"Tanya Cohen",level:1},{id:"Amnesty International",parent:"Australi Witness",level:1},{id:"Junaid Thorne",parent:"Australi Witness",level:1},{id:"Mike Wendling",parent:"Moon Metropolis",level:1},{id:"Jim Berry",parent:"Australi Witness",level:1},{id:"Weev (Andrew Auernheimer)",parent:"Moon Metropolis",level:1},{id:"Ben Garrison",parent:"Joshua Goldberg",level:1},{id:"Bindi Cole",parent:"Australi Witness",level:1},{id:"Bill Leak",parent:"Australi Witness",level:1},{id:"Caitlin Roper",parent:"Joshua Goldberg",level:1},{id:"Chiara Zaffino",parent:"Moon Metropolis",level:1},{id:"Cyndi Lavrenci",parent:"Metropolis Forever",level:1},{id:"Grant Taylor",parent:"Metropolis Forever",level:1},{id:"Jilian C. York",parent:"Ryoko Tamada",level:1},{id:"Larry Pickering",parent:"Australi Witness",level:1},{id:"Tom Minear",parent:"Metropolis Forever",level:1},{id:"Alice Pooley",parent:"Moon Metropolis",level:1},{id:"Peter Wallace",parent:"Moon Metropolis",level:1},{id:"Rita Katz",parent:"Australi Witness",level:1},{id:"Rita Panahi",parent:"Moon Metropolis",level:1},{id:"Nikki",parent:"Moon Metropolis",level:1},{id:"Elon Musk",parent:"Emily Goldstein",level:1},{id:"AFP Federal Agent as Mohamadmo7",parent:"Australi Witness",level:1},{id:"FBI as Wilayahks",parent:"Australi Witness",level:1}],H=[{source:"Australi Witness",target:"Elton Simpson",type:"Incitation terroriste",direction:"inbound",linkType:"direct",impact:10},{source:"Australi Witness",target:"Nadir Soofi",type:"Incitation terroriste",direction:"inbound",linkType:"direct",impact:10},{source:"Michael Slay",target:"Mariam Veiszadeh",type:"Ciblage & harcèlement",direction:"inbound",linkType:"indirect",impact:9},{source:"Tanya Cohen",target:"Mariam Veiszadeh",type:"Instrumentalisation",direction:"inbound",linkType:"direct",impact:0},{source:"Michael Slay",target:"Andrew Anglin",type:"Infiltration",direction:"inbound",linkType:"direct",impact:7},{source:"Moon Metropolis",target:"Milo Yiannopoulos",type:"Collaboration désinformation",direction:"inbound",linkType:"direct",impact:7},{source:"European88",target:"Reddit",type:"modération",direction:"inbound",linkType:"direct",impact:8},{source:"Joshua Goldberg",target:"Josh Bornstein",type:"Usurpation d'identité",direction:"inbound",linkType:"direct",impact:10},{source:"Joshua Goldberg",target:"Lindsay Campbell",type:"Enquête FBI",direction:"outbound",linkType:"direct",impact:8},{source:"Moon Metropolis",target:"Shaun King",type:"Désinformation médiatique",direction:"inbound",linkType:"indirect",impact:6},{source:"Moon Metropolis",target:"Gamergate",type:"Trolling politique",direction:"inbound",linkType:"indirect",impact:6},{source:"Joshua Goldberg",target:"Elise Potaka",type:"Impersonation",direction:"inbound",linkType:"direct",impact:9},{source:"Joshua Goldberg",target:"Luke McMahon",type:"Ennemi",direction:"outbound",linkType:"direct",impact:9},{source:"Australi Witness",target:"Pamela Geller",type:"Menace de mort",direction:"inbound",linkType:"indirect",impact:7},{source:"Tanya Cohen",target:"James Taranto (WSJ)",type:"Désinformation médiatique",direction:"inbound",linkType:"indirect",impact:5},{source:"Australi Witness",target:"Amnesty International",type:"désinformation",direction:"inbound",linkType:"direct",impact:7},{source:"Australi Witness",target:"Junaid Thorne",type:"Usurpation d'identité",direction:"inbound",linkType:"direct",impact:8},{source:"Moon Metropolis",target:"Mike Wendling",type:"Manipulation",direction:"inbound",linkType:"direct",impact:6},{source:"Australi Witness",target:"Jim Berry",type:"Enquêteur",direction:"outbound",linkType:"direct",impact:8},{source:"Moon Metropolis",target:"Weev (Andrew Auernheimer)",type:"Collaboration désinformation",direction:"inbound",linkType:"direct",impact:6},{source:"Joshua Goldberg",target:"Ben Garrison",type:"impersonation",direction:"inbound",linkType:"direct",impact:6},{source:"Australi Witness",target:"Bindi Cole",type:"Ciblage & harcèlement",direction:"inbound",linkType:"direct",impact:4},{source:"Australi Witness",target:"Bill Leak",type:"Menace de mort",direction:"inbound",linkType:"direct",impact:5},{source:"Joshua Goldberg",target:"Caitlin Roper",type:"Impersonnation",direction:"inbound",linkType:"direct",impact:5},{source:"Moon Metropolis",target:"Chiara Zaffino",type:"manipulation",direction:"inbound",linkType:"direct",impact:6},{source:"Metropolis Forever",target:"Cyndi Lavrenci",type:"manipulation",direction:"inbound",linkType:"direct",impact:7},{source:"Metropolis Forever",target:"Grant Taylor",type:"Journaliste exposant Goldberg",direction:"inbound",linkType:"direct",impact:8},{source:"Ryoko Tamada",target:"Jilian C. York",type:"Manipulation",direction:"inbound",linkType:"direct",impact:7},{source:"Australi Witness",target:"Larry Pickering",type:"Menaces de mort",direction:"inbound",linkType:"direct",impact:5},{source:"Metropolis Forever",target:"Tom Minear",type:"Manipulation",direction:"inbound",linkType:"direct",impact:6},{source:"Moon Metropolis",target:"Alice Pooley",type:"Manipulation",direction:"inbound",linkType:"direct",impact:6},{source:"Moon Metropolis",target:"Peter Wallace",type:"Désinformation médiatique",direction:"inbound",linkType:"direct",impact:8},{source:"Australi Witness",target:"Rita Katz",type:"Désinformation médiatique",direction:"inbound",linkType:"indirect",impact:9},{source:"Moon Metropolis",target:"Rita Panahi",type:"Manipulation",direction:"inbound",linkType:"direct",impact:7},{source:"Moon Metropolis",target:"Nikki",type:"amie",direction:"inbound",linkType:"direct",impact:5},{source:"Emily Goldstein",target:"Elon Musk",type:"Amplification de fake news",direction:"inbound",linkType:"indirect",impact:9},{source:"Australi Witness",target:"AFP Federal Agent as Mohamadmo7",type:"Infiltration",direction:"outbound",linkType:"direct",impact:0},{source:"Australi Witness",target:"FBI as Wilayahks",type:"Infiltration",direction:"outbound",linkType:"direct",impact:0}],g={nodes:j,edges:H};document.addEventListener("DOMContentLoaded",()=>{const b=document.getElementById("graph"),y=b.clientWidth,h=b.clientHeight,s=30,i=p.scaleLinear().domain([0,1,2,3,4,5,6,7,8,9,10]).range(["red","#f1f1f1","#dedede","#c6c6c6","#a7a7a7","#878787","#686868","#474747","#222222","#000000"]),o=p.select("#graph").append("svg").attr("width",y).attr("height",h).style("background","#F2EFDD"),l=o.append("g").attr("class","legend").attr("transform",`translate(${y-200}, ${h-120})`);l.append("line").attr("x1",10).attr("y1",20).attr("x2",50).attr("y2",20).attr("stroke","#666").attr("stroke-width",1),l.append("line").attr("x1",10).attr("y1",40).attr("x2",50).attr("y2",40).attr("stroke","#666").attr("stroke-width",1).attr("stroke-dasharray","5,5"),l.append("text").attr("x",60).attr("y",23).text("Lien direct").style("font-size","12px").style("font-family","Arial, sans-serif"),l.append("text").attr("x",60).attr("y",43).text("Lien indirect").style("font-size","12px").style("font-family","Arial, sans-serif"),l.append("text").attr("x",10).attr("y",70).text("Impact médiatique :").style("font-size","12px").style("font-family","Arial, sans-serif");const E=100,R=10;l.append("linearGradient").attr("id","legend-gradient").attr("x1","0%").attr("x2","100%").selectAll("stop").data([{offset:"0%",color:i(0)},{offset:"10%",color:i(1)},{offset:"20%",color:i(2)},{offset:"30%",color:i(3)},{offset:"40%",color:i(4)},{offset:"50%",color:i(5)},{offset:"60%",color:i(6)},{offset:"70%",color:i(7)},{offset:"80%",color:i(8)},{offset:"90%",color:i(9)},{offset:"100%",color:i(10)}]).join("stop").attr("offset",t=>t.offset).attr("stop-color",t=>t.color),l.append("rect").attr("x",10).attr("y",80).attr("width",E).attr("height",R).style("fill","url(#legend-gradient)"),l.append("text").attr("x",10).attr("y",100).text("NR").style("font-size","10px").style("font-family","Arial, sans-serif").style("fill","red"),l.append("text").attr("x",98).attr("y",100).text("10").style("font-size","10px").style("font-family","Arial, sans-serif"),o.append("defs").append("marker").attr("id","arrowhead").attr("viewBox","0 -5 10 10").attr("refX",0).attr("refY",0).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M0,-5L10,0L0,5").attr("fill","#666");const I=o.append("g").attr("class","text-layer").style("z-index","1"),$=o.append("g").attr("class","text-layer").style("z-index","1"),F=o.append("g").attr("class","link-layer").style("z-index","2"),O=o.append("g").attr("class","node-layer").style("z-index","3"),a=p.forceSimulation(g.nodes).force("link",p.forceLink(g.edges).id(t=>t.id).distance(t=>150+(t.impact||0)*10).strength(.7)).force("charge",p.forceManyBody().strength(t=>t.level===0?-1e3:-500)).force("center",p.forceCenter(y/2,h/2)).force("x",p.forceX(y/2).strength(.1)).force("y",p.forceY(h/2).strength(.1)).force("collision",p.forceCollide().radius(s*1.5)),w=F.selectAll("path").data(g.edges).join("path").attr("class","link").attr("stroke",t=>i(t.impact||0)).attr("stroke-width",1).attr("stroke-dasharray",t=>t.linkType==="direct"?null:"5,5").attr("marker-end","url(#arrowhead)").attr("fill","none"),J=$.selectAll("text").data(g.edges).join("text").text(t=>t.type).attr("text-anchor","left").attr("dominant-baseline","middle").style("font-size","10px").style("font-family","Arial, sans-serif").style("pointer-events","none").style("user-select","none").style("fill","#333").call(P,s*2),G=I.selectAll("text").data(g.nodes).join("text").text(t=>t.id).attr("x",t=>t.x).attr("y",t=>t.y).attr("text-anchor","middle").attr("dominant-baseline","middle").style("font-size",t=>t.level===0?"12px":"10px").style("font-family","Arial, sans-serif").style("pointer-events","none").style("user-select","none").style("fill","#333").call(P,s*2),A=O.selectAll("g").data(g.nodes).join("g").style("pointer-events","all").call(p.drag().on("start",(t,e)=>{t.active||a.alphaTarget(.3).restart(),e.fx=e.x,e.fy=e.y}).on("drag",(t,e)=>{e.fx=t.x,e.fy=t.y}).on("end",(t,e)=>{t.active||a.alphaTarget(0),e.fx=null,e.fy=null})).on("mouseover",D).on("mouseout",Y);A.append("circle").attr("r",t=>t.level===0?s*1.2:s).attr("fill","none").attr("stroke",t=>t.level===0?"#666":"#999").attr("stroke-width",t=>t.level===0?2:1).style("pointer-events","all");function P(t,e){t.each(function(){const r=p.select(this),n=r.text().split(/\s+/).reverse(),c=1.2,k=0,x=0;let u,d=[],f=0,v=r.text(null).append("tspan").attr("x",0).attr("y",k).attr("dy",`${x}em`);for(;u=n.pop();)d.push(u),v.text(d.join(" ")),v.node().getComputedTextLength()>e&&(d.pop(),v.text(d.join(" ")),d=[u],v=r.append("tspan").attr("x",0).attr("y",k).attr("dy",`${++f*c}em`).text(u));const T=r.selectAll("tspan"),W=-((T.size()-1)*c)/2;T.attr("dy",(z,S)=>`${W+S*c}em`)})}function D(t,e){const r=new Set;r.add(e.id),g.edges.forEach(n=>{n.source.id===e.id&&r.add(n.target.id),n.target.id===e.id&&r.add(n.source.id)}),A.transition().duration(300).style("opacity",n=>r.has(n.id)?1:.1),G.transition().duration(300).style("opacity",n=>r.has(n.id)?1:.1),J.transition().duration(300).style("opacity",n=>r.has(n.source.id)&&r.has(n.target.id)?1:.1),w.transition().duration(300).style("opacity",n=>r.has(n.source.id)&&r.has(n.target.id)?1:.1)}function Y(){A.transition().duration(300).style("opacity",1),G.transition().duration(300).style("opacity",1),w.transition().duration(300).style("opacity",1)}a.on("tick",()=>{g.nodes.forEach(t=>{const e=t.level===0?s*1.2:s;t.x=Math.max(e,Math.min(y-e,t.x)),t.y=Math.max(e,Math.min(h-e,t.y))}),w.attr("d",t=>{const e=t.target.x-t.source.x,r=t.target.y-t.source.y,n=Math.sqrt(e*e+r*r),c=Math.atan2(r,e),k=t.source.level===0?s*1.2:s,x=t.target.level===0?s*1.2:s,u=-Math.sin(c),d=Math.cos(c),f=15,v=t.source.x+k*Math.cos(c)+u*f,T=t.source.y+k*Math.sin(c)+d*f,L=15,C=t.target.x-(x+L)*Math.cos(c)+u*f,W=t.target.y-(x+L)*Math.sin(c)+d*f,z=.2,S=(v+C)/2,q=(T+W)/2,B=n*z;return`M${v},${T} Q${S+u*B},${q+d*B} ${C},${W}`}),J.attr("transform",t=>{const e=t.target.x-t.source.x,r=t.target.y-t.source.y,n=Math.atan2(r,e)*(180/Math.PI),c=(t.source.x+t.target.x)/2,k=(t.source.y+t.target.y)/2,x=-Math.sin(n*Math.PI/180),u=Math.cos(n*Math.PI/180),d=20,f=n>90||n<-90?n+180:n;return`translate(${c+x*d},${k+u*d}) rotate(${f})`}),A.attr("transform",t=>`translate(${t.x},${t.y})`),G.attr("transform",t=>`translate(${t.x},${t.y})`)});const M=new N({title:"Graph Controls"});M.addButton({title:"Download SVG"}).on("click",()=>{const e=new XMLSerializer().serializeToString(o.node()),r=document.createElement("a"),n=new Blob([e],{type:"image/svg+xml;charset=utf-8"});r.href=URL.createObjectURL(n),r.download="visualization.svg",document.body.appendChild(r),r.click(),document.body.removeChild(r)});const m={linkDistance:150,linkStrength:.7,charge:-500,collisionRadius:80};M.addBinding(m,"linkDistance",{min:50,max:300,step:1}).on("change",t=>{a.force("link").distance(t.value),a.alpha(.3).restart()}),M.addBinding(m,"linkStrength",{min:0,max:2,step:.1}).on("change",t=>{a.force("link").strength(t.value),a.alpha(.3).restart()}),M.addBinding(m,"charge",{min:-1e3,max:100,step:10}).on("change",t=>{a.force("charge").strength(t.value),a.alpha(.3).restart()}),M.addBinding(m,"collisionRadius",{min:30,max:150,step:1}).on("change",t=>{a.force("collision").radius(t.value),a.alpha(.3).restart()}),M.addButton({title:"Reset Simulation"}).on("click",()=>{Object.assign(m,{linkDistance:150,linkStrength:.7,charge:-500,collisionRadius:80}),a.force("link").distance(m.linkDistance),a.force("link").strength(m.linkStrength),a.force("charge").strength(m.charge),a.force("collision").radius(m.collisionRadius),a.alpha(1).restart(),M.refresh()}),window.addEventListener("resize",()=>{const t=b.clientWidth,e=b.clientHeight;o.attr("width",t).attr("height",e),l.attr("transform",`translate(${t-200}, ${e-120})`),a.force("center",p.forceCenter(t/2,e/2)).alpha(.3).restart()})});
