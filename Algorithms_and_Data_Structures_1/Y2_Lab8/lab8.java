import java.util.*;

public class lab8 {

    static Map<Character, String> huffmanCodes = new HashMap<>();

    public static void main(String[] args)

    {

        Scanner sc = new Scanner(System.in);

        String user = sc.nextLine();

        sc.close();

        // maps the frequencies with thier corresponding letter

        Map<Character, Integer> frequencies = new HashMap<>();

        for (char c : user.toCharArray()) {

            if (Character.isLetter(c)) {

                c = Character.toLowerCase(c);

                frequencies.put(c, frequencies.getOrDefault(c, 0) + 1);

            }

        }

        // Print letter frequencies

        System.out.println("Letter frequencies:");

        for (Map.Entry<Character, Integer> entry : frequencies.entrySet()) {

            System.out.println("'" + entry.getKey() + "' has a frequency of " + entry.getValue());

        }

        // creating trees for each letter and add them to priority queue

        PriorityQueue<Tree> PQ = new PriorityQueue<>();

        for (Map.Entry<Character, Integer> entry : frequencies.entrySet()) {

            Tree tree = new Tree();

            tree.root = new Node();

            tree.root.letter = entry.getKey();

            tree.frequency = entry.getValue();

            PQ.add(tree);

        }

        // joining the trees until only one is left

        while (PQ.size() > 1) {

            Tree tree1 = PQ.poll();

            Tree tree2 = PQ.poll();

            Tree combinedTree = new Tree();

            combinedTree.root = new Node();

            combinedTree.frequency = tree1.frequency + tree2.frequency;

            combinedTree.root.leftChild = tree1.root;

            combinedTree.root.rightChild = tree2.root;

            PQ.add(combinedTree);

        }

        // huffman tree is the only tree left

        Tree huffmanTree = PQ.poll();

        generateHuffmanCodes(huffmanTree.root, "");

        // Print Huffman codes

        System.out.println("\nHuffman Codes:");

        for (Map.Entry<Character, String> entry : huffmanCodes.entrySet()) {

            System.out.println(entry.getKey() + ": " + entry.getValue());

        }

    }

    // recursion to get huffman codes

    static void generateHuffmanCodes(Node node, String code) {

        if (node != null) {

            // if the node is a leaf add its huffman code to hash map

            if (node.letter != '\0') {

                huffmanCodes.put(node.letter, code);

            } else {

                // go left with '0'

                generateHuffmanCodes(node.leftChild, code + "0");

                // go right with '1'

                generateHuffmanCodes(node.rightChild, code + "1");

            }

        }

    }

}

class Tree implements Comparable<Tree> {

    public Node root;

    public int frequency = 0;

    public Tree() {

        root = null;

    }

    public int compareTo(Tree object) {

        return frequency - object.frequency;

    }

}

class Node {

    public char letter;

    public Node leftChild;

    public Node rightChild;

}