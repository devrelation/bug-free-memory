const solution = (root,p,q) => {
  const tr = new Tree(root);
  const answer = tr.getLCA(p,q);
  
    
  return answer;
};

class Tree{
  constructor(root){
    this.tr = new Map();
    
    root.forEach((num, index) => {
      if(num !== null){
        const node = new Node(num);
        
        if(index>0){
          const targetIndex = (index-1)/2 < 0 ? 0 : Math.floor((index-1)/2);
          const isLeft = index === 1 || targetIndex%2 === 1;
          const targetNode = this.tr.get(root[targetIndex]);
          
          if(targetNode){
            node.setRootNode(targetNode);
            if(isLeft){
              targetNode.setLeftNode(node)
            }
            else{
              targetNode.setRightNode(node)
            }
          }
        }
        this.tr.set(num, node);
      }
    })
  }
  
  getLCA(p,q){
    const pNode = this.tr.get(p);
    const qNode = this.tr.get(q);
    
    if(!pNode || !qNode){
      return null;
    }
    
    const pParents = this.getParentNodeList(pNode);
    const qParents = this.getParentNodeList(qNode);
    
    
    
    for(let index=0; index<pParents.length; index++){
      const pValue = pParents[index];
      if(qParents.indexOf(pValue) >= 0){
        return pValue;
      }
    }
    
    return null;
  }
  
  getParentNodeList(node){
    const answer = [node.getVal()];
    let currNode = node;
    
    while(true){
      const rootNode = currNode.getRootNode();

      if(rootNode){
        answer.push(rootNode.getVal());
        currNode = rootNode;
      }
      else{
        break;
      }
    }
    
    return answer;
  }
}

class Node{
  constructor(val){
    this.val = val;
  }
  
  getVal(){
    return this.val;
  }
  
  setRootNode(root){
    this.rootNode = root;
  }
  
  setLeftNode(node){
    this.leftNode = node;
  }
  
  setRightNode(node){
    this.rightNode = node;
  }
  
  getRootNode(){
    return this.rootNode;
  }
  
  getLeftNode(){
    return this.leftNode;
  }
  
  getRightNode(){
    return this.rightNode;
  }
}

export default solution;

