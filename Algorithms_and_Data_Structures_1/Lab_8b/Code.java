package Lab_8b;

import java.util.*;
import java.io.*;

public class Code
{
    

    public static void main (String[] args)
    {
        int q=0;
        File file = new File("D:\\Download\\queue(2).txt");

        int inputSize = 1000;
        String[] input = new String[inputSize];
        int [] vow = new int [inputSize];
        try 
        {
            Scanner scan = new Scanner(file);

            for(int i = 0; i < inputSize; i++) 
            {
                input[i] = scan.nextLine();
            }

            scan.close();
        }
    
        catch (Exception e)  
        {
            System.err.println(e);
        }

        Queueb myqueues = new Queueb(100);
        for(int i=0; i<inputSize; i++)
        {
            if ((input[i].contains("PEEK"))) 
            {
                System.out.println((i)+"     "+myqueues.peekFront());
            }

            else if(input[i].split("\t")[0].equals("INSERT"))
            {
                
                myqueues.insert(input[i].split("\t")[1]);
                
                
            }
            
            // else if ((input[i].contains("REMOVE"))) 
            // {

            //     myqueues.remove();
            //    // System.out.println("gone "+myqueues.peekFront());
                
            // }
            

            
            //System.out.println((i+1)+" "+myqueues.peekFront());

            myqueues.show(5);
            System.out.println();
            
        }
        
    }


    
    public static class Queueb
    {
        private int maxSize;
        private String[] queArray;
        private int front;
        private int rear;
        private int nItems;
        private int[] vowel;
    
        public Queueb(int s) 
        { // constructor
    
            maxSize = s;
            queArray = new String[maxSize];
            front = 0;
            rear = -1;
            nItems = 0;
            vowel = new int[maxSize];
        }

        public void Vows ()
        {
            for(int i=0; i<maxSize; i++)
            {
                for(int k=0; k<queArray[i].length();k++)
                {
                    if("aeiou".contains(Character.toString(queArray[i].charAt(k))))
                    {
                        return vowel[i]++;
                    }
                }
            }
        }

        public int Case(String text)
        {
            if(text == null)
            {
                return 0;
            }
            int score=0;
            
            for(int i =0;i<text.length();i++)
            {
                char x = Character.toUpperCase(text.charAt(i));
                switch(x)
                {
                    case 'A','E','I','O','U' ->score = score+1;
                }
            }
                return score;
        }
    
        public void insert(String j) 
        { // put item at rear
        
            if(isEmpty())
            { // deal with wraparound
                queArray[0] = j;
                vowel[0] = y;
            }
            else
            {
                int a = nItems;

                if (a>0 && (vowel[y-1] < y))
                {
                    
                    queArray[a] = queArray[a-1];
                    vowel[y] = vowel[y-1];
                   // System.out.println(queArray[a]);
                    a--;
                }
                queArray[a] = j;
                vowel[y] = y;

            }

            
            
            // String temp;
            // for (int i=0; i<nItems; i++)
            // {
            //     for(int a=i+1; a<nItems; a++)
            //     {
            //         if (queArray[(front + i)%1000].compareTo(queArray[(front + a)%1000]) > 0) 
            //         {
            //             // swapping
            //             temp = queArray[(front + i)%1000];
            //             queArray[(front + i)%1000] = queArray[(front + a)%1000];
            //             queArray[(front + a)%1000] = temp;
            //         }
            //     }
            //     System.out.print(queArray[(front + i)%1000]+" ");
                
            // }
            nItems++;
        }

        public void sort()
        {
            
        }
    
        public void remove() 
        { // take item from front
            if(isEmpty())
            {
                return;
            }  //don’t remove if empty
                front= (front+1)%maxSize;
                System.out.println("ahh"+front+" hah");
                nItems--; // one less item
    
        }
    
        public String peekFront()
        { // peek at front of queue
            return queArray[front];
        }
    
        public boolean isEmpty() 
        { // true if queue is empty
            return (nItems==0);
        }
    
        public boolean isFull() 
        { // true if queue is full
        return (nItems==maxSize);
        }
    
        public int size() 
        { // number of items in queue
        return nItems;
        } 

        public void  show (int u)
        {
            
            int i=0;
            int j=0;
            

            for ( u=0; u<nItems; u++)
            {
                System.out.print(queArray[(front + u)%1000] +" ");
            }
        }
        



        

        
    
    }
}
    
