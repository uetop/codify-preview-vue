# Codify preview for Vue3

The Codify plugin is designed to display and run a preview window of the front-end code for your project. Since Codify itself is not aware of how your project is run, you need to configure the preview window yourself to ensure that the generated code can run correctly in your project.

### Example

Here's a complete code example of a preview window based on Vue 3:

```vue
<template>
  <div class="zoom-area">
    <component :is="codeComponent" class="demo" :style="getSize" />
  </div>
</template>
<script setup lang="ts">
import { compile, computed, h, ref } from 'vue'

const size = ref({
  width: '100%',
  height: '100%'
})
const code = ref(
  '<p class="text-center" style="color: rgba(255,255,255,0.3)">Please selection canvas node <br>Use auto layout to generates better results</p>'
)

// Listener for Codify plugin events
window.addEventListener('message', (event) => {
  if (event.data.length < 0) return
  switch (event.data.type) {
    case 'zoom':
      document.body.style.setProperty('zoom', event.data.content)
      break
    case 'code':
      code.value = event.data.content
      try {
        size.value = JSON.parse(event.data.size)
      } catch (error) {
        console.error(error)
      }
  }
})

// Set preview size
const getSize = computed(() => {
  const styleObject: any = {}
  if (size.value.width) {
    styleObject.minWidth = size.value.width
  }
  if (size.value.height) {
    styleObject.minHeight = size.value.height
  }
  return styleObject
})

const codeComponent = {
  render() {
    try {
      return h(compile(code.value))
    } catch (error) {
      // When an error occurs, provide alternative code or handling logic.
      return h('span', { class: 'text-danger text-center' }, 'Error: Failed to render component')
    }
  }
}
</script>

<style scoped>
.zoom-area {
  position: absolute;
  align-items: safe center;
  justify-content: safe center;
  min-width: 100%;
  min-height: 100%;
  padding: 20px;
}
.demo {
  align-self: center !important;
}
</style>

```

## Set playground url
```json
{
  "playground_url": "https://your.playground_url.com",
}
```
Refer to [Feature setting](http://doc.codify.fun/guide/feature-setting)

>The preview URL allows the use of local URLs, such as `http://localhost:3000`, as long as it is accessible within your network.

[Codify dashboard](https://codify.fun)