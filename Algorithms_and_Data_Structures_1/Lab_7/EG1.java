package Algorithms_and_Data_Structures_1.Lab_7;
import java.util.*;
import java.util.Queue;

public class EG1 
{
    public static void main(String[] args) 
    {
        Queue<Double> queue = new PriorityQueue<>(Collections.reverseOrder()); //puts the list in order smallest to biggest
        //Collections.reverseOrder() puts them in reveres order
        queue.offer(3.0);
        queue.offer(2.5);
        queue.offer(4.0);
        queue.offer(1.5);
        queue.offer(2.0);
        

        System.out.println(queue);

        while (!queue.isEmpty()) 
        {
        System.out.println(queue.poll());   //prints it out in order by removeing the one thatys printed out
        }



    }
}
