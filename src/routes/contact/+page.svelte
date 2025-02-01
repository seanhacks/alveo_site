<script>
  import ContactUs from '$lib/components/ContactUs.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<!-- Hero Section -->
<div
  class="relative flex h-[500px] flex-col items-center justify-center bg-cover bg-center text-white lg:h-[600px]"
  style="background-image: url('/images/landing_image.jpg');"
>
  <!-- Text Overlay -->
  <div class="flex flex-col p-2 lg:max-w-[1140px] lg:p-0">
    <h1 class="font-inter text-3xl lg:text-5xl">CONTACT US</h1>
    <p class="mt-2 font-inter text-base lg:text-lg">
      Get in touch with our team today for any inquiries or assistance – we're here to help!
    </p>
  </div>
</div>

<ContactUs />

<div class="mx-auto max-w-[600px]">
  <ContactForm />
</div>
