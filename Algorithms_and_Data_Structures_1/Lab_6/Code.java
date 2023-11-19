package Algorithms_and_Data_Structures_1.Lab_6;
import java.util.*;

import javax.swing.plaf.basic.BasicInternalFrameTitlePane.SystemMenuBar;


public class Code 
{
    public static void main(String[] args) 
    {
        final long startTime = System.nanoTime();

        int total=0;
        Scanner sc = new Scanner(System.in);
        int wordNo =sc.nextInt();

        String [] words = new String [wordNo];
        int [] postiton = new int [wordNo];

        for(int i=0; i<words.length; i++)
        {
            words[i] =sc.next().toLowerCase();


            for(int j =0; j<words[i].length(); j++)
            {
                if (words[i].charAt(j)=='a'||words[i].charAt(j)=='e'||words[i].charAt(j)=='i'||words[i].charAt(j)=='o'||words[i].charAt(j)=='u'||words[i].charAt(j)=='l'||words[i].charAt(j)=='n'||words[i].charAt(j)=='s'||words[i].charAt(j)=='t'||words[i].charAt(j)=='r') 
                {
                    total=total+1;
                }
                else if (words[i].charAt(j)=='d'||words[i].charAt(j)=='g') 
                {
                    total=total+2;
                }
                else if (words[i].charAt(j)=='b'||words[i].charAt(j)=='c'||words[i].charAt(j)=='m'||words[i].charAt(j)=='p') 
                {
                    total=total+3;
                }
                else if (words[i].charAt(j)=='f'||words[i].charAt(j)=='h'||words[i].charAt(j)=='v'||words[i].charAt(j)=='w'||words[i].charAt(j)=='y') 
                {
                    total=total+4;
                }
                else if (words[i].charAt(j)=='k') 
                {
                    total=total+5;
                }
                else if (words[i].charAt(j)=='j'||words[i].charAt(j)=='x') 
                {
                    total=total+8;
                }
                else if(words[i].charAt(j)=='q'||words[i].charAt(j)=='z')
                {
                    total=total+10;
                }
            }
            postiton[i]=total;
            total=0;
        }

        sort(postiton, words);

        final long dur = System.nanoTime()-startTime;
        //System.out.println(dur/1000000000);

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

        int n =0;
        String temp3;


        for(int k=0; k<realarray.length; k++)
        {
            if (realarray[k] == realarray[k]) 
            {
                for (int j = 0; j < realarray.length; j++) 
                {
                    for (int i = j + 1; i < realarray.length; i++) 
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
                System.out.println(arrayName[k]);
            }
            else
            {
               // System.out.println(realarray[k]);
                System.out.println(arrayName[k]);
            }
            
        }

    }
    
}
