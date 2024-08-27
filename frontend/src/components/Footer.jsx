import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Your Company Name</h2>
          <p className="mt-2 text-gray-400">Connecting Talent with Opportunity</p>
        </div>

        <div className="flex justify-center space-x-8 mb-6">
          <a href="#" className="text-gray-400 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            About Us
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Services
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Contact Us
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            FAQs
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.facebook.com/yourpage" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook-f">Instagram</i>
          </a>
          <a href="https://twitter.com/yourprofile" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/yourprofile" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/yourcompany" className="text-gray-400 hover:text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <div className="text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          <p className="mt-1">Designed with ❤️ by Your Company</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
