 
// (1) JavaScripting program which will count how many is positive, how many negative ,how many are zero and sum up numbers for the following 
//         var data = [4,4,-4,-1,0,-8,0,45,9,79];

// ###solved
const PNarray = [4,4,-4,-1,0,-8,0,45,9,79];

function PositiveNegative(){
    let positive =0;
let negative =0;
let zero =0;
let sum =0;
 PNarray.map(number =>{
    if(number<0){
        negative++;
    }
    else if(number>0){
        positive++;
        sum =sum+number;
    }else if(number ==0){
        zero++;
    }
 })
}
//  console.log(positive,negative,zero,sum);



// (2).JavaScript program to find largest number among three numbers.

//connect your js file in html file.

// ###solved

function threeNumbers(){

    const number1 =parseFloat(prompt('Enter 1st number'));
const number2 =parseFloat(prompt('Enter 2nd number'));
const number3 =parseFloat(prompt('Enter 3rd number'));

if(number1>number2 && number1>number3){
    window.alert(`${number1}, ${number2} and ${number3} largest is ${number1}`);
}
else if(number2>number1 && number2>number3){
    window.alert(`${number1}, ${number2} and ${number3} largest is ${number2}`)
}else{
    window.alert(`${number1}, ${number2} and ${number3} largest is ${number3}`)
}
}


// (3).JavaScript program to find smallest number,larger number & sum up array of numbers.

// ###solved

const array3 = [12,34,45,32,65,8,98,54];

const maxNumber = Math.max(...array3);
const minNumber = Math.min(...array3);
let sum2 = 0;
array3.map(num=>sum2 +=num)
// console.log(maxNumber,minNumber,sum2)



/*4.JavaScript program which takes a score and will print the grade as the following criteria:
		a.If score is greater or equal 90 and less or equal 100 then will print A.
		b.If score is greater or equal 80 and less or equal 89 then will print B.
		c.If score is greater or equal 70 and less or equal 79 then will print C.
		d.If score is greater or equal 60 and less or equal 69 then will print D.
		c. Otherwise will print F.*/

        function getGrade(){
            const mark =parseFloat(prompt('Enter your mark'));
            if(mark>=90 && mark<=100){
                console.log('A')
            }
            else if(mark>=80 && mark<90){
                console.log('B');
            }
            else if(mark>=70 && mark<80){
                console.log('C')
            }
            else if(mark>=60 && mark<70){
                console.log('D');
            }
            else if(mark<60 && mark>=0){
                console.log('F')
            }
            else{
                console.log('Invalid input');
            }
        }
        // getGrade();


        // 6.Check a number is prime or not.

        function checkPrime (){
            const num = 31;
            if(num<=1){return false;}
            for(let i=2;i<=Math.sqrt(num);i++){
                if(num%2 ===0){
                    return false;
                }
            }
            return true;
        }
        console.log(checkPrime());
        

        // 7. Find out even & odd number.
        const eoNumber = [13,65,44,66,54,99];
        let even = [];
        let odd =[];

        eoNumber.map(num =>{
            if(num%2 === 0){
                even.push(num);
            }
            else{
                odd.push(num);
            }
        })
// console.log(`even numbers ${even} and Odd numbers ${odd}`)


// 8.Javascript program counting vowels, consonants and show the occurrance.

const myText =' hossain  ';
const splitText = myText.split('');
let vowels =0;
let consonents =0;
splitText.map(char=>{
    if(char==='a' || char==='e' || char==='i' || char==='o' ||char ==='u'){
        vowels++;
    }else if(char!==' '){
        consonents++;
    }
})
// console.log(vowels,consonents);



// 9.Sorting three numbers in javaScript(Desending Order).

const Desending = [13,65,44,66,54,99];
Desending.sort((a,b)=>b-a)
// console.log(Desending)

// 10.Sorting three numbers in javaScript(Ascending Order).
const assending = [13,65,44,66,54,99];
assending.sort();
// console.log(assending)

/*11.JavaScript program to print ascii patterns.
	
	(1)        (2)    (3)       (4)     (5)
	*         *****   *****	    1	    1
	**	      ****	  *****	    12	    22
	***	      ***	  *****	    123	    333
	****	  **	  *****     1234    4444
	*****	  *	      *****	    12345   55555 */

    // 1.pattren 
    for(let i =1;i<=5;i++){
        let star ='';
        for(let j=1;j<=i;j++){
            star += '*';
            // console.log(i,j)
        }
        // console.log(star);
        
    }

// 2.pattern 

for(let i =5; i>=1; i--){
    let star = '';
    for(let j =1; j<=i; j++){
        star += '*';
    }
    // console.log(star)
}

// 3.pattern 
for(let i =1;i<=5;i++){
    let dot ='';
    for(let j=1;j<=5;j++){
        dot +='*';
    }
    // console.log(dot)
}

// 4 pattern 
for(let i =1;i<=5;i++){
    let star ='';
    for(let j=1;j<=i;j++){
        star += j;
        // console.log(i,j)
    }
    // console.log(star);
    
}

// 5 pattern 
for(let i =1;i<=5;i++){
    let star ='';
    for(let j=1;j<=i;j++){
        star += i;
        // console.log(i,j)
    }
    // console.log(star);
    
}

