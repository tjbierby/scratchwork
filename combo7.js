function combo_problem7(string){
    var ascode='';
    for (i in string){
        codei=string.charCodeAt(i);
        ascode+=codei;
    }
    console.log(ascode);
}
combo_problem7('the cat in the hat');