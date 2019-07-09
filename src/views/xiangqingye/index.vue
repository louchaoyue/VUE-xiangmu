<template>
  <div id="xiangqQingYeLiu">
    <div class="liuXiang">
      <div class="headerLiu">
        <div>
          <i class="iconfont icon-left-arrow"></i>
        </div>
        <div>
          <i>书记详情</i>
        </div>
        <div>
          <i class="iconfont icon-xiazai45"></i>
        </div>
      </div>
      <div class="shuXiangQ">
        <div class="shuXiangQImg">
          <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
        </div>
        <div class="shuXiangQJieS">
          <h3>我当按摩师那些年</h3>
          <span>卷帘西风</span>
          <p>都是生活211万字</p>
          <span>正在免费中</span>
        </div>
      </div>
      <div class="Tags">
        <span>开始阅读</span>
        <span>加书架</span>
        <span class="TagsSpan">离线下载</span>
      </div>
      <div class="shuJieShao">
        <p>阿里收到良好的垃圾号施蒂利克就好使打蜡后收到了哈三联打开哈利迪回拉萨打了卡萨好的啦还是留电话按理说电话拉屎好滴啦欢声雷动画上了,几把卡施工队康德拉老师电话考虑好干啥来电话噶事杀过来的机会肯定ja</p>
      </div>
      <div class="shuMuLu">
        <i class="iconfont icon-menu"></i>
        <a href="#">目录</a>
        <span>3天前更新</span>
      </div>
      <div class="shuPingLun">
        <h3>精华评论</h3>
        <ul>
          <li>
            <i>书友90909899</i>
            <p>绿化空间和sad里挥洒刘德华快回来的撒谎好厉害sad老客户爱是良好的</p>
          </li>
          <li>
            <i>书友90909899</i>
            <p>绿化空间和sad里挥洒刘德华快回来的撒谎好厉害sad老客户爱是良好的</p>
          </li>
          <li>
            <i>书友90909899</i>
            <p>绿化空间和sad里挥洒刘德华快回来的撒谎好厉害sad老客户爱是良好的</p>
          </li>
        </ul>
      </div>
      <div class="shuTuiJian">
        <h3>看过这本书的人还在看</h3>
        <ul class="shuTuiJianList">
          <li>
            <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
            <h4>大漠游侠转</h4>
            <span>网惊叹</span>
          </li>
          <li>
            <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
            <h4>大漠游侠转</h4>
            <span>网惊叹</span>
          </li>
          <li>
            <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
            <h4>大漠游侠转</h4>
            <span>网惊叹</span>
          </li>
          <li>
            <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
            <h4>大漠游侠转</h4>
            <span>网惊叹</span>
          </li>
          <li>
            <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
            <h4>大漠游侠转</h4>
            <span>网惊叹</span>
          </li>
          <li>
            <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
            <h4>大漠游侠转</h4>
            <span>网惊叹</span>
          </li>
          <li>
            <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
            <h4>大漠游侠转</h4>
            <span>网惊叹</span>
          </li>
          <li>
            <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
            <h4>大漠游侠转</h4>
            <span>网惊叹</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "xiangqingye"
};
</script>

<style>
#xiangqQingYeLiu {
  width: 100%;
  height: 100%;
}
.liuXiang {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
/*头部*/
.headerLiu {
  width: 100%;
  height: 0.88rem;
  padding: 0 0.2rem;
  background: #f08300;
  display: flex;
  justify-content: space-between;
}
.headerLiu div {
  height: 0.88rem;
  color: #fff;
  line-height: 0.88rem;
}
.headerLiu div i {
  font-size: 0.44rem;
  font-weight: 200;
  font-style: normal;
}

/* 书籍详情*/
.shuXiangQ {
  display: flex;
  width: 100%;
  padding: 0.32rem;
}
.shuXiangQImg img {
  width: 100%;
}
.shuXiangQJieS {
  margin-left: 0.4rem;
}
.shuXiangQJieS h3 {
  font-size: 0.44rem;
  height: 0.5rem;
  line-height: 0.5rem;
  margin: 0.3rem 0;
}
.shuXiangQJieS span {
  color: #999;
  font-size: 0.28rem;
  margin: 0.2rem 0;
}
.shuXiangQJieS p {
  color: #999;
  font-size: 0.28rem;
  margin: 0.2rem 0;
}

/*标签*/
.Tags {
  display: flex;
  width: 100%;
  padding: 0.32rem;
  justify-content: space-between;
}
.Tags span {
  color: #f08300;
  height: 0.88rem;
  line-height: 0.88rem;
  width: 2rem;
  text-align: center;
  border-radius: 0.1rem;
  border: 0.01rem solid #f08300;
}
.Tags .TagsSpan {
  color: #fff;
  background: #f08300;
}

/*书籍介绍*/
.shuJieShao {
  width: 100%;
  padding: 0.32rem;
}
.shuJieShao p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  line-height: 0.4rem;
  font-size: 0.28rem;
}

/*书籍目录*/
.shuMuLu {
  width: 100%;
  padding: 0.32rem;
}
.shuMuLu i {
  font-size: 0.3rem;
  width: 0.5rem;
  height: 0.5rem;
  color: #333;
}
.shuMuLu a {
  font-size: 0.3rem;
  width: 0.5rem;
  height: 0.5rem;
  color: #333;
}
.shuMuLu span {
  font-size: 0.26rem;
  height: 0.5rem;
  line-height: 0.5rem;
  margin-left: 0.2rem;
  color: #999;
}

/*书籍评论*/
.shuPingLun {
  width: 100%;
  padding: 0.32rem;
}
.shuPingLun h3 {
  font-size: 0.36rem;
  height: 0.5rem;
  line-height: 0.5rem;
  margin: 0.1rem 0;
  border-bottom: 0.01rem solid #ccc;
}
.shuPingLun ul {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.shuPingLun ul li {
  width: 100%;
  border-bottom: 0.01rem solid #ccc;
}
.shuPingLun ul li i {
  color: #999;
  font-size: 0.24rem;
}
.shuPingLun ul li p {
  margin-top: 0.1rem;
  padding-left: 0.2rem;
  color: #333;
  line-height: 0.38rem;
}

/*推荐小说*/
.shuTuiJian {
  width: 100%;
  padding: 0.32rem;
}
.shuTuiJian h3 {
  font-size: 0.36rem;
  height: 0.5rem;
  line-height: 0.5rem;
  margin: 0.1rem 0;
  font-weight: 100;
}
.shuTuiJian .shuTuiJianList {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.shuTuiJianList li {
  display: flex;
  flex-direction: column;
  width: 25%;
  padding-right: 0.2rem;
  margin: 0.2rem 0;
}
.shuTuiJianList li img {
  width: 100%;
}
.shuTuiJianList li h4 {
  color: #333;
  font-size: 0.24rem;
}
.shuTuiJianList li span {
  color: #999;
  font-size: 0.24rem;
}
</style>