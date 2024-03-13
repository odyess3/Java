package Y2_Lab1;

import java.util.*;

public class Code 
{
    public static void main(String[] args) 
    {
        
        Scanner sc = new Scanner(System.in);
        Random r = new Random();
        //you are in nth place - will you survive?
        double simulations = 1000000;
        int traitors = sc.nextInt();
        int players = 22;

        double Win =0;

        for(int i = 0; i < simulations; i++)
        {
            int rTraitors = traitors;
            int rPlayers = players;
            int faithful= players-traitors;

            
            while(rTraitors>0 && faithful>0 && rPlayers>2)
            {
                faithful--;

                int faithVote = r.nextInt(faithful+rTraitors);

                if(faithful>rTraitors)
                {
                    if(faithVote<rTraitors)
                    {
                        rTraitors--;
                    }
                    else
                    {
                        faithful--;
                    }
                }
                else
                {
                    faithful--;
                }
                rPlayers=rPlayers-2;
            }
            if (rTraitors>0) 
            {
                Win++;
            }
        }

        System.out.println(Win/1000000 );
    }
}
