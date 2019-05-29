$(document).ready(function () {
    $(".cover").click(function () {
        $(".modalContent").hide();
    })

    // sekillerin uzerine click etmekle deyismesi
    function changeImg() {
        var img = $(this).data("img");
        var index = $(this).data("index");
        var msg = $(this).data("msg");

        $(".slider").children().eq(0).attr("src", `img/imgLarge/${img}`);
        $(".slider").children().eq(1).text(msg);
        if ($(".active")) {
            $(".active").removeClass("active");
        }
        $(".navigation").children().eq(index).children().eq(1).addClass("active");
        $(".modalContent").show();
    }


    $(".mainImg").click(changeImg);

    $(".item").click(changeImg);


    // buttona basmaqla deyismesi
    function right() {
        let next = $(".active").parent().next();
        if (next.length != 0) {
            let img = next.data("img");
            let msg = next.data("msg");
            $(".slider").children().eq(0).attr("src", `img/imgLarge/${img}`);
            $(".slider").children().eq(1).text(msg);
            if ($(".active")) {
                $(".active").removeClass("active");
            }
            next.children().eq(1).addClass("active");
        } else {
            let img = $(".navigation").children().eq(0).data("img");
            let msg = $(".navigation").children().eq(0).data("msg");
            $(".slider").children().eq(0).attr("src", `img/imgLarge/${img}`);
            $(".slider").children().eq(1).text(msg);
            if ($(".active")) {
                $(".active").removeClass("active");
            }
            $(".navigation").children().eq(0).children().eq(1).addClass("active");
        }
    }

    function left() {
        var prev = $(".active").parent().prev();
        if (prev.length != 0) {
            var img = prev.data("img");
            var msg = prev.data("msg");
            $(".slider").children().eq(0).attr("src", `img/imgLarge/${img}`);
            $(".slider").children().eq(1).text(msg);
            if ($(".active")) {
                $(".active").removeClass("active");
            }
            prev.children().eq(1).addClass("active");
        } else {
            var img = $(".navigation").children().last().data("img");
            var msg = $(".navigation").children().last().data("msg");
            $(".slider").children().eq(0).attr("src", `img/imgLarge/${img}`);
            $(".slider").children().eq(1).text(msg);
            if ($(".active")) {
                $(".active").removeClass("active");
            }
            $(".navigation").children().last().children().eq(1).addClass("active");
        }
    }

    $(".navRight").click(right);
    setInterval(right,3000);    // SetInterval


    $(".navLeft").click(left);



    // bonus. sag ve sol oxlari basmaqla deyismesi :D
    $(document).keydown(function (e) {
        if (e.which == 37) {
            left();
        }
    });

    $(document).keydown(function(e){
        if (e.which == 39) {
            right();
        }
    })

















})