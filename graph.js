class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(const node of vertexArray){
      this.addVertex(node);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for(const connection of vertex.adjacent){
      connection.adjacent.delete(vertex);
    }
    this.nodes.delete(vertex);  //is the unwanted node cleaned up from memory?
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let current = start;
    let list2LookAt = [current]
    let lookedAt = new Set(list2LookAt);
    let values = [];

    while (list2LookAt.length){
      current = list2LookAt.pop();
      values.push(current.value);
      

      for(const adjunct of current.adjacent){
        if (!lookedAt.has(adjunct)){
          list2LookAt.push(adjunct);
          lookedAt.add(adjunct);
        }
      }
    }

    return values;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let current = start;
    let list2LookAt = [current]
    let lookedAt = new Set(list2LookAt);
    let values = [];

    while (list2LookAt.length){
      current = list2LookAt.shift();
      values.push(current.value);
      

      for(const adjunct of current.adjacent){
        if (!lookedAt.has(adjunct)){
          list2LookAt.push(adjunct);
          lookedAt.add(adjunct);
        }
      }
    }

    return values;
  }
}


  ///////////////
 // Answer key//
///////////////
// let graph = new Graph()
// let a = new Node("A")
// let b = new Node("B")
// let c = new Node("C")
// graph.addVertices([a,b])
// graph.addVertex(c)
// console.log(graph.nodes.has(a)) // true
// console.log(graph.nodes.has(b)) // true
// console.log(graph.nodes.has(c)) // true

/////////////////////////////////////////////////////
// let graph = new Graph()
// let a = new Node("A")
// let b = new Node("B")
// let c = new Node("C")
// let d = new Node("D")
// graph.addVertices([a, b, c, d])
// graph.addEdge(a, b)
// graph.addEdge(a, c)
// graph.addEdge(b, d)
// graph.addEdge(c, d)

/////////////////////////////////////////////////////
// let graph = new Graph()
// let a = new Node("A")
// let b = new Node("B")
// let c = new Node("C")
// let d = new Node("D")
// graph.addVertices([a, b, c, d])
// graph.addEdge(a, b)
// graph.addEdge(a, c)
// graph.addEdge(b, d)
// graph.addEdge(c, d)

// graph.removeEdge(b,a)
// graph.removeEdge(c,d)


// a.adjacent // does not contain b
// b.adjacent // does not contain a

// c.adjacent // does not contain d
// d.adjacent // does not contain c

///////////////////////////////////////////////
// let graph = new Graph()
// let a = new Node("A")
// let b = new Node("B")
// let c = new Node("C")
// let d = new Node("D")
// graph.addVertices([a, b, c, d])
// graph.addEdge(a, b)
// graph.addEdge(a, c)
// graph.addEdge(b, d)
// graph.addEdge(c, d)

// graph.removeVertex(c)
// graph.removeVertex(d)

// console.log(graph.nodes.has(a)) // true
// console.log(graph.nodes.has(b)) // true
// console.log(graph.nodes.has(c)) // false
// console.log(graph.nodes.has(d)) // false

////////////////////////////////////////////
// let graph = new Graph()
// let S = new Node('S');
// let P = new Node('P');
// let U = new Node('U');
// let X = new Node('X');
// let Q = new Node('Q');
// let Y = new Node('Y');
// let V = new Node('V');
// let R = new Node('R');
// let W = new Node('W');
// let T = new Node('T');

// graph.addVertices([S,P,U,X,Q,Y,V,R,W,T])

// graph.addEdge(S, P);
// graph.addEdge(S, U);

// graph.addEdge(P, X);
// graph.addEdge(U, X);

// graph.addEdge(P, Q);
// graph.addEdge(U, V);

// graph.addEdge(X, Q);
// graph.addEdge(X, Y);
// graph.addEdge(X, V);

// graph.addEdge(Q, R);
// graph.addEdge(Y, R);

// graph.addEdge(Y, W);
// graph.addEdge(V, W);

// graph.addEdge(R, T);
// graph.addEdge(W, T);

// // this is one option:
// graph.depthFirstSearch(S) // ["S", "P", "U", "X", "Q", "V", "Y", "R", "W", "T"] //this is the wrong answer.  This is the answer for bfs




module.exports = {Graph, Node}