
    var names=["Father","Mother","Sister","brother","family","Me"];
    var pic=["father.png","mother.jfif","sister.jfif","brother.jfif","family.png","me.jfif"];
    document.getElementById("name").innerHTML=names[0];
        document.getElementById("pic").src=pic[0]
        console.log(names.length);
        var i=1;
function next(){
    
        document.getElementById("name").innerHTML=names[i];
        document.getElementById("pic").src=pic[i];
        console.log(i,names[i],pic[i]);
        i++;
    
    if(i==names.length){
        i=0;
    }
}