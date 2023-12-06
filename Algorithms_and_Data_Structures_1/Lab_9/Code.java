package Lab_9;

import java.util.*; 
import java.io.*; 


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
        
        //fill this in so as to minimize collisions 
        //takes in the HashTable object and the word to be found 
        //the only thing you can do with the HashTable object is call "check" 
        //this method should return the slot in the hashtable where the word is 
        
        int pos = Function(word,size);

        while(mytable.check(pos, word))
        {
            if(mytable.check(pos, word) )
            {
                return pos;
            }
            pos = (pos+1) %size;
            
        }


        return -1; 
    } 
    
    public String[] fill(int size, String[] array)
    { 
        
        //takes in the size of the hashtable, and the array of Strings to be placed in the hashtable 
        //this should add all the words into the hashtable using some system 
        //then it should return the hashtable array 
        String[] hashTable = new String[size]; 


            
            for (String word  : array) 
            {
                int pos = Function(word,size);

                while (hashTable[pos] != null) 
                {
                    pos = (pos+1) %size;
                    
                }

                hashTable[pos] = word;
            }

            return hashTable;

            // int hashi = (Math.floorMod(hash.hashCode(),90000));

            // hashtable[i]=Integer.toString(hashi); 
            
            // while (hashtable[hashi] == null) 
            // {
            //     hashi++;
            //     hashi%= size;
            // }
    }
    
    public int Function(String key, int size)
    {
        int num =0;
        for (char c : key.toCharArray())
        {
            num += (int) c;
        }
        return num %size;
    }
} 


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
            int slot = mysolution.find(size, mytable, input[i]); 

            if(slot != -1 && !hashtable[slot].equals(input[i]))
            { 
                System.out.println("error! "); 
            }

        } 
        long status=mytable.gettotal(); 
        System.out.println("Collisions: " + status); 
    } 
    
} 