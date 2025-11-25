"use client";

export default function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-transparent"></div>
    </div>
  );
}