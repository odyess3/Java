import java.util.*;
import java.io.*;
public class Code
{

    public static void main (String[] args)
    {
        File file = new File("D:\\Download\\HashTable.txt");

    int inputSize = 90000;
    String[] input = new String[inputSize];
    try 
    {
        Scanner scan = new Scanner(file);

        for(int i = 0; i < inputSize; i++) 
        {
            input[i] = scan.nextLine();
        }
    scan.close();
    } 
    
    catch (Exception e) 
    {
        System.err.println(e);
    }
    int size=99991;
    Solution mysolution = new Solution();
    String[] hashtable=mysolution.fill(size, input);
    HashTable mytable = new HashTable(hashtable);
    Solution mysolution2 = new Solution(); //prevents cheating  by using memory

    for(int i=0;i<inputSize;i++)
    {
        int rand = (int)(Math.random()*inputSize);
        String temp = input[i];
        input[i]=input[rand];
        input[rand]=temp;
    }

    int total=0;
    for(int i=0;i<inputSize;i++)
    {
        int slot = mysolution2.find(size, mytable, input[i]);
        if(!hashtable[slot].equals(input[i]))
        {
            System.out.println("error!");
        }
    }
    long status=mytable.gettotal();
    System.out.println("Collisions: " + status);
    }

}


class HashTable
{

    private String[] hashTable;
    private long total=0;
    public HashTable(String[] input)
    {
        hashTable = input;
    }  

    public boolean check(int slot, String check)
    {
        if(hashTable[slot].equals(check))
        {
            return true;
        }
    
        else
        {
            total++;
            return false;
        }
    }

    public long gettotal()
    {
        return total;
    }
}

class Solution
{

    public int find(int size, HashTable mytable, String word)
    {
        int pos = Function(word,size);

        while(!mytable.check(pos, word))
        {
        
            pos = (pos+jump(word, size)) %size;

        }

        if(mytable.check(pos, word))
        {
            return pos;
        }

    //fill this in so as to minimize collisions
    //takes in the HashTable object and the word to be found
    //the only thing you can do with the HashTable object is call "check"
    //this method should return the slot in the hashtable wherethe word is
    return 0;
    }

    public String[] fill(int size, String[] array)
    {
        String[] hashtable = new String[size];
        for (String word  : array) 
        {
            int pos = Function(word,size);

            while (hashtable[pos] != null) 
            {
                pos = (pos+jump(word, size)) %size;    
            }

            hashtable[pos] = word;

        }

        return hashtable;

    //takes in the size of the hashtable, and the array of Strings to be placed in the hashtable
    //this should add all the words into the hashtable usingsome system
    //then it should return the hashtable array

    // for(int i=0;i<size;i++)
    // {
    //     hashtable[i]="";
    // }
    // return hashtable;
    }
    
    public int Function(String key, int size)
    {
        int num =0;
        int i=0;

        // for(int i=0; i<key.length(); i++)
        // {
        //     char c = key.charAt(i);
        //     num += ((int)(c-96)*Math.pow(3, i));  
        // }

        for (char c : key.toCharArray())
        {
            num += ((int)(c-96)*Math.pow(5, i++));
        }
        i =0;
        return num%size ;
    }

    public int jump (String key, int size)
    {
        int num =0;
        int i=0;
        int end=0;

        // for(int i=0; i<key.length(); i++)
        // {
        //     char c = key.charAt(i);
        //     num += ((int)(c-96)*Math.pow(3, i));  
        // }

        for (char c : key.toCharArray())
        {
            num += ((int)(c)*Math.pow(3, i++));
            end += num%size*i;
        }

        double k= end-(num%end);
        
        return  (int) k;
    }
}


// public int jump (String key, int size)
//     {
//         int num =0;
//         int i=0;
//         int end=0;

//         // for(int i=0; i<key.length(); i++)
//         // {
//         //     char c = key.charAt(i);
//         //     num += ((int)(c-96)*Math.pow(3, i));  
//         // }

//         for (char c : key.toCharArray())
//         {
//             num += ((int)(c)*Math.pow(3, i++));
//             end = num%size;
//         }

//         i =0;
        
//         return 27033-(num%27033)