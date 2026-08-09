"use client"

import { useState, useRef } from "react"
import Image from "next/image"

interface OnboardingFormProps {
  initialName?: string
  initialEmail?: string
  initialImage?: string
}

export default function OnboardingForm({
  initialName = "",
  initialEmail = "",
  initialImage = "",
}: OnboardingFormProps) {
  const [name, setName] = useState(initialName)
  const [email, setEmail] = useState(initialEmail)
  const [dob, setDob] = useState("")
  const [role, setRole] = useState<"vet" | "livestock_keeper">("vet")

  const [customImage, setCustomImage] = useState<string | null>(null)
  const [isRemoved, setIsRemoved] = useState(false)

  const imagePreview = isRemoved ? "" : customImage ?? initialImage
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setCustomImage(imageUrl)
      setIsRemoved(false)
    }
  }

  const handleRemoveImage = () => {
    setIsRemoved(true)
    setCustomImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleResetToGoogle = () => {
    setIsRemoved(false)
    setCustomImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitted Profile:", { name, email, dob, role, imagePreview })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Profile Picture Upload Section */}
      <div className="flex flex-col items-center space-y-3">
        <div className="relative group">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Profile Preview"
              className="w-20 h-20 rounded-full object-cover border-2 border-gray-200 shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 font-semibold text-xl transition-transform duration-300 group-hover:scale-105">
              {name ? name.charAt(0).toUpperCase() : "U"}
            </div>
          )}

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-0 right-0 p-1.5 bg-[#111827] text-[#ffffff] rounded-full hover:bg-black transition-all duration-200 shadow-md active:scale-95 cursor-pointer"
            title="Change Profile Picture"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />

        {/* Dynamic Photo Actions */}
        <div className="flex items-center gap-3 text-xs">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="font-medium text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
          >
            Upload Photo
          </button>

          {initialImage && (customImage || isRemoved) && (
            <>
              <span className="text-gray-300">•</span>
              <button
                type="button"
                onClick={handleResetToGoogle}
                className="font-medium text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
              >
                Reset to Google
              </button>
            </>
          )}

          {imagePreview && (
            <>
              <span className="text-gray-300">•</span>
              <button
                type="button"
                onClick={handleRemoveImage}
                className="font-medium text-red-600 hover:text-red-700 transition-colors cursor-pointer"
              >
                Remove
              </button>
            </>
          )}
        </div>
      </div>

      {/* Full Name */}
      <div className="text-left space-y-1">
        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
          Full Name
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#111827] focus:border-transparent focus:outline-none text-gray-800 text-sm transition-all"
        />
      </div>

      {/* Email Address */}
      <div className="text-left space-y-1">
        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
          Email Address
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@example.com"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#111827] focus:border-transparent focus:outline-none text-gray-800 text-sm transition-all"
        />
      </div>

      {/* Date of Birth */}
      <div className="text-left space-y-1">
        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
          Date of Birth
        </label>
        <input
          type="date"
          required
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#111827] focus:border-transparent focus:outline-none text-gray-800 text-sm transition-all"
        />
      </div>

      {/* Occupation Selection */}
      <div className="text-left space-y-2">
        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
          Select Your Occupation
        </label>
        <div className="grid grid-cols-2 gap-3">
          {/* Veterinarian Button */}
          <button
            type="button"
            onClick={() => setRole("vet")}
            className={`group flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer ${
              role === "vet"
                ? "border-[#111827] bg-gray-50 text-[#111827] shadow-sm"
                : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50/50"
            }`}
          >
            <div className="w-12 h-12 mb-2 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
              <img
                src="/images/vet-icon.jpg"
                alt="Veterinarian"
                className="w-full h-full object-contain rounded-md"
              />
            </div>
            <span className="text-sm font-semibold">Veterinarian</span>
          </button>

          {/* Livestock Keeper Button */}
          <button
            type="button"
            onClick={() => setRole("livestock_keeper")}
            className={`group flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer ${
              role === "livestock_keeper"
                ? "border-[#111827] bg-gray-50 text-[#111827] shadow-sm"
                : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50/50"
            }`}
          >
            <div className="w-12 h-12 mb-2 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
              <img
                src="/images/livestock-icon.jpg"
                alt="Livestock Keeper"
                className="w-full h-full object-contain rounded-md"
              />
            </div>
            <span className="text-sm font-semibold">Livestock Keeper</span>
          </button>
        </div>
      </div>

      {/* Main Submit Button */}
      <button
        type="submit"
        className="w-full py-3.5 px-4 font-medium text-[#ffffff] bg-[#111827] rounded-xl hover:bg-black transition-all duration-200 transform active:scale-[0.98] shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2 group"
      >
        <span>Continue</span>
        <svg
          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </form>
  )
}