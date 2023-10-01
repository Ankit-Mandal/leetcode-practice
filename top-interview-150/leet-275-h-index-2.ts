//---------------------SOLUTION 1 (SORTING)--------------------
// TC : O(n)
// SC : O(1)
function hIndex(citations: number[]): number {
  let h = 0;

  for (let i = citations.length - 1; i >= 0; i--) {
    if (citations[i] > h) h++;
    else break;
  }

  return h;
}

export default hIndex;

/*
EXPLANATION:

**Solution 1: Sorting**

In this solution, we first sort the `citations` array in descending order. Then we iterate over the sorted array. The variable `h` is used to track the current index. As long as the citation count of the current paper is greater than `h`, we increment `h`. The loop continues until we find a paper with a citation count that is less than or equal to `h`, or until we've checked all papers.

For example, if `citations = [3, 0, 6, 1, 5]`, after sorting we get `[6, 5, 3, 1, 0]`. We start with `h = 0`. The first paper has 6 citations which is greater than `h`, so we increment `h` to 1. We do the same for the next three papers and increment `h` to 3. The last paper has 0 citations which is not greater than `h`, so we stop and return `h = 3`.
*/
