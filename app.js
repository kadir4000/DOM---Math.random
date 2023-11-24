const notifContainer = document.querySelector(".notifContainer")
const button = document.getElementById("button")

const notification = [
   "Instagram bildirim",
   "Twitter Bildirim",
   "Youtube Bildirim",
   "Github Bildirim",
   "Linkedin Bildirim",
   "Medium Bildirim",
   "Facebook Bildirim"
]

const colors = ["red", "purple", "black", "gray", "green", "blue"]

button.addEventListener("click", ()=>createNotification())

function createNotification(){
    const notif = document.createElement("div")
    notif.classList.add("notif")
    notif.classList.add(getRandomColor())

    notif.innerText = getRandomNotif()

    notifContainer.appendChild(notif)

    setTimeout(()=> {
        notif.remove()

    }, 3000)

}

function getRandomNotif() {
    return notification[Math.floor(Math.random() * notification.length)]
  }
  
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
  }
