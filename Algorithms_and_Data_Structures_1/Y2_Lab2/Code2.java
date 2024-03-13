import java.util.*;
public class Code2 
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        int absent = sc.nextInt();
        int late = sc.nextInt();
        int present = sc.nextInt();
        String word = sc.nextLine();
        System.out.println(attendance(word,absent, late, present));
    }   

    public static boolean attendance (String word ,double A, double L, double P) 
    {
        int pos =0;
        
        if(A>2)
        {
            return false;
        }

        else
        {
            return attendance(word,A, L, P);
        }
        
    }
}