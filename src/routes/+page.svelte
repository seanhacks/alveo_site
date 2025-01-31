<script>
  import PropertyComponent from '$lib/components/PropertyComponent.svelte';
  import { onMount } from 'svelte';
  import { Carousel, Button } from 'flowbite-svelte';
  import StatsBanner from '$lib/components/StatsBanner.svelte';

  let image;
  let images = [
    {
      alt: 'CAVITE',
      src: '/images/locations/cavite.jpg',
      title: 'Cavite Aerial View'
    },
    {
      alt: 'QUEZON CITY',
      src: '/images/locations/quezoncity.jpg',
      title: 'Quezon City Skyline'
    },
    {
      alt: 'LAGUNA',
      src: '/images/locations/laguna.jpg',
      title: 'Laguna Aerial View'
    },
    {
      alt: 'MAKATI',
      src: '/images/locations/makati.jpg',
      title: 'Makati Skyline'
    },
    {
      alt: 'TAGUIG',
      src: '/images/locations/taguig.jpg',
      title: 'Taguig Skyline'
    },
    {
      alt: 'BATANGAS',
      src: '/images/locations/batangas.jpg',
      title: 'Batangas Aerial View'
    },
    {
      alt: 'PAMPANGA',
      src: '/images/locations/pampanga.jpg',
      title: 'Pampanga Aerial View'
    },
    {
      alt: 'PASIG',
      src: '/images/locations/pasig.jpg',
      title: 'Pasig Aerial View'
    }
  ];

  let properties = [];
  onMount(async () => {
    const res = await fetch('/data/properties.json');
    if (res.ok) {
      properties = await res.json();
      properties = properties.slice(0, 9);
    } else {
      console.error('Failed to load properties data');
    }
  });
</script>

<div>
  <!-- Hero Section -->
  <div
    class="relative flex h-[500px] flex-col items-center justify-center bg-cover bg-center text-white lg:h-[600px]"
    style="background-image: url('/images/landing_image.jpg');"
  >
    <!-- Text Overlay -->
    <div class="flex flex-col p-2 lg:max-w-[1140px] lg:p-0">
      <h1 class="font-inter text-3xl lg:text-5xl">ALVEO</h1>
      <p class="mt-2 text-base lg:text-lg">
        Experience over 20 years of excellence with Alveo, crafting world-class communities in the
        Philippines.
      </p>
      <a href="/properties">
        <Button class="mt-4 self-start bg-alveoblue font-alata">View Properties</Button>
      </a>
    </div>
  </div>

  <!-- Alveo Logo and text -->
  <div
    class="mx-auto flex max-w-[1140px] flex-col items-center justify-center px-4 py-10 lg:px-0 lg:py-20"
  >
    <div class="">
      <img src="/images/alveo_logo_blue.png" alt="Alveo Logo" />
    </div>

    <!-- Text -->
    <div class="my-2 flex w-full flex-col items-center justify-center text-center lg:px-6">
      <h1 class="font-inter text-xl text-alveoblue">
        <strong>LIVE WELL ALL ACROSS THE PHILIPPINES</strong>
      </h1>
      <p class="mt-2 font-inter text-sm text-slate-600">
        Alveo Land Corp. is a leading real estate developer in the Philippines, committed to
        creating innovative communities and thoughtfully designed spaces. With a focus on quality
        and modern living, every Alveo project is designed to enhance lifestyles, offering
        well-planned environments where people can live, work, and invest with confidence.
      </p>
    </div>
  </div>

  <!-- Content Section -->
  <div class="bg-offwhite w-full">
    <div
      class="mx-auto flex max-w-[1140px] flex-col items-start gap-5 px-4 py-10 lg:flex-row lg:px-0 lg:py-20"
    >
      <!-- Left Image -->
      <div class="w-full lg:w-1/2">
        <img
          src="/images/indoor_image.jpg"
          alt="indoor furnishing"
          class="h-auto w-full rounded object-cover"
        />
      </div>
      <!-- Right Text -->
      <div class="w-full lg:w-1/2 lg:px-6">
        <h1 class="font-inter text-xl text-alveoblue">
          <strong>LUXURY LIVING. REDEFINED.</strong>
        </h1>
        <svg class="my-2" height="2" width="150" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="150" y2="0" style="stroke:black;stroke-width:2" />
        </svg>
        <p class="font-inter text-sm text-slate-600">
          For over 20 years, Alveo has been a pioneer in redefining luxury living in the
          Philippines. With an unwavering commitment to excellence, we craft exclusive communities
          and premier developments that combine innovative design, exceptional quality, and prime
          locations. Discover a new standard of living with Alveo, where every detail reflects our
          passion for creating world-class homes.
        </p>
      </div>
    </div>
  </div>

  <!-- Carousel Section -->
  <div class="w-full bg-alveogray">
    <div class="mx-auto max-w-[1140px] items-start bg-alveogray px-4 py-10 lg:py-20">
      <h1 class="my-2 text-center font-inter text-xl text-alveoblue"><strong>LOCATIONS</strong></h1>
      <Carousel
        {images}
        let:Indicators
        let:Controls
        class="max-h-[550px] w-full"
        on:change={({ detail }) => (image = detail)}
      >
        <Controls />
        <Indicators />
      </Carousel>
      <p class="my-2 h-10 items-start rounded p-2 text-center font-inter">
        {image?.alt}
      </p>
    </div>
  </div>

  <!-- Statistic banner forthe company -->
  <StatsBanner />

  <!-- Featured Properties (Top 9) -->
  <div class="bg-offwhite flex w-full flex-col items-center justify-center px-4 py-10 lg:py-20">
    <div class="mx-auto max-w-[1140px] text-center font-inter text-alveoblue">
      <h1 class="my-2 text-xl">
        <strong>FEATURED PROPERTIES</strong>
      </h1>
      <p class="my-2 mb-6 text-sm text-slate-600">
        Discover our top handpicked properties, offering premium living spaces in prime locations.
        These exclusive developments feature modern designs, excellent amenities, and the perfect
        blend of comfort and convenience. Find your ideal home today.
      </p>
    </div>
    <div class="mx-auto grid max-w-[1140px] gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {#each properties as property}
        <PropertyComponent
          class="max-w-full sm:max-h-[300px]"
          name={property.name}
          location={property.location}
          sellingStatus={property.sellingStatus}
          imageSrc={property.imageSrc}
          price={property.price}
          propertyType={property.propertyType}
          endpoint={property.href}
        />
      {/each}
    </div>
  </div>
</div>
