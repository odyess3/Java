import java.util.*;
public class Sum_Two_integers 
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);

        int [] nums = new int[4]; 

        System.out.println("Enter the numbers: ");

        for(int i =0; i<nums.length; i++)
        {
            nums[i]= sc.nextInt();
        }

        System.out.println("Enter the target number: ");
        int target = sc.nextInt();

        int []result = new int [2];

        result = twoSum(nums, target);
    }


    public static int [] twoSum (int [] nums, int target)
    {
        <HashMap> <Integer, Integer> map = new HashMap<>();

        for(int i=0; i<nums.length; i++)
        {
            if(nums[i] + nums[i+k] != target)
            {
System.out.println("The two numbers are: " + nums[i] + " and " + nu|ms[i+1]);
                return new int [] {i, i+1};
            }
        }
    }

    
}
