let eachSlide = 1;
  
showSlide=(n)=>{
    let slide = $(".slides");
    if(n > slide.length){
        eachSlide = 1
    }
    if(n < 1){
        eachSlide = slide.length
    }
    
    slide.css("display","none");
    
    let num = eachSlide - 1
    
    $("#slides" + num).css("display", "flex");
}
let x = setInterval(function(){
    eachSlide++
    showSlide(eachSlide);
    $(".slides").mouseenter(()=>{
        clearInterval(x)
    });
    
},5000);

$("#next").click(()=>{
    console.log(eachSlide);
    showSlide(eachSlide += 1);
});
$("#prev").click(()=>{
    showSlide(eachSlide -= 1);
});
$(".ham").click(()=>{
    $(".drop").css("display", "block");
});
$(".close").click(()=>{
    $(".drop").css("display", "none");
});




