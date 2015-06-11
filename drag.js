

function DivDrag(id){
    for(var i=0;i<id.length;i++){
        this.commonDrag.move(id[i]);
    }
}

var commonDrag = { 
    move:function(id){
        var bool=false;
        var pageX=0;          
        var pageY=0;
        var needMove=false;
        //��Ҫ�϶���Ŀ��DIV  
        var element = $(id).find('address_bomb_title');
        var eWidth = $(id).width();  
        var eHeight = $(id).height();   
          
        //�ڸ�DIV�ķ�Χ���϶�  
        var pElement = $("body");
        var pWidth = pElement.width();
        var pHeight = pElement.height(); 

        element.mousedown(function(event)  
        {    
            needMove=true;               
            var position = $(id).position();   
            pageX = event.pageX-position.left; //����DIV���������  
            pageY = event.pageY-position.top;    
            element.css('cursor','move');       
        });  

        element.mouseup(function(event)  
        {              
            needMove=false;    
            element.css('cursor','auto');  
        });  

        element.mousemove(function(event)  
        {         
            if(needMove) {    
                //�����ҳ������� - ����DIV��������� = DIV��ҳ�������          
                var ePageX = event.pageX;      
                var ePageY = event.pageY;  
               
                var x = ePageX-pageX;   
                var y = ePageY-pageY;    
                //�������϶����� 
                if (x<=0||x>=(pWidth-eWidth))  
                {  
                    return;  
                }   
                //�������϶�����
                if(y<=0||y>=(pHeight-eHeight))
                {
                    return;
                }           
                $(id).css("left", x);              
                $(id).css("top", y);    
            }
        });  
    }  
};

