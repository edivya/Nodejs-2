// function removeDupes(arr){

//     let finalArr = [];

//     arr.forEach(function(content){

//         if(finalArr.indexOf(content) === -1){

//             finalArr.push(content);

//         }

//     });

//     return finalArr;

// }

// ​

// removeDupes([1,1,2,3,4,4,5]);
///////////////////////////////////////////////
// var userArray = [1,2,2,4];

// var userArray2 = [4,5,4,4,7,5];

// var userArray3 = [1,2,3,5];

// ​

// removeDups(userArray);

// removeDups(userArray2);

// removeDups(userArray3);

// ​

// function removeDups(arr){

//     var tempArray = [];

//     for(var i=0; i < arr.length;i++){

//         if (!(tempArray.includes(arr[i]))){

//             tempArray.push(arr[i]);

//         }

//     }

//     console.log(tempArray);

// }


function delDups(ra){

	var temp = [];

	for(var i in ra){

		console.log(temp.indexOf(ra[i]));

		if(temp.indexOf(ra[i]) === -1)

			temp.push(ra[i]);

	}

	console.log(temp);

}

