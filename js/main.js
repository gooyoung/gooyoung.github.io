

//wechat二维码提示框
	var className = 'tooltip-box';

	// 创建div节点
	//obj-超链接元素，id-提示框id，html-提示框内容
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
            //已经存在则显示出来
            document.getElementById(id).style.display = "block";
        }
    }

    var t = document.getElementById("tooltip");

    //鼠标指针进入触发
    t.onmouseenter = function () {
        var _html = '<img src="images/WeChat.png" />';
        showTooltip(this, "t", _html);
    };


window.onorientationchange = function(){
    switch(window.orientation){
        case -90:
        case 90:
        alert("横屏:" + window.orientation);
        case 0:
        case 180:
        alert("竖屏:" + window.orientation);
        break;
    }
}
