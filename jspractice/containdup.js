//"abcde" -> 0 # no characters repeats more than once
//"aabbcde" -> 2 # 'a' and 'b'
//"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
//"indivisibility" -> 1 # 'i' occurs six times
//"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
//"aA11" -> 2 # 'a' and '1'
//"ABBA" -> 2 # 'A' and 'B' each occur twice

function containdup(text){
    let dup= new Set();
    let len = text.length
     for(let i =0;i<len ;i++){
       if(!(Number(text[i]) === undefined)){
           if((text.slice(i+1,len)).includes(text[i]) || (text.slice(i+1,len)).includes(text[i].toUpperCase())){
            if(dup.has(text[i].toLowerCase())){
               continue;
            }
            else{
                dup.add(text[i]);
            }
           }
       }
       else if((text.slice(i+1,len)).includes(text[i])){
            dup.add(text[i]);
       }else{
           continue;
       }
    }
    return dup.size;
}

console.log(containdup("abcdefghijklABCDEFABCDEabcdabcabA"))