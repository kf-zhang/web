const feed_list=document.getElementsByClassName("feed-list")[0];
let timer;
function getTime(t){
    let dif=new Date()-new Date(t*1000);
    
    let hour= (dif-dif%3600000)/3600000;
    let minute=(dif-dif%60000)/60000;
    let second=(dif-dif%1000)/1000;
    if(hour>1)
        return "&nbsp·"+hour+"小时前";
    else 
        return "&nbsp·"+minute+"分钟前";
}

function single_mode_constructor(data){

    let single_mode=document.createElement("div");
    single_mode.setAttribute("class","single-mode");

    let div=document.createElement("div");
    div.setAttribute("class","single-img-lbox");

    let img=document.createElement("img");
    img.setAttribute("class","lazy-load-img");
    img.setAttribute("src","https:"+data["image_url"]);
    let a=document.createElement("a");
    a.setAttribute("target","_blank");
    a.setAttribute("href","https:/"+"/group/"+data["group_id"]);
    a.appendChild(img);
    div.appendChild(a);
    single_mode.appendChild(div);

    let single_img_rbox=document.createElement("div");
    single_img_rbox.setAttribute("class","single-img-rbox");
    let single_img_rbox_inner=document.createElement("div");
    single_img_rbox_inner.setAttribute("class","single-img-rbox-inner");
    single_img_rbox.appendChild(single_img_rbox_inner);
    single_mode.appendChild(single_img_rbox);
    let title_box=document.createElement("div");
    title_box.setAttribute("class","title-box");
    let groupA=document.createElement("a");
    groupA.setAttribute("href","/group/"+data["group_id"]);
    groupA.setAttribute("target","_blank");
    groupA.innerHTML=data["title"]
    title_box.appendChild(groupA);
    single_img_rbox_inner.appendChild(title_box);

    let foot_bar=document.createElement("div");
    foot_bar.setAttribute("class","footer-bar");
    let foot_bar_left=document.createElement("div");
    foot_bar_left.setAttribute("class","footer-bar-left");
    let foot_bar_right=document.createElement("div");
    foot_bar_right.setAttribute("class","footer-bar-right");
    foot_bar.appendChild(foot_bar_left);
    foot_bar.appendChild(foot_bar_right);
    a=document.createElement("a");
    a.setAttribute("class","footer-bar-action tag tag-style-video");
    a.setAttribute("target","_blank");
    a.setAttribute("href","https:/"+data["media_url"]);
    a.innerHTML=data["chinese_tag"];
    foot_bar_left.appendChild(a);
    a=document.createElement("a");
    a.setAttribute("class","footer-bar-action media-avatar");
    a.setAttribute("target","_blank");
    a.setAttribute("href","https:/"+data["media_url"]);
    let ele=document.createElement("img");
    ele.setAttribute("src","https:"+data["media_avatar_url"]);
    a.appendChild(ele);
    foot_bar_left.appendChild(a);
    a=document.createElement("a");
    a.setAttribute("class","footer-bar-action source");
    a.setAttribute("target","_blank");
    a.setAttribute("href","https:/"+data["media_url"]);
    a.innerHTML="&nbsp;"+data["source"]+"&nbsp·";
    foot_bar_left.appendChild(a);
    a=document.createElement("a");
    a.setAttribute("class","footer-bar-action source");
    a.setAttribute("target","_blank");
    a.setAttribute("href","https:/"+"/group/"+data["group_id"]+"//#comment-area");
    a.innerHTML="&nbsp;"+data["comments_count"]+"评论";
    foot_bar_left.appendChild(a);
    time=document.createElement("span");
    time.setAttribute("class","footer-bar-action time");
    time.time=data["behot_time"];
    time.innerHTML=getTime(time.time);
    foot_bar_left.appendChild(time);
    single_img_rbox_inner.appendChild(foot_bar);

    return single_mode;

}

function no_mode_constructor(data){
    let no_mode=document.createElement("div");
    no_mode.setAttribute("class","no-mode");

    let title_box=document.createElement("div");
    title_box.setAttribute("class","title-box");
    let groupA=document.createElement("a");
    groupA.setAttribute("href","/group/"+data["group_id"]);
    groupA.setAttribute("target","_blank");
    groupA.innerHTML=data["title"]
    title_box.appendChild(groupA);
    

    let foot_bar=document.createElement("div");
    foot_bar.setAttribute("class","footer-bar");
    let foot_bar_left=document.createElement("div");
    foot_bar_left.setAttribute("class","footer-bar-left");
    let foot_bar_right=document.createElement("div");
    foot_bar_right.setAttribute("class","footer-bar-right");
    foot_bar.appendChild(foot_bar_left);
    foot_bar.appendChild(foot_bar_right);
    a=document.createElement("a");
    a.setAttribute("class","footer-bar-action tag tag-style-video");
    a.setAttribute("target","_blank");
    a.setAttribute("href","https:/"+data["media_url"]);
    a.innerHTML=data["chinese_tag"];
    foot_bar_left.appendChild(a);
    a=document.createElement("a");
    a.setAttribute("class","footer-bar-action media-avatar");
    a.setAttribute("target","_blank");
    a.setAttribute("href","https:/"+data["media_url"]);
    let ele=document.createElement("img");
    ele.setAttribute("src","https:"+data["media_avatar_url"]);
    a.appendChild(ele);
    foot_bar_left.appendChild(a);
    a=document.createElement("a");
    a.setAttribute("class","footer-bar-action source");
    a.setAttribute("target","_blank");
    a.setAttribute("href","https:/"+data["media_url"]);
    a.innerHTML="&nbsp;"+data["source"]+"&nbsp·";
    foot_bar_left.appendChild(a);
    a=document.createElement("a");
    a.setAttribute("class","footer-bar-action source");
    a.setAttribute("target","_blank");
    a.setAttribute("href","https:/"+"/group/"+data["group_id"]+"//#comment-area");
    a.innerHTML="&nbsp;"+data["comments_count"]+"评论";
    foot_bar_left.appendChild(a);
    time=document.createElement("span");
    time.setAttribute("class","footer-bar-action time");
    time.time=data["behot_time"];
    time.innerHTML=getTime(time.time);
    foot_bar_left.appendChild(time);

    no_mode.appendChild(title_box);
    no_mode.appendChild(foot_bar);
    return no_mode;
}

function card_constructor(data){
    if(data["single_mode"]){
        return single_mode_constructor(data);
    }
    else if(data["no_mode"]){
        return no_mode_constructor(data);
    }
    return no_mode_constructor(data);
}


function getDocumentTop() {
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if (document.body) {
      bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
      documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
  }

  //可视窗口高度
  function getWindowHeight() {
    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
      windowHeight = document.documentElement.clientHeight;
    } else {
      windowHeight = document.body.clientHeight;
    }
    return windowHeight;
  }

  //滚动条滚动高度
  function getScrollHeight() {
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if (document.body) {
      bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
      documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
  }



  function update_content(){
    
    fetch('http://localhost:8080')
    .then((response)=> {
      return response.json();
    })
    .then((myJson)=> {
      let data=myJson["data"];
      for(const i of data){
          console.log(data);   
          feed_list.appendChild(  card_constructor(i)  );
      }
      console.log(myJson);
    }).catch( (e) => {
      console.log('There has been a problem with your fetch operation: ' + e.message);
    });
  }
  window.onscroll = function () {
    let diff=getScrollHeight() -getWindowHeight() - getDocumentTop();
    if(diff>-100 && diff<100){
        clearTimeout(timer);
        timer = setTimeout(function () {
            update_content();
        }, 20);
    }
  }

  function updateTime(){
      timesSpans=document.getElementsByClassName("footer-bar-action time");
      for(const i of timesSpans)
        i.innerHTML=getTime(Number( i.time));
  }

  update_content();
  setInterval(updateTime,1000);



