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
        String base="";

        System.out.println("Pick a Base number between 2 and 32!");

        while ( g ==false) 
        {

            Base1 =sc.nextInt();
            if (Base1 <= 32 && Base1 >=2) 
            {
                base = Integer.toString(Base1);
                g=true;
            }
            else
            {
                base="";
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

        String Snum = sc.next();
        int num = Integer.parseInt(Snum);
        if (num <=0)
        {
            num*=-1;
        }

        int result =other_ten(Integer.toString(num), Base1);
        ten_other(result,Base2);

        

    }

    
    public static int other_ten (String s, int b ) 
    {

        int base = 0, pow = 0;
        int[] a = new int[s.length()];

        for (int i = 0; i < s.length(); i++) 
        {
            a[i] = s.charAt(i) - '0'; //Convert into int array
        }

        for (int i = a.length - 1 ; i >= 0 ; i--) 
        {
            base += a[i] * Math.pow(b,pow); //Generalised formula for conversion  
            pow++;  
        }

        return base;
        
    }


    public static void ten_other (int num , int bA)
    {
        // Creating and assigning binary array size
        String[] base = new String[3500];
        int id = 0;

        // Number should be positive
        while (num > 0) 
        {
            base[id++] = Integer.toString(num % bA);
            num = num / bA;
        }

        print(base, id);
    }



    public static void print(String[] binary, int id)
    {
        // Iteration over array
        for (int i = id - 1; i >= 0; i--)
        {
            if(binary[i].equals("10") )
            {
                System.out.print("a");
            }
            else if(binary[i].equals("11") )
            {
                System.out.print("b");
            }
            else if(binary[i].equals("12") )
            {
                System.out.print("c");
            }
            else if(binary[i].equals("13") )
            {
                System.out.print("d");
            }
            else if(binary[i].equals("14") )
            {
                System.out.print("e");
            }
            else if(binary[i].equals("15") )
            {
                System.out.print("f");
            }
            else
            {  
                System.out.print(binary[i] + "");
            }
        }
    }

}
