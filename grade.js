
let fullname = "Pratham Prajapati" , id = 45 , maths = 88, english = 86, science = 93, gujarati = 67;


   let totalMarks = maths + english + science + gujarati ;

   console.log(`You got ${totalMarks} from 400`)

   let percentage = totalMarks / 400 * 100;

   console.log(`You got ${percentage}% in exams`);
   

   let grade;

   if(percentage >= 90){
      grade = "A";
   }
   else if(percentage >= 80){
      grade = "B";
   }
   else if(percentage >= 70){
      grade = "C";
   }
   else if(percentage >= 60){
      grade = "D";
   }
   else{
    console.log("Fail in exams!!");
   }

   console.log(`You got ${grade} in exam`);
