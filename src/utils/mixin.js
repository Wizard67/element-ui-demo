import debounce from 'lodash/debounce'
import { getWindowSizeType } from '@/utils'

export const layoutMixin = {
  created () {
    this.initSideBarStatus()

    window.addEventListener('resize', this.listenResize)
    window.addEventListener('click', this.listenClick)
    window.addEventListener('touchend', this.listenClick)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.listenResize)
    window.removeEventListener('click', this.listenClick)
    window.removeEventListener('touchend', this.listenClick)
  },
  methods: {
    changeSideBarStatus (type) {
      switch (type) {
        case 'xs':
          if (this.preSideBarStatus !== 'xs') {
            this.isCollapse = true
            this.isFixedAsideShow = false
            this.fixedAside = true
            this.preSideBarStatus = 'xs'
          }
          break
        case 'sm':
          if (this.preSideBarStatus !== 'sm') {
            this.isCollapse = true
            this.isFixedAsideShow = false
            this.fixedAside = false
            this.preSideBarStatus = 'sm'
          }
          break
        case 'md':
          if (this.preSideBarStatus !== 'md') {
            this.isCollapse = true
            this.isFixedAsideShow = false
            this.fixedAside = false
            this.preSideBarStatus = 'md'
          }
          break
        case 'lg':
          if (this.preSideBarStatus !== 'lg') {
            this.isCollapse = false
            this.isFixedAsideShow = false
            this.fixedAside = false
            this.preSideBarStatus = 'lg'
          }
          break
        case 'xl':
          if (this.preSideBarStatus !== 'xl') {
            this.isCollapse = false
            this.isFixedAsideShow = false
            this.fixedAside = false
            this.preSideBarStatus = 'xl'
          }
          break
        default:
          this.isCollapse = false
          this.isFixedAsideShow = false
          this.fixedAside = false
          break
      }
    },
    initSideBarStatus () {
      const type = getWindowSizeType(window.innerWidth)
      this.changeSideBarStatus(type)
    },
    listenResize: debounce(function (e) {
      const type = getWindowSizeType(e.target.innerWidth)
      this.changeSideBarStatus(type)
    }, 100),
    listenClick (event) {
      if (this.isFixedAsideShow && this.preSideBarStatus === 'xs') {
        this.$nextTick(() => {
          if (!this.$refs.aside.$el.contains(event.target)) { this.isFixedAsideShow = false }
        })
      }
    }
  }
}
