PEEKS give the following:
platforms
kazakhstan
collecting
civic
companies
decorating
enzyme
admin
alcohol
ministry
import java.util.*;
import java.io.*;
public class PriorityQueue{


 public static void main (String[] args){
 File file = new File("C:\\ queue.txt");

 int inputSize = 1000;
 String[] input = new String[inputSize];
 try {
 Scanner scan = new Scanner(file);

 for(int i = 0; i < inputSize; i++) {
 input[i] = scan.nextLine();
 }
 scan.close();
 } catch (Exception e) {
 System.err.println(e);
 }

 PQ myqueue = new PQ(100);
 for(int i=0; i<inputSize; i++){
 if(input[i].split("\t")[0].equals("INSERT")){
 myqueue.insert(input[i].split("\t")[1]);
 } else if(input[i].split("\t")[0].equals("REMOVE")){
 myqueue.remove();
 } else {
 System.out.println(myqueue.peekFront());
 }
 }
 }




 public static class PQ{
 private int maxSize;
 private String[] queArray;
 private int nItems;
 public PQ(int s) { // constructor

 maxSize = s;
 queArray = new String[maxSize];
 nItems = 0;
 }



 public void insert(String item) { // insert item
 if(!isFull()){
 int j = nItems; // start at end

 while(j > 0 && countvowels(queArray[j-1],item)==true){ // while
new item larger
 queArray[j] = queArray[j-1]; // shift upward
 j--; // decrement j
 }
 queArray[j] = item; // insert it

 nItems++; // increase items
 }
 }

 public String remove() { // take item from front of queue
 if(isEmpty()) return null; //don’t remove if empty
 String temp = queArray[nItems-1];
 nItems--; // one less item
 return temp;
 }

 public String peekFront(){ // peek at front of queue
 if(isEmpty()) return null;
 return queArray[nItems-1];
 }

 public boolean isEmpty() { // true if queue is empty

 return (nItems==0);
 }

 public boolean isFull() { // true if queue is full

 return (nItems==maxSize);
 }

 public int size() { // number of items in queue

 return nItems;
 }


 public boolean countvowels (String first, String second){
 int firsttotal=0;
 int secondtotal=0;
 char[] targets ={'a','e','i','o','u'};
 for(int i=0;i<first.length();i++){
 for(int j=0;j<targets.length;j++){
 if(first.charAt(i)==targets[j]){
 firsttotal++;
 }
 }
 }
 for(int i=0;i<second.length();i++){
 for(int j=0;j<targets.length;j++){
 if(second.charAt(i)==targets[j]){
 secondtotal++;
 }
 }
 }
 if(firsttotal>secondtotal){
 return true;
 }else if(firsttotal<secondtotal){
 return false;
 }
 if(first.compareTo(second)<0){
 return true;
 }
 return false;
 }
 }
}








if(Math.sqrt(Math.pow(Math.abs(0.5-randomx),2)+Math.pow(Math.abs(0.5-randomy),2))<0.5)