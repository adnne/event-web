import React, { Children } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { CalendarIcon, ClockIcon, MapPinIcon, ImageIcon } from "lucide-react"

const CreateEventModal = (props) => {
  return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Create New Event</h1>
              <form className="space-y-8">
                <div>
                  <label htmlFor="eventName" className="block text-sm font-medium text-gray-700 mb-1">
                    Event Name
                  </label>
                  <input
                    id="eventName"
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#52B788] focus:border-[#52B788]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Date
                    </label>
                    <div className="relative">
                      <input
                        id="eventDate"
                        type="date"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#52B788] focus:border-[#52B788]"
                      />
                      <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="eventTime" className="block text-sm font-medium text-gray-700 mb-1">
                      Time
                    </label>
                    <div className="relative">
                      <input
                        id="eventTime"
                        type="time"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#52B788] focus:border-[#52B788]"
                      />
                      <ClockIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="eventLocation" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <div className="relative">
                    <input
                      id="eventLocation"
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#52B788] focus:border-[#52B788]"
                    />
                    <MapPinIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>
                <div>
                  <label htmlFor="eventDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    id="eventDescription"
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#52B788] focus:border-[#52B788]"
                  />
                </div>
                <div>
                  <label htmlFor="eventImage" className="block text-sm font-medium text-gray-700 mb-1">
                    Event Image
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="eventImage"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-[#52B788] hover:text-[#41a377] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#52B788]"
                        >
                          <span>Upload a file</span>
                          <input id="eventImage" type="file" accept="image/*" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end space-x-4">
                      {props.children}
                  {/* <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#52B788]"
                  >
                    Cancel
                  </button> */}
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#52B788] hover:bg-[#41a377] text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#52B788]"
                  >
                    Create Event
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      
  )
}

export default CreateEventModal