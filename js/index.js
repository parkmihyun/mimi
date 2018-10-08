ju_menuA=new Array();
ju_menuA[1]="ABOUT";
ju_menuA[2]="VINYL";
ju_menuA[3]
ju_menuA[4]="CD";
ju_menuA[5]="MUSIC";

sub_menuA=new Array();
sub_menuA[1]="VINYL";
sub_menuA[2]="Information";
sub_menuA[3]="Notice";
sub_menuA[4]="FAQ";
sub_menuA[5]="New Releases";
sub_menuA[6]="Essential";
sub_menuA[7]="Monthly Specia";
sub_menuA[8]="Arist Highlights";
sub_menuA[9]="New Releases";
sub_menuA[10]="Essential";
sub_menuA[11]="Best Picks";
sub_menuA[12]="Music Gear";
sub_menuA[13]="Accessories";
sub_menuA[14]="Shop";
sub_menuA[15]="Shop2";

// 신2_3에 관련된 그림
var bgA=new Array();
bgA[1]="img/sin2/sin2_3/1.jpg"; 
bgA[2]="img/sin2/sin2_3/2.jpg"; 
bgA[3]="img/sin2/sin2_3/3.jpg"; 
bgA[4]="img/sin2/sin2_3/4.jpg"; 
bgA[5]="img/sin2/sin2_3/5.jpg"; 
bgA[6]="img/sin2/sin2_3/6.jpg"; 
bgA[7]="img/sin2/sin2_3/7.jpg"; 
bgA[8]="img/sin2/sin2_3/8.jpg"; 
bgA[9]="img/sin2/sin2_3/9.jpg"; 
bgA[10]="img/sin2/sin2_3/10.jpg";
bgA[11]="img/sin2/sin2_3/11.jpg"; 
bgA[12]="img/sin2/sin2_3/12.jpg"; 
bgA[13]="img/sin2/sin2_3/1.jpg"; 


// 신0_3에 관련된 그림
var sin03_imgA=new Array();
sin03_imgA[1]="img/sin0/sin0_3/1.jpg";
sin03_imgA[2]="img/sin0/sin0_3/2.jpg";
sin03_imgA[3]="img/sin0/sin0_3/3.jpg";
sin03_imgA[4]="img/sin0/sin0_3/4.jpg";
sin03_imgA[5]="img/sin0/sin0_3/5.jpg";

var box_textA=new Array();
box_textA[1]="<font style='font-weight:bold; font-size:20px; color:white;'>21</font><br>Adele";
box_textA[2]="<font style='font-weight:bold; font-size:20px; color:white;'>1</font><br>The Beatles";
box_textA[3]="<font style='font-weight:bold; font-size:17px; color:white;'>A Rush of Blood to the Head</font><br>Coldplay";
box_textA[4]="<font style='font-weight:bold; font-size:20px; color:white;'>Nevermind</font><br>Nirvana";
box_textA[5]="<font style='font-weight:bold; font-size:20px; color:white;'>La La Land</font><br>music by Justin Hurwitz";




$(function()
	{
			// 주 메뉴 글자와 배경 그림 넣기
			for(i=1; i <= 5; i++)
					$("#ju_menu li:eq(" + (i-1) + ")").text(ju_menuA[i]);
			//서브 메뉴 글자와 주메뉴 오버시 서브 메뉴가 탑다운
			for(i=1; i <=14; i++)
					$("#sub_menu li:eq(" + (i-1) +")").text(sub_menuA[i]);
			
	
			$("#sub_menu").hide();
			$("nav").hover(function()
			{	
						$("#sub_menu").stop();
						$("#sub_menu").slideDown();
			},function()
			{
						$("#sub_menu").stop();
						$("#sub_menu").slideUp();
			});
            
     
            // 주메뉴 클릭 시 맨위로 
            $("#ju_menu li").click(function()
		    {
            $("html, body").stop().animate({"scrollTop":0},500);
            });
			// 서브 메뉴 클릭 시 해당 위치로 이동
			$("#m1 li").click(function(){
				menu_no=$(this).index()+1;
				//var na=$(this).attr("id");
				pos="#sin1_"+menu_no;
				//alert(pos);
				pos=$(pos).position().top;
				$("html, body").stop().animate({"scrollTop":pos},500);
			});
			
			$("#m2 li").click(function(){
				menu_no=$(this).index()+1;
				pos="#sin2_"+menu_no;
				
				pos=$(pos).position().top;
				$("html, body").stop().animate({"scrollTop":pos},500);
			});
			
			$("#m4 li").click(function(){
				menu_no=$(this).index()+1;
				pos="#sin3_"+menu_no;
				
				pos=$(pos).position().top;
				$("html, body").stop().animate({"scrollTop":pos},500);
			});
			
			$("#m5 li").click(function(){
				menu_no=$(this).index()+1;
				pos="#sin4_"+menu_no;
				
				pos=$(pos).position().top;
				$("html, body").stop().animate({"scrollTop":pos},500);
			});			
			
            //주메뉴 FAQ 클릭 시 해당 위치로 이동
             $("#subfaq").click(function(){
                menu_no=$(this).index()+1;
				pos="#sin1_0";
				
				$("html, body").stop().animate({"scrollTop":"3810px"},500);
			});
    
            $("#sublogin").click(function(){
				$("html, body").stop().animate({"scrollTop":"0px"},500);
			});
   
    
            /*팝업배너*/
            $("#sublogin").click(function(){
                $("#popup").fadeIn();
            });
            $("#popup>button").click(function(){
                $("#popup").fadeOut();
            });
    
            /*회원가입 배너*/
            $("#submem").click(function(){
                $("#popup2").fadeIn();
            });
            $("#popup2>button").click(function(){
                $("#popup2").fadeOut();
            });
    
            $("#popup>#pop_click2").click(function(){
                $("#popup2").fadeIn();
            });
            $("#popup>#pop_click2").click(function(){
                $("#popup").fadeOut();
            });
    
});

	
// 서브 메뉴  sin0 ~ sin12 까지 선택 함수------------------------------
function sin_func(js)
{		
		sin0.style.display="none";
		sin1.style.display="none";
		sin2.style.display="none";
		sin3.style.display="none";
		sin4.style.display="none";

		switch(js)
		{
				case 0:sin0.style.display="block";break;
				case 1:sin1.style.display="block";break;
				case 2:sin2.style.display="block";break;
				case 3:sin3.style.display="block";break;
				case 4:sin4.style.display="block";break;
		}
}
// 서브 메뉴  sin0 ~ sin12 까지 선택 함수 끝 --------------------------



$(function()
{
	var shrinkHeader = 150;
	$(window).scroll(function() {
		var scroll = getCurrentScroll();
		if ( scroll >= shrinkHeader ) {
			$('#sin0').addClass('shrink');
			$('header').addClass('shrink');
			$('nav').addClass('shrink');
			$('#sin0 nav #right_menu li').css('lineHeight','40px');
			$('.up').css('opacity','1');
		}
		else {
			$('#sin0').removeClass('shrink');
			$('header').removeClass('shrink');
			$('nav').removeClass('shrink');
			$('#sin0 nav #right_menu li').css('lineHeight','50px');
			$(".up").css('opacity','0');
		}
	});
	
	function getCurrentScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
    
    
    
    // sin0 scroll 시작-----------------------------------------------------------
    $(window).scroll(function(){
		pos=$(window).scrollTop();
		if( pos > 350){
			$("#sin0_2top1").stop().animate({"opacity":"1","margin-top":"0px"},500);
            $("#sin0_2top2").stop().animate({"opacity":"1","margin-top":"0px"},500);
        }else{
			$("#sin0_2top1").stop().animate({"opacity":"0","margin-top":"130px"},500);
            $("#sin0_2top2").stop().animate({"opacity":"0","margin-top":"130px"},500);			
        }
    });
    $(window).scroll(function(){
		pos=$(window).scrollTop();
		if( pos > 900){
			$("#sin0_2sub1").stop().animate({"opacity":"1","margin-top":"0px"},500);
            $("#sin0_2sub2").stop().animate({"opacity":"1","margin-top":"0px"},500);
        }else{
			$("#sin0_2sub1").stop().animate({"opacity":"0","margin-top":"100px"},500);
            $("#sin0_2sub2").stop().animate({"opacity":"0","margin-top":"100px"},500);	
        }
	});
    $(window).scroll(function(){
		pos=$(window).scrollTop();
		if( pos > 1500){
			$("#sin0_2chart1").stop().animate({"opacity":"1","margin-top":"0px"},500);
            $("#sin0_2chart2").stop().animate({"opacity":"1","margin-top":"0px"},500);
        }else{
			$("#sin0_2chart1").stop().animate({"opacity":"0","margin-top":"100px"},500);
            $("#sin0_2chart2").stop().animate({"opacity":"0","margin-top":"100px"},500);
        }
	});
    $(window).scroll(function(){
		pos=$(window).scrollTop();
		if( pos > 2400){
			$("#sin03_img").stop().animate({"opacity":"1","margin-top":"0px"},500);
        }else{
			$("#sin03_img").stop().animate({"opacity":"0","margin-top":"100px"},500);
            
        }
    });
    $(window).scroll(function(){
		pos=$(window).scrollTop();
		if( pos > 2800){
			$("#sin0_4chart1").stop().animate({"opacity":"1","margin-top":"0px"},500);
            $(".sin0_more").stop().animate({"opacity":"1","margin-top":"0px"},500);
        }else{
			$("#sin0_4chart1").stop().animate({"opacity":"0","margin-top":"100px"},500);
            $("#sin0_more").stop().animate({"opacity":"0","margin-top":"100px"},500);
        }
    });
    // sin0 scroll 끝-----------------------------------------------------------
    
    //sin0 chart21 클릭시 클릭바 슬라이드 에니메이션----------------------------------------
    $(".chart21_1").click (function()
    {
	$(".bar").stop().animate({"left":"0px"},500);
	});
	
	$(".chart21_2").click (function()
	{
	$(".bar").stop().animate({"left":"600px"},500);
	});
    //클릭바 슬라이드 에니메이션 끝---------------------------------------------------
    
    $(".chart23").hide();
    
    $(".chart21_1").click (function()
    {
        $(".chart23").hide();
		$(".chart22").fadeIn();
	});
     $(".chart21_2").click (function()
    {
        $(".chart22").hide();
		$(".chart23").fadeIn();
	});
    
    
    //sin0_3 리스트 내용 클릭하면 그림 바꾸기
		$("#sin0_3box div:nth-child(2) ul li").click(function()
		{
				var sin03list_no=$(this).index()+1;
				//alert(at12_no);
				$("#sin03_pic").attr({"src":sin03_imgA[sin03list_no]});
				$("#sin03_pic").hide();
				$("#sin03_pic").fadeIn();
				
				$("#box_text").html(box_textA[sin03list_no])
                                .css("color","#ccc")
                                .css("font-size","16px")
                                .css("line-height","25px");
            
				//바 움직이기*/
				pos=sin03list_no *60;
				$("#box_bar").stop().animate({"top":pos},300)
                            .css("margin-top","120px");
		});
    
    //sin0_4 더보기 클릭 시 sin4_0으로 이동
    $("#sin0_4 .sin0_more").click(function(){
                menu_no=$(this).index()+1;
				pos="#sin4_0";
				
				pos=$(pos).position().top;
				$("html, body").stop().animate({"scrollTop":pos},500);
				
			});
    
});




$(function()
	{
		
		// 서브메뉴 sin1 작업 시작---------------------------------------------------	
		$("#sin1_bgmove").mousemove(function(e)
		{   // #sin22_bgmove 박스에 마우스가 움직임이 감지되면	
	
			//offset 변수 선언 - left, top에서 얼마나 떨어져 있는가 값을 구함
			var offset = $(this).offset();   
			//e는 mousemove 하면 자동 발생되는 값.pageX 가로축 값
			var xp = e.pageX - offset.left;  
			var yp = e.pageY - offset.top;    
			
			//Math.round - 수학함수에서 반올림 하는 함수 5이상이면 올림 아니면 잘라냄
			var xper = Math.round(xp / $(this).width() * 100);
			var yper = Math.round(yp / $(this).height() * 100);
			
			$(this).children('img').each(function() 
			{   
				//alert( $("#sin22_bgmove").width() + "\n" + $(this).width() );
				var diffx = $("#sin1_bgmove").width() - $(this).width();
				var diffy = $("#sin1_bgmove").height() - $(this).height();
			
				//#sin22_bgmove의 넓이 - 이미지 넓이
				var myx = diffx * (xper / 100);
				var myy = diffy * (yper / 100);
				
				// 실제로 움직일 픽셀값, 이미지의 크기를 넘지않게
			$(this).animate({left: myx, top: myy} , 
				{duration:50, queue:  false, easing: 'linear'});
				// queue 실행되는 순서를 기다려서 앞에 것이 실행 되고 나면 실행되는
				
			});
		});
		
		// 서브메뉴 sin1 작업 끝---------------------------------------------------
    
        // sin1_3 공지 토글
        $(".notice_text").hide();
        $("#notice_text5").fadeIn();
        var sw=0;
        $(".notice_title").click(function(){
            //슬라이드 열렸다 졉혔다 하기
            var notice_no=$(this).index() - 1;
            //alert(review_no);
            $(".notice_text").hide();
            $("#notice_text" + (notice_no + 2) ).slideToggle();
            if(sw==0){
                sw=1;
            }
            else{
                sw=0;
            }
        });
        // sin1_3 공지 토글 작업 끝------------------------------
		
        // sin1_4 FAQ 토글
        $(".faq_text").hide();
        var sw=0;
        $(".faq_title").click(function(){
            //슬라이드 열렸다 졉혔다 하기
            var faq_no=$(this).index() - 1;
            //alert(review_no);
            $(".faq_text").hide();
            $("#faq_text" + (faq_no + 2) ).slideToggle();
            if(sw==0){
                sw=1;
            }
            else{
                sw=0;
            }
        });
        // sin1_4 FAQ 토글 작업 끝------------------------------
    
        
    
        // 서브메뉴 sin2_1 작업 시작 (< >버튼 클릭시 가로축 이동) -------------------------
        var cnt=1;
        
        $("#sin2 .sin2_rightB").click(function()
        {
            if(cnt>=4)
                ;
            else if(cnt==1)
            {
                $(".sin2_u1").animate({"left":"-=1224px"});
                $(".sin2_u2").animate({"left":"-=1224px"});
                cnt++;
            }
            else if(cnt==2)
            {
                $(".sin2_u1").animate({"left":"-=1224px"});
                $(".sin2_u2").animate({"left":"-=1224px"});
                cnt++;
            }
            else if(cnt==3)
            {
                $(".sin2_u1").animate({"left":"-=1224px"});
                $(".sin2_u2").animate({"left":"-=1224px"});
                cnt++;
            }
        });
    
        $("#sin2 .sin2_leftB").click(function()
        {
            if(cnt<=1)
                ;
            else if(cnt==2)
            {
                $("#sin2 #sin2_1 #sin2_11 .sin2_u1").animate({"left":"+=1224px"});
                $("#sin2 #sin2_1 #sin2_11 .sin2_u2").animate({"left":"+=1224px"});
                cnt--;
            }
            else if(cnt==3)
            {
                $("#sin2 #sin2_1 #sin2_11 .sin2_u1").animate({"left":"+=1224px"});
                $("#sin2 #sin2_1 #sin2_11 .sin2_u2").animate({"left":"+=1224px"});
                cnt--;
            }
            else if(cnt==4)
            {
                $("#sin2 #sin2_1 #sin2_11 .sin2_u1").animate({"left":"+=1224px"});
                $("#sin2 #sin2_1 #sin2_11 .sin2_u2").animate({"left":"+=1224px"});
                cnt--;
            }
        });
        // 서브메뉴 sin2_1  end-----------------------------------------------------
    
    
    
        // 서브메뉴 sin2_2 작업 시작 ------------------------------------------
	
        $("#sin2 #sin2_2 #sin2_2box ul li div").css("marginTop","230px");

        $("#sin2 #sin2_2 #sin2_2box .sin2_2box1 li").on("mouseover",function()
        {
            var sin22_no=$(this).index();
            $("#sin2 #sin2_2 #sin2_2box .sin2_2box1 li .sin2_2hide:eq("+sin22_no+")")
                .stop()
                .animate({"marginTop":0},600);
        });
        $("#sin2 #sin2_2 #sin2_2box .sin2_2box1 li").on("mouseout",function()
        {
            var sin22_no=$(this).index();
            $("#sin2 #sin2_2 #sin2_2box .sin2_2box1 li .sin2_2hide:eq("+sin22_no+")")
                .stop()
                .animate({"marginTop":230},800);
        });
    
    
         $("#sin2 #sin2_2 #sin2_2box .sin2_2box2 li").on("mouseover",function()
        {
            var sin22_no=$(this).index();
            $("#sin2 #sin2_2 #sin2_2box .sin2_2box2 li .sin2_2hide:eq("+sin22_no+")")
                .stop()
                .animate({"marginTop":0},600);
        });
        $("#sin2 #sin2_2 #sin2_2box .sin2_2box2 li").on("mouseout",function()
        {
            var sin22_no=$(this).index();
            $("#sin2 #sin2_2 #sin2_2box .sin2_2box2 li .sin2_2hide:eq("+sin22_no+")")
                .stop()
                .animate({"marginTop":230},800);
        });
    
	    // 서브메뉴 sin2_2  end-----------------------------------------------------
		
    
    
		// 서브메뉴 sin2_3 작업 시작--------------------------------------------------		
            var sin23_cnt=12;
			$("#sin2_3 #sin2_3menu .sin2_3at div:eq(12)")
				.css("box-shadow","0 0 50px #ccc")
				.css("outline","5px solid white");		
			
			
			$("#sin2_3 #sin2_3menu .sin2_3at div").hover(function()
			{
				$(this).css("box-shadow","0 0 50px #ccc")
					   .css("outline","5px solid white");		
			},function()
			{
				$(this).css("box-shadow","0 0 0px #ccc")
					   .css("outline","0px solid white");;
			});
			
			
			
			$("#sin2_3 #sin2_3menu #sin2_3at1 div").click(function()
			{
				var no=$(this).index()+1;
				var count=no-1;
				//alert(no);
				sin23_cnt=no;
				$("#sin2_3 #sin2_3menu  #sin2_3pic").attr({"src":bgA[no]});
				$("#sin2_3 #sin2_3menu  #sin2_3pic").hide();
				$("#sin2_3 #sin2_3menu  #sin2_3pic").fadeIn();
				
				// .sin2_3at 안의 모든 div 테두리 없애고
				$("#sin2_3 #sin2_3menu .sin2_3at div")
				.css("box-shadow","0 0 50px #ccc")
				.css("outline","0px solid white");
				// 선택된 sin23_cnt 값에 해당하는 그림 div에 테두리 표시
				$("#sin2_3 #sin2_3menu #sin2_3at1 div:eq("+count+")")
				.css("box-shadow","0 0 50px #ccc")
				.css("outline","5px solid white");
				
				//첫번째줄 이미지 클릭 시 해당 내용 나타나게
				$("#sin2_3big .sin2_3middle ul li").hide();
				$("#sin2_3big .sin2_3middle2 ul li").hide();
					var sin23_no=$(this).index();
					//alert(at23_no);
					$("#sin2_3big .sin2_3middle ul li:eq("+sin23_no+")").fadeIn();
			});
				
			
			
			
			$("#sin2_3 #sin2_3menu #sin2_3at2 div").click(function()
			{
				var no=$(this).index()+1;
				//alert(no);
				var count=no-1;
				sin23_cnt=no+6;
				$("#sin2_3 #sin2_3menu  #sin2_3pic").attr({"src":bgA[no+6]});
				$("#sin2_3 #sin2_3menu  #sin2_3pic").hide();
				$("#sin2_3 #sin2_3menu  #sin2_3pic").fadeIn();
				
				// .sin2_3at 안의 모든 div 테두리 없애고
				$("#sin2_3 #sin2_3menu .sin2_3at div")
				.css("box-shadow","0 0 50px #ccc")
				.css("outline","0px solid white");
				// 선택된 sin23_cnt 값에 해당하는 그림 div에 테두리 표시
				$("#sin2_3 #sin2_3menu #sin2_3at2 div:eq("+count+")")
				.css("box-shadow","0 0 50px #ccc")
				.css("outline","5px solid white");
				
				//두번째줄 이미지 클릭 시 해당 내용 나타나게
				$("#sin2_3big .sin2_3middle ul li").hide();
				$("#sin2_3big .sin2_3middle2 ul li").hide();
					var sin23_no=$(this).index();
					//alert(at23_no);
					$("#sin2_3big .sin2_3middle2 ul li:eq("+sin23_no+")").fadeIn();
			});
			
			
			
			$("#sin2_3 #sin2_3menu #sin2_3leftB").click(function()
			{
				if(sin23_cnt <= 1)
					sin23_cnt=13;
				sin23_cnt--;
				$("#sin2_3 #sin2_3menu  #sin2_3pic").attr({"src":bgA[sin23_cnt+1]});
				$("#sin2_3 #sin2_3menu  #sin2_3pic").hide();
				$("#sin2_3 #sin2_3menu  #sin2_3pic").fadeIn();
				// .sin2_3at 안의 모든 div 테두리 없애고
				$("#sin2_3 #sin2_3menu .sin2_3at div")
				.css("box-shadow","0 0 50px #ccc")
				.css("outline","0px solid white");
				// 선택된 sin23_cnt 값에 해당하는 그림 div에 테두리 표시
				$("#sin2_3 #sin2_3menu .sin2_3at div:eq("+(sin23_cnt)+")")
				.css("box-shadow","0 0 50px #ccc")
				.css("outline","5px solid white");
				
				$("#sin2_3big .sin2_3middle ul li").hide();
				$("#sin2_3big .sin2_3middle2 ul li").hide();
					/*var sin23_no=$(this).index();
					//alert(at23_no);
					$("#sin2_3big .sin2_3middle2 ul li:eq("+(sin23_cnt-6)+")").fadeIn();
					
					$("#sin2_3big .sin2_3middle ul li:eq("+(sin23_cnt-0)+")").fadeIn();
					*/
					
						
					if(sin23_cnt<=5)
					{
						$("#sin2_3big .sin2_3middle ul li:eq("+(sin23_cnt)+")").fadeIn();
						$("#sin2_3big .sin2_3middle2 ul li").hide();
					}
					else if(sin23_cnt>=6)
					{
						$("#sin2_3big .sin2_3middle2 ul li:eq("+(sin23_cnt-6)+")").fadeIn();
						$("#sin2_3big .sin2_3middle ul li").hide();
					}
			});
			
			$("#sin2_3 #sin2_3menu #sin2_3rightB").click(function()
			{
				if(sin23_cnt >= 12)
					sin23_cnt=0;
				sin23_cnt++;
				$("#sin2_3 #sin2_3menu  #sin2_3pic").attr({"src":bgA[sin23_cnt]});
				$("#sin2_3 #sin2_3menu  #sin2_3pic").hide();
				$("#sin2_3 #sin2_3menu  #sin2_3pic").fadeIn();
				// .sin2_3at 안의 모든 div 테두리 없애고
				$("#sin2_3 #sin2_3menu .sin2_3at div")
				.css("box-shadow","0 0 50px #ccc")
				.css("outline","0px solid white");
				// 선택된 sin2_3cnt 값에 해당하는 그림 div에 테두리 표시
				$("#sin2_3 #sin2_3menu .sin2_3at div:eq("+(sin23_cnt-1)+")")
				.css("box-shadow","0 0 50px #ccc")
				.css("outline","5px solid white");
				
				$("#sin2_3big .sin2_3middle ul li").hide();
				$("#sin2_3big .sin2_3middle2 ul li").hide();
				
                
                if(sin23_cnt<=6)
					{
						$("#sin2_3big .sin2_3middle ul li:eq("+(sin23_cnt-1)+")").fadeIn();
						$("#sin2_3big .sin2_3middle2 ul li").hide();
					}
					else if(sin23_cnt>=6)
					{
						$("#sin2_3big .sin2_3middle2 ul li:eq("+(sin23_cnt-7)+")").fadeIn();
						$("#sin2_3big .sin2_3middle ul li").hide();
					}
			});
			// 서브메뉴 sin2_3  end-----------------------------------------------------------
		
		
		
			// sin3_3 누르면 바뀌게 될 그림
            $("#sin3 #sin3_3 #sin3_3box2").hide();
    
            $("#sin3_menu_ul li:nth-child(1)").click(function()
			{
				$("#sin3 #sin3_3 #sin3_3box2").hide();
				$("#sin3 #sin3_3 #sin3_3box").fadeIn();
                $("#sin3_menu_ul li:nth-child(1)").css("background","black");
                $("#sin3_menu_ul li:nth-child(2)").css("background","gray");
			});
            $("#sin3_menu_ul li:nth-child(2)").click(function()
			{
				$("#sin3 #sin3_3 #sin3_3box").hide();
				$("#sin3 #sin3_3 #sin3_3box2").fadeIn();
                $("#sin3_menu_ul li:nth-child(2)").css("background","black");
                $("#sin3_menu_ul li:nth-child(1)").css("background","gray");
			});
    
    
        
            $("#sin3 #sin3_3 #sin3_3box ul li div").css("marginTop","230px");

            $("#sin3 #sin3_3 #sin3_3box .sin3_3box1 li").on("mouseover",function()
            {
                var sin33_no=$(this).index();
                $("#sin3 #sin3_3 #sin3_3box .sin3_3box1 li .sin3_3hide:eq("+sin33_no+")")
                    .stop()
                    .animate({"marginTop":0},600);
            });
            $("#sin3 #sin3_3 #sin3_3box .sin3_3box1 li").on("mouseout",function()
            {
                var sin33_no=$(this).index();
                $("#sin3 #sin3_3 #sin3_3box .sin3_3box1 li .sin3_3hide:eq("+sin33_no+")")
                    .stop()
                    .animate({"marginTop":230},800);
            });


             $("#sin3 #sin3_3 #sin3_3box .sin3_3box2 li").on("mouseover",function()
            {
                var sin33_no=$(this).index();
                $("#sin3 #sin3_3 #sin3_3box .sin3_3box2 li .sin3_3hide:eq("+sin33_no+")")
                    .stop()
                    .animate({"marginTop":0},600);
            });
            $("#sin3 #sin3_3 #sin3_3box .sin3_3box2 li").on("mouseout",function()
            {
                var sin33_no=$(this).index();
                $("#sin3 #sin3_3 #sin3_3box .sin3_3box2 li .sin3_3hide:eq("+sin33_no+")")
                    .stop()
                    .animate({"marginTop":230},800);
            });

    
    
    
            $("#sin3 #sin3_3 #sin3_3box2 ul li div").css("marginTop","230px");

            $("#sin3 #sin3_3 #sin3_3box2 .sin3_3box3 li").on("mouseover",function()
            {
                var sin33_no=$(this).index();
                $("#sin3 #sin3_3 #sin3_3box2 .sin3_3box3 li .sin3_3hide2:eq("+sin33_no+")")
                    .stop()
                    .animate({"marginTop":0},600);
            });
            $("#sin3 #sin3_3 #sin3_3box2 .sin3_3box3 li").on("mouseout",function()
            {
                var sin33_no=$(this).index();
                $("#sin3 #sin3_3 #sin3_3box2 .sin3_3box3 li .sin3_3hide2:eq("+sin33_no+")")
                    .stop()
                    .animate({"marginTop":230},800);
            });


             $("#sin3 #sin3_3 #sin3_3box2 .sin3_3box4 li").on("mouseover",function()
            {
                var sin33_no=$(this).index();
                $("#sin3 #sin3_3 #sin3_3box2 .sin3_3box4 li .sin3_3hide2:eq("+sin33_no+")")
                    .stop()
                    .animate({"marginTop":0},600);
            });
            $("#sin3 #sin3_3 #sin3_3box2 .sin3_3box4 li").on("mouseout",function()
            {
                var sin33_no=$(this).index();
                $("#sin3 #sin3_3 #sin3_3box2 .sin3_3box4 li .sin3_3hide2:eq("+sin33_no+")")
                    .stop()
                    .animate({"marginTop":230},800);
            });
    
    
    
           
           $("#text2").hide();
           $("#text3").hide();
           $("#text4").hide();
    
            $(".menu1").click (function()
            {
                $("#text2").hide();
                $("#text3").hide();
                $("#text4").hide();
                $("#text1").fadeIn();
            });
            $(".menu2").click (function()
            {
                $("#text1").hide();
                $("#text3").hide();
                $("#text4").hide();
                $("#text2").fadeIn();
            });
            $(".menu3").click (function()
            {
                $("#text1").hide();
                $("#text2").hide();
                $("#text4").hide();
                $("#text3").fadeIn();
            });
            $(".menu4").click (function()
            {
                $("#text1").hide();
                $("#text2").hide();
                $("#text3").hide();
                $("#text4").fadeIn();
            });
            
    
            $(".menu1").click (function()
            {
                $(".menu1").css("color","orange");
                $(".menu2").css("color","darkgray");
                $(".menu3").css("color","darkgray");
                $(".menu4").css("color","darkgray");
            });
            $(".menu2").click (function()
            {
                $(".menu2").css("color","orange");
                $(".menu1").css("color","darkgray");
                $(".menu3").css("color","darkgray");
                $(".menu4").css("color","darkgray");
            });
            $(".menu3").click (function()
            {
                $(".menu3").css("color","orange");
                $(".menu1").css("color","darkgray");
                $(".menu2").css("color","darkgray");
                $(".menu4").css("color","darkgray");
            });
            $(".menu4").click (function()
            {
                $(".menu4").css("color","orange");
                $(".menu1").css("color","darkgray");
                $(".menu2").css("color","darkgray");
                $(".menu3").css("color","darkgray");
            });
    
});	


/*
function popup2_check(js)
 {
		// 성 입력시 한글만 입력 되었는지 확인 작업
		var len=js.popup2_sung.value.length;
		//alert(len);
		if( len<1 )
		{
				alert("성은 1글자 이상 입력하세요");
				js.popup2_sung.value="";
				js.popup2_sung.focus();
				return ;
		}
		for(i=0; i<len; i++)
		{
				code=js.popup2_sung.value.charCodeAt(i);
				if(code < 128)
				{
					alert("한글로 입력하세요");
					js.popup2_sung.value="";
					js.popup2_sung.focus();
					return ;
				}
		}
 }
		 
		 
		// 이름 입력시 한글만 입력 되었는지 확인 작업
		var len=js.at_name.value.length;
		//alert(len);
		if( len<1 )
		{
				alert("이름은 2글자 이상 입력하세요");
				js.at_name.value="";
				js.at_name.focus();
				return ;
		}
		for(i=0; i<len; i++)
		{
				code=js.at_name.value.charCodeAt(i);
				if(code < 128)
				{
					alert("한글로 입력하세요");
					js.at_name.value="";
					js.at_name.focus();
					return ;
				}
		}
	*/
	
	// 전화번호가 숫자인지 체크 하는 작업
/*	if( isNaN(js.popup2_tel_2.value) ||  isNaN(js.popup2_tel_3.value) 
			||  js.popup22_tel_2.value == "" ||  js.popup2_tel_3.value == "" ) 
	{
		alert("전화번호는 숫자로 입력 하세요");
		js.popup2_tel_2="";
		js.popup2_tel_3="";
		js.popup2_tel_2.focus();
		return;
	}
	//alert(js.at42_tel_2.value);
	
	// 주민번호 13자리 확인 작업
	noA=new Array();	
	noA=js.at42_ju_1.value + js.at42_ju_2.value;
	// noA=735896 + 1165484     noA="7358961165484"
	// str='A';    str="A"; 
	if( noA.length != 13 )
	{
		alert("주민번호는 13자리인지 확인해 주세요");
		js.at42_ju_1.value="";
		js.at42_ju_2.value="";
		js.at42_ju_1.focus();
		return;
	}
	var sum=0;
	k=new Array(2,3,4,5,6,7,8,9,2,3,4,5);
	for(i=0; i<=11; i++)
	{
		//alert(noA.substring(i, i+1) );
		//      720515 201485 4
		sum += k[i] * noA.substring(i, i+1); 
	}
	nam = sum % 11;
	bit = 11 - nam;
	
	if(bit != noA.substring(12, 13) )
	{
		alert("틀린 주민번호 입니다.");
		js.at42_ju_1.value="";
		js.at42_ju_2.value="";
		js.at42_ju_1.focus();
		return;
	}

	//객체 변수화
	var ff=document.at42_form;
	var val=0;


	// 성별 체크 작업
	var a=document.getElementByName("42_sex");
	var a_cnt=a.length;
	var val=""; 
	for(i=0; i<a; i++)
	{
		if(a[i].checked)
			val=val + a[i].value + "";
	}
	if( !val ) //i=>거짓이냐 (반대로)
	{
		alert("성별을 선택하세요");
		return false;
	}
}

	// 성별 체크 작업
	
	var a=document.getElementByName("42_sex");
	var a_cnt=a.length;
	for(i=0; i<a_cnt; i++)
	{
		if(a[i].checked)
		{
			val=1; alert(val);
			break;
		}
	}
	if( val==0 ) //i=>거짓이냐 (반대로)
	{
		alert("성별을 선택하세요");
		return false;
	}
}






//우편번호
function at42_post_number()
{
	if( (event.keyCode<48) || (event.keyCode>57) )
	{
		event.returnValue=false;
	}
}

function at42_post(arg, js, len)
{
	if(arg.value.length == len)
	{
		js.focus();
		return;
	}*/




