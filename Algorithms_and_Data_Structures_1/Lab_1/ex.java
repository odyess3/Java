import java.util.*;
public class ex
{

    public static void main (String[] args)
    {

        Scanner sc = new Scanner(System.in);
        
        int num1 = sc.nextInt();
        boolean stop = false;

        for(int a =2; a<num1; a++)
        {
            if(num1%a==0)
            {
                stop = true;
            }
        }
        if (stop ==true)
        {
            
        }

        int distance=0;
        boolean prime =true;
        int tempos=num1;
        int tempneg=num1;
        boolean a =true;

        while(a==true)
        {
            prime = true;

            for(int k=2; k<tempos; k++)
            {
                if(tempos%k==0)
                {
                    prime =false;
                }
            }

            if(prime==false)
            {
                tempos++;
            }

            else
            {
                System.out.println(tempos+ "is the closees prime number");
                break;
            }
            
        }


//         for(int i=num1;i<=num2;i++)
//         {
//                         //check through the whole range and test each for divisibility
//             boolean prime=true;

//             for(int j=2;j<i;j++)
//             {
//                 if(i%j==0)
//                 {
//                     prime=false;
//                 }
//             }          
//   //if it hasn't been divided by anything, it's a prime
//             if(prime==true)
//             {
//                 total++;
//             }
//         }
        
//         System.out.println(total);
    }
}