ELEM.overrideAddMethod();

class Graph_Joint extends ELEM{
    constructor(){
        super("div","class:joint");
        this.on("mouseenter",()=>{

        });
    }
    connect(spline){
        ;
    }
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
        this.in = this.add("div");
        this.out = this.add("div");
        this.lefts = new ELEM("div");
    }
    addLeftConnector(){
        this.left.add("div","class:");
    }
}


class Graph_Node extends ELEM{
    constructor(){
        super("div","class:node;");
    }
    outs(){
        let outs = this.out.children.toArray();
        return outs.map(out=>{
            out.spline.otherEnd(out);
        });
    }
    ins(){
        return this.in.children.toArray();
    }
}


const main = function(){


    let field = new NodeField();
    field.add();


    let gn = body.add(new Graph_Node());
    gn.left.add();
    gn.right.add();


}



//understanding promise better

let Promise1 = function(cb){
    this.then = function(cb){
        this.next = cb;
        return this;
    }
    this.resolve = function(){
        if(this.next)this.next();
    }
    cb(this.resolve);
}




