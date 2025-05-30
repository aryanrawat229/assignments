int[] arr = { 1, 5, 2, 8, 3 };
   int max = arr[0];
   for (int i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
         max = arr[i];
      }
   }
   System.out.println("The largest number is: " + max); // Output: 8
