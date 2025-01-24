<script>
  let { name, location, sellingStatus, price, imageSrc, propertyType, endpoint } = $props();
</script>

<a
  href={endpoint}
  class="flex flex-col items-start border bg-white shadow-md transition-transform duration-300 hover:scale-105"
>
  <div class="mb-4 w-full">
    <img src={imageSrc} alt="Property" class="w-full object-cover lg:h-52" />
  </div>

  <div class="px-4">
    <h1 class="mb-2 font-inter text-xl font-bold">{name}</h1>
    <section class="mb-2 flex items-center">
      <img src="/images/svgs/location_pin_black.svg" alt="location pin svg" class="mr-1 h-3 w-3" />
      <p class="text-md font-inter text-gray-600">{location}</p>
    </section>
    <section class="mx-auto mb-2 grid grid-cols-2">
      <section class="flex items-center">
        <img src="/images/svgs/building_black.svg" alt="Building svg" class="mr-1 h-3 w-3" />
        <p class="mr-2 font-inter text-sm text-gray-600">{propertyType}</p>
      </section>
      <section class="flex items-center">
        <img src="/images/svgs/status.svg" alt="Status svg" class="mr-0 h-3 w-3" />
        <p class="font-inter text-sm text-gray-600">{sellingStatus}</p>
      </section>
    </section>
    <p class="text-md mb-2 font-inter text-gray-600">{price}</p>
  </div>
</a>
