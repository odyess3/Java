import java.util.*;

public class Main {

    public static void main(String [] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter desired position: ");
        int input = sc.nextInt();
        long[] myArray = new long[50000];

        for (int i = 0; i < myArray.length; i++) {
            myArray[i] = i + 1;
        }

        long[] newArray = quickSort(myArray, 0, myArray.length - 1);

        System.out.println("The number in that position is " + newArray[input - 1]);
    }

    public static int collatzLength(long num) {
        int length = 1;
        while (num > 1) {
            if (num % 2 == 0) {
                num = num / 2;
            } else {
                num = 3 * num + 1;
            }
            length++;
        }
        return length;
    }

    public static long[] quickSort(long[] arr, int low, int high) {
        if (low < high) {
            int pivotIndex = partition(arr, low, high);
            quickSort(arr, low, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, high);
        }
        return arr;
    }

    public static int partition(long[] arr, int low, int high) {
        long pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            int collatzLengthJ = collatzLength(arr[j]);
            int collatzLengthPivot = collatzLength(pivot);
            if (collatzLengthJ < collatzLengthPivot || (collatzLengthJ == collatzLengthPivot && arr[j] < pivot)) {
                i++;
                long temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        long temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }
}