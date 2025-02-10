<script>
  import '../app.css';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import { getContext } from 'svelte';
  import { afterNavigate } from '$app/navigation';
  let { children } = $props();

  const hiddenStore = getContext('navHidden');

  afterNavigate(() => {
    hiddenStore.update((h) => !h);
  });

  //TODO: NEED TO ADD MORE CONTENT IN LANDING PAGE, AT LEAST ONE MORE 'ROW' Just leave it to Maui if he wants
  //TODO: CENTER LOGO ON MOBILE
</script>

<!-- Banner of Sales Details -->
<div
  class="flex w-screen flex-col items-center justify-center bg-darkgray font-inter text-xs text-white md:flex-row"
>
  <div class="my-1 mr-3 flex flex-row items-center">
    <img src="/images/svgs/email.svg" alt="email svg" class="mr-1 h-3 w-3 align-middle" />
    <p class="leading-none">testemail@gmail.com</p>
  </div>
  <div class="my-1 flex flex-row items-center">
    <img src="/images/svgs/phone.svg" alt="phone.svg" class="mr-1 h-3 w-3 align-middle" />
    <p class="leading-none">(+63) 927 071 1122</p>
  </div>
</div>

<div class="relative flex items-center justify-center bg-alveoblue">
  <Navbar class="max-w-[1140px] bg-alveoblue px-2 py-1 font-alata text-white">
    <NavBrand href="/" class="bg-alveoblue md:me-0 ">
      <img src="/images/alveo_logo.png" class="h-6 w-auto" alt="Alveo Logo" />
    </NavBrand>
    <NavHamburger />
    <NavUl class="bg-blue order-1">
      <NavLi class="text-alveoblue md:text-white" href="/">HOME</NavLi>
      <NavLi class="text-alveoblue md:text-white" href="/properties">PROPERTIES</NavLi>
      <NavLi class="text-alveoblue md:text-white" href="/about">ABOUT</NavLi>
      <NavLi class="text-alveoblue md:text-white" href="/contact">CONTACT</NavLi>
    </NavUl>
  </Navbar>
</div>
<div>
  {@render children()}
</div>

<!-- Footer -->
<div class="w-screen bg-alveoblue py-5 font-inter text-slate-400">
  <div class="mx-auto flex max-w-[1140px] flex-col items-center justify-center">
    <img src="/images/alveo_logo.png" class="h-10 w-auto" alt="alveo logo" />
    <p class="my-2 text-center text-xs">
      DISCOVER A PLACE WHERE LIFE THRIVES At Alveo Land, we create dynamic communities, thoughtfully
      designed spaces, and innovative living environments. Each development is crafted to enrich
      lives and safeguard investments, ensuring a home where you can truly flourish.
    </p>
    <p class="mt-5 text-center text-xs">
      DISCLAIMER: This is not the official Ayala-Alveo Land website
    </p>
  </div>
</div>
