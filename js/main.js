/* $(".container").animate({ width: "100%" }, 1000)
$(".container").animate({ minheight: "900" }, 50, function () {
    $(".all-divs").slideDown(500, () => {
        $(".superitem").animate({ opacity: 1 }, 200, () => {
            $(".item").animate({ opacity: 1 }, 200, () => {
                $("img").animate({ opacity: 1 }, 1000)
            })
        })
    })
})



$("img").click(function (e) {
    let src = e.target
    let Src = src.getAttribute("src")
    console.log(Src)
    $(".popup").animate({ opacity: 1, backgroundimage: url(../Src) }, 100, () => {
        console.log("دخل")
/*         $(".popup").animate({ backgroundimage: `url(../${Src})` }, 200)
 */    





 