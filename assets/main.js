window.onload = () =>{
    const input = document.querySelector("input")
    let correctAns = "";
    let comAns = "";
    let compRewards = 0;
    let userRewards = 0;
    let trials = 0; 
    let p;
    
    
    const computerAns = () =>{
        let ans = Math.floor(Math.random() * 1089);
        return (ans % 2 == 0 ? "heads" : "tails")
    } 
    
    
    const submit = () => {
    
    comAns = computerAns();
    correctAns = computerAns();
       if(check(comAns) && check(input.value)){
           compRewards+=1;
           userRewards+=1;
       }
       else if(check(comAns)){
           compRewards+=1;
       }
       else if(check(input.value)){
           userRewards+=1;
       }
       
      message(comAns,input.value,correctAns)
      trials+=1; 
      
      if(trials > 4){
    
    alert(`Game Over</br> ${alertMessage()}`)
    
        trials = 0;
        document.querySelector(".text").innerHTML = ""
        compRewards = 0
        userRewards = 0
      } 
      } 
      
      const alertMessage = () =>{
          if(userRewards > compRewards){
           
       return `You win by ${userRewards} to ${compRewards}` }
       else if(userRewards == compRewards){
           return `You draw by ${userRewards} to ${compRewards}`
       }
       else{
           return `Computer wins by ${compRewards} to ${userRewards}`
       }
      }
    
    const message = (compAns, userAns, corrAns) =>{
    p = document.createElement('p');
    
    p.innerHTML = `<p>Computer guessed <b>${compAns}</b> and You guessed <b>${userAns}</b></br> Outcomes: <b>${corrAns}</b></br>You get a ${userRewards == 0 ? "0 (zero)" : userRewards} and Computer gets a ${compRewards == 0 ? "0 (zero)" : compRewards}</p>`;
        document.querySelector(".text").appendChild(p);
        //console.log(par)
    }
    const check = ans =>{
        return (ans === correctAns);
    }
    document.querySelector(".heads").addEventListener('click',()=>{
    input.value = "heads"
    submit();
    })
    
    document.querySelector(".tails").addEventListener('click',()=>{
    input.value = "tails"
    submit();
    })
    
}
