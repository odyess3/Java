import java.util.Scanner;

public class Lowercase_Letters 
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);

        char [] ar1 = new char [4];

        for(int i =0; i<ar1.length; i++)
        {
            System.out.println("Enter the character: ");
            ar1[i] = sc.nextLine().charAt(0);
        }
        

        System.out.println("Enter the sentences: ");
        String S1 = sc.nextLine();

        int count = 0;


        for(int j =0; j<ar1.length; j++)
        {
            for(int i =0; i<S1.length(); i++)
            {

                if(S1.charAt(i) == ar1[j])
                {
                    count++;
                }
            }
        }

        System.out.println("There are " + count + " lowercase letters in the string");



        

    }
    
}