package Lab_8;
import java.util.*;

public class Queue 
{
    private int maxSize;
    private String [] queArray;
    private int front;
    private int rear;
    private int nItems;

    public Queue(int s)
    {
        maxSize =s;
        queArray = new String[maxSize];
        front = 0;
        rear = -1;
        nItems = 0;
    }

    // public void  inQueue (String  item)
    // {
    //     if(nItems < maxSize){

    //         //elements[positionToInsert] = item;
    //         if(nItems == 0){
    //             queArray[0] = item;
    //         }
    //         else{
    //             String [] elements2= new String[maxSize];
    //             elements2[0]=item;

    //             for(int i = 0; i < nItems; i++){
    //                 elements2[i+1] = queArray[i];
    //             }
    //             queArray = elements2;
    //         }

    //         nItems++;
    //     }
    // }

    public boolean inQueue (String j)
    {
        if (isFull())
        {
            return false;
        }
        if (rear==maxSize-1)
        {
            rear=-1;
        }
        rear++;
        queArray[rear] = j;
        nItems++;
        return true;
    }

    public String outQuene()
    {
        if(isEmpty())
        {
            return null;
        }
        String temp = queArray[front];
        front++;
        if(front ==maxSize)
        {
            front =0;
        }
        nItems--;
        return temp;
        
    }
    
    // public void insert(String item) 
    // {
    //     size=size+1;
    //         int j = rear;

    //         while (j>0 &&  (queue[j-1].compareTo(item) > 0))
    //         {
    //             queue[j] = queue[j-1];
    //             j--;
    //         }
    //         queue[j] = item;
    //         rear = (rear +1)%1000;
            
    // }

    

    public String peak()
    {
        return queArray[front];
    }

    public boolean isEmpty()
    {
        return (nItems==0);
    }

    public boolean isFull()
    {
        return (nItems==maxSize);
    }

    public int size()
    {
        return nItems;
    }

    public int Front()
    {
        return front;
    }

   


}
