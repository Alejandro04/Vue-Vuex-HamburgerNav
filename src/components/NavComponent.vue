<template>
     <slider :width="300" format="push" direction="left" 
     :opacity="0.15" :links="
     [{'id': 1, 'text': 'Link 1', 'url': 'https://github.com'}, 
     {'id': 2, 'text': 'Link 2', 'url': 'https://github.com'}]">
     </slider>
</template>


<script>
import Slider from '@jeremyhamm/vue-slider'

export default {
  components: {
    'slider': Slider
  }
}
</script>
