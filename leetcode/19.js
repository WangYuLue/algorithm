/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let preNode = null;
  let targetNode = null;
  let currentIndex = 0;
  let currentNode = head;
  while(currentNode){
      currentIndex ++;
      if(targetNode){
          preNode = targetNode;
          targetNode = targetNode.next;
      }else{
          if(n === currentIndex){
              targetNode = head
          }
      }
      currentNode = currentNode.next;
  }
  if(!preNode){
      return head.next
  }
  preNode.next = targetNode.next;
  return head
};w