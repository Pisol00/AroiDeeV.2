<<<<<<< HEAD
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 py-8 px-4 md:px-20 mt-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="md:w-1/3">
          <h1 className="text-2xl font-bold italic">Tastebite</h1>
          <p className="mt-4 text-sm text-gray-500">
            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment"
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-20 md:w-2/3 justify-end">
          <div>
            <h3 className="font-semibold mb-2">Tastebite</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Feedback</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Conditions</a></li>
              <li><a href="#" className="hover:underline">Cookies</a></li>
              <li><a href="#" className="hover:underline">Copyright</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Follow</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Youtube</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-500">© 2025 CalorieCraft - All rights reserved</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="text-gray-500 hover:text-gray-900"><Facebook size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-gray-900"><Twitter size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-gray-900"><Instagram size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-gray-900"><Youtube size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
=======
import React from 'react';

// Footer Component
const Footer = () => (
  <footer className="bg-white shadow-md mt-8 p-4">
    <div className="max-w-7xl mx-auto text-center text-gray-600">
      <p>© 2025 Recipe Manager. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
>>>>>>> dev
