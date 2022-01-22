function solve(obj){

    if(obj.dizziness){
        obj.levelOfHydrated += 0.1 * obj.experience * obj.weight;
    }

    return obj;
}

solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });
