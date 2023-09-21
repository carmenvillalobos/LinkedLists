class Node {
    constructor(val){
      this.val = val
      this.next = null
    }
  }
  
  const x = new Node("x");
  const y = new Node("y");
  
  x.next = y;
  
  // x -> y
  
  function linkedListValues(head){
    let current = head
  
    while(current !== null){
      console.log(current.val)
      current = current.next
    }
  }
  
  linkedListValues(x); // -> [ 'x', 'y' ]