var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");
let def = document.getElementById("def")
let pink = document.getElementById("pink")
let night = document.getElementById("night")
let back = document.querySelector(".row")
let cont = document.querySelector(".well")

def.addEventListener("click", function(e){
  back.style.backgroundColor = "white"
  back.style.color = "black"
  cont.style.backgroundColor = "black"
  cont.style.color = "white"
})

pink.addEventListener("click", function(e){
  back.style.backgroundColor = "rgb(196,160,206)"
  back.style.color = "black"
  cont.style.backgroundColor = "rgb(241,138,145)"
  cont.style.color = "black"
})

night.addEventListener("click", function(e){
  back.style.backgroundColor = "black"
  back.style.color = "white"
  cont.style.backgroundColor = "black"
  cont.style.color = "lightgray"
})


Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
