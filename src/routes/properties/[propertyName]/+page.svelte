<script>
  import { AccordionItem, Accordion } from 'flowbite-svelte';
  import { Carousel } from 'flowbite-svelte';
  import PropertyMap from '$lib/components/PropertyMap.svelte';
  export let data;

  let property = data.props.property;
  let images = property.artist_perspective;
  let artist_image = images[0];
  let images_floor_plans = property.floor_plan;
  let floor_plan_image = images_floor_plans !== undefined ? images_floor_plans[0] : undefined;
  console.log(images_floor_plans);
  console.log(images);
  property.sellingStatus = property.sellingStatus.toUpperCase();
</script>

<!-- Hero Section -->
<div
  class="relative flex h-[500px] flex-col items-center justify-center bg-cover bg-center text-alveogray lg:h-[600px]"
  style="background-image: url('{property.hero}');"
>
  <!-- Centered Container -->
  <div class="relative mx-auto h-full w-full max-w-[1140px]">
    <!-- Text Overlay at Bottom Left of the Centered Container -->
    <div class="absolute bottom-0 left-0 p-4 font-inter">
      <h1 class="mb-4 text-3xl lg:text-5xl"><strong>{property.name}</strong></h1>
      <div class="mb-4 flex items-center">
        <p class="text-sm text-white"><strong>{property.price}</strong></p>
      </div>
      <div class="mb-4 flex items-center">
        <img src="/images/svgs/location_pin.svg" alt="location pin" class="mr-1 h-4 w-4" />
        <p class="text-sm text-white"><strong>{property.location}</strong></p>
      </div>
    </div>
  </div>
</div>

<!-- BLURB -->
{#if property.nearby !== undefined}
  <div class="w-full border-b-2 border-gray-200">
    <div class="mx-auto flex max-w-[1140px] flex-col px-4 py-5 font-inter text-black">
      <h1 class="mb-2 text-xl text-alveoblue">
        {property.sellingStatus} LOTS IN {property.location}
      </h1>
      <p class="text-sm text-slate-600">{property.blurb}</p>
    </div>
  </div>
{/if}

<!-- MAP EMBED -->
{#if property.coordinates !== undefined}
  <div class="w-full border-b-2 border-gray-200">
    <div class="mx-auto flex max-w-[1140px] flex-col px-4 py-5 font-inter text-alveoblue">
      <h1 class="text-xl">PROPERTY LOCATION</h1>
      <svg class="my-2" height="2" width="150" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="150" y2="0" style="stroke:black;stroke-width:2" />
      </svg>
      <PropertyMap
        maps={property.coordinates.maps}
        long={property.coordinates.long}
        lat={property.coordinates.lat}
      />
    </div>
  </div>
{/if}

<!-- Nearby Locations -->
{#if property.nearby !== undefined}
  <div class="w-full border-b-2 border-gray-200">
    <div class="mx-auto flex max-w-[1140px] flex-col px-4 py-5 font-inter text-alveoblue">
      <h1 class="text-xl">NEARBY LOCATIONS</h1>
      <svg class="my-2" height="2" width="150" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="150" y2="0" style="stroke:black;stroke-width:2" />
      </svg>
      <ul class="grid list-disc grid-cols-1 gap-2 pl-2 sm:grid-cols-2 lg:grid-cols-3">
        {#each property.nearby as nearby}
          <li class="pl-1 text-xs sm:text-sm">{nearby}</li>
        {/each}
      </ul>
    </div>
  </div>
{/if}

<!-- GALLERY -->
<div class="w-full border-b-2 border-gray-200">
  <div class="mx-auto flex max-w-[1140px] flex-col px-4 py-5 font-inter text-black">
    <h1 class="text-xl">GALLERY</h1>
    <svg class="my-2" height="2" width="150" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="0" x2="150" y2="0" style="stroke:black;stroke-width:2" />
    </svg>

    <Carousel
      {images}
      let:Indicators
      let:Controls
      class="w-full"
      on:change={({ detail }) => (artist_image = detail)}
    >
      <Controls />
      <Indicators />
    </Carousel>
    <p class="my-2 h-10 items-start rounded p-2 text-center font-inter text-xs sm:text-sm">
      {artist_image?.alt}
    </p>
  </div>
</div>

<!-- FLOOR PLANS -->
{#if floor_plan_image !== undefined}
  <div class="w-full border-b-2 border-gray-200">
    <div class="mx-auto flex max-w-[1140px] flex-col px-4 py-5 font-inter text-black">
      <h1 class="text-xl">FLOOR PLANS</h1>
      <svg class="my-2" height="2" width="150" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="150" y2="0" style="stroke:black;stroke-width:2" />
      </svg>

      {#key images_floor_plans}
        <Carousel
          images={images_floor_plans}
          let:Indicators
          let:Controls
          class="w-full"
          on:change={({ detail }) => (floor_plan_image = detail)}
        >
          <Controls class="bg-alveoblue" />
          <Indicators />
        </Carousel>
      {/key}
      <p class="my-2 h-10 items-start rounded p-2 text-center font-inter text-xs sm:text-sm">
        {floor_plan_image?.alt}
      </p>
    </div>
  </div>
{/if}

<!-- Features and Ammenities -->
{#if property.features !== undefined || property.amenities !== undefined}
  <div class="w-full border-b-2 border-gray-200">
    <div class="mx-auto flex max-w-[1140px] flex-col px-4 py-5 font-inter">
      <h1 class="text-xl">PROPERTY INFORMATION</h1>
      <svg class="my-2" height="2" width="150" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="150" y2="0" style="stroke:black;stroke-width:2" />
      </svg>

      {#if property.features !== undefined}
        <Accordion class="w-full" flush>
          <AccordionItem>
            <span slot="header">Features</span>

            <ul class="list-disc pl-2">
              {#each property.features as features}
                <li class="mb-2 pl-1 text-xs text-slate-600 sm:text-sm">{features}</li>
              {/each}
            </ul>
          </AccordionItem>
        </Accordion>
      {/if}
      {#if property.amenities !== undefined}
        <Accordion class="w-ull" flush>
          <AccordionItem>
            <span slot="header">Amenities</span>

            <ul class="list-disc pl-2">
              {#each property.amenities as amenities}
                <li class="mb-2 pl-1 text-xs text-slate-600 sm:text-sm">{amenities}</li>
              {/each}
            </ul>
          </AccordionItem>
        </Accordion>
      {/if}
    </div>
  </div>
{/if}
