import java.util.Scanner;

public class Code 
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);

        int Base1 = 0;
        boolean g=false;
        boolean k=false;

        int Base2 =0;

        System.out.println("Pick a Base number between 2 and 32!");

        while ( g ==false) 
        {

            Base1 =sc.nextInt();
            if (Base1 <= 32 && Base1 >=2) 
            {
                g=true;
            }
            else
            {
                System.out.println("Try Again");
            }
        }

        System.out.println("Pick a Base number between 2 and 32 that "+ Base1 +" will turn into.");

        while ( k ==false) 
        {

            Base2 =sc.nextInt();
            if (Base2 <= 32 && Base2 >=2) 
            {
                k=true;
            }
            else
            {
                System.out.println("Try Again");
            }
        }

        System.out.println("Now chose a number to convert");
        int num = sc.nextInt();

        covert1(num,Base1);

    }

    public static void covert1 (double  num , double base)
    {
        int Rnum = 0;
        int Tnum=0;
        double remain =0;
        String [] bases = new String [35];
        int id =0;


        for(int i=0; i<((int) Math.round(base));i++)
        {
            num=num/base;
            Rnum = (int) Math.floor(num);
            num-=Rnum;

            bases[i] = Rnum*base;
        }
        
    }


    public static void convert (int num)
    {
        // Creating and assigning binary array size
        int[] base = new int[35];
        int id = 0;

        // Number should be positive
        while (num > 0) 
        {
            base[id++] = num % 2;
            num = num / 2;
        }

        print(base, id);
    }

    public static void print(int[] binary, int id)
    {
        // Iteration over array
        for (int i = id - 1; i >= 0; i--)
            System.out.print(binary[i] + "");
    }

}
