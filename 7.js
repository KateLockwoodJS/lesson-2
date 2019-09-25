const array = [1, 2, 3, 4];
var sum = 0;

for (let i = 0; i < array.length; i++) {
	if (array[i] % 2 == 0) {
	sum = sum + array[i];
}
}
console.log(sum);
