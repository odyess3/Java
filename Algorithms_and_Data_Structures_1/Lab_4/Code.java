package Algorithms_and_Data_Structures_1.Lab_4;
import java.util.*;

public class Code
{
    public static void main (String [] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Input: ");
        int num1 = sc.nextInt();

        double sum =0;
        int counter=0;

        Random r1 = new Random();

        double estamiate =0;

        for (int i=0; i<num1; i++)
        {
            while (sum<=1)
            {
                double randomvalue = r1.nextDouble();
                sum += randomvalue;
                counter++;
            }

            estamiate += counter / (double) num1;
            counter=0;
            sum=0;
        }


        // sc.close();

        double actual = 2.71828; //the value of e

        double absolueError = (estamiate-actual);

        System.out.println("Actual value of e :"+actual);
        System.out.println(" Estsmated value of e: "+ estamiate);
        System.out.printf(" Absolute error: %.14f", absolueError);
        System.out.println();
        System.out.println(" Absolute error:"+ absolueError);

    }
}

