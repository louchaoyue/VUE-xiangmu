<template>
  <div id="sousuoLiu">
    <div class="liuSouSuo">
      <div class="headerSou">
        <div>
          <i class="iconfont icon-left-arrow"></i>
        </div>
        <div>
          <i>搜索中心</i>
        </div>
        <div>
          <i class="iconfont icon-xiazai45"></i>
        </div>
      </div>
      <div class="spusuoipt">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="书名/作者/关键字" />
      </div>
      <div class="sousuoTuiJian">
        <ul class="souSuoList">
          <li>
            <p>暖婚阿打算霸爱</p>
          </li>
          <li>
            <p>暖婚霸爱</p>
          </li>
          <li>
            <p>暖婚霸爱</p>
          </li>
          <li>
            <p>暖婚霸爱</p>
          </li>
          <li>
            <p>暖婚霸asdasd大神爱</p>
          </li>
          <li>
            <p>暖婚霸爱</p>
          </li>
          <li>
            <p>暖婚霸爱</p>
          </li>
          <li>
            <p>暖婚霸爱</p>
          </li>
        </ul>
        <ul class="souSuoListFlag">
          <li>13哭建行卡</li>
          <li>13哭建行卡</li>
          <li>13哭建行卡</li>
          <li>13哭建行卡</li>
        </ul>
      </div>
      <div class="souSuoFoot">
        <div>下载UC,免费小说看不停</div>
        <p>海量图书,更高品质阅读体验</p>
        <span>©2017 UC小说网 xiaoshuo.uc.cn</span>
        <span>粤ICP备13078413号-1</span>
        <span>阿里巴巴文学信息技术有限公司 版权所有</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sousuo"
};
</script>

<style>
#sousuoLiu {
  width: 100%;
  height: 100%;
}
.liuSouSuo {
  width: 100%;
  display: flex;
  flex-direction: column;
}

/*搜索头部*/
.headerSou {
  width: 100%;
  height: 0.88rem;
  padding: 0 0.2rem;
  background: #f08300;
  display: flex;
  justify-content: space-between;
}
.headerSou div {
  height: 0.88rem;
  color: #fff;
  line-height: 0.88rem;
}
.headerSou div i {
  font-size: 0.44rem;
  font-weight: 200;
  font-style: normal;
}

/*搜索框*/
.spusuoipt {
  width: 100%;
  padding: 0.32rem;
  background: #ccc;
  height: 1.2rem;
  position: relative;
}
.spusuoipt i {
  position: absolute;
  font-size: 0.3rem;
  color: #ccc;
  top: 0.45rem;
  left: 0.45rem;
}
.spusuoipt input {
  background: #fff;
  padding-left: 0.5rem;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 0.3rem;
}

/*推荐类表*/
.sousuoTuiJian {
  width: 100%;
  height: 8rem;
  border: 0.01em solid #ccc;
}
.sousuoTuiJian .souSuoList {
  width: 100%;
  display: flex;
  height: 100%;
  padding: 0.32rem;
  flex-wrap: wrap;
}
.souSuoList li {
  width: 1.8rem;
  height: 0.6rem;
  border: 0.01rem solid #ccc;
  border-radius: 0.3rem;
  text-align: center;
  line-height: 0.6rem;
  margin: 0.1rem 0.2rem;
}
.souSuoList li p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  height: 100%;
  padding: 0 0.1rem;
}

.sousuoTuiJian .souSuoListFlag {
  width: 100%;
  height: 100%;
  padding-left: 0.32rem;
  display: none;
}
.souSuoListFlag li {
  height: 1rem;
  width: 100%;
  border-bottom: 0.01rem solid #ccc;
  color: #333;
  line-height: 1rem;
  font-size: 0.3rem;
}
/*搜索底部*/
.souSuoFoot {
  width: 100%;
  height: 3.26rem;
  background: #ccc;
  padding: 0.32rem;
}
.souSuoFoot div {
  width: 100%;
  color: #fff;
  background: #f08300;
  text-align: center;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 0.2rem;
}
.souSuoFoot p {
  color: #333;
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  margin: 0.15rem 0;
}
.souSuoFoot span {
  display: block;
  color: #999;
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
}
</style>