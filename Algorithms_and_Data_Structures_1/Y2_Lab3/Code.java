package Y2_Lab3;

import java.util.*;

public class Code 
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        Queue<Character> queue1 = new LinkedList<>();
        Queue<Character> queue2 = new LinkedList<>();
        
        String word1 = sc.nextLine();
        String word2 = sc.nextLine();

        char [] ar1 = word1.toCharArray();
        char [] ar2 = word2.toCharArray();
        char [] ar3 = new char[word1.length()+word2.length()];

        for(char c: ar1)
        {
            queue1.add(c);
        }

        for(char d : ar2)
        {
            queue2.add(d);
        }

        int j=0;

        while (!queue2.isEmpty() || !queue1.isEmpty()) 
        {
            if (!queue1.isEmpty()) 
            {
                ar3[j++] += queue1.remove();
            }

            if (!queue2.isEmpty()) 
            {
                ar3[j++] += queue2.remove();
            }
        }

        Arrays.sort(ar3);

        System.out.println(ar3);
    }
}
