#include <iostream>

int main()
{

    
    // Declare a variable to store the number as a string
    std::string nums;
    
    // Read the number from the user and store it in the variable
    std::getline(std::cin >> std::ws, nums);
    
    // Declare a boolean variable to check if the number is a palindrome
    bool isPalindrome = true;
    
    // Use a loop to compare characters from the start and end of the string
    for(int i = 0, j = nums.length() - 1; i < j; i++, j--) 
    {
        if(nums[i] != nums[j]) 
        {
            isPalindrome = false;
            break;
        }
    }
    
    // Check the boolean variable and print the result
    if(isPalindrome) 
    {
        std::cout << "true" << '\n';
    } 
    else 
    {
        std::cout << "false" << '\n';
    }
}