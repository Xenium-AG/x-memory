<script lang="ts">
  export let d: string
  export let dim = { w: 30, h: 30 }
  export let fill = 'rgb(156, 163, 175)'
</script>

<svg viewBox="0 0 {dim.w} {dim.h}" {fill} width="100%" height="100%">
  <path {d} />
</svg>
