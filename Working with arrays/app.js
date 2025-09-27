const number = [1, 2, 3];

console.log('number:', number);

//other ways of using arrays 
const analyticsData = [[1,2,2], [3,4,5]];

for (const data of analyticsData){
    for(const datapoint of data){
        console.log(datapoint);
    }
}