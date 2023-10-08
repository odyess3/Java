package Algorithms_and_Data_Structures_1.Lab_1;

import java.util.*;

public class Code
{
    public static void main (String [] args)
    {
        Scanner sc = new Scanner(System.in);

        int Exit =243;

        while(Exit ==243)
        {

            System.out.println("Pick 1 to check if a number is prime.\nPick 2 to check a range of numbers that are prime.\nPick 3 to exit");
            
            int option = sc.nextInt();

            if(option ==3)
            {
                break;
            }

            if (option == 1)
            {
                System.out.println("Enter a number ");
                int num = sc.nextInt();

                if(num%2==0||num%3==0||num%5==0)
                {
                    System.out.println(num+" is not a prime number.");
                }

                else if(num==2|| num ==3||num==5 || num==7)
                {
                    System.out.println(num+" is a prime number.");
                }

                else
                {
                    System.out.println(num+" is a prime number.");
                }
            }


            if (option == 2)
            {
                System.out.println("Enter start of the range.");
                int num1 = sc.nextInt();
                System.out.println("Enter end of the range.");
                int num2 = sc.nextInt();
                

                System.out.print("Prime number in range ["+num1+", "+num2+"]: ");

               for (int i = num1; i<=num2; i++)
               {

                if(i%2==0||i%3==0||i%5==0)
                {
                    
                }

                else if(i==2|| i ==3||i==5 || i==7)
                {
                    System.out.print(i+" ");
                }

                else
                {
                    System.out.print(i+" ");
                }

               }

               System.out.println();
            }   
        
        }
    }
}

