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

     if(num1>num2)
     {
         int num3 = num2;
         num2=num1;
         num1=num3;
    }


    int answrs = way(num2,num1);
    System.out.print(answrs);


    // int count =0;
                

    // System.out.println("Prime number in range ["+num1+", "+num2+"]: ");

    // // for (int i = num1; i<=num2; i++)
    // // {

    // //     if(i==2|| i ==3||i==5 || i==7)
    // //     {
    // //         count++;
    //     }

    //     else if(i%2==0||i%3==0||i%5==0||i==1)
    //     {
                    
    //     }

    //     else
    //     {
    //         count++;
    //     }



        // for(int i= num1; i<=num2; i++ )
        // {
        //     if(i<=1)
        //     {
        //         continue;
        //     }

        //     boolean isPrime =true;

        //     for(int j=2; j<= i/2; j++)
        //     {
        //         if(i%j==0)
        //         {
        //             isPrime =false;
        //             break;

        //         }
        //     }

        //     if(isPrime)
        //     {
        //        System.out.print(i+" ");
        //         count++;
        //     }
        // }
        // System.out.println();
        // System.out.print(count);

    }

    public static int way(int i, int q)
    {
        int count =0;
        boolean Prime[] = new boolean [i +1];

        for (int d =0; d<=i; d++)
        {
            Prime[d] = true;
        }

        for(int j =2; j*j <=i; j++)
        {
            if (Prime[j] == true)
            {
                for(int d =j*j; d<=i; d +=j )
                {
                    Prime[d] =false;
                }
            }
        }

        for(int d = q; d <= i; d++)
        {
            
            
            if(Prime[d] ==true)
            {
                count++;
                
            }
            
        }
        return count;
        
    }


   
     
}   
