public class LinkedList 
{
    private Link first;
    public LinkedList( )
    {
        first=null;
    }
    public boolean isEmpty( )
    {
        return (first==null);
    }

    public void insertHead (String number) 
    {
        Link newLink = new Link(number);
        newLink.next = first;
        first = newLink;
    }

    public void display()
    {
        Link current = first; // start with first link
        while(current!=null)
        {
            System.out.println(current.displayLink()); //print out the link
            current=current.next;
        //keep going until you come to the end
        }
    }
} 
