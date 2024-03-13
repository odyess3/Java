import java.util.Scanner;

import Java.util.*;

public class Code2 
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);

        String word1 =sc.nextLine();
        String word2 = sc.nextLine();

        char [] ar1 = word1.toCharArray();
        char [] ar2 = word2.toCharArray();
        char [] ar3 = new char [ar1.length+ar2.length];

        for(int i=0; i<word1.length(); i++)
        {
            ar3[i] = ar1[i];
        }

        for(int i=0; i<word2.length(); i++)
        {
            ar3[i+word2.length()-1]=ar2[i];
        }

        mergesort(ar3);





    }

    public static void mergesort (int[] ar1)
    {
        int inputlength = ar1.length;

        if(inputlength<2)
        {
            return;
        }

        int midIndex = inputlength / 2;
        int [] leftHalf = new int[midIndex];
        int [] rightHalf = new int [inputlength-midIndex];

        for(int i =0; i<midIndex; i++)
        {
            leftHalf[i] = ar1[i];

        }

        for(int i =midIndex; i<inputlength; i++)
        {
            rightHalf[i-midIndex] = ar1[i];
            
        }

        mergesort(leftHalf);
        mergesort(rightHalf);

        merge(ar1, leftHalf, rightHalf);
    }

    public static void merge (int[] ar1, int[] leftHalf, int [] rightHalf) 
    {
        int leftSize = leftHalf.length;
        int rightSize = rightHalf.length;

        int i=0, j=0, k=0;

        while (i<leftSize && j< rightSize) 
        {
            if (leftHalf[i] <= rightHalf[j]) 
            {
                ar1[k] = leftHalf[i];
                i++;
            }
            else
            {
                ar1[k]=rightHalf[j];
                j++;
            }
            k++;

        }

        while (i<leftSize) 
        {
            ar1[k] = leftHalf[i];
            i++;
            k++;
        }

        while (j<rightSize) 
        {
            ar1[k] = leftHalf[j];
            j++;
            k++;
        }
    }
}
