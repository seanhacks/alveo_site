export async function load({ params, fetch }) {
  try {
    const propertyName = params.propertyName;

    const res = await fetch('/data/properties.json');
    if (!res.ok) {
      throw new Error('Failed to fetch properties');
    }

    const propertiesData = await res.json();
    const property = propertiesData.find((p) => p.href === `properties/${propertyName}`);

    if (!property) {
      return { status: 404, error: new Error('Property not found') };
    }

    return {
      props: {
        property
      }
    };
  } catch (error) {
    console.error(error);
    return { status: 500, error: new Error('Server error') };
  }
}
