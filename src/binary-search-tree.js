const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
 *
 *     root — вернуть корневой узел дерева
 *     add(data) — добавить узел в data дерево
 *     has(data) — возвращает true, если узел с data существует в дереве и false в противном случае
 *     find(data) — возвращает узел с data узлом if с dataexists в дереве и null в противном случае
 *     remove(data) — удаляет узел с the dataиз дерева, если узел с the dataсуществует
 *     min — возвращает минимальное значение, хранящееся в дереве (или nullесли дерево не имеет узлов).
 *     max — возвращает максимальное значение, хранящееся в дереве (или nullесли дерево не имеет узлов).
 *
*/

class BinarySearchTree {

  constructor() {
    this.mainNode = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    return this.mainNode;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let newNode = {
      data: data,
      left: null,
      right: null,
    };

    if (this.mainNode === null) {
      this.mainNode = newNode;
    } else {
      insertNode(this.mainNode, newNode);
    }

    function insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    function search(findData, node) {
      if (node === null) {
        return false;
      } else if (findData === node.data) {
        return true;
      } else if (findData < node.data) {
        return search(findData, node.left);
      } else if (findData > node.data) {
        return search(findData, node.right);
      }
    }

    return search(data, this.mainNode);
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    function searchData(findData, node) {
      if (node === null) {
        return null;
      } else if (findData === node.data) {
        return node;
      } else if (findData < node.data) {
        return searchData(findData, node.left);
      } else if (findData > node.data) {
        return searchData(findData, node.right);
      }
    }

    return searchData(data, this.mainNode);
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    function removeNode(node, data) {
      if (node === null) {
        return null;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          node === null;
        }

        if (node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        }

        let newNode = minNode(node.right);
        node.data = newNode.data;
        node.right = removeNode(node.right, newNode.data);
        return node;
      }
    }

    function minNode(node) {
      if (node.left === null) {
        return node;
      } else {
        return minNode(node.left);
      }
    }

    removeNode(this.mainNode, data);
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    function minData(node) {
      if (node.left === null) {
        return node.data;
      } else {
        return minData(node.left);
      }
    }

    return minData(this.mainNode);
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    function maxData(node) {
      if (node.right === null) {
        return node.data;
      } else {
        return maxData(node.right);
      }
    }

    return maxData(this.mainNode);
  }
}

module.exports = {
  BinarySearchTree
};