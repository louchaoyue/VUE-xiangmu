<template>
  <div id="liuHome">
    <header id="shouyeHaeder">
      <div class="logo">
        <img src="/assets/website-name-new-for-uc_47b0b7c.png" class="logoImg" />
      </div>
      <ul class="items">
        <li class="itemst">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmMDIzN2U5Ny00MTVkLWZkNDktYmY0Ny1iOGQyOTlmNGMyZjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0I0NEE0Qjk3MzYxMTFFNzhCM0VCNjQxOEVCRjA4QjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0I0NEE0Qjg3MzYxMTFFNzhCM0VCNjQxOEVCRjA4QjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzA4YmViMzctMGRkNy0zZTQ5LTk0MWEtMzE0Mjk1MDZkMmQ5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmYwMjM3ZTk3LTQxNWQtZmQ0OS1iZjQ3LWI4ZDI5OWY0YzJmMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjUfIIwAAAMqSURBVFjDzZhLSFRRGIBnkspHlGJFWYQ6vUxcRA/CRQkhRUFFRVBEGNSiVhFZi1oUWBBFRUaPEUIMCo2CHqRBUNQmetiiKFpICzXLqCSJkHHma3Mu/BzP6L0z99yZH/7FcM///985d+75HyEg5JPOBuqBDqAH+Ad8B7qBdvWsJN04foHeAIYZKQPa72GgGZiVKeAtBigJ25vk2S9gc9DAe4G4gBhSJ70WmCLWFQHrgZtATKxPAPuCAl6n/QVeAvNc2FUCbzXoTbaBi4F+EfQhkOvBPk/ZONIPTLcJfFoE+wDkp+AjH/gs/Fy2BTwR+CkCrUzjG6gRfgaBSTaAV4sgnT5ciW+Ev402gA+JACd9AG4Q/hpsAJ8VAep8AN4t/F23AdwoAuzyAbhO+IvaAD4qAhzxAVj6O24DeIMI8MgH4MfC3w4bwJNVFYZKs6VpwFaK1B4DptlKHM3iVNqBnBR85ABPhJ9Wm5muTJwywBkg7ME+DFzRiqaFtoufPVq5eMtlpioCbmu2h4MqLy9qgb+qxFJmWDsfOAb80Gyuenw7aQGHVbZLGAr0XuAV8FptRJeY2lyYDLRINcB73EsnUJ3Jni4EjBNdxTcDZDfQBKxJ5VRtAOs6FagAIkCBn75TNcxT5eB54CnwRTWWbrQHeK4+2q1eN+QVdA5wCfiDf/JXFT4RP4Fz1Y0whD2JAefGOnE3sBHgnSHAC+AgsEJNdMZ7qEeWAgeAZwa/n4BFqQIvVuMmKfeBZT5+SEuAO4ZBS7VX4LlaOz8AbLd0qzizDj1elVvgAuCjlnYXWIR1tBzoEnG7gEI3wI3aoKMiAFhHS4G+ZL2eyaBKFNYJNSsLBayrRI2SAJaPBtwqdteSAVhHo4LjQTLgmWLCGEtSKgalJeLejzvtmL5ov9jVvQzCmt52vQn4rliwMwuAtwmeDhNwj1hQngXAM7SrdQSwnJCHskQHxTc1Alj2XJEsgC0W11u/CVjm9GtZAHxK8LSZgGu1IuSC2mXQoIXACa3BrUmWOFoMJd9vDx2FH6pL02iZboI2jsq0RBXTmOVlrZrS9CWZPdiSuLrC2py/gdT/1bJhHzTziGIAAAAASUVORK5CYII=" />
        </li>
        <li class="itemsc">
          <img src="/assets/bookshelf-white_b4d4799.png" />
        </li>
        <li class="itemsb">
          <img src="/assets/search-white_2fbdc4b.png" />
        </li>
      </ul>
    </header>
    <div class="contects">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://image.uc.cn/s/uae/g/3o/broccoli/resource/201907/15dd5170-9f1b-11e9-b197-9d42fcb6fb71.png" />
          </div>
          <div class="swiper-slide">
            <img src="https://image.uc.cn/s/uae/g/3o/broccoli/resource/201907/6ebff930-9ecd-11e9-83c0-731adca05103.png" />
          </div>
          <div class="swiper-slide">
            <img src="https://image.uc.cn/s/uae/g/3o/broccoli/resource/201907/80c3cdc0-9caa-11e9-a78f-55adcb72f46d.png" />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>-->

        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
      </div>
      <!-- <div class="banner">
                <ul class="bannerList">
                    <li><img src="../img/lunbotu.png" class="bannerShow"></li>
                    <li><img src="../img/lunbotu.png"></li>
                    <li><img src="../img/lunbotu.png"></li>
                    <li><img src="../img/lunbotu.png"></li>
                    <li><img src="../img/lunbotu.png"></li>
                </ul>
      </div>-->
      <div class="navLie">
        <ul class="navList">
          <li>
            <span></span>
            <h3>分类</h3>
          </li>
          <li>
            <span></span>
            <h3>分类</h3>
          </li>
          <li>
            <span></span>
            <h3>分类</h3>
          </li>
          <li>
            <span></span>
            <h3>分类</h3>
          </li>
          <li>
            <span></span>
            <h3>分类</h3>
          </li>
        </ul>
      </div>
      <div class="recommendation">
        <h3>精品推荐</h3>
        <div class="recommendationList">
          <ul class="recommendationListUl">
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>八岁嫡女</p>
              <span>蓝幽幽</span>
            </li>
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>八岁嫡女</p>
              <span>蓝幽幽</span>
            </li>
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>八岁嫡女</p>
              <span>蓝幽幽</span>
            </li>
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>八岁嫡女</p>
              <span>蓝幽幽</span>
            </li>
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>八岁嫡女</p>
              <span>蓝幽幽</span>
            </li>
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>八岁嫡女八岁嫡女八岁嫡女八岁嫡女八岁嫡女八岁嫡女八岁嫡女八岁嫡女</p>
              <span>蓝幽幽</span>
            </li>
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>八岁嫡女</p>
              <span>蓝幽幽</span>
            </li>
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>八岁嫡女</p>
              <span>蓝幽幽</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="girlHot">
        <h3>男生热文</h3>
        <div class="girlTop">
          <ul class="girlTopList">
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>都是狂少</p>
              <span>路通</span>
            </li>
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>都是狂少</p>
              <span>路通</span>
            </li>
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>都是狂少</p>
              <span>路通</span>
            </li>
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>都是狂少</p>
              <span>路通</span>
            </li>
          </ul>
        </div>
        <div class="girlBottom">
          <ul class="girlBottomList">
            <li>
              <h4>都是狂少</h4>
              <p>我刚出生的时候,喝啦几天羊奶,网吧折腾好看好看是科技哈萨克好的</p>
            </li>
            <li>
              <h4>都是狂少</h4>
              <p>我刚出生的时候,喝啦asdasdsadasdasdasdasdasd几天羊奶,网吧折腾好看好看是科技哈萨克好的</p>
            </li>
            <li>
              <h4>都是狂少</h4>
              <p>我刚出生的时候,喝啦几天羊奶,网吧折腾好看好看是科技哈萨克好的</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="brbrbr"></div>
      <div class="girlHot">
        <h3>女生美女</h3>
        <div class="girlTop">
          <ul class="girlTopList">
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>重生可根据韩国扩散框架和客户</p>
              <span>宝蓝</span>
            </li>
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>都是狂少</p>
              <span>宝蓝</span>
            </li>
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>都是狂少</p>
              <span>宝蓝</span>
            </li>
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>都是狂少</p>
              <span>宝蓝</span>
            </li>
          </ul>
        </div>
        <div class="girlBottom">
          <ul class="girlBottomList">
            <li>
              <h4>医院氩弧焊机嫁汉嫁汉</h4>
              <p>我刚出生的时候,喝啦几天羊奶,网吧折腾好看好看是科技哈萨克好的</p>
            </li>
            <li>
              <h4>医院氩弧焊机嫁汉嫁汉</h4>
              <p>我刚出生的时候,喝啦asdasdsadasdasdasdasdasd几天羊奶,网吧折腾好看好看是科技哈萨克好的</p>
            </li>
            <li>
              <h4>医院氩弧焊机嫁汉嫁汉</h4>
              <p>我刚出生的时候,喝啦几天羊奶,网吧折腾好看好看是科技哈萨克好的</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="brbrbr"></div>
      <div class="finished">
        <h3>完结热推</h3>
        <div class="finishedList">
          <ul class="finishedListUl">
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>逍遥一道</p>
              <span>魂圣</span>
            </li>
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>逍遥一道</p>
              <span>魂圣</span>
            </li>
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>逍遥一道</p>
              <span>魂圣</span>
            </li>
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>逍遥一道</p>
              <span>魂圣</span>
            </li>
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>逍遥一道</p>
              <span>魂圣</span>
            </li>
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>逍遥一道逍遥一道逍遥一道逍遥一道逍遥一道逍遥一道逍遥一道逍遥一道</p>
              <span>魂圣</span>
            </li>
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>逍遥一道</p>
              <span>魂圣</span>
            </li>
            <li>
              <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
              <p>逍遥一道</p>
              <span>魂圣</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="brbrbr"></div>
      <div class="popularity">
        <h3>人气榜</h3>
        <div class="popppp">
          <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
          <div class="popularityShowR">
            <h3>重生罢了:西交印花税</h3>
            <span>包装秤</span>
            <p>父母看见看见啊合适的话啥都开了花萨拉丁卡哈萨克接电话按时到离婚</p>
            <ul>
              <li>完结</li>
              <li>506万字</li>
              <li>重生</li>
              <li>轻松</li>
            </ul>
          </div>
        </div>
        <ul class="popularityList">
          <li>
            <b>都是狂晒</b>
            <span>连在</span>
            <i>搜是省会</i>
          </li>
          <li>
            <b>都是狂晒</b>
            <span>连在</span>
            <i>搜是省会</i>
          </li>
          <li>
            <b>都是狂晒</b>
            <span>连在</span>
            <i>搜是省会</i>
          </li>
          <li>
            <b>都是狂晒</b>
            <span>连在</span>
            <i>搜是省会</i>
          </li>
        </ul>
      </div>
      <div class="brbrbr"></div>
      <div class="boots">
        <h3>精选书单</h3>
        <ul class="bootsList">
          <li>
            <h3>浪漫情趣!婚宠.至于,经济健康金卡杀手</h3>
            <p>结婚撒开的康迪克案例可适当康迪克卡公司的控股客户卡公司的客户给卡加斯该地块炕上的控股</p>
            <div class="bootssps">
              <span>搜索</span>
              <span>此次</span>
              <span>看看</span>
            </div>
          </li>
          <li>
            <h3>浪漫情趣!婚宠.至于,经济健康金卡杀手</h3>
            <p>结婚撒开的康迪克案例可适当康迪克卡公司的控股客户卡公司的客户给卡加斯该地块炕上的控股</p>
            <div class="bootssps">
              <span>搜索</span>
              <span>此次</span>
              <span>看看</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="brbrbr"></div>
      <div class="liuSex">
        <h3 class="liuSexh3">兴趣推荐</h3>
        <ul class="liuSexList">
          <li>
            <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
            <div class="ssssssa">
              <h3>重生罢了:西交印花税</h3>
              <span>包装秤</span>
              <p>父母看见看见啊合适的话啥都开了花萨拉丁卡哈萨克接电话按时到离婚</p>
              <ul>
                <li>完结</li>
                <li>506万字</li>
                <li>重生</li>
                <li>轻松</li>
              </ul>
            </div>
          </li>
          <li>
            <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
            <div class="ssssssa">
              <h3>重生罢了:西交印花税</h3>
              <span>包装秤</span>
              <p>父母看见看见啊合适的话啥都开了花萨拉丁卡哈萨克接电话按时到离婚</p>
              <ul>
                <li>完结</li>
                <li>506万字</li>
                <li>重生</li>
                <li>轻松</li>
              </ul>
            </div>
          </li>
          <li>
            <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
            <div class="ssssssa">
              <h3>重生罢了:西交印花税</h3>
              <span>包装秤</span>
              <p>父母看见看见啊合适的话啥都开了花萨拉丁卡哈萨克接电话按时到离婚</p>
              <ul>
                <li>完结</li>
                <li>506万字</li>
                <li>重生</li>
                <li>轻松</li>
              </ul>
            </div>
          </li>
          <li>
            <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
            <div class="ssssssa">
              <h3>重生罢了:西交印花税</h3>
              <span>包装秤</span>
              <p>父母看见看见啊合适的话啥都开了花萨拉丁卡哈萨克接电话按时到离婚</p>
              <ul>
                <li>完结</li>
                <li>506万字</li>
                <li>重生</li>
                <li>轻松</li>
              </ul>
            </div>
          </li>
          <li>
            <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
            <div class="ssssssa">
              <h3>重生罢了:西交印花税</h3>
              <span>包装秤</span>
              <p>父母看见看见啊合适的话啥都开了花萨拉丁卡哈萨克接电话按时到离婚</p>
              <ul>
                <li>完结</li>
                <li>506万字</li>
                <li>重生</li>
                <li>轻松</li>
              </ul>
            </div>
          </li>
          <li>
            <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
            <div class="ssssssa">
              <h3>重生罢了:西交印花税</h3>
              <span>包装秤</span>
              <p>父母看见看见啊合适的话啥都开了花萨拉丁卡哈萨克接电话按时到离婚</p>
              <ul>
                <li>完结</li>
                <li>506万字</li>
                <li>重生</li>
                <li>轻松</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "home"
};

</script>

<style>
    /*头部css*/
#shouyeHaeder{
    height: .88rem;
    background-color: #f08300;
    border-bottom: .01rem solid #e17b00;
}

.logo{
    display: inline-block;
    margin-left: .2rem;
    margin-top: .2rem;
}

.logoImg{
    display: inline-block;
    height: .44rem;
}

.items{
    float: right;
    font-size: 0;
}

.items li{
    display: inline-block;
    margin-top: .2rem;
    margin-right: .32rem;
    width: .48rem;
    height: .48rem;
}

.items li img{
    width: .48rem;
    height: .48rem;
}

/*banner图 css*/
.swiper-container{
    height: 100%;
    width: 100%;
}
.swiper-slide img{
    width: 100%;
}
/* .banner{
    position: relative;
}
.bannerList{
    overflow: hidden;
    position: relative;
    width: 37.5rem;
    height: 1.75rem;
    transition-duration: 500ms;
}
.bannerList li{
    float: left;
    width: 7.5rem;
    height: 1.75rem;
    vertical-align: top;
}
.bannerList .bannerShow{
    display: block;
}
.bannerList li img{
    width: 7.5rem;
    height: 1.75rem;
    padding: .15rem;
    box-sizing: border-box;
    border-radius: .01rem;
} */
.navLie{
    padding: .3rem 0 .24rem;
    width: 100%;
}
.navList{
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.navList li{
    text-align: center;
    width: 1.76rem;
    overflow: hidden;
}
.navList li span{
    display: inline-block;
    width: .88rem;
    height: .88rem;
    background: url('http://img-tailor.11222.cn/pm/book/operate/2017022317384553.png') 0 0 no-repeat; 
}

/*精品推荐*/
.recommendation{
    width: 100%;
}
.recommendation h3{
    width: 100%;
    height: .32rem;
    font-size: .28rem;
    line-height: .32rem;
    padding-left:.32rem;
    color: #333;
}
.recommendationList{
    width: 100%;
}
.recommendationListUl{
    text-align: center;
    overflow: hidden;
    width: 100%;
    padding: .32rem 0 .32rem .32rem;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
}
.recommendationListUl li{
    width: 25%;
    display: inline-block;
    padding-right: .32rem;
    box-sizing: border-box;
    margin-bottom: .32rem;
}
.recommendationListUl li img{
    width: 100%;
}
.recommendationListUl li p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.recommendationListUl li span{
    color: #999;
}

/*男生热文*/

.boyHot{
    width: 100%;
}
.boyHot h3{
    width: 100%;
    height: .32rem;
    font-size: .28rem;
    line-height: .32rem;
    padding-left:.32rem;
    color: #333;
}
.boyTop{
    width: 100%;
    padding: .32rem;
    padding-right: 0;
}
.boyTopList{
    width: 100%;
    display: flex;
}
.boyTopList li{
    width: 25%;
    padding-right: .32rem;
    box-sizing: border-box;
}
.boyTopList li img{
    width: 100%;
}
.boyTopList li p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.boyTopList li span{
    color: #999;
}
.boyBottom{
    width: 100%;
}
.boyBottomList{
    width: 100%;
    padding: .32rem;
    padding-right: 0;
}
.boyBottomList li{
    width: 100%;
    padding: .1rem 0;
    border-top: .01rem solid #ccc;
}
.boyBottomList li h4{
    height: .7rem;
    line-height: .7rem;
    color:#333;
}
.boyBottomList li p{
    padding-right: .2rem;
    color: #999;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.brbrbr{
    width: 100%;
    height: .16rem;
    background: #F0F0F2;
}

/*女生美文*/
.girlHot{
    width: 100%;
}
.girlHot h3{
    width: 100%;
    height: .32rem;
    font-size: .28rem;
    line-height: .32rem;
    padding-left:.32rem;
    color: #333;
}
.girlTop{
    width: 100%;
    padding: .32rem;
    padding-right: 0;
}
.girlTopList{
    width: 100%;
    display: flex;
}
.girlTopList li{
    width: 25%;
    padding-right: .32rem;
    box-sizing: border-box;
}
.girlTopList li img{
    width: 100%;
}
.girlTopList li p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.girlTopList li span{
    color: #999;
}
.girlBottom{
    width: 100%;
}
.girlBottomList{
    width: 100%;
    padding: .32rem;
    padding-right: 0;
}
.girlBottomList li{
    width: 100%;
    padding: .1rem 0;
    border-top: .01rem solid #ccc;
}
.girlBottomList li h4{
    height: .7rem;
    line-height: .7rem;
    color:#333;
}
.girlBottomList li p{
    padding-right: .2rem;
    color: #999;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

/*完结热推*/
.finished{
    width: 100%;
}
.finished h3{
    width: 100%;
    height: .32rem;
    font-size: .28rem;
    line-height: .32rem;
    padding-left:.32rem;
    color: #333;
}
.finishedList{
    width: 100%;
}
.finishedListUl{
    text-align: center;
    overflow: hidden;
    width: 100%;
    padding: .32rem 0 .32rem .32rem;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
}
.finishedListUl li{
    width: 25%;
    display: inline-block;
    padding-right: .32rem;
    box-sizing: border-box;
    margin-bottom: .32rem;
}
.finishedListUl li img{
    width: 100%;
}
.finishedListUl li p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.finishedListUl li span{
    color: #999;
}

/*人气榜*/
.popularity{
    width: 100%;
}
.popularity h3{
    width: 100%;
    height: .32rem;
    font-size: .28rem;
    line-height: .32rem;
    padding-left:.32rem;
    color: #333;
}
.popularityList,.popppp{
    width: 100%;
    padding: .32rem;
}
.popppp{
    width: 100%;
    display: block;
    height: 2.8rem;
}
.popppp img{
    display: block;
    float: left;
    padding: .1rem;
    width: 2rem;
}
.popppp .popularityShowR{
    float: left;
    width: 4.60rem;
    margin-left: .26rem;
}
.popppp .popularityShowR h3{
    color:#333;
    font-size: .3rem;
}
.popppp .popularityShowR span{
    color: #999;
    margin: .3rem 0;
}
.popppp .popularityShowR p{
    display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
    overflow: hidden;
    margin: .3rem 0;
    color: #999;
}
.popularityShowR ul{
    display: flex;
    margin-top: .66rem;
}
.popularityShowR>ul>li{
    margin-right: .2rem;
}
.popularityList>li{
    width:100%;
    display: block;
    height: .4rem;
    margin: .2rem 0;
}
.popularityList>li>b{
    float: left;
    font-size: .3rem;
}
.popularityList>li>span{
    border:.01rem solid blue;
    color:blue;
    float: right;
    margin-right: .2rem;
}
.popularityList>li>i{
    border:.01rem solid #ccc;
    color:#ccc;
    float: right;
    margin-right: .2rem;
}

/*精选书单*/
.boots{
    width:100%;
}
.boots h3{
    width: 100%;
    height: .32rem;
    font-size: .28rem;
    line-height: .32rem;
    padding-left:.32rem;
    color: #333;
}
.boots .bootsList{
    width:100%;
    padding:.32rem;
}
.bootsList li{
    overflow: hidden;
}
.bootsList li h3{
    padding:0;
    margin:.1rem 0;
}
.bootsList li p{
    display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
    overflow: hidden;
    margin: .3rem 0;
    color: #999;
}
.bootssps{
    display: flex;
    width:100%;
}
.bootssps span{
    border:.01rem solid #999;
    margin-right: .2rem;
}

/*兴趣推荐*/
.liuSex{
    padding: .32rem;
    width:100%;
}
.liuSex .liuSexh3{
    width: 100%;
    height: .32rem;
    font-size: .28rem;
    line-height: .32rem;
    padding-left:.32rem;
    color: #333;
}
.liuSexList{
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 2.8rem;
}
.liuSexList li img{
    display: block;
    float: left;
    padding: .1rem;
    width: 2rem;
}
.liuSexList .ssssssa{
    float: left;
    width: 4.60rem;
    margin-left: .26rem;
}
.liuSexList .ssssssa h3{
    color:#333;
    font-size: .3rem;
}
.liuSexList .ssssssa span{
    color: #999;
    margin: .3rem 0;
}
.liuSexList .ssssssa p{
    display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
    overflow: hidden;
    margin: .3rem 0;
    color: #999;
}
.ssssssa ul{
    display: flex;
    justify-content: space-between;
}
.ssssssa ul li{
    border:.01rem solid #999;
}
.ssssssa ul li:nth-child(1){
    color:blue;
    boeder:.01rem solid blue;
}
</style>