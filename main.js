ELEM.overrideAddMethod();

class Graph_Joint extends ELEM{
    
}

class Graph_Left extends ELEM{
    constructor(){
        super("div","class:joint-container");
    }
    add(){
        super.add(new Graph_Joint());
    }
}


class Graph_Node extends ELEM{
    constructor(){
        super("div","class:node;");
        this.left = this.add("div");
        this.right = this.add("div");
        this.lefts = new ELEM("div");
    }
    addLeftConnector(){
        this.left.add("div","class:");
    }
    
}


const main = function(){
    let GN = body.add(new Graph_Node());
    
}

