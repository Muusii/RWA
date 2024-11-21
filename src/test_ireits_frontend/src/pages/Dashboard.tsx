import { useState, useEffect } from 'react';
import { Search, Home, Building, MapPin, LucideIcon } from 'lucide-react';

type SearchItem = {
  icon: LucideIcon; // Using LucideIcon type for the icons
  text: string;
};

export default function DashboardPage() {
  const [searchType, setSearchType] = useState<'buy' | 'sell'>('buy'); // Use a union type for better type safety
  const [searchValue, setSearchValue] = useState<string>('');

  const popularSearches: SearchItem[] = [
    { icon: Home, text: 'Houses for sale' },
    { icon: Building, text: 'Apartments for rent' },
    { icon: MapPin, text: 'Properties in Nairobi' },
    { icon: Home, text: 'Condos for sale' },
    { icon: Building, text: 'Office spaces' },
    { icon: MapPin, text: 'Beachfront properties' },
  ];

  useEffect(() => {
    setSearchValue(searchType === 'buy' ? 'Nairobi' : 'Enter your property address');
  }, [searchType]);

  return (
    <div className="bg-gray-100 py-12 pt-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Find Your Perfect Property</h2>
        <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-md">
          <div className="mb-4 flex">
            <button
              className={`flex-1 rounded-l-lg px-4 py-2 ${
                searchType === 'buy' ? 'bg-primary text-black' : 'bg-gray-200'
              }`}
              onClick={() => setSearchType('buy')}
            >
              Buy
            </button>
            <button
              className={`flex-1 rounded-r-lg px-4 py-2 ${
                searchType === 'sell' ? 'bg-primary text-black' : 'bg-gray-200'
              }`}
              onClick={() => setSearchType('sell')}
            >
              Sell
            </button>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={
                searchType === 'buy'
                  ? 'Enter location, property type, or keywords'
                  : 'Enter your property address'
              }
              className="flex-grow rounded-l-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none"
            />
            <button className="rounded-r-lg bg-primary px-4 py-2 text-white hover:bg-primary-dark">
              <Search className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-4">
            <h3 className="mb-2 text-sm font-semibold text-gray-600">Popular Searches:</h3>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  className="flex items-center rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-300"
                >
                  <search.icon className="mr-1 h-4 w-4" />
                  {search.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
