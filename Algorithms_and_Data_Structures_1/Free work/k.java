public class k
{
    public static void main(String[] args) {
        
        System.out.println(recursion(11));
    }

    public static int recursion  (int x)
    {
        if(x%7<2)
        {
            return x%3;
        }
        else
        {
            return x *recursion(x-1)+3;
        }
    }
}