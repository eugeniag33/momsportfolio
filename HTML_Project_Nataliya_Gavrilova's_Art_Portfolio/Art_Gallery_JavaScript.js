/*global Images*/

function MM_openBrWindow(a) { //v2.0 
     var img = a.firstChild;
     var theURL = img.src;
     window.open(theURL,'','resizable=yes,width=500,height=500');
}

var currentPage = 0;

function onNextPage() {
     currentPage++;
     if (currentPage >= Images.length) 
          currentPage = 0;
     showImages();
}

function onPrevPage() {
     currentPage--;
     if (currentPage < 0)
          currentPage = Images.length - 1;
     showImages();
}

function showImages() {
     var row = Images[currentPage];
     for(var i = 0; i < row.length; i++) {
          var imgAddress = row[i];
          var img = document.getElementById("img" + (i + 1));
          img.src = imgAddress;
     }
}

