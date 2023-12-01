package Lab_8c;

import java.util.*;
import java.io.*;

public class CodeC
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

        QueueC myqueues = new QueueC(100);
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
            
            else if ((input[i].contains("REMOVE"))) 
            {

                myqueues.remove();
               // System.out.println("gone "+myqueues.peekFront());
                
            }
            

            
            
            
        }
        
    }

}