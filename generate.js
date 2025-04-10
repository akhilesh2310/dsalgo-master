const fs = require("fs");
const path = require("path");

// Base folder
const baseDir = path.join(__dirname, "3. TopicWisePractice");

// Topics and problems
const topics = {
    "Arrays and Hashing": [
        "Two Sum",
        "Group Anagrams",
        "Top K Frequent Elements",
        "Product of Array Except Self",
    ],
    "Two Pointers": [
        "Valid Palindrome",
        "Three Sum",
        "Container With Most Water",
    ],
    "Sliding Window": [
        "Best Time to Buy and Sell Stock",
        "Longest Substring Without Repeating Characters",
        "Maximum Subarray",
    ],
    "Binary Search": [
        "Binary Search",
        "Search in Rotated Sorted Array",
        "Koko Eating Bananas",
    ],
    "Recursion and Backtracking": [
        "Subsets",
        "Permutations",
        "N-Queens",
    ],
    "Trees and Graphs": [
        "Maximum Depth of Binary Tree",
        "Validate Binary Search Tree",
        "Clone Graph",
        "Number of Islands",
    ],
    "Linked List": [
        "Reverse Linked List",
        "Merge Two Sorted Lists",
        "Detect Cycle in Linked List",
    ],
    "Stack and Queue": [
        "Valid Parentheses",
        "Min Stack",
        "Daily Temperatures",
        "Implement Queue using Stacks",
    ],
    "Dynamic Programming": [
        "Climbing Stairs",
        "House Robber",
        "Longest Increasing Subsequence",
        "Coin Change",
    ],
    "Greedy": [
        "Jump Game",
        "Gas Station",
        "Partition Labels",
    ],
    "Bit Manipulation": [
        "Single Number",
        "Number of 1 Bits",
    ]
};

// Create directories and files
for (const [topic, problems] of Object.entries(topics)) {
    const topicPath = path.join(baseDir, topic);
    if (!fs.existsSync(topicPath)) {
        fs.mkdirSync(topicPath, { recursive: true });
    }

    problems.forEach((problem) => {
        const fileName = `${problem.replace(/[^a-zA-Z0-9]/g, "_")}.js`;
        const filePath = path.join(topicPath, fileName);
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, "// Solution\n");
        }
    });
}

console.log("✅ JS files created successfully!");
