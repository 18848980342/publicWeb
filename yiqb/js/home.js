define(function(require,exports,module) {
	
	var Home = {
		initPage:function() {
			// this == Home
			this.showImg();
			this.showUserList();
			this.showUserList2();
			this.showHtml();
		},
		showImg:function() {
			// 通过jQuery转化为dom节点
			var $img = $('<img src="img/banner.png" alt="" />');
			$('#showImg').append($img);
		},
		showUserList:function() {
			var datas = [
                {
                	name:"jim",
                	age:"18"
                },
                {
                	name:"tom",
                	age:"21"
                }
			];
			var _html ='<ul>';
			for (var i = 0; i < datas.length; i++) {
				_html += '<li>姓名：' + datas[i].name + ',年龄：' + datas[i].age + '</li>';
			};
			_html += '</ul>';
			$('#showUser').append(_html);
		},
		showHtml:function() {
			var html = require('view/slide.html');
			console.log(html);
			var htmlFn = _.template(html);  //函数
			// console.log(htmlFn());
			$('#showHtml').html(htmlFn({fileName:"form view folder"}));
		},
		showUserList2:function() {
			var datas = [
                {
                	name:"jim",
                	age:"18"
                },
                {
                	name:"tom",
                	age:"21"
                }
			];
			var _html = require('view/userlist.html');
			var _htmlFn = _.template(_html);
			$('#showUser2').append(_htmlFn({d:datas}));
		}
	}
	module.exports = Home;
});