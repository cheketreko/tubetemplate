function removeHtmlTag(e,t){if(e.indexOf("<")!=-1){var n=e.split("<");for(var r=0;r<n.length;r++){if(n[r].indexOf(">")!=-1){n[r]=n[r].substring(n[r].indexOf(">")+1,n[r].length)}}e=n.join("")}t=t<e.length-1?t:e.length-2;while(e.charAt(t-1)!=" "&&e.indexOf(" ",t)!=-1)t++;e=e.substring(0,t-1);return e+" ..."}function createSummaryAndThumb(e,t,n){var r=document.getElementById(e);var i=document.getElementById(n);var s="";var o=r.getElementsByTagName("img");var u=r.getElementsByTagName("iframe");if(o.length>=1){s='<div class="post-summary"><a title="'+n+'" href="'+t+'"><img alt="" class="imgcon" src="'+o[0].src.replace("/s1600/","/s"+thumbwidth+"/")+'" width="'+thumbwidth+'px" height="'+thumbheight+'px"/></a></div>'}if(r.innerHTML.indexOf("thumbvideo")!=-1){s='<div class="post-summary"><a title="" href="'+t+'"><img alt="" class="imgcon" src="'+o[0].src+'" width="'+thumbheight+'px" height="'+thumbwidth+'px"/></a></div>'}if(r.innerHTML.indexOf("http://www.youtube.com/v/")!=-1){var a=u[0].src;var f=a.substring(a.indexOf("http://www.youtube.com/v/")+25);s='<div class="post-summary"><a href="'+t+'"><img class="imgcon" src="http://res.cloudinary.com/demo/image/youtube/w_480,h_270,c_fill/'+f+'.jpg" width="'+thumbwidth+'" height="'+thumbheight+'"></img></div>'}if(r.innerHTML.indexOf("//www.youtube.com/v/")!=-1){var a=u[0].src;var f=a.substring(a.indexOf("//www.youtube.com/v/")+20);s='<div class="post-summary"><a href="'+t+'"><img class="imgcon" src="http://res.cloudinary.com/demo/image/youtube/w_480,h_270,c_fill/'+f+'.jpg" width="'+thumbwidth+'" height="'+thumbheight+'"></img></div>'}if(r.innerHTML.indexOf("http://www.youtube.com/embed/")!=-1){var a=u[0].src;var f=a.substring(a.indexOf("http://www.youtube.com/embed/")+29);s='<div class="post-summary"><a href="'+t+'"><img class="imgcon" src="http://res.cloudinary.com/demo/image/youtube/w_480,h_270,c_fill/'+f+'.jpg" width="'+thumbwidth+'px" height="'+thumbheight+'px"/></div>'}if(r.innerHTML.indexOf("//www.youtube.com/embed/")!=-1){var a=u[0].src;var f=a.substring(a.indexOf("//www.youtube.com/embed/")+24);s='<div class="post-summary"><a href="'+t+'"><img class="imgcon" src="http://res.cloudinary.com/demo/image/youtube/w_480,h_270,c_fill/'+f+'.jpg" width="'+thumbwidth+'px" height="'+thumbheight+'px"/></div>'}if(r.innerHTML.indexOf("http://www.youtube-nocookie.com/embed/")!=-1){var a=u[0].src;var f=a.substring(a.indexOf("http://www.youtube-nocookie.com/embed/")+38);s='<div class="post-summary"><a href="'+t+'"><img class="imgcon" src="http://res.cloudinary.com/demo/image/youtube/w_480,h_270,c_fill/'+f+'.jpg" width="'+thumbwidth+'px" height="'+thumbheight+'px"/></div>'}if(r.innerHTML.indexOf("//www.youtube-nocookie.com/embed/")!=-1){var a=u[0].src;var f=a.substring(a.indexOf("//www.youtube-nocookie.com/embed/")+33);s='<div class="post-summary"><a href="'+t+'"><img class="imgcon" src="http://res.cloudinary.com/demo/image/youtube/w_480,h_270,c_fill/'+f+'.jpg" width="'+thumbwidth+'px" height="'+thumbheight+'px"/></div>'}if(r.innerHTML.indexOf("http://www.dailymotion.com/embed/video/")!=-1){var a=u[0].src;var f=a.substring(a.indexOf("http://www.dailymotion.com/embed/video/")+30);s='<div class="post-summary"><a href="'+t+'"><img class="imgcon" src="http://res.cloudinary.com/demo/image/dailymotion/w_'+thumbwidth+",h_"+thumbheight+"/"+f+'.jpg" width="'+thumbwidth+'px" height="'+thumbheight+'px"></img></a></div>'}if(r.innerHTML.indexOf("//www.dailymotion.com/embed/video/")!=-1){var a=u[0].src;var f=a.substring(a.indexOf("//www.dailymotion.com/embed/video/")+25);s='<div class="post-summary"><a href="'+t+'"><img class="imgcon" src="http://res.cloudinary.com/demo/image/dailymotion/w_'+thumbwidth+",h_"+thumbheight+"/"+f+'.jpg" width="'+thumbwidth+'px" height="'+thumbheight+'px"></img></a></div>'}var l=s+'<a class="post-home-title" href="'+t+'" title="'+n+'">'+n+"</a>";r.innerHTML=l}var thumbheight=150;thumbwidth=230