window.onload=function(){
//我的淘宝
function fn(){
	let tb=document.querySelectorAll('.head-you>li')
//	let tba=document.querySelectorAll('.head-you>lia')
//	console.log(tb)
	let jstb=document.querySelectorAll('.jstb')
//	console.log(jstb)
	let jstbs=document.querySelectorAll('.jstb span')
	for(let k=0;k<jstb.length;k++){
		if(k==1 || k==2 || k==5){
		jstb[k].style.display='none'
		tb[k].style.background=''
		}
		else{
		tb[k].onmouseover=function(){
		jstb[k].style.display='block'
		tb[k].style.background='#FFFFFF'
		tb[k].style.height='33px'
		tb[4].style.background='';
	}
		tb[k].onmouseout=function(){
		jstb[k].style.display='none'
		tb[k].style.background=''
	}			
		}

	}
	
		for(let j=0;j<jstbs.length;j++){
			for(let i=0;i<jstbs.length;i++){
			  jstbs[i].style.color=''
			}
			jstbs[j].onmouseover=function(){
				jstbs[j].style.cssText='color:#ff0036;cursoer:pointer;text-decoration: underline;'
//				jstbs[j].style.color='#ff0036'
//				jstbs[j].style.cursor='pointer'
//				jstbs[j].style.textDecoration='underline'
			}
			jstbs[j].onmouseout=function(){
				jstbs[j].style.cssText=''
//				jstbs[j].style.color=''
//				jstbs[j].style.cursor=''
//				jstbs[j].style.textDecoration=''
			}
				
		}
}
		fn()
		
		
		function lunbo(a='.danner',d='.bannertu li',e='.lunbodian li',b='null',c='null'){
			let box=document.querySelector(a)
			let left=document.querySelector(b)
			let right=document.querySelector(c)
			let imgs=document.querySelectorAll(d)
			let circles=document.querySelectorAll(e)
			let box1=document.querySelector('.lunbodian')
			let beijing=document.querySelectorAll('.beijin')
			let flag=true;
			let color=[]
//			console.log(box)
//			console.log(box,left,right,imgs,circles)
//			console.log(box,left,right,imgs,circles)
	
			let num=0;
			function move(){
				num++;
//				console.log(num)
				if(num==circles.length){
					num=0;
				}
				for(let i=0;i<imgs.length;i++){
					circles[i].style.background=''
					animate(imgs[i],{opacity:0},400)
					animate(beijing[i],{opacity:0},400)
				}
					circles[num].style.background='red'
					animate(imgs[num],{opacity:1},400)
					animate(beijing[num],{opacity:1},400)
					
		}
				let t=setInterval(move,2000)
				box.onmouseover=function(){
					clearInterval(t)
				}
				box.onmouseout=function(){
					clearInterval(t)
					t=setInterval(move,2000)
				}
//				box1.onmouseover=function(){
//					clearInterval(t)
//				}
//				box1.onmouseout=function(){
//					t=setInterval(move,2000)
//				}
	
		for(let i=0;i<circles.length;i++){
				circles[i].onmouseover=function(){
//					alert(1)
					if(flag){
						flag=false;
					circles[num].style.background=''
					circles[i].style.background='red'
						
					animate(imgs[num],{opacity:0},400,)
					animate(beijing[num],{opacity:0},400)
					animate(beijing[i],{opacity:1},400)
					animate(imgs[i],{opacity:1},400,function(){
						flag=true;
					})
					num=i;
					}
					
				}
					
			}			

		}
		lunbo()
	
//	选项卡
	function xuan(){
		let btns=document.querySelectorAll('.fenleilan li')
		let nr=document.querySelectorAll('.fll')
		let color=['blue','black','red','green','blue','black','red','green','blue','black','red','green','blue','black','red','green']
		let aa=document.querySelectorAll('.fenleilan li a')
//		console.log(nr,btns,aa)
		for(let i=0;i<btns.length;i++){
			btns[i].onmouseover=function(){
			nr[i].style.display='block'
			btns[i].style.background="#FFFFFF"
			aa[i].style.color=color[i]
			}
			nr[i].onmouseover=function(){
				nr[i].style.display='block'
				btns[i].style.background='#FFFFFF'
				aa[i].style.color=color[i]
			}
		
			btns[i].onmouseout=function(){
			nr[i].style.display='none'
			btns[i].style.background=''
			aa[i].style.color='#ffffff'
			
			}
			nr[i].onmouseout=function(){
				nr[i].style.display='none'
				btns[i].style.background=''
				aa[i].style.color='#ffffff'
			}
		}	
	}

	xuan()
	function jrfq(){
		let btns=document.querySelectorAll('.chaoshi-L')
		let imgs=document.querySelectorAll('.chaoshiyou-daneiimg img')
		let box=document.querySelector('.chaoshiyou-danei')
		let t=setInterval(move,1000)
		let n=0;
//		console.log(btns,imgs)
		for(let i=0;i<btns.length;i++){

			btns[i].onmouseover=function(){
			for(let j=0;j<btns.length;j++){
				btns[j].style.background=''
				imgs[j].style.display='none'
			}				
//				imgs[i].style.display='block'
				imgs[i].style.cssText='display:block;'
				btns[i].style.background='skyblue'
//				alert(1)=
			}
//			btns[i].onmouseout=function(){
//				imgs[i].style.cssText='display: none;'
//				btns[i].style.background='skyblue'
//			}
		}
		function move(){	
			n++;
			if(n==btns.length){
				n=0;
			}
			for(let i=0;i<btns.length;i++){
				imgs[i].style.display='none'
				btns[i].style.background=''
			}
			imgs[n].style.display='block'
			btns[n].style.background='skyblue'

		}
		box.onmouseover=function(){
			clearInterval(t)
		}
		box.onmouseout=function(){
			t=setInterval(move,1000)
		}
		
	}
	jrfq()
	
	//楼层跳转
	function floor(){
		let nr=document.querySelectorAll('.nrbox')
		let fs=document.querySelectorAll('.cebianlan p')
		let ac=document.querySelectorAll('.cebianlan a')
		let title=document.querySelector('.tmall-top')
		let fl=document.querySelector('.cebianlan')
		let back=document.querySelector('.back')
		let cltop=document.querySelector('.cltop')
		let  flag2=true;
		let  flag3=false;
		let colors=['red','blue','green','yellow','red','blue','green','yellow']
		let now=0;
		let up=true;
		let down=false;
//		console.log(nr[0].offsetTop-400)
		window.onscroll=function(){
			var obj=document.body.scrollTop?document.body:document.documentElement
			var sh=obj.scrollTop
			if(sh>=nr[0].offsetTop-400){
				if(up){
					up=false;
					animate(title,{top:0},200)
					animate(fl,{width:40,height:400},function(){
						down=true;
					})
				}
			}
			else{
				
				if(down){
					down=false;
					animate(title,{top:-50})
					animate(fl,{width:0,height:0},function(){
						up=true;
					})
				}
			}

		   	cltop.onclick=function(){
		   	animate(document.body,{scrollTop:0})
		   	animate(document.documentElement,{scrollTop:0})
		   }
		   	if(sh>=nr[0].offsetTop-400){
		   		if(flag2){	
		   			flag2=false;
		   			console.log(flag2)
		   			console.log(1)
		   			animate(cltop,{opacity:1},function(){
		   				flag3=true;
		   			})
		   		}	   		
		   	}
		   	else{
		   		if(flag3){
		   			console.log(2)
		   			flag3=false;
		   			animate(cltop,{opacity:0},function(){
		   			flag2=true;
		   		})		   			
		   		}

		   	}
					
			nr.forEach(function(f,index){
				if(sh>=f.offsetTop-400){
					fs.forEach(function(val){
						val.style.background=''
					})
					fs[index].style.background=colors[index]
					now=index
				}
			})	
			back.onclick=function(){
				animate(document.body,{scrollTop:0})
				animate(document.documentElement,{scrollTop:0})
			}
		}
		fs.forEach(function(n,index){
			n.onclick=function(){
				animate(document.body,{scrollTop:nr[index].offsetTop-100},function(){
					now=index;
				})
				animate(document.documentElement,{scrollTop:nr[index].offsetTop-100},function(){
					now=index;
				})
			}
			n.onmouseover=function(){
				fs[index].style.background=colors[index]
				ac[index].style.backgroundColor=''
			}
			n.onmouseout=function(){
				if(index!=now){
					fs[index].style.background=''
					ac[index].style.backgroundColor='rgba(0,0,0,0.6)'
				}
			}
		})
		
}
	floor( )
	
	function crll(){
		let crl=document.querySelectorAll('.crl')
		let cl=document.querySelectorAll('.cl')

		   crl.forEach(function(val,index){
				val.onmouseenter=function(){
					cl[index].style.display='block'		  
					animate(cl[index],{right:34,opacity:1},200)
//				cl[index].style.cssText=`right:34px;opacity:1;display:block`
				}
				val.onmouseleave=function(){

					animate(cl[index],{right:60,opacity:0},200,function(){
						cl[index].style.display='none'
					})
				}
		   })
	}
	crll()
	function hm(){
		let box=document.querySelector('.hmimg')
		let img=document.querySelector('.climg')
		let  t;
		box.onmouseenter=function(){
			t=setInterval(function(){
				img.style.display='block'
			},200)  
		}	
		box.onmouseleave=function(){
			clearTimeout(t)
			img.style.display='none'
			
		}
		img.onmouseenter=function(){
			img.style.display='block'
		}
		img.onmouseleave=function(){
			img.style.display='block'
		}
	}
	hm()
}
