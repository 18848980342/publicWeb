define(function(require,exports,module){
	var SlideImg = {
		init: function(){
			// var $item = $('.showImg');
			// var $imgs = $('img',$item);
			var $imgs = $('.showImg img');
			var $pointer = $('.showImg .slidePointer span');
			var curIndex = 1;
			
			var inter = setInterval(function(){
				curIndex++;
				if ( curIndex == $imgs.length) {
					curIndex = 0;
				}
				$imgs.eq( curIndex ).stop(true,true).fadeIn().siblings('img').fadeOut();
				$pointer.eq( curIndex ).addClass('active').siblings().removeClass('active');
			},2000);

			$pointer.on('click',function(e){
				clearInterval( inter );
				var _index = $pointer.index($(e.target));
				curIndex = _index;
				
				$imgs.eq( curIndex ).stop(true,true).fadeIn().siblings('img').fadeOut();
				$pointer.eq( curIndex ).addClass('active').siblings().removeClass('active');
				
				inter = setInterval(function(){
					curIndex++;
					if ( curIndex == $imgs.length) {
						curIndex = 0;
					}
					$imgs.eq( curIndex ).stop(true,true).fadeIn().siblings('img').fadeOut();
					$pointer.eq( curIndex ).addClass('active').siblings().removeClass('active');
				},2000);
			});
		}
	}
	module.exports = SlideImg;
});