# Memory

## Bit

Short for binary digit, a bit is a fundamental unit of information that represents a state with one of two values: 0 or 1.
At the most basic level, any data stored within a computer is represented in bits.

## Byte

A group of 8 bits. A single byte can represent up to 256 data values (2^8). Since a binary number is a number expressed
with only two symbols, a byte can effectively represent all of the numbers between 0 and 255.

## Fixed Width Integer

An int represented by a fixed amount of bits. EG 32, 64 bit int. Regardless of how large and integer is, its fixed-width-integer representation is, by definition,
made up of a consistent number of bits.
It follows, that due to this constant number of bits used, an operation performed on a fixed int consists of a constant number of bit manipulations.

## Broadly speaking, memory is the foundational layer of computing, where all data is stored.

### Within the context of interviews:

- Data stored in memory is represented in bytes, and by extension bits.
- Bytes in memory can point to other buyes, as to store references to other data.
- The amount of memory a computer has is finite, meaning that it is valuable to limit how much memory an algorithm will use.
- Accessing a byte or fixed number of bytes is an elementary operation, and can be loosely treated as a single unit of work.
- Your program will always store variables etc in a memory slot or series of memory slots that are empty and available.
- Pointers allow you to store the address of a memory slot within another memory slot, allowing you to access the referenced value.
