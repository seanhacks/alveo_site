<script>
  let { title, imageSrc } = $props();
</script>

<div
  class="m-2 flex min-w-[60px] max-w-[105] flex-col items-center justify-center transition-colors duration-200 hover:bg-alveogray md:min-w-[100px]"
>
  <img src={imageSrc} alt="svg logo" class="mb-2 h-4 w-4" />
  <p class="items-center font-inter text-[14px] text-alveoblue">{title}</p>
</div>
