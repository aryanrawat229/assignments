import java.util.Scanner;
public class reverse_of_number
{
  public static void main(String[] args)
  {
    //scanner class declaration
    Scanner sc = new Scanner(System.in);

    //input from user
    System.out.print("Enter a number : ");
    int number = sc.nextInt();
    System.out.print("Reverse of " + number + " is ");

    int reverse = 0;
    String s = "";
    while (number != 0)
    {
     int pick_last = number % 10;

      //use function to convert pick_last from integer to string
      s = s + Integer.toString(pick_last);
      number = number / 10;
    }

    //display the reversed number
    System.out.print(s);

    //closing scanner class(not compulsory, but good practice)

    sc.close();
  }

}
