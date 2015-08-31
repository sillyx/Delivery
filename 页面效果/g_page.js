var pagination = {
    pagerBar: '.pag>div',
    pageContent: '',
    //开始出现省略号的标志位,推荐使用奇数
    flagIndex: 5,
    flagIndex2: 8,
    callBack: {},
    sum: 0,
    //初始化分页插件
    init: function (sum, callBack) {
        //this.callBack.call(callBack); 
        var index = parseInt(pagination.flagIndex / 2);
        go = this.go;
        this.callBack = callBack;
        this.sum = sum;
        var content = '<a href="javascript:go(' + 1 + ');">Home</a><a href="javascript:go(-1);">Prev</a>';
        if (sum > 1)
            content += '<span class="current">1</span>';
        else return false;
        if (sum > this.flagIndex + index) {
            for (var i = 2; i <= sum; i++) {
                if (i <= this.flagIndex + 1) {
                    content += '<a href="javascript:go(' + i + ');">' + i + '</a>';
                }
                else if (i > this.flagIndex + 1 && i < sum) {
                    if (i == this.flagIndex + index)
                        content += '...';
                }
                else {
                    content += '<a href="javascript:go(' + i + ');">' + sum + '</a>';
                }
            }
        }
        else {
            for (var i = 2; i <= sum; i++) {
                content += '<a href="javascript:go(' + i + ');">' + i + '</a>';
            }
        }
        content += '<a href="javascript:go();">Next </a> <a href="javascript:go(' + sum + ');"> Back</a>';
        //this.pageContent = content;
        $(pagination.pagerBar).append(content);
    },
    //定位到当前页并执行回调
    go: function (p) {
        var index = parseInt(pagination.flagIndex / 2);
        if (p && p > 0) {
            var content = '<a href="javascript:go(' + 1 + ');">Home</a><a href="javascript:go(-1);">Prev</a>';
            if (pagination.sum < pagination.flagIndex2) {
                for (var i = 1; i <= pagination.sum; i++) {
                    if (i == p) {
                        content += '<span class="current">' + i + '</span>';
                    }
                    else {
                        content += '<a href="javascript:go(' + i + ');">' + i + '</a>';
                    }
                }
            }
            else {
                if (p <= pagination.flagIndex) { 
                    for (var i = 1; i <= pagination.flagIndex + 1; i++) {
                        if (i == p) {
                            content += '<span class="current">' + i + '</span>';
                        }
                        else {
                            content += '<a href="javascript:go(' + i + ');">' + i + '</a>';
                        }
                    }
                    content += '...<a href="javascript:go(' + pagination.sum + ');">' + pagination.sum + '</a>';
                }
                else {
                    content += '<a href="javascript:go(' + 1 + ');">' + 1 + '</a>...'; 
                    if (pagination.sum >= p + pagination.flagIndex + 1) {
                        for (var i = p - index; i <= p + index; i++) {
                            if (i == p) {
                                content += '<span class="current">' + i + '</span>';
                            }
                            else {
                                content += '<a href="javascript:go(' + i + ');">' + i + '</a>';
                            }
                        }
                        content += '...<a href="javascript:go(' + pagination.sum + ');">' + pagination.sum + '</a>';
                    }
                    else {
                        if (pagination.sum >= p + index + 2) {
                            for (var i = p - index; i <= p + index; i++) {
                                if (i == p)
                                    content += '<span class="current">' + p + '</span>';
                                else
                                    content += '<a href="javascript:go(' + i + ');">' + i + '</a>';
                            }
                            content += '...<a href="javascript:go(' + pagination.sum + ');">' + pagination.sum + '</a>';
                        }
                        else {
                            for (var i = pagination.sum - pagination.flagIndex; i <= pagination.sum; i++) {
                                if (i == p)
                                    content += '<span class="current">' + p + '</span>';
                                else
                                    content += '<a href="javascript:go(' + i + ');">' + i + '</a>';
                            }
                        }
                    }
                }
            }
            content += '<a href="javascript:go();">Next </a> <a href="javascript:go(' + pagination.sum + ');"> Back</a>';
            $(pagination.pagerBar).html('');
            $(pagination.pagerBar).append(content);
            this.callBack(p);
        }
        else {
            var nextPage = parseInt($(pagination.pagerBar).find('span').text()) + 1;
            var prevPage = parseInt($(pagination.pagerBar).find('span').text()) - 1;
            if (p < 0) {
                if (prevPage > 0)
                    go(prevPage);
            }
            else {
                if (nextPage <= pagination.sum)
                    go(nextPage);
            }
        }
    }
};
