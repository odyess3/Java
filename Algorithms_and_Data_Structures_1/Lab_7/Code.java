package Algorithms_and_Data_Structures_1.Lab_7;

import java.io.File;
import java.util.LinkedList;
import java.util.Scanner;

public class Code {
    public static void main(String[] args) 
    {
            Queue  queue = new Queue(); 
            

        File file = new File("D:\\Download\\stack.txt");


        int inputSize = 1000;
        String[] input = new String[inputSize];
        try {
            Scanner scan = new Scanner(file);
            
            for(int i = 0; i < inputSize; i++) {
                input[i] = scan.nextLine();

                if (input[i].contains("INSERT") ) 
                {
                    queue.inQueue(input[i].substring(7));
                   // System.out.println(i+". "+input[i]);
                }
                else
                {
                    System.out.println(i+". Deleted "+queue.peak());
                    queue.outQuene();
                }

                
                

            }
            scan.close();
        } catch (Exception e) {
            System.err.println(e);
        }

        queue.outQuene();
        queue.show();
        

    }
}