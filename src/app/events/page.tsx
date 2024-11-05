'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CalendarDays, MapPin, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/LogoGreen.svg"
import { useState } from "react"
import CreateEventModal from "@/components/CreateEventModal"



export default function Component() {
  const events = Array(9).fill({
    title: "Tech Conference 2024",
    date: "September 15-17, 2024",
    type: "Meeting · Conference",
    attendees: "500 attendees",
    description: "Join us for three days of cutting-edge technology talks, networking, and hands-on workshops with industry leaders. Explore the latest trends in AI, Blockchain, and cloud computing.",
  })

  const [open, setOpen] = useState(false)

  const openCreateEventModal = () => {
      setOpen(true)
      
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
        {open && <CreateEventModal >   <button
                    type="button"
                    onClick={()=>setOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#52B788]"
                  >
                    Cancel
                  </button></CreateEventModal>}
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between ">
          <div className="space-y-1">
                <Image src={logo} alt="Hero Image" className="object-contain " />

            
          </div>
          <Button onClick={openCreateEventModal} className="bg-green-500 hover:bg-green-600 text-white font-inter">
            Create event
            <span className="ml-2">+</span>
          </Button>
        </div>

        {/* Search and Title */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold font-nunito">Upcoming Events</h2>
          <div className="w-72">
            <Input
              type="search"
              placeholder="Search events..."
              className="w-full"
            />
          </div>
        </div>

        {/* Event Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-white shadow-md"
            >
              <div className="aspect-video w-full bg-gray-200">
                <Image
                  src="https://picsum.photos/400/300"
                  alt="Event cover"
                  width={400}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{event.title}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {event.type}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {event.attendees}
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">{event.description}</p>
                <Button className=" text-white mt-6 w-full bg-green-500 hover:bg-green-600">
                  Register Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}