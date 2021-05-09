
function myGame(){
    myNumber = document.getElementById("mySelect").selectedIndex;
    hisNumber = Math.floor(Math.random()*3);

    if(hisNumber==0){
        hisHand="グー";    
    }

    if(hisNumber==1){
        hisHand="チョキ";    
    }

    if(hisNumber==2){
        hisHand="パー";    
    }

    if(myNumber-hisNumber==-2||myNumber-hisNumber==1){
        judge="負け";
    }
    if(myNumber-hisNumber==-1||myNumber-hisNumber==2){
        judge="勝ち";
    }
    if(myNumber-hisNumber==0){
        judge="ひきわけ";
    }

     document.getElementById("message1").innerHTML = "相手は "+hisHand;
     document.getElementById("message2").innerHTML = judge;


}