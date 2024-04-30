// $(function() {
//     var selectedClass = "";
//     $(".filter-tag").click(function(){
//         selectedClass = $(this).attr("data-rel");
//         $(this).addClass('active').siblings().removeClass('active');
//         $("#portfolio").fadeTo(100, 0.1);
//         $("#portfolio .project-item").not("."+selectedClass).fadeOut();
//         setTimeout(function() {
//             $("."+selectedClass).fadeIn();
//             $("#portfolio").fadeTo(500, 1);
//         }, 500);
// 	});
// });

document.addEventListener('DOMContentLoaded', function() {
    var selectedClass = "";
    var filterTags = document.querySelectorAll(".filter-tag");
    var portfolio = document.getElementById("portfolio");

    filterTags.forEach(function(tag) {
        tag.addEventListener('click', function() {
            selectedClass = this.getAttribute("data-rel");

            // 添加/移除 active 類
            filterTags.forEach(function(otherTag) {
                otherTag.classList.remove('active');
            });
            this.classList.add('active');

            // 隱藏和顯示 portfolio 內容
            portfolio.style.opacity = 0.1;
            var projectItems = document.querySelectorAll("#portfolio .project-item");

            projectItems.forEach(function(item) {
                if (!item.classList.contains(selectedClass)) {
                    item.style.display = "none";
                }
            });

            setTimeout(function() {
                projectItems.forEach(function(item) {
                    if (item.classList.contains(selectedClass)) {
                        item.style.display = "block";
                    }
                });
                portfolio.style.opacity = 1;
            }, 500);
        });
    });
});