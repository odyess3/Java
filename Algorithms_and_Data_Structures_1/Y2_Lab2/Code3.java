import java.util.Scanner;

public class Code3 
{
    public static void main(String args[])
    {

        Scanner scan = new Scanner (System. in);

        String attendance = scan.nextLine();

        if(checker (attendance) == true)
        {
            System.out.println("PASS");
        }
        else if(checker(attendance) == false)
        {
            System.out.println("FAIL");
        }
    }

    public static boolean checker (String attendance)
    {
        String failCondition = "LLL";

        int absent = 0;

        String absentee = "A";

        if (attendance.matches(".*LLL.*"))
        {
            return false;
        }
        else if(attendance.matches(".*A.*A.*"))
        {
            return false;
        }
        else
        {
            return true;
        }
    }
}