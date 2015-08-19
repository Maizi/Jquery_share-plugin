(function($){
	$.fn.share=function(para){
		/* ***** 参数说明 *****
		 elem  -- 需要加载的分享数组，默认为 'sina', 'qzone', 'tieba', 'wx', 'kd'
		 url   -- 需要的页面地址，默认取当前页面地址
		 title -- 分享标题
		 desc  -- 分享描述
		 pics  -- 分享配图
		 *********************/
	    var $container = $(this),
	        isIE6 = !!window.ActiveXObject && !window.XMLHttpRequest,
	        settings = {
	            'elem'  : para.elem || ['sina', 'qzone', 'tieba', 'wx', 'kd'],
	            'url'   : para.url || location.href,
	            'title' : para.title || '',
	            'desc'  : para.desc || '',
	            'pics'  : para.pics || '',
	            'links' : {
	                'sina' : 'http://service.weibo.com/share/share.php?appkey=1343713053',
	                'qzone': 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?',
	                'tieba': 'http://tieba.baidu.com/f/commit/share/openShareApi?'
	            }
	        },
	        _html = '';
	    
	    for ( var i = 0; i < settings.elem.length; i++ ) {
	        var tp = settings.elem[i],
	        	pic = (tp === 'qzone') ? 'pics' : 'pic',	//	qzone 参数为pics
	            url = (tp === 'sina') ? '&url' : 'url',		//  sina  url为第二参数，加&
	            paraString = settings.links[tp]+url+'='+encodeURIComponent(settings.url)+'&title='+settings.title+'&'+pic+'='+settings.pics;
	        
	        if ( tp === 'wx' || tp === 'kd' ) {
	            _html += '<a class="'+tp+' posr e-code" href="javascript:void(0);"><span></span></a>';
	        } else {
	            _html += '<a class="'+tp+'" href="'+paraString+'" target="_blank"></a>';
	        }
	    }    

	    $container.html(_html)
	    		  .find('.e-code').hover(function(){
				        var $elem = $(this).find('span');
				        isIE6 ? $elem.show() : $elem.stop().animate({'opacity': '1','bottom': '-114px'}, 400);
				    },function(){
				        var $elem = $(this).find('span');
				        isIE6 ? $elem.hide() : $elem.stop().animate({'opacity': '0','bottom': '-124px'}, 400);
				        
				    });  
	};
})(jQuery);