const sets = new Set("hellohowareyou");
//we can only pass iterable object/datatype inside it 

sets.add(1)
sets.add(2)
sets.add(3)
sets.add(4)
sets.add(5)
sets.add(6)

console.log(sets)
// we can use spread operator on sets 
const nums = [...sets]

const it = sets.values()

for(let i in it){
    console.log(it[i]);
}
