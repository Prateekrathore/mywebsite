
<script>
snabbt(element, {
  position: [100, 0, 0],
  rotation: [0, 0, 2*Math.PI],
  easing: 'spring',
  springConstant: 0.3,
  springDeceleration: 0.8,
}).snabbt({
  position: [0, 0, 0],
  easing: 'spring',
  springConstant: 0.3,
  springDeceleration: 0.8,
});
</script>