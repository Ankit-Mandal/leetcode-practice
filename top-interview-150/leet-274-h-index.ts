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
