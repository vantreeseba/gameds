A bunch of random utils for game development in js.

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
