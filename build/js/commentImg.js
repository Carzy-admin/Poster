(function($){
	$.fn.commentImg = function(options){
		var defaults = {
			activeClass: 'current',
        	nextButton: '.next',
        	prevButton: '.prev',
			imgNavBox:'.photos-thumb',
			imgViewBox:'.photo-viewer'
		};
		var opts = $.extend({},defaults, options);

		this.each(function(){
			var _this =$(this),
				imgNav =_this.find(opts.imgNavBox).children(),
				imgViewBox =_this.find(opts.imgViewBox),
				prevBtn = _this.find(opts.prevButton),
				nextBtn = _this.find(opts.nextButton),
				src = '',
				img = new Image();
				
			function setViewImg(viewSrc){
				img.src = viewSrc;
	            img.onload = function () {
	                var imageWidth = img.width;
	                var imageHeight = img.height;	                
	                imgViewBox.show(0,function(){
	                	$(this).css({ "width": imageWidth, "height": imageHeight }).find("img").attr('src', src);
	                });					
	            }	            
			}
						$('#owl-example li').click(function(){
					$(this).addClass('tm-current').parent('div').siblings().find('li').removeClass('tm-current');
						if($(this).hasClass('tm-current')){
					src = $(this).attr('data-src');	
		            setViewImg(src);
				}
				})
//			imgNav.on("click",function(){
//				$(this).toggleClass(opts.activeClass).siblings().removeClass(opts.activeClass);			
//				if($(this).hasClass(opts.activeClass)){
//					src = $(this).attr('data-src');	
//		            setViewImg(src);
//				}
//			});
//			
//			imgViewBox.on("click",function(){
//				imgNav.removeClass(opts.activeClass);			
//				$(this).css({ "width": 0, "height": 0 }).hide();
//			});
//			


				
		})
	
	}

})(jQuery);


