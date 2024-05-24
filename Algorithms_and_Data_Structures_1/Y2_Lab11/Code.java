import java.io.*;

import java.util.*;



public class Code{




    public static void main (String[] args){



        File file = new File("d:\\Download\\Graph.csv");



        // Dynamically sized arrays

        String[] addresses = null;

        int[][] distances = null;



        try{

            Scanner scan = new Scanner(file);



            // Count the number of lines in the file to determine array sizes

            int numVertices = 0;

            while (scan.hasNextLine()) {

                scan.nextLine();

                numVertices++;

            }

            scan.close();



            // Initialize arrays with appropriate sizes

            addresses = new String[numVertices];

            distances = new int[numVertices][numVertices];



            // Reopen scanner to read the file again

            scan = new Scanner(file);



            // Read data from file

            for(int i = 0; i < numVertices; i++) {

                String line = scan.nextLine();

                String[] parts = line.split(","); // Split the line by commas

                addresses[i] = parts[0]; //get the address

                for (int j = 0; j < numVertices; j++) {  //get the distances

                    distances[i][j] = Integer.parseInt(parts[j+1].trim());

                }

            }

            scan.close();

        } catch(Exception e) {

            System.err.println(e);

            return;

        }



        Scanner inputScanner = new Scanner(System.in);

        System.out.print("Please input starting vertex: ");

        String startVertex = inputScanner.next().toUpperCase(); // convert input to uppercase



        int startIndex = -1;

        for (int i = 0; i < addresses.length; i++) {

            if (addresses[i].equals(startVertex)) {

                startIndex = i;

                break;

            }

        }



        if (startIndex == -1) {

            System.out.println("Invalid starting vertex.");

            return;

        }



        int[] steps = new int[addresses.length];

        Arrays.fill(steps, -1);



        Queue<Integer> queue = new LinkedList<>();

        queue.offer(startIndex);

        steps[startIndex] = 0;



        while (!queue.isEmpty()) {

            int current = queue.poll();



            for (int i = 0; i < addresses.length; i++) {

                if (distances[current][i] > 0 && (steps[i] == -1 || steps[i] > steps[current] + 1)) {

                    steps[i] = steps[current] + 1;

                    queue.offer(i);

                }

            }

        }



        for (int i = 0; i < addresses.length; i++) {

            if (steps[i] != -1)

                System.out.println(addresses[i] + ": " + steps[i]);

            else

                System.out.println(addresses[i] + ": -1");

        }

    }

}