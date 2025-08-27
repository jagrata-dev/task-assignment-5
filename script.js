function getLocalTime(){
    const date = new Date().toLocaleTimeString()
    return date
}

// Heart count
document.getElementById("parent-div").addEventListener("click", function(e){
    if(e.target.className.includes("heart-icon")){
        const heartIcon = e.target
        let countHeart = Number(document.getElementById("parent-heart").innerText)
        let totalHeart = countHeart + 1
        document.getElementById("parent-heart").innerText = totalHeart
    }

    if(e.target.className.includes("call-btn")){
        callBtn = e.target
        let cartTitle = callBtn.parentNode.children[1].innerText
        let cartSubTitle = callBtn.parentNode.children[2].innerText
        let cartNumber = callBtn.parentNode.children[3].innerText
        let totalCoin = Number(document.getElementById("total-coin").innerText)
        let availableCoin = totalCoin - 20
        if(totalCoin >= 20){
           document.getElementById("total-coin").innerText = availableCoin
           alert(`Calling ${cartSubTitle} ${cartNumber}....`)
           let newElement = document.createElement('div')
           newElement.innerHTML = `
               <div class="flex justify-between items-center bg-[#FAFAFA] p-[16px] rounded-[8px] mb-[8px]">
                <div>
                <p class="font-bold">Fire Service Number</p>
                <span class="text-[#5C5C5C]">${cartNumber}</span>
               </div>
               <div id="loacl-time">
                 ${getLocalTime()}
               </div>
               </div>
           `
           document.getElementById("history-parent").appendChild(newElement)
        }
        else{
            alert("Not enough coin to call")
            return
        }
    }
})

// Clear
document.getElementById("clear-btn").addEventListener("click", function(){
    document.getElementById("history-parent").innerText = ""
})