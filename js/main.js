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

