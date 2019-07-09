<template>
  <div id="muluLiu">
    <div class="liuMuLu">
      <div class="hearde">
        <div>
          <i class="iconfont icon-left-arrow"></i>
        </div>
        <div>
          <i>目录(720章)</i>
        </div>
        <div>
          <i class="iconfont icon-xiazai45"></i>
        </div>
      </div>
      <div class="navMuLu">
        <span>1~100章</span>
        <i class="iconfont icon-xiajiantou"></i>
        <a href="#" class="iconfont icon-dingdan"></a>
      </div>
      <div class="muLuBiao">
        <ul class="muLuList">
          <li>
            <span>第001章</span>
            <i>出门没看黄历</i>
          </li>
          <li>
            <span>第001章</span>
            <i>出门没看黄历</i>
          </li>
          <li>
            <span>第001章</span>
            <i>出门没看黄历</i>
          </li>
          <li>
            <span>第001章</span>
            <i>出门没看黄历</i>
          </li>
          <li>
            <span>第001章</span>
            <i>出门没看黄历</i>
          </li>
          <li>
            <span>第001章</span>
            <i>出门没看黄历</i>
          </li>
          <li>
            <span>第001章</span>
            <i>出门没看黄历</i>
          </li>
          <li>
            <span>第001章</span>
            <i>出门没看黄历</i>
          </li>
          <li>
            <span>第001章</span>
            <i>出门没看黄历</i>
          </li>
          <li>
            <span>第001章</span>
            <i>出门没看黄历</i>
          </li>
          <li>
            <span>第001章</span>
            <i>出门没看黄历</i>
          </li>
          <li>
            <span>第001章</span>
            <i>出门没看黄历</i>
          </li>
          <li>
            <span>第001章</span>
            <i>出门没看黄历</i>
          </li>
          <li>
            <span>第001章</span>
            <i>出门没看黄历</i>
          </li>
          <li>
            <span>第001章</span>
            <i>出门没看黄历</i>
          </li>
          <li>
            <span>第001章</span>
            <i>出门没看黄历</i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mulu"
};
</script>

<style>
.liuMuLu {
  width: 100%;
}

/*头部*/
.hearde {
  width: 100%;
  height: 0.88rem;
  padding: 0 0.2rem;
  background: #f08300;
  display: flex;
  justify-content: space-between;
}
.hearde div {
  height: 0.88rem;
  color: #fff;
  line-height: 0.88rem;
}
.hearde div i {
  font-size: 0.44rem;
  font-weight: 200;
  font-style: normal;
}

/*章树选择*/
.navMuLu {
  width: 100%;
  padding: 0 0.32rem;
  height: 0.88rem;
  border-bottom: 0.01rem solid #000;
}
.navMuLu span {
  color: #333;
  float: left;
  font-size: 0.3rem;
  height: 0.88rem;
  line-height: 0.88rem;
}
.navMuLu i {
  color: #666;
  float: left;
  font-size: 0.4rem;
  height: 0.88rem;
  line-height: 0.88rem;
}
.navMuLu a {
  color: #999;
  float: right;
  font-size: 0.3rem;
  height: 0.88rem;
  line-height: 0.88rem;
}

/*目录列表*/
.muLuBiao {
  width: 100%;
  padding: 0 0.32rem;
}
.muLuBiao .muLuList {
  width: 100%;
}
.muLuList li {
  width: 100%;
  height: 0.88rem;
  font-size: 0.3rem;
  line-height: 0.88rem;
  border-bottom: 0.01rem solid #000;
}
.muLuList li i {
  margin-left: 0.15rem;
  font-style: normal;
}
</style>