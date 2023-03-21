// inputun içine yazılan kısımdan yeni bir eleman oluşturan fonksyon 
var btn = document.getElementById("ekleme-btn")
var mesaj = document.getElementById("mesaj")

btn.onclick = function newItem(){
    var li = document.createElement("LI");
    var mesajValue = mesaj.value;
    var t = document.createTextNode(mesajValue)
    li.appendChild(t);
    if(mesajValue===""){
        alert("bir şeyler yazmalısınız")//boş şekilde entera basıldığında alert veren kısım
    }else{
        document.getElementById("list").appendChild(li)
    }
    document.getElementById("mesaj").value = "";

    var span = document.createElement("SPAN")
    var txt = document.createTextNode("X")
    span.className="kapama";
    span.appendChild(txt)
    li.appendChild(span)
    for (i = 0; i < kapama.length; i++) {
        kapama[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }

}
//entera basıldığında çalışmasını sağlayan kısım
mesaj.onkeyup = function (e) {

    if (e.code == "Enter") {
        btn.onclick()
    }
  }

// her bir elemana x işareti ekleyen kısım 
  var liste = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < liste.length; i++) {
    var span = document.createElement("SPAN");
    var mtn = document.createTextNode("\u00D7");
    span.className = "kapama";
    span.appendChild(mtn);
    liste[i].appendChild(span);
  }
  
  // kapamaya tıklayınca itemi saklayan kısım  
  var kapama = document.getElementsByClassName("kapama");
  var i;
  for (i = 0; i < kapama.length; i++) {
    kapama[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
  // iteme tıklayınca yapıldı olarak işaretleyen kısım
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('isretli');
    }
  }, false);

