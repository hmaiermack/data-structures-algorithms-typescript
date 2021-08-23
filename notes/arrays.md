# Arrays

A linear collection of data values that are accessible at numbered indices.

## Standard Operations and Time Complexity

- Accessing at a given index: O(1)
- Updating at a given index: O(1)
- Inserting at beginning: O(n)
- Inserting at middle: O(n)
- Inserting at end:
  - Dynamic Array: O(1)
  - Static Array O(n)
- Removing from beginning: O(n)
- Removing from middle: O(n)
- Removing from end: O(1)
- Copying the array: O(n)
- Initializing the array: O(n)

A static array in an implementation of an array w/ a fixed amount of memory allocated to store the arrays values.

- Therefor, appending to the array involves doing a copy of the entire array and allocating an extra memory slot for it, accounting for the space needed for the appended value.
  - This is a linear time operation.

A dynamic array is an implementation of an array that preemptively allocates twice the needed memory to store the arrays values.

- Appending is constant time until the extra allocated memory is used up. After this the array is coped and again allocated 2x space.
  - This has an amortized constant time insert-at-end operation.

Many modern languages implement arrays dynamically.

Be wary when copying arrays as it is space and time intensive -> O(n) ST

## Amortized Analysis

Taking both the worst and best case time complexity of operations into account.
