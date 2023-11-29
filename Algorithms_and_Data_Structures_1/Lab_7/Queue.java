package Lab_7;

public class Queue 
{
    String queue[] = new String [1000];
    int size;
    int front;
    int rear;
    int nItems;

    public void inQueue (String data)
    {
        queue[rear] = data;
        rear = (rear +1)%1000;
        size = size+1;
    }

    public void show()
    {
        System.out.println("Elements  :");
        for(int i=0; i<size; i++)
        {
            System.out.println(queue[(front + i)%1000] +" ");
        }

    }

    public String outQuene()
    {
        String data = queue[front];
        front = (front+1)%1000;
        size=size-1;

        return data;
    }

    public String peak()
    {
        String data = queue[front];
        return data;
    }

    


}
