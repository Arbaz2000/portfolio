"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import Link from "next/link";
import {
  Play,
  RotateCcw,
  Copy,
  Check,
  Terminal,
  Sparkles,
  Download,
  ArrowLeft,
  Trash2,
  Clock,
  Zap,
} from "lucide-react";

// ─── DSA TEMPLATES ─────────────────────────────────────────────

const TEMPLATES = [
  {
    id: "bubble-sort",
    name: "🔢 1. Bubble Sort",
    description: "Classic O(n²) comparison sort with swap visualization",
    code: `// ═══ Bubble Sort ═══
// Time: O(n²)  |  Space: O(1)  |  Stable: Yes

function bubbleSort(arr) {
  const n = arr.length;
  let swaps = 0;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
        swaps++;
      }
    }
    if (!swapped) break; // optimization: already sorted
    console.log(\`Pass \${i + 1}:\`, [...arr]);
  }

  console.log("\\n✅ Total swaps:", swaps);
  return arr;
}

const data = [64, 34, 25, 12, 22, 11, 90];
console.log("Input:", [...data]);
console.log("\\nSorting...");
const sorted = bubbleSort(data);
console.log("\\nResult:", sorted);`,
  },
  {
    id: "binary-search",
    name: "🔍 2. Binary Search",
    description: "O(log n) search on sorted arrays",
    code: `// ═══ Binary Search ═══
// Time: O(log n)  |  Space: O(1)

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let steps = 0;

  while (left <= right) {
    steps++;
    const mid = Math.floor((left + right) / 2);
    console.log(\`Step \${steps}: checking index \${mid} → value \${arr[mid]}\`);

    if (arr[mid] === target) {
      console.log(\`\\n✅ Found \${target} at index \${mid} in \${steps} steps\`);
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
      console.log("  → target is larger, search right half");
    } else {
      right = mid - 1;
      console.log("  → target is smaller, search left half");
    }
  }

  console.log(\`\\n❌ \${target} not found after \${steps} steps\`);
  return -1;
}

const sorted = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.log("Array:", sorted);
console.log("\\nSearching for 23:");
binarySearch(sorted, 23);
console.log("\\nSearching for 50:");
binarySearch(sorted, 50);`,
  },
  {
    id: "stack",
    name: "📦 3. Stack",
    description: "LIFO data structure with push, pop, peek operations",
    code: `// ═══ Stack Implementation ═══
// Push/Pop/Peek: O(1)

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
    console.log(\`  PUSH → \${item}  |  Stack: [\${this.items}]\`);
  }

  pop() {
    if (this.isEmpty()) {
      console.warn("  ⚠️ Stack underflow!");
      return null;
    }
    const item = this.items.pop();
    console.log(\`  POP  ← \${item}  |  Stack: [\${this.items}]\`);
    return item;
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  get size() {
    return this.items.length;
  }
}

// ── Demo: Balanced Parentheses Checker ──
function isBalanced(str) {
  const stack = new Stack();
  const pairs = { ')': '(', ']': '[', '}': '{' };

  console.log(\`\\nChecking: "\${str}"\`);
  for (const char of str) {
    if ('([{'.includes(char)) {
      stack.push(char);
    } else if (')]}'.includes(char)) {
      if (stack.isEmpty() || stack.peek() !== pairs[char]) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.isEmpty();
}

console.log("── Stack Operations ──");
const s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.pop();
s.push(40);
console.log("\\nTop:", s.peek());
console.log("Size:", s.size);

console.log("\\n── Balanced Parens ──");
console.log("Result:", isBalanced("{[()]}") ? "✅ Balanced" : "❌ Not balanced");
console.log("Result:", isBalanced("{[(])}") ? "✅ Balanced" : "❌ Not balanced");`,
  },
  {
    id: "linked-list",
    name: "🔗 4. Linked List",
    description: "Singly linked list with insert, delete, reverse",
    code: `// ═══ Singly Linked List ═══
// Insert/Delete at head: O(1)  |  Search: O(n)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) curr = curr.next;
      curr.next = node;
    }
    this.size++;
  }

  prepend(val) {
    const node = new Node(val);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  delete(val) {
    if (!this.head) return false;
    if (this.head.val === val) {
      this.head = this.head.next;
      this.size--;
      return true;
    }
    let curr = this.head;
    while (curr.next && curr.next.val !== val) curr = curr.next;
    if (curr.next) {
      curr.next = curr.next.next;
      this.size--;
      return true;
    }
    return false;
  }

  reverse() {
    let prev = null, curr = this.head;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    const vals = [];
    let curr = this.head;
    while (curr) {
      vals.push(curr.val);
      curr = curr.next;
    }
    console.log(vals.join(" → ") + " → null");
  }
}

const list = new LinkedList();
console.log("── Building List ──");
[10, 20, 30, 40, 50].forEach(v => list.append(v));
list.print();

console.log("\\nPrepend 5:");
list.prepend(5);
list.print();

console.log("\\nDelete 30:");
list.delete(30);
list.print();

console.log("\\nReverse:");
list.reverse();
list.print();

console.log("\\nSize:", list.size);`,
  },
  {
    id: "binary-tree",
    name: "🌳 5. Binary Tree Traversal",
    description: "Inorder, preorder, postorder & BFS level-order",
    code: `// ═══ Binary Search Tree + Traversals ═══

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new TreeNode(val);
    if (!this.root) { this.root = node; return; }
    let curr = this.root;
    while (true) {
      if (val < curr.val) {
        if (!curr.left) { curr.left = node; return; }
        curr = curr.left;
      } else {
        if (!curr.right) { curr.right = node; return; }
        curr = curr.right;
      }
    }
  }

  // DFS Traversals
  inorder(node = this.root, result = []) {
    if (node) {
      this.inorder(node.left, result);
      result.push(node.val);
      this.inorder(node.right, result);
    }
    return result;
  }

  preorder(node = this.root, result = []) {
    if (node) {
      result.push(node.val);
      this.preorder(node.left, result);
      this.preorder(node.right, result);
    }
    return result;
  }

  postorder(node = this.root, result = []) {
    if (node) {
      this.postorder(node.left, result);
      this.postorder(node.right, result);
      result.push(node.val);
    }
    return result;
  }

  // BFS
  levelOrder() {
    if (!this.root) return [];
    const result = [], queue = [this.root];
    while (queue.length) {
      const level = [];
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const node = queue.shift();
        level.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      result.push(level);
    }
    return result;
  }
}

const tree = new BST();
[50, 30, 70, 20, 40, 60, 80].forEach(v => tree.insert(v));

console.log("BST created with: [50, 30, 70, 20, 40, 60, 80]");
console.log("\\n── DFS Traversals ──");
console.log("Inorder  (L-Root-R):", tree.inorder());
console.log("Preorder (Root-L-R):", tree.preorder());
console.log("Postorder(L-R-Root):", tree.postorder());
console.log("\\n── BFS ──");
console.log("Level order:", tree.levelOrder());`,
  },
  {
    id: "graph-bfs-dfs",
    name: "📊 6. Graph BFS / DFS",
    description: "Adjacency list graph with breadth-first & depth-first search",
    code: `// ═══ Graph — BFS & DFS ═══

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(v) {
    if (!this.adjacencyList.has(v)) {
      this.adjacencyList.set(v, []);
    }
  }

  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);
    this.adjacencyList.get(v1).push(v2);
    this.adjacencyList.get(v2).push(v1);
  }

  bfs(start) {
    const visited = new Set();
    const queue = [start];
    const order = [];
    visited.add(start);

    while (queue.length) {
      const vertex = queue.shift();
      order.push(vertex);

      for (const neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    return order;
  }

  dfs(start) {
    const visited = new Set();
    const order = [];

    const traverse = (vertex) => {
      visited.add(vertex);
      order.push(vertex);
      for (const neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor)) {
          traverse(neighbor);
        }
      }
    };

    traverse(start);
    return order;
  }

  print() {
    for (const [vertex, edges] of this.adjacencyList) {
      console.log(\`  \${vertex} → [\${edges.join(", ")}]\`);
    }
  }
}

const g = new Graph();
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log("── Adjacency List ──");
g.print();
console.log("\\n── BFS from A ──");
console.log("Order:", g.bfs("A"));
console.log("\\n── DFS from A ──");
console.log("Order:", g.dfs("A"));`,
  },
  {
    id: "dp-fibonacci",
    name: "🧩 7. Dynamic Programming",
    description: "Fibonacci with memoization, tabulation & comparison",
    code: `// ═══ Dynamic Programming — Fibonacci ═══

// 1. Recursive (naive) — O(2^n)
function fibNaive(n) {
  if (n <= 1) return n;
  return fibNaive(n - 1) + fibNaive(n - 2);
}

// 2. Memoized (top-down) — O(n)
function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

// 3. Tabulation (bottom-up) — O(n), O(n) space
function fibTab(n) {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

// 4. Optimized — O(n), O(1) space
function fibOptimal(n) {
  if (n <= 1) return n;
  let prev2 = 0, prev1 = 1;
  for (let i = 2; i <= n; i++) {
    const curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}

// ── Benchmark ──
const N = 35;
console.log(\`Computing Fibonacci(\${N})\\n\`);

console.time("Naive (recursive)");
const r1 = fibNaive(N);
console.timeEnd("Naive (recursive)");
console.log("Result:", r1);

console.time("\\nMemoized (top-down)");
const r2 = fibMemo(N);
console.timeEnd("\\nMemoized (top-down)");
console.log("Result:", r2);

console.time("\\nTabulation (bottom-up)");
const r3 = fibTab(N);
console.timeEnd("\\nTabulation (bottom-up)");
console.log("Result:", r3);

console.time("\\nOptimized O(1) space");
const r4 = fibOptimal(N);
console.timeEnd("\\nOptimized O(1) space");
console.log("Result:", r4);

console.log("\\n── First 20 Fibonacci numbers ──");
console.log(Array.from({ length: 20 }, (_, i) => fibOptimal(i)));`,
  },
  {
    id: "hashmap",
    name: "🗂️ 8. Hash Map",
    description: "Custom hash table with chaining collision resolution",
    code: `// ═══ Hash Map — Chaining ═══

class HashMap {
  constructor(size = 16) {
    this.buckets = new Array(size).fill(null).map(() => []);
    this.size = size;
    this.count = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 31 + key.charCodeAt(i)) % this.size;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    const existing = bucket.find(([k]) => k === key);

    if (existing) {
      existing[1] = value;
      console.log(\`  UPDATE key="\${key}" → \${value}  (bucket \${index})\`);
    } else {
      bucket.push([key, value]);
      this.count++;
      console.log(\`  SET    key="\${key}" → \${value}  (bucket \${index})\`);
    }
  }

  get(key) {
    const index = this._hash(key);
    const entry = this.buckets[index].find(([k]) => k === key);
    return entry ? entry[1] : undefined;
  }

  delete(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    const i = bucket.findIndex(([k]) => k === key);
    if (i !== -1) {
      bucket.splice(i, 1);
      this.count--;
      console.log(\`  DELETE key="\${key}"  (bucket \${index})\`);
      return true;
    }
    return false;
  }

  keys() {
    return this.buckets.flatMap(b => b.map(([k]) => k));
  }

  entries() {
    return this.buckets.flatMap(b => b);
  }
}

console.log("── Building HashMap ──");
const map = new HashMap(8);
map.set("name", "Alice");
map.set("age", 25);
map.set("city", "NYC");
map.set("lang", "JavaScript");
map.set("age", 26); // update

console.log("\\n── Lookups ──");
console.log("name:", map.get("name"));
console.log("age:", map.get("age"));
console.log("missing:", map.get("missing"));

console.log("\\n── Delete ──");
map.delete("city");

console.log("\\nAll keys:", map.keys());
console.log("Count:", map.count);

console.log("\\n── Collision demo (small table) ──");
const tiny = new HashMap(4);
["apple", "banana", "cherry", "date", "elderberry", "fig"].forEach((f, i) => {
  tiny.set(f, i + 1);
});
console.log("\\nEntries:", tiny.entries());`,
  },
  {
    id: "two-pointer",
    name: "📐 9. Two Pointer",
    description: "Classic two-pointer patterns for sorted arrays & strings",
    code: `// ═══ Two Pointer Technique ═══

// 1. Two Sum (sorted array) — O(n)
function twoSum(arr, target) {
  let left = 0, right = arr.length - 1;
  console.log(\`Target sum: \${target}\`);

  while (left < right) {
    const sum = arr[left] + arr[right];
    console.log(\`  L=\${left}(\${arr[left]}) + R=\${right}(\${arr[right]}) = \${sum}\`);

    if (sum === target) {
      console.log(\`  ✅ Found! indices [\${left}, \${right}]\`);
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  console.log("  ❌ No pair found");
  return null;
}

// 2. Palindrome Check — O(n)
function isPalindrome(str) {
  const s = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0, right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

// 3. Remove Duplicates in-place — O(n)
function removeDuplicates(arr) {
  if (arr.length === 0) return 0;
  let slow = 0;
  for (let fast = 1; fast < arr.length; fast++) {
    if (arr[fast] !== arr[slow]) {
      slow++;
      arr[slow] = arr[fast];
    }
  }
  return slow + 1;
}

// 4. Container With Most Water — O(n)
function maxArea(heights) {
  let left = 0, right = heights.length - 1;
  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const height = Math.min(heights[left], heights[right]);
    const area = width * height;
    maxWater = Math.max(maxWater, area);

    if (heights[left] < heights[right]) left++;
    else right--;
  }
  return maxWater;
}

console.log("── 1. Two Sum ──");
twoSum([1, 3, 5, 7, 11, 15], 16);

console.log("\\n── 2. Palindrome ──");
["racecar", "hello", "A man a plan a canal Panama"].forEach(s => {
  console.log(\`  "\${s}" → \${isPalindrome(s) ? "✅ Yes" : "❌ No"}\`);
});

console.log("\\n── 3. Remove Duplicates ──");
const arr = [1, 1, 2, 2, 3, 4, 4, 5];
const newLen = removeDuplicates(arr);
console.log("Unique count:", newLen);
console.log("Array:", arr.slice(0, newLen));

console.log("\\n── 4. Max Water Container ──");
const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log("Heights:", heights);
console.log("Max area:", maxArea(heights));`,
  },
  {
    id: "recursion",
    name: "🔄 10. Recursion Patterns",
    description: "Power set, permutations, tower of Hanoi & more",
    code: `// ═══ Recursion Patterns ═══

// 1. Factorial
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// 2. Power Set (all subsets)
function powerSet(arr, index = 0, current = []) {
  if (index === arr.length) {
    return [current];
  }
  // Include or exclude each element
  return [
    ...powerSet(arr, index + 1, [...current, arr[index]]),
    ...powerSet(arr, index + 1, current),
  ];
}

// 3. Permutations
function permutations(arr) {
  if (arr.length <= 1) return [arr];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    for (const perm of permutations(rest)) {
      result.push([arr[i], ...perm]);
    }
  }
  return result;
}

// 4. Tower of Hanoi
function hanoi(n, from = "A", to = "C", aux = "B") {
  if (n === 0) return;
  hanoi(n - 1, from, aux, to);
  console.log(\`  Move disk \${n}: \${from} → \${to}\`);
  hanoi(n - 1, aux, to, from);
}

console.log("── 1. Factorial ──");
[5, 8, 10].forEach(n => {
  console.log(\`  \${n}! = \${factorial(n)}\`);
});

console.log("\\n── 2. Power Set ──");
const subsets = powerSet([1, 2, 3]);
console.log("Subsets of [1,2,3]:");
subsets.forEach(s => console.log(\`  {\${s.join(", ")}}\`));
console.log("Total subsets:", subsets.length);

console.log("\\n── 3. Permutations ──");
const perms = permutations(["A", "B", "C"]);
console.log("Permutations of [A,B,C]:");
perms.forEach(p => console.log(\`  [\${p.join(", ")}]\`));
console.log("Total:", perms.length);

console.log("\\n── 4. Tower of Hanoi (3 disks) ──");
hanoi(3);`,
  },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────

export default function JSRunnerPage() {
  const [code, setCode] = useState(TEMPLATES[0].code);
  const [selectedTemplate, setSelectedTemplate] = useState(TEMPLATES[0].id);
  const [consoleOutput, setConsoleOutput] = useState<
    { type: string; text: string }[]
  >([]);
  const [isRunning, setIsRunning] = useState(false);
  const [execTime, setExecTime] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const consoleEndRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Scroll console to bottom on new output
  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [consoleOutput]);

  // Listen for messages from the sandboxed iframe
  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (event.data && event.data.type === "console") {
        setConsoleOutput((prev) => [
          ...prev,
          { type: event.data.method, text: event.data.text },
        ]);
      }
      if (event.data && event.data.type === "done") {
        setExecTime(event.data.time);
        setIsRunning(false);
      }
      if (event.data && event.data.type === "error") {
        setConsoleOutput((prev) => [
          ...prev,
          { type: "error", text: event.data.text },
        ]);
        setIsRunning(false);
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  const handleRun = useCallback(() => {
    setConsoleOutput([]);
    setExecTime(null);
    setIsRunning(true);

    // Build sandboxed HTML that captures console and posts back
    const sandboxHTML = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body>
<script>
  // Override console methods to post messages to parent
  const _origConsole = { ...console };
  function stringify(args) {
    return args.map(a => {
      if (typeof a === 'object') {
        try { return JSON.stringify(a, null, 2); }
        catch { return String(a); }
      }
      return String(a);
    }).join(' ');
  }

  ['log', 'warn', 'error', 'info'].forEach(method => {
    console[method] = (...args) => {
      parent.postMessage({ type: 'console', method, text: stringify(args) }, '*');
    };
  });

  console.table = (data) => {
    parent.postMessage({ type: 'console', method: 'log', text: JSON.stringify(data, null, 2) }, '*');
  };

  console.time = (label = 'default') => {
    console._timers = console._timers || {};
    console._timers[label] = performance.now();
  };

  console.timeEnd = (label = 'default') => {
    if (console._timers && console._timers[label]) {
      const ms = (performance.now() - console._timers[label]).toFixed(3);
      parent.postMessage({ type: 'console', method: 'log', text: label + ': ' + ms + 'ms' }, '*');
      delete console._timers[label];
    }
  };

  // Execute user code
  const _start = performance.now();
  try {
    ${code}
  } catch(err) {
    parent.postMessage({ type: 'error', text: '❌ ' + err.name + ': ' + err.message }, '*');
  }
  const _elapsed = performance.now() - _start;
  parent.postMessage({ type: 'done', time: _elapsed }, '*');
<\/script>
</body>
</html>`;

    // Write to iframe
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.srcdoc = sandboxHTML;
    }
  }, [code]);

  const handleTemplateChange = (templateId: string) => {
    const template = TEMPLATES.find((t) => t.id === templateId);
    if (template) {
      setSelectedTemplate(templateId);
      setCode(template.code);
      setConsoleOutput([]);
      setExecTime(null);
    }
  };

  const handleReset = () => {
    handleTemplateChange(selectedTemplate);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `dsa-${selectedTemplate}.js`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleClearConsole = () => {
    setConsoleOutput([]);
    setExecTime(null);
  };

  // Handle Tab key in textarea
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const ta = textareaRef.current;
      if (!ta) return;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const newCode = code.substring(0, start) + "  " + code.substring(end);
      setCode(newCode);
      requestAnimationFrame(() => {
        ta.selectionStart = ta.selectionEnd = start + 2;
      });
    }
    // Ctrl/Cmd + Enter to run
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handleRun();
    }
  };

  return (
    <PageContainer>
      {/* Hidden iframe for sandboxed execution */}
      <iframe
        ref={iframeRef}
        style={{ display: "none" }}
        sandbox="allow-scripts"
        title="JS Runner Sandbox"
      />

      {/* Top Header Bar */}
      <TopBar>
        <div className="title-area">
          <Link href="/resources" className="back-link">
            <ArrowLeft size={18} />
            <span>Back</span>
          </Link>
          <div className="icon-wrapper">
            <Zap size={22} />
          </div>
          <div>
            <h2>⚡ JS Runner — DSA Playground</h2>
            <p>JavaScript sandbox for Data Structures & Algorithms</p>
          </div>
        </div>

        <div className="header-controls">
          {/* Template Selector */}
          <div className="template-selector">
            <Sparkles size={16} className="sparkle-icon" />
            <select
              value={selectedTemplate}
              onChange={(e) => handleTemplateChange(e.target.value)}
            >
              {TEMPLATES.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>

          {/* Run Button */}
          <button
            className={`action-btn run-btn ${isRunning ? "running" : ""}`}
            onClick={handleRun}
            disabled={isRunning}
            title="Run code (Ctrl+Enter)"
          >
            <Play size={16} fill="currentColor" />
            <span>{isRunning ? "Running..." : "Run"}</span>
          </button>

          {/* Reset */}
          <button
            className="action-btn reset-btn"
            onClick={handleReset}
            title="Reset to template"
          >
            <RotateCcw size={16} />
            <span className="hide-mobile">Reset</span>
          </button>

          {/* Copy */}
          <button
            className="action-btn copy-btn"
            onClick={handleCopy}
            title="Copy code"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span className="hide-mobile">{copied ? "Copied" : "Copy"}</span>
          </button>

          {/* Download */}
          <button
            className="action-btn dl-btn hide-mobile"
            onClick={handleDownload}
            title="Download .js file"
          >
            <Download size={16} />
            <span>Save</span>
          </button>
        </div>
      </TopBar>

      {/* Template Description Bar */}
      <DescBar>
        <div className="template-info">
          <span className="template-name">
            {TEMPLATES.find((t) => t.id === selectedTemplate)?.name}
          </span>
          <span className="template-desc">
            {TEMPLATES.find((t) => t.id === selectedTemplate)?.description}
          </span>
        </div>
        <div className="shortcut-hint">
          <kbd>Ctrl</kbd>+<kbd>Enter</kbd> to run
        </div>
      </DescBar>

      {/* Main Workspace */}
      <Workbench>
        {/* Left: Code Editor */}
        <EditorSection>
          <div className="editor-header">
            <span className="label">
              <span className="badge">JS</span>
              <span className="desc">JavaScript Editor</span>
            </span>
            <span className="file-info">
              dsa-{selectedTemplate}.js
            </span>
          </div>
          <textarea
            ref={textareaRef}
            id="js-code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="// Write your JavaScript code here..."
            spellCheck={false}
          />
        </EditorSection>

        {/* Right: Console Output */}
        <ConsoleSection>
          <div className="console-header">
            <div className="console-title">
              <Terminal size={16} />
              <span>CONSOLE OUTPUT</span>
              {execTime !== null && (
                <span className="exec-time">
                  <Clock size={12} />
                  {execTime.toFixed(2)}ms
                </span>
              )}
            </div>
            <button
              className="clear-btn"
              onClick={handleClearConsole}
              title="Clear console"
            >
              <Trash2 size={14} />
              <span>Clear</span>
            </button>
          </div>
          <div className="console-body">
            {consoleOutput.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">▶</div>
                <p>Hit <strong>Run</strong> or press <kbd>Ctrl+Enter</kbd> to execute</p>
                <p className="sub">Console output will appear here</p>
              </div>
            ) : (
              consoleOutput.map((entry, i) => (
                <div key={i} className={`log-line ${entry.type}`}>
                  <span className="log-prefix">
                    {entry.type === "error"
                      ? "✖"
                      : entry.type === "warn"
                      ? "⚠"
                      : "›"}
                  </span>
                  <pre className="log-text">{entry.text}</pre>
                </div>
              ))
            )}
            <div ref={consoleEndRef} />
          </div>
        </ConsoleSection>
      </Workbench>
    </PageContainer>
  );
}

// ─── STYLED COMPONENTS ────────────────────────────────────────

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0f0f14;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: "Courier New", Monaco, monospace;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background: #000000;
  border-bottom: 3px solid #ffd166;
  color: #ffffff;
  gap: 15px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 10px 12px;
    gap: 10px;
  }

  .title-area {
    display: flex;
    align-items: center;
    gap: 14px;

    .back-link {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      background: #ff6b6b;
      color: #ffffff;
      text-decoration: none;
      border: 2px solid #ffffff;
      box-shadow: 3px 3px 0 #ffffff;
      font-weight: 800;
      font-size: 13px;
      transition: all 0.2s ease;

      &:hover {
        background: #ff5252;
        transform: translate(-1px, -1px);
        box-shadow: 4px 4px 0 #ffffff;
      }

      &:active {
        transform: translate(1px, 1px);
      }

      @media (max-width: 768px) {
        padding: 6px 10px;
        font-size: 12px;

        span {
          display: none;
        }
      }
    }

    .icon-wrapper {
      background: #ffd166;
      color: #000000;
      padding: 8px;
      border: 2px solid #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h2 {
      margin: 0;
      font-size: 20px;
      font-weight: 900;
      letter-spacing: 1px;
      color: #ffd166;

      @media (max-width: 768px) {
        font-size: 15px;
      }
    }

    p {
      margin: 2px 0 0 0;
      font-size: 12px;
      color: #a0aec0;

      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .header-controls {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      gap: 6px;
    }
  }

  .template-selector {
    display: flex;
    align-items: center;
    background: #2d3748;
    border: 2px solid #ffd166;
    padding: 6px 10px;
    border-radius: 0;

    .sparkle-icon {
      color: #ffd166;
      margin-right: 6px;
    }

    select {
      background: transparent;
      border: none;
      color: #ffffff;
      font-family: inherit;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      outline: none;

      option {
        background: #1a202c;
        color: #ffffff;
      }

      @media (max-width: 768px) {
        max-width: 130px;
        font-size: 11px;
      }
    }
  }

  .action-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    border: 2px solid #000000;
    font-family: inherit;
    font-weight: 800;
    font-size: 13px;
    cursor: pointer;
    box-shadow: 3px 3px 0 #ffffff;
    transition: all 0.15s ease;

    &:hover {
      transform: translate(-1px, -1px);
      box-shadow: 4px 4px 0 #ffffff;
    }

    &:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #ffffff;
    }

    @media (max-width: 768px) {
      padding: 6px 10px;
      font-size: 12px;
    }

    &.run-btn {
      background: #22c55e;
      color: #000000;
      &:hover {
        background: #16a34a;
      }
      &.running {
        background: #ffd166;
        animation: pulse-run 1s infinite;
      }
    }

    &.reset-btn {
      background: #ffd166;
      color: #000000;
      &:hover {
        background: #ffbe0b;
      }
    }

    &.copy-btn {
      background: #4ecdc4;
      color: #000000;
      &:hover {
        background: #3bbcb3;
      }
    }

    &.dl-btn {
      background: #a78bfa;
      color: #ffffff;
      &:hover {
        background: #8b5cf6;
      }
    }
  }

  .hide-mobile {
    @media (max-width: 768px) {
      display: none;
    }
  }

  @keyframes pulse-run {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }
`;

const DescBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #18181f;
  padding: 8px 24px;
  border-bottom: 2px solid #2d3748;

  @media (max-width: 768px) {
    padding: 6px 12px;
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
  }

  .template-info {
    display: flex;
    align-items: center;
    gap: 12px;

    .template-name {
      color: #ffd166;
      font-weight: 900;
      font-size: 14px;
    }

    .template-desc {
      color: #a0aec0;
      font-size: 12px;
      font-weight: 600;
    }
  }

  .shortcut-hint {
    color: #718096;
    font-size: 11px;
    display: flex;
    align-items: center;
    gap: 4px;

    kbd {
      background: #2d3748;
      border: 1px solid #4a5568;
      padding: 2px 6px;
      font-size: 10px;
      font-weight: 700;
      color: #e2e8f0;
    }
  }
`;

const Workbench = styled.div`
  display: flex;
  flex: 1;
  height: calc(100vh - 115px);
  overflow: hidden;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const EditorSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #0d0d12;
  border-right: 3px solid #ffd166;
  overflow: hidden;

  @media (max-width: 900px) {
    border-right: none;
    border-bottom: 3px solid #ffd166;
    height: 50%;
  }

  .editor-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 14px;
    background: #1a1a24;
    border-bottom: 2px solid #2d3748;

    .label {
      display: flex;
      align-items: center;
      gap: 8px;

      .badge {
        font-size: 11px;
        font-weight: 900;
        padding: 2px 8px;
        letter-spacing: 0.5px;
        background: #ffd166;
        color: #000000;
      }

      .desc {
        color: #a0aec0;
        font-size: 11px;
        font-weight: 600;

        @media (max-width: 768px) {
          display: none;
        }
      }
    }

    .file-info {
      color: #718096;
      font-size: 11px;
      font-family: inherit;
    }
  }

  textarea {
    flex: 1;
    width: 100%;
    background: #0f111a;
    color: #e2e8f0;
    font-family: "Consolas", "Fira Code", "Monaco", "Courier New", monospace;
    font-size: 14px;
    line-height: 1.6;
    padding: 16px 20px;
    border: none;
    outline: none;
    resize: none;
    tab-size: 2;
    white-space: pre;

    &:focus {
      background: #141722;
    }

    @media (max-width: 768px) {
      font-size: 12px;
      padding: 10px 12px;
    }
  }
`;

const ConsoleSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #0a0a0f;
  overflow: hidden;

  @media (max-width: 900px) {
    height: 50%;
  }

  .console-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 14px;
    background: #000000;
    border-bottom: 2px solid #2d3748;
    color: #ffffff;

    .console-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 800;
      font-size: 12px;
      letter-spacing: 1px;
      color: #22c55e;

      .exec-time {
        display: flex;
        align-items: center;
        gap: 4px;
        background: #1a2e1a;
        border: 1px solid #22c55e;
        padding: 2px 8px;
        font-size: 11px;
        color: #4ade80;
        font-weight: 700;
      }
    }

    .clear-btn {
      display: flex;
      align-items: center;
      gap: 4px;
      background: #2d3748;
      border: 1px solid #4a5568;
      color: #a0aec0;
      padding: 4px 10px;
      font-family: inherit;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.15s;

      &:hover {
        background: #4a5568;
        color: #ffffff;
      }
    }
  }

  .console-body {
    flex: 1;
    overflow-y: auto;
    padding: 12px 16px;

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: #4a5568;
      text-align: center;
      gap: 8px;

      .empty-icon {
        font-size: 48px;
        color: #2d3748;
        margin-bottom: 8px;
      }

      p {
        margin: 0;
        font-size: 14px;
        font-weight: 600;

        kbd {
          background: #2d3748;
          border: 1px solid #4a5568;
          padding: 2px 6px;
          font-size: 12px;
          font-weight: 700;
          color: #a0aec0;
        }
      }

      .sub {
        font-size: 12px;
        color: #2d3748;
      }
    }

    .log-line {
      display: flex;
      gap: 8px;
      padding: 3px 0;
      border-bottom: 1px solid #1a1a24;
      font-size: 13px;
      line-height: 1.5;

      &.log,
      &.info {
        color: #e2e8f0;

        .log-prefix {
          color: #22c55e;
        }
      }

      &.warn {
        color: #fbbf24;
        background: rgba(251, 191, 36, 0.05);

        .log-prefix {
          color: #fbbf24;
        }
      }

      &.error {
        color: #ef4444;
        background: rgba(239, 68, 68, 0.08);

        .log-prefix {
          color: #ef4444;
        }
      }

      .log-prefix {
        flex-shrink: 0;
        width: 16px;
        text-align: center;
        font-weight: 900;
        font-size: 14px;
      }

      .log-text {
        margin: 0;
        font-family: "Consolas", "Fira Code", "Monaco", "Courier New",
          monospace;
        white-space: pre-wrap;
        word-break: break-all;
        flex: 1;
      }
    }
  }
`;
