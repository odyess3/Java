import java.util.*;
public class odything 
{
    public static void main(String[] args) 
    {
        Scanner annex = new Scanner(System.in);
        int number = annex.nextInt();
        Collatsz(number);
    }

    public static void Collatsz(int number)
    {
        while(number != 1)
        {
            System.out.println(number);
            
            if(number % 2 == 0)
            {
                number /=2;
            }else{
                number = number*3 + 1;
            }
        }
        System.out.println(number);
    }
}

