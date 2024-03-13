public class BinarySearchTree 
{
    Node root;

    public void insert(Node node)
    {
        root =inserHelp(root, node);
    }

    public Node inserHelp(Node root, Node node)
    {
        int data =node.data;

        if(root==null)
        {
            root = node;
            return root;
        }

        else if(data<root.data)
        {
            root.left = inserHelp(root.left, node);
        }

        else
        {
            root.right = inserHelp(root.right, node);
        }
        
    return root;
    }


    public void display()
    {
        displayHelp(root);
    }

    public void displayHelp(Node root)
    {
        if(root != null)
        {
            displayHelp(root.left);
            System.out.println(root.data);
            displayHelp(root.right);
        }
    }

    public int getHeight()
    {
        return getHeighthelp(root);
    }

    public int getHeighthelp(Node node) 
    { 
        if(node ==null)
        {
            return 0;
        }
        
        int LEFT = getHeighthelp(node.left);
        int RIGHT =getHeighthelp(node.right);

        if(LEFT>RIGHT)
        {
            return LEFT+1;
        }
        else
        {
            return RIGHT+1;
        }
    } 


    
    public boolean search(int data)
    {

    }

    public boolean searchHelp(Node root, int data)
    {

    }

    public void remove(int data)
    {

    }

    public Node removeHelp(Node root, int data)
    {

    }

    public int sucessor(Node root)
    {

    }

    public int predscessor(Node root)
    {

    }


}