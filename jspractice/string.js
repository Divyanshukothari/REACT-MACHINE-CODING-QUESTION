let text = " hell how are you hell "
//string are immutable 
//they are not arrays in js even though they are 
// whenever you create an string it craetes an instance of an object 
// thats how you are able to call methods on string data type 
// we dont directly mutate tkhe string we just run some methods on it 

console.log("")

// in slice() method the first param is inclusive while the other param is exclusive
// we can get any part of the string like this 

console.log(text.slice(1,text.length))

// in includes() method we pass the param and say weather it exists in string or not 
//amnd returns true or false 
//it was included in ecmascript 2016 
//and aslo works on array 
console.log(text.includes("  "))

// to acess first element in array
console.log(text[0])

// to acess last element in an array
console.log(text[text.length-1])

// text.length is a property which returns the no of elements in an array 

console.log(text.toUpperCase())
text.toLowerCase()

console.log(text.charAt())
//whats the diffrence betwen using charAt() and array basd indexing /??
text.charAt()

console.log(text.concat(" gyat"))

// concat method 


// 
console.log(text.endsWith("you"))
console.log(text.startsWith("you",13))
console.log(text.indexOf("hell"))
text.endsWith("you")

text.indexOf("hell")
text.replace("hell","well")
console.log(text.replaceAll("hell","well")
)

console.log(text.normalize("NFC"))
console.log(text.valueOf())
console.log(text.trim())