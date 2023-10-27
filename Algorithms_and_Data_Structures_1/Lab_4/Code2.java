package Algorithms_and_Data_Structures_1.Lab_4;
import java.util.*;

public class Code2 
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Input: ");
        int num1 = sc.nextInt();

        double sum = 0;
        double incircle =0;

        Random r1 = new Random();

        for (long i=0; i<=num1; i++)
        {
            double randomx = r1.nextDouble();
            double randomy = r1.nextDouble();

            if (randomx*randomx+randomy*randomy<=1) 
            {
                incircle++; 
            }

        }

        double PI = 3.14159265359;

        double Fake_PI = 4.0*(incircle/num1);

        double Error = Math.abs(Fake_PI-PI);

        System.out.println("Actual value of PI :"+ PI);
        System.out.println("Estimated value of PI :" + Fake_PI);
        System.out.println("Abosule error : " + Error );

    }
}
