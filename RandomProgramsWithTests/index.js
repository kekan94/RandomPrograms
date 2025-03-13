// Try in O(n) time !!

const SumOfTwoNumbersEqualsGivenNumber = (array, givenNumber) => {
    if (array.length === 1) {
        return 'Not applicable as there is only one element';
    }

    if (array.find(num => num < givenNumber) === undefined) {
        return 'Not applicable as all numbers are larger than the given number';
    }

    let arrayOfSmallerNumbers = [];
    let leftArray = [];
    let rightArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= givenNumber) {
            if (array[i] < givenNumber / 2) {
                leftArray.push(array[i]);
            } else {
                rightArray.push(array[i]);
            }
        }
    }

    console.log(leftArray);
    console.log(rightArray);

    let leftPointer = 0;
    let rightPointer = leftArray.length < rightArray.length ? rightArray.length - 1 : leftArray.length - 1;

    while (leftPointer < rightPointer) {
        let leftNumber = arrayOfSmallerNumbers[leftPointer];
        let rightNumber = arrayOfSmallerNumbers[rightPointer];
        let sum = leftNumber + rightNumber;

        if (sum !== givenNumber) {
            leftPointer++;

        } else if (sum > givenNumber) {

        } else {
            return true;
        }
    }
    /*for (let i = 0; i < array.length; i++) {
        let missingNumber = array.find(num => num + array[i] === givenNumber);
        if (missingNumber) {
            return true;
        }
    }*/
};

console.log(SumOfTwoNumbersEqualsGivenNumber([3, 5, 48, 1, 4, 17, 7], 9));

export default SumOfTwoNumbersEqualsGivenNumber;