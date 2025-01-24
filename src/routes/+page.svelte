<script>
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

  <!-- Content Section -->
  <div class="mx-auto flex max-w-[1140px] flex-col items-start gap-5 px-4 py-5 lg:flex-row lg:px-0">
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
      <h1 class="font-inter text-xl text-alveoblue">LUXURY LIVING. REDEFINED.</h1>
      <svg class="my-2" height="2" width="150" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="150" y2="0" style="stroke:black;stroke-width:2" />
      </svg>
      <p class="font-inter text-sm text-slate-600">
        For over 20 years, Alveo has been a pioneer in redefining luxury living in the Philippines.
        With an unwavering commitment to excellence, we craft exclusive communities and premier
        developments that combine innovative design, exceptional quality, and prime locations.
        Discover a new standard of living with Alveo, where every detail reflects our passion for
        creating world-class homes.
      </p>
    </div>
  </div>

  <!-- Carousel Section -->
  <div class="w-full bg-alveogray px-4 lg:px-0">
    <div class="mx-auto max-w-[1140px] items-start bg-alveogray py-5">
      <h1 class="font-inter text-xl">LOCATIONS</h1>
      <svg class="my-2 mb-4" height="2" width="150" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="150" y2="0" style="stroke:black;stroke-width:2" />
      </svg>
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

  <StatsBanner />
</div>
