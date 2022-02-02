function ListProcessor(input){
    let collection = [];

    let obj = {
        add,
        remove,
        print
    };

    function add(element){
        collection.push(element);
    }

    function remove(element){
        collection = collection.filter(e => e !== element);
    }

    function print(){
        console.log(collection.join(','));
    }

    input.forEach(command => {
        let info = command.split(' ');
        let cmd = info[0];
        let item = info[1];

        switch(cmd){
            case "add":
                obj.add(item);
                break;
            case "remove":
                obj.remove(item);
                break;
            case "print":
                obj.print();
                break;
        }

    });
}

ListProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);