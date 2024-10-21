import java.util.*;

public class palindromes 
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);

        String S1 = sc.nextLine();

        for(int i=0; i<S1.length(); i++)
        {
            if(S1.charAt(i) != S1.charAt(S1.length()-1-i))
            {
                System.out.println("Not a palindrome");
                return;
            }
        }
    }
}