const tabs = document.querySelectorAll(".tab_btn");
const all_content_boxes = document.querySelectorAll(".content_box");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
        // Remove the active class from all tabs
        tabs.forEach(tab => { tab.classList.remove("active") });
        tab.classList.add("active");

        // Move the line under the buttons
        var line = document.querySelector(".line");
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";

        // Remove the active class from all content_box elements
        all_content_boxes.forEach(box => { box.classList.remove("active") });
        // Add the active class to the content_box corresponding to the clicked tab
        all_content_boxes[index].classList.add("active");
    });
});

