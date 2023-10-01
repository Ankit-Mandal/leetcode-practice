//---------------------SOLUTION 1 (SORTING)--------------------
// TC : O(nlogn)
// SC : O(n) if we consider the extra space for sort, else it's O(1)
// function hIndex(citations: number[]): number {
//     citations.sort((a,b) => b - a);

//     let h = 0;
//     for(let i = 0; i < citations.length; i++) {
//         if(citations[i] > h)
//             h++;
//         else
//             break;
//     }

//     return h;
// };

//---------------------SOLUTION 2 (COUNTING SORT)--------------------
// TC : O(n)
// SC : O(n)
function hIndex(citations: number[]): number {
  let len = citations.length;
  let citationCounts = new Array(len + 1).fill(0);

  for (let cite of citations) {
    citationCounts[Math.min(cite, len)] += 1;
  }

  let h = len;
  for (
    let paperCount = citationCounts[len];
    paperCount < h;
    paperCount += citationCounts[h]
  ) {
    h--;
  }

  return h;
}

/*
EXPLANATION:

**Solution 1: Sorting**

In this solution, we first sort the `citations` array in descending order. Then we iterate over the sorted array. The variable `h` is used to track the current index. As long as the citation count of the current paper is greater than `h`, we increment `h`. The loop continues until we find a paper with a citation count that is less than or equal to `h`, or until we've checked all papers.

For example, if `citations = [3, 0, 6, 1, 5]`, after sorting we get `[6, 5, 3, 1, 0]`. We start with `h = 0`. The first paper has 6 citations which is greater than `h`, so we increment `h` to 1. We do the same for the next three papers and increment `h` to 3. The last paper has 0 citations which is not greater than `h`, so we stop and return `h = 3`.

**Solution 2: Counting Sort**

In this solution, we first create a new array `papers` where the index represents the citation count and the value at that index represents the number of papers with that citation count. For each citation in the `citations` array, we increment the corresponding value in the `papers` array. If a citation count is larger than the total number of papers, we increment the value at the last index of the `papers` array.

Then we iterate over the `papers` array from end to start. We keep a running sum `s` of the values in the `papers` array. As long as `s` is less than the current index `h`, we decrement `h`. The loop continues until `s` is not less than `h`.

For example, if `citations = [3, 0, 6, 1, 5]`, after counting sort we get `papers = [1, 1, 0, 1, 0, 2]`. We start with `h = 5` and `s = 2`. Since `s < h`, we decrement `h` to 4 and add `papers[4] = 0` to `s`. We do the same for `h = 3` and add `papers[3] = 1` to `s`. Now `s = 3` which is not less than `h = 3`, so we stop and return `h = 3`.
*/
