var Trie = function() {
  this.root = {};
};

Trie.prototype.insert = function(word) {
  let node = this.root;

  // word

  for (let c of word) {
    if (node[c] == null) node[c] = {}; // w: {}
    node = node[c]; // {w: {} } = {}
  }
  node.isWord = true;
};

Trie.prototype.traverse = function(word) {
  let node = this.root;

  for (let c of word) {
    node = node[c];
    // console.log(node);
    if (node == null) return null
  }
  return node;
};

Trie.prototype.search = function(word) {
  let node = this.traverse(word);

  return node !== null && node.isWord === true;
};

Trie.prototype.startsWith = function(prefix) {
  let node = this.traverse(prefix);

  return node !== null;
};



var obj = new Trie()
obj.insert('word')
obj.search('word')