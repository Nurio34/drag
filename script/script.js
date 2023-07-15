const showBtn = document.querySelector(".showBtn")
let isShowingContent = false
const contentEl = document.querySelector(".content")
const dragBtn = document.querySelector(".dragBtn")
let isDraggable = false
console.log(dragBtn);



    showBtn.addEventListener("click", ()=> {
        
        if(isShowingContent) {
            contentEl.style = "top : 100%"
            isShowingContent = false
        }
        else if(!isShowingContent) {
            contentEl.style = "top : 50%"
            isShowingContent = true
        }
    })

    window.addEventListener("mousemove", (e)=> {
        
        if(isDraggable) {
            const top = e.pageY
            contentEl.style = `top:${top-16}px`

            if(top >= 800) {
                contentEl.classList.remove("dragging")
                contentEl.style = `top:100%`
                isShowingContent = false
            } else if(top < 800) {
                contentEl.classList.add("dragging")
            }
        } else if (!isDraggable) return

        console.log(isDraggable);
    })

    dragBtn.addEventListener("mousedown", ()=> {
        isDraggable = true
        contentEl.classList.add("dragging")
        dragBtn.classList.add("grabbed")
    })
    window.addEventListener("mouseup", ()=> {
        isDraggable = false
        contentEl.classList.remove("dragging")
        dragBtn.classList.remove("grabbed")
    })
