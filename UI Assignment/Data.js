
var app=angular.module('quiz',[]);


app.controller('quizController',['$scope',function($scope){
	var dataObject =[
		{
			"question":"When was the last time India won the Cricket World Cup?",
			"options":["1999","2003","2011","2015"],
			"correctOptions":"2011"
						
		},
		{
			"question":"What is the highest individual score by a batsman in Test Cricket?",
			"options":["375","400","303","390"],
			"correctOptions":"400"
						
		},
		{
			"question":"Who won the most number of Cricket World Cups?",
			"options":["India","England","Australia","Pakistan"],
			"correctOptions":"Australia"
						
		},
		{
			"question":"How many International centuries does Sachin Tendulkar has under his name?",
			"options":["100","80","60","49"],
			"correctOptions":"49"
						
		}
		
		
];
	$scope.data=dataObject;
	$scope.opted="select answer";
	var i=0;
	$scope.chartData=[];
	console.log($scope.opted);
	$scope.submit=function(isValid){
	/* for (var e in data){
		if (opted===data[e].correctOptions)
			{
				console.log($scope.opted);
				i++;
			}
		} */
		console.log(isValid);
		
	};
	
	
	
	/* console.log(dataObject[0].question1.question);
console.log(dataObject[0].question1.options);
console.log(dataObject[0].question1.correctOptions); */
}]);


