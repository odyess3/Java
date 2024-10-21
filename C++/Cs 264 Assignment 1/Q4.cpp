#include <iostream>

// Recursive function to calculate power for negative exponents
int powerRecursive(int number, int power) 
{
    if (power == 0) 
    {
        return 1;
    }

    else if (power > 0) 
    {
        return number * powerRecursive(number, power - 1);
    }
    
    else 
    {
        return 1 / number * powerRecursive(number, power + 1);
    }
}



int main()
{
    // Declare a variable to store a number
    int number;
    
    // Read the number from the user and store it in the variable
    std::cin >> number;
    
    // Declare a variable to store the power
    int power;
    
    
    // Read the power from the user and store it in the variable
    std::cin >> power;
    
    // Declare a variable to store the result
    int result;
    
    result = powerRecursive(number, power);

    // Print the result
    std::cout << result << '\n';

    return 0;
}

