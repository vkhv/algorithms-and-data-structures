func sum(numbers: [Int]) -> Int {
    if numbers.count == 0 {
        return 0;
    }
    if numbers.count == 1 {
        return numbers[0];
    }
    var copyNumbers = numbers;
    var firstElem = copyNumbers.remove(at: 0);

    return firstElem + sum(numbers: copyNumbers);
}

print(sum(numbers: [1, 2, 3]));
