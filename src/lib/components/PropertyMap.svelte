<script>
  let { lat, long } = $props();
  import { Button } from 'flowbite-svelte';

  // constants for map embed
  const OFFSET = 0.005;
  let url = `https://www.openstreetmap.org/export/embed.html?bbox=${long},${lat - OFFSET},${long + OFFSET},${lat + OFFSET}&layer=mapnik&marker=${lat},${long}`;

  // function to open location in google maps
  function openInGoogleMaps() {
    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${long}`;
    window.open(googleMapsUrl, '_blank', 'noopener noreferrer');
  }
</script>

<div class="relative h-96 w-full text-alveogray">
  <iframe title="Property Location" src={url} frameborder="0" allowfullscreen class="h-full w-full"
  ></iframe>
  <Button
    onclick={openInGoogleMaps}
    class="absolute right-2 top-2 z-10 bg-alveoblue p-2 font-inter text-xs"
  >
    Open in Maps
  </Button>
</div>
