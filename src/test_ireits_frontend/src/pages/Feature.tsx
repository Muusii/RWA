import React from 'react';

export default function FeaturePage() {
  const properties = [
    {
      title: 'Modern Apartment',
      location: 'Downtown Nakuru',
      price: '250,000 PT',
      beds: 2,
      baths: 2,
      area: '1000 sqft',
      image: '/placeholder.svg?height=200&width=300',
      status: 'For Sale',
    },
    {
      title: 'Suburban House',
      location: 'Kilimani, Nairobi',
      price: '450,000 PT',
      beds: 4,
      baths: 3,
      area: '2500 sqft',
      image: '/placeholder.svg?height=200&width=300',
      status: 'For Sale',
    },
    {
      title: 'Villa',
      location: 'Nyali, Mombasa',
      price: '800,000 PT',
      beds: 5,
      baths: 2,
      area: 'Greenwood Drive, Nyali Area sqft',
      image: '/placeholder.svg?height=200&width=300',
      status: 'For Lease',
    },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="mb-6 text-3xl font-bold text-center text-gray-900">Featured Listings</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {properties.map((property, index) => (
          <div key={index} className="overflow-hidden bg-white rounded-lg shadow">
            <div className="relative">
              <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
              <span className="absolute top-2 left-2 px-2 py-1 text-sm font-semibold text-white bg-black bg-opacity-50 rounded">
                {property.status}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900">{property.title}</h3>
              <p className="text-gray-600">{property.location}</p>
              <p className="mt-2 text-lg font-bold text-gray-900">{property.price}</p>
              <div className="flex items-center mt-4 text-gray-600">
                <span className="mr-4">{property.beds} Beds</span>
                <span className="mr-4">{property.baths} Baths</span>
                <span>{property.area}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
