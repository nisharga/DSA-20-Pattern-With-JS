function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let next = current.next; // save next node
    current.next = prev; // reverse pointer
    prev = current; // move prev one step forward
    current = next; // move current one step forward
  }

  return prev; // new head
}
