/**
 * Created by Akshat Joshi on 16-03-2017.
 */



function nciCount($nci){
    if($nci < 13){
        return '2';
    }
    else if($nci > 12 && $nci < 16){
        return '3';
    }
    else if($nci > 15 && $nci < 18){
        return '4';
    }
    else if($nci > 17 && $nci < 22){
        return '5';
    }
    else if($nci > 21){
        return '6';
    }
}


$(document).ready(function(){

    var headChinSq; //number of squares between top of head and chin
    var sqInNci; // = 28 / headChinSq;  (this is a square in nci)
    var shouldNeckSq; //number of squares between the side of neck and shoulder
    var shouldWidthInNci; // = shouldNeckSq * shouldNeckSq; // should width in NCi
    var nciObj = {};
    var nci;
    var nciScore;
    var imgInput = document.getElementById('uploadPic');

   $('#nciForm').submit(function (e) {
        e.preventDefault();
       var formArr = $(this).serializeArray();

       $.each(formArr, function (i) {
           nciObj[formArr[i].name] = formArr[i].value;
       });
       console.log(nciObj);
       headChinSq = nciObj.chinHead;
       shouldNeckSq = nciObj.shouldNeck;
       sqInNci = 28/headChinSq;
       shouldWidthInNci = shouldNeckSq * shouldNeckSq;

       nciScore = nciCount();
   });


   imgInput.onchange = function(evt){
       var tgt = evt.target || window.event.srcElement,
           files = tgt.files;

       // FileReader support
       if (FileReader && files && files.length) {
           var fr = new FileReader();
           fr.onload = function () {
               $('.thumbnail').attr('src', fr.result)
           };
           fr.readAsDataURL(files[0]);
       }

   }

  $('#resetPic').click(function (e) {
      $('#nciForm')[0].reset();
  })



});