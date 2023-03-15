import java.util.Scanner;
public class trash {
    public static void main(String[] args) {
       int[] array= new int[10];
       int largest = array[0];
       int second =0;

       Scanner sc = new Scanner(System.in);
       System.out.println("Enter the size of an array");
       int n=sc.nextInt();
       System.out.println("Enter the element of an array");
       for(int i=0;i<n;i++)
       {
         array[i] =sc.nextInt();
       }
       for(int i=0;i<n;i++)
       {
         if(array[i] > largest)
         {
            second = largest;
            largest =array[i];
         }
         else if(array[i] > second && array[i]!=largest)
         {
            second = array[i];
         }
       }
       System.out.println(second + " and " + largest);
       sc.close();
    }
}