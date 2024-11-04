import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import heroImage from "@/assets/heroImage.png"
import logo from "@/assets/Logo.svg"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Hero Section */}
        <div className=" bg-emerald-500 text-white  relative rounded-3xl overflow-hidden">
          <Image src={heroImage} alt="Hero Image" className="w-full h-full object-cover absolute" />
          <div className="absolute inset-0 from-60% bg-gradient-to-r from-emerald-500 opacity-80 " ></div>
          <div className="p-8">
          <div className="absolute inset-0">
  {/* Largest circle */}
  <div className="absolute bottom-[-180px] right-[80px] w-[500px] h-[500px] border-2 border-white opacity-50 rounded-full" />
  
  {/* Medium circle */}
  <div className="absolute bottom-[-130px] right-[130px] w-[400px] h-[400px] border-2 border-white opacity-50 rounded-full" />
  
  {/* Smallest circle */}
  <div className="absolute bottom-[-80px] right-[180px] w-[300px] h-[300px] border-2 border-white opacity-50 rounded-full" />
          </div>
          <div className="relative">
            <div className="flex justify-between gap-2 mb-12">
          <Image src={logo} alt="Hero Image" className="object-contain " />

              <div>
              <Button variant="ghost" className=" text-white hover:bg-emerald-600">
                Log in
              </Button>
              <Button variant="secondary">Sign up</Button>
              </div>
            </div>
            <div className="pt-12 pb-16 md:px-20 " >
              <h1 className="md:text-5xl text-3xl font-nunito font-extrabold mb-4 max-w-2xl">
              Find Your Next Great Event – Explore, Connect, Experience!
            </h1>
            <p className="text-lg font-nunito-sans max-w-xl">
              Discover and book events near you, from concerts to workshops. Let's make every day an adventure!
            </p></div>
          </div>
          </div>
          
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Upcoming Events</h2>
            <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700">
              View all
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="border-gray-200">
                <CardContent className="p-4">
                  <div className="aspect-video bg-gray-200 mb-4 rounded" />
                  <h3 className="font-semibold text-lg mb-2">Tech Conference 2024</h3>
                  <div className="space-y-1 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                      <span>September 15-17, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                      <span>Miami</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                      <span>500 attendees</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Join us for three days of cutting-edge technology talks, workshops, and networking opportunities. Connect with industry experts & fellow enthusiasts.
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full text-white bg-emerald-500 hover:bg-emerald-600">Register Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-emerald-500 p-8 rounded-lg text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute left-0 top-0 w-60 h-60 border-4 border-emerald-400 rounded-full -ml-20 -mt-20" />
            <div className="absolute right-0 bottom-0 w-40 h-40 border-4 border-emerald-400 rounded-full -mr-20 -mb-20" />
          </div>
          <div className="relative max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Sign up to our newsletter</h2>
            <p className="mb-6">
              Don't miss out on exclusive deals! Subscribe for special offers and exciting updates. You could win a lifetime trip with our newsletter. Sign up now!
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-800 placeholder:text-gray-400"
              />
              <Button variant="secondary">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}