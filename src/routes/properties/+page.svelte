<script>
  import PropertyComponent from '$lib/components/PropertyComponent.svelte';
  import { onMount } from 'svelte';
  import { Search, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { SearchOutline, ChevronDownOutline } from 'flowbite-svelte-icons';

  let properties = [];
  onMount(async () => {
    const res = await fetch('/data/properties.json');
    if (res.ok) {
      properties = await res.json();
    } else {
      console.error('Failed to load properties data');
    }
  });
  let dropDownOpen = false;
  let searchQuery = '';
  const items = [
    {
      label: 'All'
    },
    {
      label: 'Residential Lots'
    },
    {
      label: 'Condo'
    },
    {
      label: 'Offices'
    },
    { label: 'Commercial Lots' }
  ];

  $: selectCategory = 'All';
  $: filteredList = properties
    .filter((property) => {
      const matchesSearch =
        searchQuery === '' ||
        property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.propertyType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.sellingStatus.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectCategory === 'All' || property.propertyType === selectCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  // $: filteredList =
  //   selectCategory === 'All'
  //     ? properties
  //     : properties.filter((property) => property.propertyType === selectCategory);
</script>

<!-- Filter based on property type -->
<div class="mx-auto mt-5 flex max-w-[1140px] flex-row items-center justify-center font-inter">
  <form class="flex w-full px-4">
    <div class="relative">
      <Button
        class="border-primary-700 whitespace-nowrap rounded-e-none border border-e-0 bg-alveogray text-alveoblue"
      >
        {selectCategory}
        <ChevronDownOutline class="ms-2.5 h-2.5 w-2.5" />
      </Button>
      <Dropdown classContainer="w-40" bind:open={dropDownOpen}>
        {#each items as { label }}
          <DropdownItem
            on:click={() => {
              selectCategory = label;
              dropDownOpen = false;
            }}
            class={selectCategory === label ? 'underline' : ''}
          >
            {label}
          </DropdownItem>
        {/each}
      </Dropdown>
    </div>
    <Search
      size="md"
      bind:value={searchQuery}
      class="rounded-none py-2.5"
      placeholder="Search Properties or Locations..."
    />
    <Button class="rounded-s-none bg-alveoblue !p-2.5">
      <SearchOutline class="h-5 w-5" />
    </Button>
  </form>
</div>

<!-- number of properties title -->
<div class="mx-auto mt-2 flex max-w-[1140px] items-center justify-center">
  <h1 class="font-inter text-2xl">
    {filteredList.length}
    {filteredList.length === 1 ? 'PROPERTY' : 'PROPERTIES'}
  </h1>
</div>

<!-- All Properties -->
<div class="mx-auto grid max-w-[1140px] gap-6 py-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {#each filteredList as property}
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
