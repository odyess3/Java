import java.util.*;


public class Code2
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);

        int [] ar1 = new int  [sc.nextInt()];

        for(int i =0; i<ar1.length; i++)
        {
            System.out.println(100000);

        

            int low=0;
            int high =nums.length-1;

            while(low<=high)
            {
                int mid = low +(high-low)/2;
                int value=nums[mid];

                if(target>value)
                {
                    low= mid+1;
                }

                if(target<value)
                {
                    high=mid-1;
                }

                if(target==value)
                {
                    return mid;
                }
                
            }
            return-1;

            }

    }
}
