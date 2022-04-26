async function fetchNodes() {
    const response = await fetch('./despesas/depnodesedges/'+querystring[1]+'/n'+querystring[0]+'.json');
    const data = await response.json();
    return data;
}

async function fetchEdges() {
    const response = await fetch('./despesas/depnodesedges/'+querystring[1]+'/e'+querystring[0]+'.json');
    const data = await response.json();
    return data;
}

async function getQuerystring() {
    let params = new URLSearchParams(document.location.search);
    let querystring = [params.get("dep"),params.get("ano")];
    return querystring;
}


async function main() {  
    querystring = await getQuerystring();
    fetchNodes(querystring).then(nodes => {
        fetchEdges(querystring).then(edges => {
            visual(nodes, edges)
        });
    
    });
}  
main()


function visual(depNodes, depEdges) {
    // create an array with nodes
    var nodes = new vis.DataSet(depNodes);
    // create an array with edges
    var edges = new vis.DataSet(depEdges);
    // create a network
    var container = document.getElementById("mynetwork");
    var data = {
        nodes: nodes,
        edges: edges,
    };
    var options = {
        physics: {
            forceAtlas2Based: {
                springLength: 500,
                gravitationalConstant: -1,
                centralGravity: 0.001
            },
            minVelocity: 0.15,
            solver: 'repulsion',
            timestep: 0.1,
            repulsion: {
                centralGravity: 1.6,
                nodeDistance: 125,
                springConstant: 0.01,
                springLength: 125
            }
        },
        layout: {
            improvedLayout: false
        },
    };
    var network = new vis.Network(container, data, options);

}

