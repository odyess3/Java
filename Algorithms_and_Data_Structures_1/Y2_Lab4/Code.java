import java.util.*;

public class Code 
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        LinkedList<String> list1 = new LinkedList<String>();
        String end = "END";


        while (true) 
        {
            System.out.println("Enter a word: ");
            String word = sc.nextLine();
            list1.push(word);

            if(word.equalsIgnoreCase("END"))
            {

                list1.poll();
                break;
            }
        }

        System.out.println(list1);
        
    }
}
