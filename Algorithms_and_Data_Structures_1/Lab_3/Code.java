package Algorithms_and_Data_Structures_1.Lab_3;

import java.util.*;


public class Code 
{
 public static void main (String [] args)
 {
    Scanner sc = new Scanner(System.in);

    System.out.println("Enter start of the range.");
    int num1 = sc.nextInt();
    System.out.println("Enter end of the range.");
    int num2 = sc.nextInt();

    int count =0;
                

    System.out.println("Prime number in range ["+num1+", "+num2+"]: ");

    for (int i = num1; i<=num2; i++)
    {

        if(i%2==0||i%3==0||i%5==0)
        {
                    
        }

        else if(i==2|| i ==3||i==5 || i==7)
        {
            count++;
        }

        else
        {
            count++;
        }

    }
    System.out.println("Numbers of Prime numbers in the range: "+count);
 }   
}
