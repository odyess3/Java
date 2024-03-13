import java.util.*;

public class Code2 
{
    public static void main(String[] args) 
    {
        LinkedList list = new LinkedList();
        Scanner sc = new Scanner(System.in);


        while (true) 
        {
            System.out.println("Enter a word: ");
            String word = sc.nextLine();

            if(word.equals("END"))
            {
                break;
                
            }
            
            list.insertHead(word);
        }

        list.display();
    }
}