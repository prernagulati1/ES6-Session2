var data = [2,5,4,3,4,5,6,9,7,6];
var map = new Map();
var set = new Set();
for (var i = 0; i < data.length; i++) {
	map.set(i, data[i]);
	set.add(data[i]);
}
console.log(map);
console.log(set);
map.clear()
console.log(map)
console.log(set.has(7));
