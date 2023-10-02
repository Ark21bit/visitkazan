export default ()=>{
    let scrollDiv = document.createElement("div");
    scrollDiv.className = "scrollbar-measure";
    document.body.appendChild(scrollDiv);

    let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

    document.body.removeChild(scrollDiv);
    if(document.body.offsetHeight <= window.innerHeight) scrollbarWidth = 0
    return scrollbarWidth    
}