package Lab_8;

public  class Queue
{
    private int maxSize;
    private String[] queArray;
    private int front;
    private int rear;
    private int nItems;

    public Queue(int s) 
    { // constructor

        maxSize = s;
        queArray = new String[maxSize];
        front = 0;
        rear = -1;
        nItems = 0;
    }

    public boolean inQueue(String j) 
    { // put item at rear
        if(isFull()) return false; //don’t remove if full
        if(rear == maxSize-1) // deal with wraparound
        rear = -1;
        rear++;
        queArray[rear] = j; // increment rear and insert
        nItems++; // one more item
        return true; //successfully inserted
    }

    public String outQuene() 
    { // take item from front
        if(isEmpty()) return null; //don’t remove if empty
        String temp = queArray[front];// get value, incr front
        front++;
        if(front == maxSize) // deal with wraparound
        front = 0;
        nItems--; // one less item
        return temp;
    }

    public String peak()
    { // peek at front of queue
        return queArray[front];
    }

    public boolean isEmpty() 
    { // true if queue is empty
        return (nItems==0);
    }

    public boolean isFull() 
    { // true if queue is full
    return (nItems==maxSize);
    }

    public int size() 
    { // number of items in queue
    return nItems;
    }

    
}