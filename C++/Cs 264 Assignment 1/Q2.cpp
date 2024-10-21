#include <iostream>

int main()
{
    // Declare a variable to store the number
    int num1;

    // Read the number from the user and store it in the variable
    std::cin >> num1;

    
    // Declare a variable to store the second number
    int num2;
    
    // Read the second number from the user and store it in the variable
    std::cin >> num2;
    
    // Declare a variable to store the starting point for gcd
    int start;
    
    // Set the starting point to the smaller of the two numbers
    start = std::min(num1, num2);
    
    // Use a loop to find the gcd
    while (num1 % start != 0 || num2 % start != 0) 
    {
        start--;
    }
    
    // Print the gcd
    std::cout << start << std::endl;
}