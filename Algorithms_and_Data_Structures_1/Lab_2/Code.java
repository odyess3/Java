package Algorithms_and_Data_Structures_1.Lab_2;

import java.util.*;

public class Code 
{
    public static void main (String [] args)
    {
        Scanner sc = new Scanner(System.in);

        
        String Snum = sc.nextLine();
        int length = String.valueOf(Snum).length();

        int Join = 0;
        int Total = 0;
        

        for (int i = length; i>0; i=i-2)
        {
            //System.out.println(i);

            //System.out.println(Snum.substring(i-1,i));

            Total += Integer.valueOf(Snum.substring(i-1,i));
        }
       //System.out.println(Total);

       int two= 0;
       int finf =0;
       int Total2=0;

        for (int j = length-1; j>0; j=j-2)
        {

            two= Integer.valueOf(Snum.substring(j-1,j))*2;

            if(two>=9)
            {
                two=two-9;
                finf =+ two;
            }

            else
            {
                finf =+ two;
            }

           Total2= Total2+finf;

        }

        //System.out.print(Total2+Total);
        if((Total2+Total)%10==0)
        {
             System.out.print("VALID");
        }
        
        else
        {
            System.out.print("INVALID");
        }
        
    }
}
