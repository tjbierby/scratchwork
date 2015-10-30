function combo_problem6(string){
    var target=[];
    target.push(string);
    for(i=0;i<5;i++){
        if(target[i][0]=='a'&&i<1){
            target.push("acb");
        }
        else if(target[i][0]=='a'){
            target.push("bac");
        }
        else if(target[i][0]=='b'&&i<3){
            target.push("bca");
        }
        else if(target[i][0]=='b'){
            target.push("cab");
        }
        else if(target[i][0]=='c'){
            target.push("cba");
        }
    }
        console.log(target);
}

combo_problem6('abc');

