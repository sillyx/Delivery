

function drag(items) {
    for (var i = 0; i < items.length; i++) {
        this.commonDrag.move(items[i]);
    }
}

//��������
function showDia(diaId) {
    var elementId = '#' + diaId;
    $(elementId).fadeIn();
}
//�رմ���
function closeDia(diaId) {
    var elementId = '#' + diaId;
    $(elementId).fadeOut();
}

var commonDrag = {
    move: function (e) {
        var bool = false;
        var pageX = 0;
        var pageY = 0;
        var needMove = false;
        //��Ҫ�϶���Ŀ��DIV  
        var element = $(e.id).find(e.target);
        var eWidth = $(e.id).width();
        var eHeight = $(e.id).height();

        //�ڸ�DIV�ķ�Χ���϶�  
        var pElement = $("body");
        var pWidth = pElement.width();
        var pHeight = pElement.height();

        element.mousedown(function (event) {
            needMove = true;
            var position = $(e.id).position();
            pageX = event.pageX - position.left; //����DIV���������  
            pageY = event.pageY - position.top;
            element.css('cursor', 'move');
        });

        element.mouseup(function (event) {
            needMove = false;
            element.css('cursor', 'auto');
        });

        element.mousemove(function (event) {
            if (needMove) {
                //�����ҳ������� - ����DIV��������� = DIV��ҳ�������          
                var ePageX = event.pageX;
                var ePageY = event.pageY;

                var x = ePageX - pageX;
                var y = ePageY - pageY;
                //�������϶����� 
                if (x <= 0 || x >= (pWidth - eWidth)) {
                    return;
                }
                //�������϶�����
                if (y <= 0 || y >= (pHeight - eHeight)) {
                    return;
                }
                $(e.id).css("left", x);
                $(e.id).css("top", y);
            }
        });
    }
};

