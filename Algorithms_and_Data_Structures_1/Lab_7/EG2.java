package Algorithms_and_Data_Structures_1.Lab_7;
import java.util.*;
import java.util.Queue;

public class EG2 
{
    public static void main(String[] args) 
    {
    Scanner sc = new Scanner(System.in);

    Queue<String> queue = new LinkedList<String>(); 

    queue.offer("Karen");
    queue.offer("Chad");
    queue.offer("Steve");
    queue.offer("Harold");


   // System.out.println(queue); prints all values of the queue in order
    //System.out.println(queue.peek()); gives you the 1st thing
    //System.out.println(queue.isEmpty()); GIves you the size of the queue
    //System.out.println(queue.size()); gives either true ot false 

    //System.out.println(queue.contains("Harold")); gives true or false to show if Harold in the queue

    //queue.poll(); removes the 1st value in line

    //queue.add("ody"); adds a value to the end
    queue.remove(); //removes the 1st value in line

    
    System.out.println(queue);
        
    }    
}
