  $(document).ready(function(){
    $(window).scroll(function(){
      var position=$(document).scrollTop();
     console.log(position)
      if((position>1946 && position<2216)){
          $(".m1").addClass("animate__animated animate__bounceInRight");
      }
          if((position>2585 && position<2817))
          {
            $(".m2").addClass("animate__animated animate__bounceInLeft");

      }
      if((position>3066 && position<3336))
      {
        $(".m3").addClass("animate__animated animate__bounceInRight");

  }
  
    });
   
   
  });
