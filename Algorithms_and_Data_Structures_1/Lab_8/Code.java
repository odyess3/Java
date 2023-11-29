package Lab_8;

import java.io.File;
import java.util.LinkedList;
import java.util.Scanner;

public class Code {
    public static void main(String[] args) 
    {
        Queue  queue = new Queue(1000); 
            
        File file = new File("D:\\Download\\queue.txt");

        int k=0;
        
        int inputSize = 1000;
        String[] input = new String[inputSize];
        int [] vowels = new int [inputSize];

        int [] total = new int [11];
        String [] peeks = new String [11];

        int temp = 0;

        try {
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
            //sort(vowels, input);
        }    

        
        for (int i=0; i<inputSize; i++)
        {
            if (input[i].contains("INSERT") ) 
                {
                    for(int j=7; j<input[i].length(); j++)
                    {
                        if("aeiou".contains(Character.toString(input[i].charAt(j))))
                        {
                            ;
                        }
                    }
                    queue.inQueue(input[i].substring(7));
                    //System.out.println(i+". "+input[i]+ "   "+ vowels[i] );
                }

            else if (input[i].contains("REMOVE")) 
            {
                //System.out.println(i+". Deleted    "+queue.peak());
                queue.outQuene();
            }


            if((input[i].contains("PEEK")))
            {
                peeks[k] = queue.peak();

                for(int p =0; p< queue.peak().length(); p++)
                {
                    if("aeiou".contains(Character.toString(peeks[k].charAt(p))))
                    {
                        total[k]++;
                    }
                }

               // System.out.println(peeks[k]+" "+total[k]);
                k++;
            }


            
        }
        sort(total, peeks);
    }



    public static void sort (int [] arrayName, String [] realarray)
    {
        int temp;
        String temp2;

        for (int i = 0; i < arrayName.length-1; i++)
        {
            if(arrayName[i] > arrayName[i+1])
            {
                temp=arrayName[i];
                temp2 = realarray[i];

                
                arrayName[i]=arrayName[i+1];
                realarray[i] = realarray[i+1];

                arrayName[i+1]=temp;
                realarray[i+1]=temp2;
                i=-1;
            }
        }

        for(int s=0; s<arrayName.length; s++)
        {
            //System.out.println(realarray[s]);
            //System.out.println(arrayName[s]);

        }

        


        int n=0;
        String temp3;

        for(int k=1; k<realarray.length; k++)
        {
            if (arrayName[k] == arrayName[k-1]) 
            {
                
                for (int j = k; j < realarray.length-j; j++) 
                {
                    for (int i = j + 1; i < realarray.length-i; i++) 
                    {
                  // comparing adjacent strings
                        if (realarray[i].compareTo(realarray[j]) < 0) 
                        {
                            temp3 = realarray[j];
                            realarray[j] = realarray[i];
                            realarray[i] = temp3;
                        }
                    }
                }
                System.out.println(realarray[k]);
               // System.out.println(arrayName[k]);
            }
            else
            {
            
                System.out.println(realarray[k]);
            }
            
        }
    }
}



//  for(int i = 0; i < inputSize; i++) 
//             {
//                 input[i] = scan.nextLine();


//                 if (input[i].contains("INSERT") ) 
//                 {
//                     for(int j=7; j<input[i].length(); j++)
//                     {
//                         if("aeiou".contains(Character.toString(input[i].charAt(j))))
//                         {
//                             vowels[i]++;
//                         }
//                     }
//                     queue.inQueue(input[i].substring(7));
//                     System.out.println(i+". "+input[i]+ "   "+ vowels[i] );
//                 }

//                 else if (input[i].contains("REMOVE")) 
//                 {
//                     //System.out.println(i+". Deleted    "+queue.peak());
//                     queue.outQuene();
//                 }
//             }