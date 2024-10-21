import java.util.Scanner;

public class Lowercase_Vowels 
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);

        String S1 = sc.nextLine();
        int count = 0;

        for(int i =0; i<S1.length(); i++)
        {
            if(S1.charAt(i) == 'a' || S1.charAt(i) == 'e' || S1.charAt(i) == 'i' || S1.charAt(i) == 'o' || S1.charAt(i) == 'u')
            {
                count++;
            }
        }

        System.out.println("There are " + count + " lowercase vowels in the string");

    }
}