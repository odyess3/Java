import java.util.Scanner;

public class Code2
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);

        int Base1 = 0;
        boolean g=false;
        boolean k=false;

        int Base2 =0;
        String base="";

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
        
        if (num <=0)
        {
            num*=-1;
        }
        String Snum= Integer.toString(num);

        System.out.println(convert(Snum, Base1, Base2));
    }


    public static String convert (String Snum, int Base1, int Base2)
    {
        String a = Integer.toString(Integer.parseInt(Snum,Base1),Base2);
        return a.toLowerCase();
        
    }


}