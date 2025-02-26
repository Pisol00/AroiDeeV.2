<<<<<<< HEAD
import React, { useState } from 'react';
import { ChevronDown, Search, Menu, X } from 'lucide-react';

interface NavItemProps {
  title: string;
  hasDropdown?: boolean;
  dropdownItems?: string[];
}

const NavItem: React.FC<NavItemProps> = ({ title, hasDropdown = false, dropdownItems = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center hover:text-orange-500 transition-colors">
        {title}
        {hasDropdown && <ChevronDown className="ml-1 w-4 h-4" />}
      </div>
      {hasDropdown && isOpen && (
        <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 min-w-[200px] z-10 transition-opacity duration-300">
          {dropdownItems.map((item, index) => (
            <div key={index} className="py-1 hover:text-orange-500 cursor-pointer">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 mb-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-3xl font-bold text-orange-500">Tastebite</div>

        <div className="hidden md:flex items-center space-x-6 text-gray-700">
          <NavItem title="Homepage" hasDropdown dropdownItems={["Overview", "Updates", "Contact"]} />
          <NavItem title="Recipe Page" hasDropdown dropdownItems={["Popular", "New", "Favorites"]} />
          <NavItem title="Pages" hasDropdown dropdownItems={["About Us", "Blog", "Careers"]} />
          <NavItem title="Buy" />
        </div>

        <div className="flex items-center space-x-4">
          
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img 
              src="/api/placeholder/40/40" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:hidden cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md rounded-md p-4 space-y-2">
          <NavItem title="Homepage" hasDropdown dropdownItems={["Overview", "Updates", "Contact"]} />
          <NavItem title="Recipe Page" hasDropdown dropdownItems={["Popular", "New", "Favorites"]} />
          <NavItem title="Pages" hasDropdown dropdownItems={["About Us", "Blog", "Careers"]} />
          <NavItem title="Buy" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
=======
import React from 'react';
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Heart, User } from 'lucide-react';

// NavigationBar Component
const NavigationBar = () => (
  <nav className="bg-white shadow-md p-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold text-primary">Recipe Manager</h1>
      <div className="flex gap-4">
        {navButtons.map(({ icon: Icon, label }) => (
          <Button key={label} variant="ghost">
            <Icon className="w-5 h-5 mr-2" />
            {label}
          </Button>
        ))}
      </div>
    </div>
  </nav>
);

const navButtons = [
  { icon: Search, label: 'ค้นหา' },
  { icon: ShoppingCart, label: 'รายการซื้อ' },
  { icon: Heart, label: 'รายการโปรด' },
  { icon: User, label: 'โปรไฟล์' },
];

export default NavigationBar;
>>>>>>> dev
