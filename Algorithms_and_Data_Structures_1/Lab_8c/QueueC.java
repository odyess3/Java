
package Lab_8c;

public  class QueueC
    {
        public String [] queue;
        public int front;
        public int maxSize;
    
        public QueueC(int s) 
        { // constructor
            queue = new String[s];
            front = -1;
            maxSize =s -1;
        }

    
        public void insert(String j) 
        { // put item at rear
        if (!isFull()) 
        {
            
            if(front==-1)
            { // deal with wraparound
                queue[0] = j;
                front++;
            }
            else
            {
                int vowels = countVowels(j);
                int i = front;

                while (i >= 0 && (vowels < countVowels(queue[i])|| (vowels == countVowels(queue[i])&& j.compareTo(queue[i])>0)))
                {
                    queue[i+1] = queue[i];
                    i--;
                }

                queue[i+1] = j;
                front++;
            }
        }
        }


        public void remove() 
        { // take item from front

            if(front>-1)
            {
                front--;
            }
        }

        public String peekFront()
        { // peek at front of queue
            return queue[front];
        }

        public int countVowels(String j)
        {
            int count =0;
            String a = j.toLowerCase();

            for(int i = 0; i<j.length(); i++)
            {
                if(a.charAt(i)=='a' ||a.charAt(i)=='e' || a.charAt(i)=='i' || a.charAt(i)=='o' || a.charAt(i)=='u')
                {
                    count++;
                }
            }
            return count;
        }
    
        // public boolean isEmpty() 
        // { // true if queue is empty
        //     return (nItems==0);
        // }
    
        public boolean isFull() 
        { // true if queue is full
        return (maxSize==front);
        }
    
        // public int size() 
        // { // number of items in queue
        // return nItems;
        // } 

        // public void  show (int u)
        // {
            
        //     int i=0;
        //     int j=0;
            

        //     for ( u=0; u<nItems; u++)
        //     {
        //         System.out.print(queArray[(front + u)%1000] +" ");
        //     }
        // }        

}

    




public static int there (String  in)
{
    boolean [] ar1 = new boolean[100];
    for(int i=0; i<ar1.length; i++)
    {
        ar1[in.charAt(i)]=true;
    }

    int count =0;

    for(int i; i<in.length(); )

}
