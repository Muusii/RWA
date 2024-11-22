// 'use client'

// import React, { Suspense, useState } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, Environment, useGLTF } from '@react-three/drei'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Input } from "@/components/ui/input"
// import { Slider } from "@/components/ui/slider"
// import { Switch } from "@/components/ui/switch"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { MapPin, Home, Briefcase, Car, Search } from 'lucide-react'
// import { ErrorBoundary } from 'react-error-boundary'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'
// import L from 'leaflet'

// // Fix for default marker icon
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
// });

// function PropertyModel({ url }: { url: string }) {
//   const { scene } = useGLTF(url)
//   return <primitive object={scene} />
// }

// function ErrorFallback({error, resetErrorBoundary}) {
//   return (
//     <div role="alert" className="text-center p-4">
//       <p>Something went wrong:</p>
//       <pre className="text-red-500">{error.message}</pre>
//       <Button onClick={resetErrorBoundary}>Try again</Button>
//     </div>
//   )
// }

// function MapComponent() {
//   const position: [number, number] = [51.505, -0.09] // Example coordinates (London)

//   return (
//     <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <Marker position={position}>
//         <Popup>
//           A sample property location. <br /> You can customize this popup.
//         </Popup>
//       </Marker>
//     </MapContainer>
//   )
// }

// export default function Marketplace() {
//   const [activeTab, setActiveTab] = useState('3d-model')

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold mb-6">Real Estate Marketplace</h1>
      
//       {/* Search and Create Transaction */}
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
//         <div className="relative flex-grow w-full sm:w-auto">
//           <Input type="text" placeholder="Enter a city or address..." className="pl-10 pr-4 py-2 w-full" aria-label="Search for properties" />
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" aria-hidden="true" />
//         </div>
//         <Button>Create transaction</Button>
//       </div>

//       {/* Filters */}
//       <Card className="mb-6">
//         <CardHeader>
//           <CardTitle>Filters</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             <div>
//               <Label htmlFor="price-range">Price Range</Label>
//               <Slider id="price-range" defaultValue={[0]} max={1000000} step={10000} />
//             </div>
//             <div className="flex items-center space-x-2">
//               <Switch id="single-agent" />
//               <Label htmlFor="single-agent">Single Agent Representation</Label>
//             </div>
//             <div>
//               <Label htmlFor="beds">Beds</Label>
//               <Select>
//                 <SelectTrigger id="beds">
//                   <SelectValue placeholder="Select" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="1">1+</SelectItem>
//                   <SelectItem value="2">2+</SelectItem>
//                   <SelectItem value="3">3+</SelectItem>
//                   <SelectItem value="4">4+</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div>
//               <Label htmlFor="size">Size (sq ft)</Label>
//               <Input type="number" id="size" min={0} placeholder="Min size" />
//             </div>
//             <div>
//               <Label htmlFor="property-type">Type</Label>
//               <Select>
//                 <SelectTrigger id="property-type">
//                   <SelectValue placeholder="Select" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="house">House</SelectItem>
//                   <SelectItem value="apartment">Apartment</SelectItem>
//                   <SelectItem value="condo">Condo</SelectItem>
//                   <SelectItem value="townhouse">Townhouse</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Switch id="listings-offers" />
//               <Label htmlFor="listings-offers">Listings accepting offers</Label>
//             </div>
//           </div>
//           <div className="flex justify-between mt-4">
//             <Button variant="outline">View all filters</Button>
//             <Button variant="ghost">Reset</Button>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Property Token Value */}
//       <Card className="mb-6">
//         <CardContent className="flex items-center justify-between p-4">
//           <span className="font-bold">Property Token (PT) Value:</span>
//           <span className="text-xl font-bold">1 PT = $1</span>
//         </CardContent>
//       </Card>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <Card>
//           <CardHeader>
//             <CardTitle>Property Viewer</CardTitle>
//             <CardDescription>Explore the property in 3D or view the neighborhood map</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <Tabs value={activeTab} onValueChange={setActiveTab}>
//               <TabsList className="grid w-full grid-cols-2">
//                 <TabsTrigger value="3d-model">3D Model</TabsTrigger>
//                 <TabsTrigger value="map">Neighborhood Map</TabsTrigger>
//               </TabsList>
//               <TabsContent value="3d-model" className="h-[400px]">
//                 <ErrorBoundary FallbackComponent={ErrorFallback}>
//                   <Canvas camera={{ position: [5, 5, 5] }}>
//                     <Suspense fallback={null}>
//                       <PropertyModel url="/assets/3d/house.glb" />
//                       <OrbitControls />
//                       <Environment preset="sunset" background />
//                     </Suspense>
//                   </Canvas>
//                 </ErrorBoundary>
//               </TabsContent>
//               <TabsContent value="map" className="h-[400px]">
//                 <ErrorBoundary FallbackComponent={ErrorFallback}>
//                   <MapComponent />
//                 </ErrorBoundary>
//               </TabsContent>
//             </Tabs>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Property Details</CardTitle>
//             <CardDescription>123 Main St, Anytown, USA</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               <div className="flex items-center space-x-2">
//                 <Home className="w-5 h-5" aria-hidden="true" />
//                 <span>4 bedrooms, 3 bathrooms</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <MapPin className="w-5 h-5" aria-hidden="true" />
//                 <span>Prime location in downtown</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Briefcase className="w-5 h-5" aria-hidden="true" />
//                 <span>Close to business district</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Car className="w-5 h-5" aria-hidden="true" />
//                 <span>Ample parking available</span>
//               </div>
//               <div className="mt-6">
//                 <h3 className="text-lg font-semibold mb-2">Neighborhood Data</h3>
//                 <ul className="list-disc list-inside space-y-1">
//                   <li>Walk Score: 85/100</li>
//                   <li>Transit Score: 90/100</li>
//                   <li>Bike Score: 75/100</li>
//                   <li>Crime Rate: Low</li>
//                   <li>School District Rating: 8/10</li>
//                 </ul>
//               </div>
//               <Button className="w-full mt-4">Schedule a Viewing</Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       <Card className="mt-8">
//         <CardHeader>
//           <CardTitle>About Our Platform</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p>
//             Our real estate platform is a must-have for anyone serious about making informed property decisions. 
//             The immersive 3D model features offer an in-depth look at the property, allowing you to explore every 
//             corner from the comfort of your home. Our interactive map with layered neighborhood data provides 
//             crucial insights into the surrounding area, helping you understand the full context of your potential 
//             investment.
//           </p>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

