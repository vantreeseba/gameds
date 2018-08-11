A bunch of random utils for game development in js.

## Classes

<dl>
<dt><a href="#ArrayList">ArrayList</a></dt>
<dd><p>An array that auto grows, and is preallocated.
It won&#39;t shrink, but will try to reuse empty elements if they have been removed.</p>
</dd>
<dt><a href="#BSP">BSP</a></dt>
<dd><p>BSP</p>
</dd>
<dt><a href="#Graph">Graph</a></dt>
<dd><p>A graph data structure.
Undirected and using an adjacency list.</p>
</dd>
<dt><a href="#Heap">Heap</a></dt>
<dd><p>A heap implemenation.</p>
</dd>
</dl>

<a name="ArrayList"></a>

## ArrayList
An array that auto grows, and is preallocated.
It won't shrink, but will try to reuse empty elements if they have been removed.

**Kind**: global class  

* [ArrayList](#ArrayList)
    * [new ArrayList()](#new_ArrayList_new)
    * [.count](#ArrayList+count) ⇒ <code>Number</code>
    * [.pullExists()](#ArrayList+pullExists) ⇒ <code>Mixed</code>
    * [.push(item)](#ArrayList+push)
    * [.add(array)](#ArrayList+add)
    * [.remove(fn)](#ArrayList+remove)
    * [.clear()](#ArrayList+clear)

<a name="new_ArrayList_new"></a>

### new ArrayList()
Constructor.

<a name="ArrayList+count"></a>

### arrayList.count ⇒ <code>Number</code>
Count how many defined values are in the array.

**Kind**: instance property of [<code>ArrayList</code>](#ArrayList)  
**Returns**: <code>Number</code> - Array elements that aren't undefined.  
<a name="ArrayList+pullExists"></a>

### arrayList.pullExists() ⇒ <code>Mixed</code>
Get and remove the first existing value in the array.

**Kind**: instance method of [<code>ArrayList</code>](#ArrayList)  
**Returns**: <code>Mixed</code> - Existing value.  
<a name="ArrayList+push"></a>

### arrayList.push(item)
Add an item to the array.
Either lengthens array, or uses an "empty" index.

**Kind**: instance method of [<code>ArrayList</code>](#ArrayList)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>\*</code> | The item to add to the array. |

<a name="ArrayList+add"></a>

### arrayList.add(array)
Add an array to the array.
Either lengthens array or adds elements in "empty" indices.

**Kind**: instance method of [<code>ArrayList</code>](#ArrayList)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array to add. |

<a name="ArrayList+remove"></a>

### arrayList.remove(fn)
Removes elements from the array matching the fn (returns true).

**Kind**: instance method of [<code>ArrayList</code>](#ArrayList)  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Matcher to remove elements. |

<a name="ArrayList+clear"></a>

### arrayList.clear()
Sets all current elements in array to undefined.

**Kind**: instance method of [<code>ArrayList</code>](#ArrayList)  
<a name="BSP"></a>

## BSP
BSP

**Kind**: global class  

* [BSP](#BSP)
    * [new BSP(height, width)](#new_BSP_new)
    * [.makeNode(x, y, w, h, l, r)](#BSP+makeNode) ⇒ <code>Node</code>
    * [.makeTree(node, level)](#BSP+makeTree)
    * [.split(node)](#BSP+split)
    * [.traverseInOrder(cb)](#BSP+traverseInOrder)
    * [.traversePreOrder(cb)](#BSP+traversePreOrder)
    * [.traversePostOrder(cb)](#BSP+traversePostOrder)

<a name="new_BSP_new"></a>

### new BSP(height, width)
constructor


| Param | Type |
| --- | --- |
| height | <code>Number</code> | 
| width | <code>Number</code> | 

<a name="BSP+makeNode"></a>

### bsP.makeNode(x, y, w, h, l, r) ⇒ <code>Node</code>
Create a node to put into the BSP.

**Kind**: instance method of [<code>BSP</code>](#BSP)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | X position of node. |
| y | <code>Number</code> | Y position of node. |
| w | <code>Number</code> | Width of node. |
| h | <code>Number</code> | Height of node. |
| l | <code>Node</code> | The left child of this node. |
| r | <code>Node</code> | The right child of this node. |

<a name="BSP+makeTree"></a>

### bsP.makeTree(node, level)
Create a tree.

**Kind**: instance method of [<code>BSP</code>](#BSP)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| node | <code>Node</code> |  | The node to generate the tree starting at. |
| level | <code>Number</code> | <code>0</code> | The current depth of the generation. |

<a name="BSP+split"></a>

### bsP.split(node)
Split the given node into two child nodes.

**Kind**: instance method of [<code>BSP</code>](#BSP)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Node</code> | The node to split. |

<a name="BSP+traverseInOrder"></a>

### bsP.traverseInOrder(cb)
Traverse the tree in order.

**Kind**: instance method of [<code>BSP</code>](#BSP)  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | Function to call per node. |

<a name="BSP+traversePreOrder"></a>

### bsP.traversePreOrder(cb)
Traverse the tree pre order.

**Kind**: instance method of [<code>BSP</code>](#BSP)  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | Function to call per node. |

<a name="BSP+traversePostOrder"></a>

### bsP.traversePostOrder(cb)
Traverse the tree post order.

**Kind**: instance method of [<code>BSP</code>](#BSP)  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | Function to call per node. |

<a name="Graph"></a>

## Graph
A graph data structure.
Undirected and using an adjacency list.

**Kind**: global class  

* [Graph](#Graph)
    * [new Graph()](#new_Graph_new)
    * [.addVertex(v)](#Graph+addVertex) ⇒ <code>\*</code>
    * [.addEdge(src, dest)](#Graph+addEdge)
    * [.bfs(startingNode, cb)](#Graph+bfs)
    * [.dfs(startingNode, cb)](#Graph+dfs)
    * [.print()](#Graph+print)

<a name="new_Graph_new"></a>

### new Graph()
constructor

<a name="Graph+addVertex"></a>

### graph.addVertex(v) ⇒ <code>\*</code>
Add a vertex to the graph.
If it already exists, it does nothing.

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Returns**: <code>\*</code> - The added vertex.  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | The vertex to add to the graph. |

<a name="Graph+addEdge"></a>

### graph.addEdge(src, dest)
Add an edge between src and dest.

**Kind**: instance method of [<code>Graph</code>](#Graph)  

| Param | Type | Description |
| --- | --- | --- |
| src | <code>\*</code> | The source node. |
| dest | <code>\*</code> | The destination node. |

<a name="Graph+bfs"></a>

### graph.bfs(startingNode, cb)
A breath first search through the graph, starting at the given node.

**Kind**: instance method of [<code>Graph</code>](#Graph)  

| Param | Type | Description |
| --- | --- | --- |
| startingNode | <code>\*</code> | The node to start the search at. |
| cb | <code>function</code> | A callback for each node in the search. |

<a name="Graph+dfs"></a>

### graph.dfs(startingNode, cb)
A depth first search through the graph.

**Kind**: instance method of [<code>Graph</code>](#Graph)  

| Param | Type | Description |
| --- | --- | --- |
| startingNode | <code>\*</code> | The node to start at. |
| cb | <code>function</code> | A callback for each node in the search. |

<a name="Graph+print"></a>

### graph.print()
For debugging, prints adjacency list.

**Kind**: instance method of [<code>Graph</code>](#Graph)  
<a name="Heap"></a>

## Heap
A heap implemenation.

**Kind**: global class  

* [Heap](#Heap)
    * [new Heap(compare)](#new_Heap_new)
    * [.push(n)](#Heap+push)
    * [.pop()](#Heap+pop) ⇒ <code>\*</code>

<a name="new_Heap_new"></a>

### new Heap(compare)
constructor


| Param | Type |
| --- | --- |
| compare | <code>function</code> | 

<a name="Heap+push"></a>

### heap.push(n)
Push an element onto the heap.

**Kind**: instance method of [<code>Heap</code>](#Heap)  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>\*</code> | The element to push onto the heap. |

<a name="Heap+pop"></a>

### heap.pop() ⇒ <code>\*</code>
Remove and return the ximum element in the heap.

**Kind**: instance method of [<code>Heap</code>](#Heap)  
**Returns**: <code>\*</code> - The ximum element on the heap.  
