import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7/+esm';
import { Pane } from 'tweakpane';
import data from './data';

document.addEventListener('DOMContentLoaded', () => {
    // Configuration initiale
    const container = document.getElementById('graph');
    const width = container.clientWidth;
    const height = container.clientHeight;
    const nodeRadius = 30;

    const linkColorScale = d3.scaleLinear()
        .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        .range(["red", "#f1f1f1", "#dedede", "#c6c6c6", "#a7a7a7", "#878787", "#686868", "#474747", "#222222", "#000000"]);

    // Créer le conteneur principal
    const svg = d3.select("#graph")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("background", "#F2EFDD");

    // Définir les marqueurs de flèches
    const defs = svg.append("defs");

    defs.append("marker")
        .attr("id", "arrowhead")
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 0)
        .attr("refY", 0)
        .attr("markerUnits", "userSpaceOnUse")
        .attr("markerWidth", 12)
        .attr("markerHeight", 12)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5")
        .attr("fill", "#666");

    // Créer les groupes dans l'ordre de superposition (de bas en haut)
    const textGroup = svg.append("g")
        .attr("class", "text-layer")
        .style("z-index", "1");

    const linkTextGroup = svg.append("g")
        .attr("class", "text-layer")
        .style("z-index", "1");

    const linkGroup = svg.append("g")
        .attr("class", "link-layer")
        .style("z-index", "2");

    const nodeGroup = svg.append("g")
        .attr("class", "node-layer")
        .style("z-index", "3");

    // Créer la simulation de force
    const simulation = d3.forceSimulation(data.nodes)
        .force("link", d3.forceLink(data.edges)
            .id(d => d.id)
            .distance(d => 150 + (d.impact || 0) * 10)
            .strength(0.7))
        .force("charge", d3.forceManyBody()
            .strength(d => d.level === 0 ? -1000 : -500))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("x", d3.forceX(width / 2).strength(0.1))
        .force("y", d3.forceY(height / 2).strength(0.1))
        .force("collision", d3.forceCollide().radius(nodeRadius * 1.5));

    // Créer les liens
    const link = linkGroup
        .selectAll("path")
        .data(data.edges)
        .join("path")
        .attr("class", "link")
        .attr("stroke", d => linkColorScale(d.impact || 0))
        .attr("stroke-width", 1)
        .attr("stroke-dasharray", d => d.linkType === "direct" ? null : "5,5")
        .attr("marker-end", "url(#arrowhead)")
        .attr("fill", "none");

    const linkText = linkTextGroup
        .selectAll("text")
        .data(data.edges)
        .join("text")
        .text(d => d.type)
        .attr("text-anchor", "left")
        .attr("dominant-baseline", "middle")
        .style("font-size", "10px")
        .style("font-family", "Arial, sans-serif")
        .style("pointer-events", "none")
        .style("user-select", "none")
        .style("fill", "#333")
        .call(wrap, nodeRadius * 2);

    // Créer les textes des nœuds (en arrière-plan)
    const nodeText = textGroup
        .selectAll("text")
        .data(data.nodes)
        .join("text")
        .text(d => d.id)
        .attr("x", d => d.x)
        .attr("y", d => d.y)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .style("font-size", d => d.level === 0 ? "12px" : "10px")
        .style("font-family", "Arial, sans-serif")
        .style("pointer-events", "none")
        .style("user-select", "none")
        .style("fill", "#333")
        .call(wrap, nodeRadius * 2);

    // Créer les nœuds (cercles au premier plan)
    const node = nodeGroup
        .selectAll("g")
        .data(data.nodes)
        .join("g")
        .style("pointer-events", "all")
        .call(d3.drag()
            .on("start", (event, d) => {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                d.fx = d.x;
                d.fy = d.y;
            })
            .on("drag", (event, d) => {
                d.fx = event.x;
                d.fy = event.y;
            })
            .on("end", (event, d) => {
                if (!event.active) simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            }))
        .on("mouseover", highlight)
        .on("mouseout", resetHighlight);

    node.append("circle")
        .attr("r", d => d.level === 0 ? nodeRadius * 1.2 : nodeRadius)
        .attr("fill", "none")
        .attr("stroke", d => d.level === 0 ? "#666" : "#999")
        .attr("stroke-width", d => d.level === 0 ? 2 : 1)
        .style("pointer-events", "all");

    // Fonction pour wrapper le texte
    function wrap(text, width) {
        text.each(function () {
            const text = d3.select(this);
            const words = text.text().split(/\s+/).reverse();
            const lineHeight = 1.2;
            const y = 0;
            const dy = 0;

            let word;
            let line = [];
            let lineNumber = 0;
            let tspan = text.text(null).append("tspan")
                .attr("x", 0)
                .attr("y", y)
                .attr("dy", `${dy}em`);

            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    tspan = text.append("tspan")
                        .attr("x", 0)
                        .attr("y", y)
                        .attr("dy", `${++lineNumber * lineHeight}em`)
                        .text(word);
                }
            }

            // Centrer verticalement le texte multi-lignes
            const lines = text.selectAll("tspan");
            const totalLines = lines.size();
            const totalHeight = (totalLines - 1) * lineHeight;
            const startOffset = -totalHeight / 2;
            lines.attr("dy", (d, i) => `${startOffset + i * lineHeight}em`);
        });
    }

    // Fonction pour mettre en évidence les nœuds et liens connectés
    function highlight(event, d) {
        // Trouver tous les nœuds connectés
        const connectedNodeIds = new Set();
        connectedNodeIds.add(d.id);

        // Ajouter les nœuds source et target des liens connectés
        data.edges.forEach(edge => {
            if (edge.source.id === d.id) {
                connectedNodeIds.add(edge.target.id);
            }
            if (edge.target.id === d.id) {
                connectedNodeIds.add(edge.source.id);
            }
        });

        // Griser les nœuds non connectés avec transition
        node.transition()
            .duration(300)
            .style("opacity", node => connectedNodeIds.has(node.id) ? 1 : 0.1);

        nodeText.transition()
            .duration(300)
            .style("opacity", node => connectedNodeIds.has(node.id) ? 1 : 0.1);

        // Griser les liens non connectés avec transition
        link.transition()
            .duration(300)
            .style("opacity", edge =>
                connectedNodeIds.has(edge.source.id) && connectedNodeIds.has(edge.target.id) ? 1 : 0.1
            );
    }

    // Fonction pour réinitialiser l'affichage
    function resetHighlight() {
        node.transition()
            .duration(300)
            .style("opacity", 1);

        nodeText.transition()
            .duration(300)
            .style("opacity", 1);

        link.transition()
            .duration(300)
            .style("opacity", 1);
    }

    // Mettre à jour les positions à chaque tick
    simulation.on("tick", () => {
        // Mettre à jour les liens
        link.attr("d", d => {
            const dx = d.target.x - d.source.x;
            const dy = d.target.y - d.source.y;
            const dr = Math.sqrt(dx * dx + dy * dy);

            const angle = Math.atan2(dy, dx);

            // Rayons des cercles
            const sourceRadius = d.source.level === 0 ? nodeRadius * 1.2 : nodeRadius;
            const targetRadius = d.target.level === 0 ? nodeRadius * 1.2 : nodeRadius;

            // Translation perpendiculaire pour viser les centres
            const perpX = -Math.sin(angle);
            const perpY = Math.cos(angle);
            const translationOffset = 15;

            // Points de départ et d'arrivée translatés
            const sourceX = d.source.x + (sourceRadius * Math.cos(angle)) + perpX * translationOffset;
            const sourceY = d.source.y + (sourceRadius * Math.sin(angle)) + perpY * translationOffset;

            const arrowLength = 15;
            const targetX = d.target.x - ((targetRadius + arrowLength) * Math.cos(angle)) + perpX * translationOffset;
            const targetY = d.target.y - ((targetRadius + arrowLength) * Math.sin(angle)) + perpY * translationOffset;

            // Utiliser une courbe plus douce
            const curvature = 0.2;
            const midX = (sourceX + targetX) / 2;
            const midY = (sourceY + targetY) / 2;
            const curveOffset = dr * curvature;

            return `M${sourceX},${sourceY} Q${midX + perpX * curveOffset},${midY + perpY * curveOffset} ${targetX},${targetY}`;
        });
        // Mettre à jour les liens
        linkText.attr("transform", d => {
            const dx = (d.target.x + d.source.x) / 2;
            const dy = (d.target.y + d.source.y) / 2;
            // const angle = Math.atan2(d.target.y - d.source.y, d.target.x - d.source.x) * (180 / Math.PI);

            // return `translate(${dx},${dy}) rotate(${angle})`;
            return `translate(${dx},${dy})`;
        });

        // Mettre à jour les positions des nœuds
        node.attr("transform", d => `translate(${d.x},${d.y})`);

        // Mettre à jour les positions des textes
        nodeText.attr("transform", d => `translate(${d.x},${d.y})`);
    });

    // Configuration Tweakpane
    const pane = new Pane({
        title: 'Graph Controls'
    });

    pane.addButton({
        title: 'Download SVG',
    }).on('click', () => {
        const serializer = new XMLSerializer();
        const source = serializer.serializeToString(svg.node());

        const a = document.createElement('a');
        const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
        a.href = URL.createObjectURL(blob);
        a.download = 'visualization.svg';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });

    pane.addButton({
        title: 'Refresh data',
    }).on('click', () => {
        // Recharger les données
        data.nodes.forEach(node => {
            simulation.nodes().forEach(simNode => {
                if (simNode.id === node.id) {
                    Object.assign(simNode, node);
                }
            });
        });

        // Redémarrer la simulation avec une force réduite
        simulation.alpha(0.3).restart();

        // Mettre à jour l'affichage
        updateDisplay();
    });

    const PARAMS = {
        linkDistance: 150,
        linkStrength: 0.7,
        charge: -500,
        collisionRadius: 80
    };

    pane.addBinding(PARAMS, 'linkDistance', {
        min: 50,
        max: 300,
        step: 1,
    }).on('change', (ev) => {
        simulation.force("link").distance(ev.value);
        simulation.alpha(0.3).restart();
    });

    pane.addBinding(PARAMS, 'linkStrength', {
        min: 0,
        max: 2,
        step: 0.1,
    }).on('change', (ev) => {
        simulation.force("link").strength(ev.value);
        simulation.alpha(0.3).restart();
    });

    pane.addBinding(PARAMS, 'charge', {
        min: -1000,
        max: 100,
        step: 10,
    }).on('change', (ev) => {
        simulation.force("charge").strength(ev.value);
        simulation.alpha(0.3).restart();
    });

    pane.addBinding(PARAMS, 'collisionRadius', {
        min: 30,
        max: 150,
        step: 1,
    }).on('change', (ev) => {
        simulation.force("collision").radius(ev.value);
        simulation.alpha(0.3).restart();
    });

    pane.addButton({
        title: 'Reset Simulation'
    }).on('click', () => {
        Object.assign(PARAMS, {
            linkDistance: 150,
            linkStrength: 0.7,
            charge: -500,
            collisionRadius: 80
        });

        simulation.force("link").distance(PARAMS.linkDistance);
        simulation.force("link").strength(PARAMS.linkStrength);
        simulation.force("charge").strength(PARAMS.charge);
        simulation.force("collision").radius(PARAMS.collisionRadius);

        simulation.alpha(1).restart();
        pane.refresh();
    });

    // Fonction pour mettre à jour l'affichage
    function updateDisplay() {
        // Mettre à jour les nœuds
        const node = nodeGroup.selectAll(".node")
            .data(data.nodes, d => d.id);

        // Mettre à jour les liens
        const link = linkGroup.selectAll(".link")
            .data(data.edges, d => d.source.id + "-" + d.target.id);

        // Mettre à jour les textes
        const text = textGroup.selectAll(".node-label")
            .data(data.nodes, d => d.id);

        // Mettre à jour les textes
        const linkText = linkTextGroup.selectAll(".link-label")
            .data(data.edges, d => d.type);

        // Réappliquer les styles et attributs
        node.attr("fill", d => d.color || "#69b3a2");
        link.attr("stroke", "#666").attr("marker-end", "url(#arrowhead)");
        text.style("font-size", "12px").style("fill", "#333");
        linkText.style("font-size", "12px").style("fill", "#333");
    }

    // Gérer le redimensionnement de la fenêtre
    window.addEventListener('resize', () => {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;

        svg.attr("width", newWidth)
            .attr("height", newHeight);

        simulation.force("center", d3.forceCenter(newWidth / 2, newHeight / 2))
            .alpha(0.3)
            .restart();
    });
});
