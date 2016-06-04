var pets = ['cat', 'dog', 'rat'];

pets.forEach(function(value,index){
	pets[index] = pets[index] + 's'
})

console.log(pets);