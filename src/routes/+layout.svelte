<script>
  import '../app.css';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import {
    Footer,
    FooterCopyright,
    FooterLinkGroup,
    FooterBrand,
    FooterLink
  } from 'flowbite-svelte';
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

<div class="w-screen bg-alveoblue font-inter">
  <Footer footerType="logo" class="mx-auto max-w-[1140px] bg-alveoblue text-white">
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterBrand href="/" src="/images/alveo_logo.png" alt="Alveo Logo" />
      <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm sm:mb-0">
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/properties">Properties</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
      </FooterLinkGroup>
    </div>
    <hr class="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
    <FooterCopyright href="/" by="Alveo Land Corp." />
  </Footer>
</div>
