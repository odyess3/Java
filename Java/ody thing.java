public class odything 
{
    public static void main(String[] args) 
    {
        int number =10;

        while(number != 1)
        {
            System.out.println(number);
            
            if(number % 2 == 0)
            {
                number /=2;
            }
            else
            {
                number *= 3 + 1;
            }
        }
    }   
    
}
