<script>
  import StatsBanner from '$lib/components/StatsBanner.svelte';

  //TODO: Change the hero photo
</script>

<!-- Hero Section -->
<div
  class="relative flex h-[500px] flex-col items-center justify-center bg-cover bg-center text-white lg:h-[600px]"
  style="background-image: url('/images/landing_image.jpg');"
>
  <!-- Text Overlay -->
  <div class="flex flex-col p-2 lg:max-w-[1140px]">
    <h1 class="font-inter text-3xl lg:text-5xl">ABOUT US</h1>
    <p class="mt-2 font-inter text-base lg:text-lg">
      With over 70 groundbreaking projects across 13 vibrant locations in the Philippines, we are
      redefining spaces that inspire and empower communities.
    </p>
  </div>
</div>

<!-- About The Team -->
<div class="mx-auto flex max-w-[1140px] flex-col items-start gap-5 px-4 py-5 lg:flex-row lg:px-0">
  <!-- Left Image change to mauwhi image -->
  <div class="w-full lg:w-1/2">
    <img
      src="/images/alveo_banner.png"
      alt="Alveo Banner"
      class="h-auto w-full rounded object-cover"
    />
  </div>
  <!-- Right Text -->
  <div class="w-full lg:w-1/2 lg:px-6">
    <h1 class="font-inter text-xl text-alveoblue">ABOUT THE TEAM</h1>
    <svg class="my-2" height="2" width="150" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="0" x2="150" y2="0" style="stroke:black;stroke-width:2" />
    </svg>
    <p class="font-inter text-sm text-slate-600">
      Welcome to the official sales team page of Alveo Land. As a proud member of Ayala Land's
      premier real estate network, we are dedicated to delivering unparalleled service and expert
      advice. Our mission is to help you discover the ideal spaces for living, working, and
      thriving. Driven by a passion for excellence and a deep commitment to understanding your
      unique needs, our team ensures a seamless journey—from your first inquiry to the realization
      of your dream property. Let us guide you every step of the way.
    </p>
  </div>
</div>

<StatsBanner />

<!-- About Alveo -->
<div class="w-full bg-alveogray">
  <div
    class="mx-auto flex max-w-[1140px] flex-col items-start gap-5 bg-alveogray px-4 py-5 lg:flex-row lg:px-0"
  >
    <!-- Right Text -->
    <div class="w-full lg:w-1/2 lg:px-6">
      <h1 class="font-inter text-xl text-alveoblue">ABOUT ALVEO</h1>
      <svg class="my-2" height="2" width="150" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="150" y2="0" style="stroke:black;stroke-width:2" />
      </svg>
      <p class="font-inter text-sm text-slate-600">
        Alveo Land is a leading real estate brand under Ayala Land, dedicated to redefining urban
        living with innovative, thoughtfully designed communities. With a focus on modern
        lifestyles, Alveo offers a diverse portfolio of residential, commercial, and mixed-use
        developments tailored to meet the evolving needs of discerning individuals. Committed to
        quality, sustainability, and customer satisfaction, Alveo continues to create vibrant spaces
        that inspire living, working, and leisure, setting the standard for premier property
        development in the Philippines.
      </p>
    </div>

    <!-- Right Image -->
    <div class="flex w-full items-center justify-center lg:w-1/2">
      <img
        src="/images/about_alveo.jpg"
        alt="indoor furnishing"
        class="h-auto w-full rounded object-cover"
      />
    </div>
  </div>
</div>
