const correctAnswers=['A','B','A','B'];
const form=document.querySelector('.quiz-form');
const result=document.querySelector('.result');
let correct = document.querySelectorAll(".correct");
let wrongs = document.querySelectorAll(".wrong");
let explanations = document.querySelectorAll(".explanation");
form.addEventListener('submit', e =>{
  e.preventDefault();
  let score=0;
  const userAnswers =[form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  userAnswers.forEach((answer,index)=>{
      if(answer === correctAnswers[index]){
        score+=25;
        correct[index].classList.remove("d-none");
        wrongs[index].classList.add("d-none");
        explanations[index].classList.remove("d-none")
        explanations[index].classList.add("text-success");
        explanations[index].classList.remove("text-danger");
      }
      else {
        wrongs[index].classList.remove("d-none");
        correct[index].classList.add("d-none");
        explanations[index].classList.remove("d-none")
        explanations[index].classList.add("text-danger");
        explanations[index].classList.remove("text-success");
    }
  });
  scrollTo(0,0);
  result.classList.remove('d-none');
  let output=0;
  const ani=setInterval(()=>{
    if(output==0 && output<=25){
      result.querySelector('span').classList.add("text-danger");
    }else if(output>=25 && output<=75){
      result.querySelector('span').classList.remove("text-danger");
      result.querySelector('span').classList.add("text-warning");
    }else{
      result.querySelector('span').classList.remove("text-warning");
      result.querySelector('span').classList.add("text-success")
    }
    result.querySelector('span').textContent=`${output}%`;
    if(output===score){
      clearInterval(ani);
    }else{
      output++;
    }
  },5);
});