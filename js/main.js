//tooltip微信二维码提示框
var className = 'tooltip-box';
function showTooltip(obj, id, html) {
    if (document.getElementById(id) == null) {
        var tooltipBox;
        tooltipBox = document.createElement('div');
        tooltipBox.className = className;
        tooltipBox.id = id;
        tooltipBox.innerHTML = html;

        obj.appendChild(tooltipBox);

        //提示框浮动
        tooltipBox.style.position = "absolute";
        tooltipBox.style.display = "block";

        //提示框位置
        var left = obj.offsetLeft-170;
        var top = obj.offsetTop-100;
            
        tooltipBox.style.left = left + 'px';
        tooltipBox.style.top = top + 'px';
            
        //鼠标指针移除，提示框隐藏display = "none";
        obj.onmouseleave = function () {
            setTimeout(function () {
                document.getElementById(id).style.display = "none";
            }, 100);
        };

    } 
    else {   
        document.getElementById(id).style.display = "block";
    }
}

var t = document.getElementById("tooltip");

t.onmouseenter = function () {
    var _html = '<img src="images/WeChat.png" />';
    showTooltip(this, "t", _html);
};


// page1轮播图
$(function(){
    // 初始化
    $(".tu li").first().show();
    $(".shu li").first().addClass("active");
        
    // 手动控制图片的淡入淡出
    $(".shu li").mouseover(function(){
        $(this).addClass("active").siblings("li").removeClass("active");
        var index=$(this).index();
        i=index
        $(".tu li").eq(index).fadeIn().siblings().fadeOut();
    })

    // 通过时间间隔函数，控制图片的显示
    var i=0;
    var t=setInterval(move,2000);

    //动画运行的核心函数
    function move(){
        i++
        if(i==5){
            i=0;
        }
        $(".shu li").eq(i).addClass("active").siblings().removeClass("active")
        $(".tu li").eq(i).fadeIn().siblings().fadeOut();
    }
            

    //鼠标移入out元素的适合，停掉正在运行的动画
    $(".out").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,2000);   
    })
})