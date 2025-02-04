<script>
  // Used for the profile picture + text for Siony and Mauie
  let { name, role, prc_lic_num, dhsud_lic_num, image_src } = $props();
</script>

<div class="flex flex-col items-center justify-center p-2 font-inter">
  <div class="h-24 w-24 overflow-hidden rounded-full">
    <img src={image_src} alt="{name}'s profile picture" class="h-full w-full object-cover" />
  </div>
  <div class="mt-2 text-center">
    <h3 class="text-xl"><strong>{name}</strong></h3>
    <p class="text-sm text-gray-600">{role}</p>
    <p class="text-xs text-gray-600">PRC License #: {prc_lic_num}</p>
    <p class="text-xs text-gray-600">DHSUD License #: {dhsud_lic_num}</p>
  </div>
</div>
