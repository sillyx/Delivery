

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
        //需要拖动的目标DIV  
        var element = $(id).find('address_bomb_title');
        var eWidth = $(id).width();  
        var eHeight = $(id).height();   
          
        //在该DIV的范围内拖动  
        var pElement = $("body");
        var pWidth = pElement.width();
        var pHeight = pElement.height(); 

        element.mousedown(function(event)  
        {    
            needMove=true;               
            var position = $(id).position();   
            pageX = event.pageX-position.left; //鼠标和DIV的相对坐标  
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
                //鼠标在页面的坐标 - 鼠标和DIV的相对坐标 = DIV在页面的坐标          
                var ePageX = event.pageX;      
                var ePageY = event.pageY;  
               
                var x = ePageX-pageX;   
                var y = ePageY-pageY;    
                //向左右拖动限制 
                if (x<=0||x>=(pWidth-eWidth))  
                {  
                    return;  
                }   
                //向上下拖动限制
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

