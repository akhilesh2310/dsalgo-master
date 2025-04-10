#!/bin/bash

echo "📦 Moving folders into topic-wise subfolders..."

for folder in *; do
  if [ -d "$folder" ]; then
    case "$folder" in
      anagrams|arrayReveresed|arraySuffle|chunk|maxChar|merge|oddsGreaterThan100|twoSum)
        target="3. TopicWisePractice/Arrays and Hashing"
        ;;
      reverseInt|reverseString|vowels|palindrome|capitalize)
        target="3. TopicWisePractice/Strings"
        ;;
      binarySearch|linearSearch)
        target="3. TopicWisePractice/Binary Search"
        ;;
      BinaryHeap|priorityQueue)
        target="3. TopicWisePractice/Heaps"
        ;;
      sorting|merge)
        target="3. TopicWisePractice/Sorting"
        ;;
      binarySearch)
        target="3. TopicWisePractice/Binary Search"
        ;;
      caesarCipher|stringPatternSearch)
        target="3. TopicWisePractice/Recursion and Backtracking"
        ;;
      stack|queue|steps)
        target="3. TopicWisePractice/Stack and Queue"
        ;;
      linked\ -\ list|LinkedList)
        target="3. TopicWisePractice/Linked List"
        ;;
      Tree|BinarySearchTree|Graph)
        target="3. TopicWisePractice/Trees and Graphs"
        ;;
      pyramid|diagrams)
        target="3. TopicWisePractice/Dynamic Programming"
        ;;
      last\ month)
        target="3. TopicWisePractice/Greedy"
        ;;
      *)
        echo "❌ No matching topic for '$folder' — skipping."
        continue
        ;;
    esac

    echo "✅ Moving '$folder' → '$target'"
    mkdir -p "$target"
    mv "$folder" "$target/"
  fi
done

echo "✅ All done!"
