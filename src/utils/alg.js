function show(arr, setter) {
    setter && setter([...arr]);
}

// bubble sort - compare 2 adjacent items and swap if the 2nd item lesser than the 1st item
// O(N²) — Quadratic Time:
export function bubbleSort(arr, setter) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];

                // display purpose => not part of alg
                setTimeout((arr, setter) => show(arr, setter), 0, [...arr], setter);
            }
        }
    }
    return arr;
}

// selection sort - take the min value and swap with 1st value
// O(N²) — Quadratic Time:
export function selectionSort(arr, setter) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
        
        // display purpose => not part of alg
        setTimeout((arr, setter) => show(arr, setter), 0, [...arr], setter);
    }
    return arr;
}

// insertion sort - take each value in the array compare with its previous positions 
// and if less than prev pos swap with those prev values or break from inner loop
// O(N²) — Quadratic Time:  in avg and worst cases
export function insertionSort(arr, setter) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j-1] > arr[j]) {
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
                
                // display purpose => not part of alg
                setTimeout((arr, setter) => show(arr, setter), 0, [...arr], setter);
            } else {
                break;
            }
        }
    }
    return arr;
}

// quick sort - devide and conquer - recursive pattern
// O(Nlog(N)) — efficient
export function quickSort(arr, setter) {
    if (arr.length <= 1) return arr;
    const left = [], right = [];
    const pivot = arr[arr.length - 1];
    for (let i = 0; i < arr.length - 1; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    const temp = [...quickSort(left, setter), pivot, ...quickSort(right, setter)];
    // display purpose => not part of alg
    setTimeout((temp, setter) => show(temp, setter), 0, [...temp], setter);
    return temp;
} 

function mergeSortHelper(first, second) {
    const res = [];
    let i = 0, j = 0;
    while (i < first.length && j < second.length) {
        if (first[i] < second[j]) {
            res.push(first[i]);
            i++;
        } else {
            res.push(second[j]);
            j++;
        }
    }
    return [...res, ...first.slice(i), ...second.slice(j)];
}

// Merge sort - devide and conquer - recursive pattern
// O(Nlog(N)) — efficient
export function mergeSort(arr, setter) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length/2);
    const first = arr.slice(0, mid);
    const second = arr.slice(mid);
    const temp = mergeSortHelper(mergeSort(first), mergeSort(second));

    // display purpose => not part of alg
    setTimeout((temp, setter) => show(temp, setter), 0, [...temp], setter);
    return temp; 
} 


