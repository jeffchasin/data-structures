var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.tail !== null) {
      list.tail.next = node;
    }
    list.tail = node;
    if (list.head === null) {
      list.head = node;
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var val = list.head.value;
      list.head = list.head.next;
      return val;
    }
  };

  list.contains = function(target) {
    var doesContain = false;

    var recursiveSearch = function(node) {
      if (node.value === target) {
        doesContain = true;
        return;
      } else if (node.next !== null) {
        recursiveSearch(node.next);
      }
    };

    recursiveSearch(list.head);
    // for (var prop in list) {
    //   //console.log(typeof prop.value);
    //   //console.log(list.head.value);
    //   if (prop.value === target) {
    //     doesContain = true;
    //   }
    // }
    return doesContain;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;


  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

