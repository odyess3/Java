import java.util.*;
public class Code1 
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        double loan = sc.nextDouble();
        double annual = sc.nextDouble();
        double montly = sc.nextDouble();
        System.out.println(loans(loan, annual, montly));
    }   

    public static int loans (double L, double A, double M) 
    {
        
        if(M>=L)
        {
            return 1;
        }
        else
        {
            return loans(L+(L*(A/100)/12)-M, A, M)+1;
        }
        
    }
}