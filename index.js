// subPackages/lqs/components/lqs/process/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    loaded:{
      type:Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  attached(){
    this.main()
  },
  methods: {
    main(){
        let hasRun = 0
        let totalRun = 10
        let step = 2
        let warningStep = 3
        let process = 0
        let timer = setInterval(() => {
            hasRun += 1
            // console.log("hasRun:"+hasRun)
            if (totalRun <= hasRun + warningStep) {
                totalRun += step
               // console.log("totalRun:" + totalRun)
            }
            if (process < hasRun / totalRun) {
                process = hasRun / totalRun
               // console.log("--------------process:" + hasRun / totalRun)
                this.triggerEvent('process',process,{})
            }
            if (this.properties.loaded) {
                //     console.log("over:"+hasRun)
              //  console.log("--------------process:" + 1)
                this.triggerEvent('process',1,{})
                clearInterval(timer)
            }
        }, 100);
    },
  }
})
