# tool-process
一个简单的进度器(当有个任务不知道啥时候结束但是呢又想显示一下进度,安慰一下用户...)
# 简单的进度器

# 项目背景：
经常有这么一个场景，我们在执行一些任务但是呢鬼知道他啥时候结束，但是好奇害死猫，或者说寻求心理上的安慰，我们想要获取一下进度 这时候这个进度器就诞生了。
它的原理是类似如下：
我借给小雨1块钱，但是啥时候还，我不知到，然后我就开始等，心里告诉自己他会3天后还给我，然后提前一天就等不及了，还没有还我，于是就想不会的，他一定会还我的 那就再给他两天时间吧，一直继续，直到最后他还给我了！
# 快速开始：


## 1）引入并插入组件
```javascript
//process事件：返回进度  loaded：Boolean 告知结束
<process bind:process="process" loaded="{{loaded}}"/>
```


## 2）实例：
![2.gif](https://cdn.nlark.com/yuque/0/2021/gif/3005844/1610518283728-0a900d2d-9e4b-4bbc-bd2b-d1f3efe0c789.gif#align=left&display=inline&height=44&margin=%5Bobject%20Object%5D&name=2.gif&originHeight=44&originWidth=366&size=7346&status=done&style=none&width=366)
```javascript
<process bind:process="process" loaded="{{loaded}}"/>

<view class="progress-box">
     <progress percent="{{processData*100}}" show-info stroke-width="3"/>
</view>

--------------------------------------

process(e){
    console.log(e.detail)
    this.setData({
      processData:(+e.detail).toFixed(2)
    })
},

onLoad(){
  setTimeout(()=>{
        this.setData({
          loaded:true
        })
  },10000)
},
```



