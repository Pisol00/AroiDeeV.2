import React, { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Footer from "@/components/footer";
import { Switch } from "@/components/ui/switch";
import {
  Bell,
  User,
  Mail,
  Heart,
  ShoppingCart,
  BarChart2,
  LogOut,
  Calendar,
  VenusAndMars,
  Camera,
  Trash2,
  Edit,
} from "lucide-react";
import Navbar from "@/components/nav";

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState({
    fullName: "",
    username: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    notifications: true,
  });

  const [isEditable, setIsEditable] = useState(false);

  const handleSave = () => {
    console.log('Saving profile', profile);
    setIsEditable(false);
  };


  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto p-8 bg-gradient-to-r from-white to-gray-50 border border-gray-200 mt-5 rounded-xl shadow-md">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="relative text-center">
            {/* <div className=" top-2 right-2 flex gap-2">
              <Button variant="outline" size="icon">
                <Camera className="w-5 h-5" />
              </Button>
              <Button variant="destructive" size="icon">
                <Trash2 className="w-5 h-5" />
              </Button>
            </div> */}
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="mx-auto rounded-full w-40 h-40 object-cover ring-4 ring-gray-200"
            />

            <h2 className="mt-4 text-xl font-semibold text-gray-700">
              {profile.username || "Username"}
            </h2>
          </div>

          <div className="md:col-span-2 space-y-8">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">User Profile</h1>
              <Button variant="ghost" size="icon" onClick={() => setIsEditable((prev) => !prev)}>
                <Edit className="w-5 h-5 text-gray-600" />
              </Button>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg shadow-sm">
                  <User className="text-blue-500" />
                  <Input
                    type="text"
                    placeholder="Full Name"
                    value={profile.fullName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setProfile({ ...profile, fullName: e.target.value })
                    }
                    className={!isEditable ? 'cursor-default focus:outline-none focus:ring-0 focus-visible:ring-0 text-gray-500' : 'w-full'}
                    readOnly={!isEditable}
                  />
                </div>

                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg shadow-sm">
                  <Mail className="text-red-500" />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={profile.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setProfile({ ...profile, email: e.target.value })
                    }
                    className={!isEditable ? 'cursor-default focus:outline-none focus:ring-0 focus-visible:ring-0 text-gray-500' : 'w-full'}
                    readOnly={!isEditable}
                  />
                </div>

                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg shadow-sm">
                  <Calendar className="text-purple-500" />
                  <Input
                    type="date"
                    placeholder="Date of Birth"
                    value={profile.dateOfBirth}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setProfile({ ...profile, dateOfBirth: e.target.value })
                    }
                    className={!isEditable ? 'cursor-default focus:outline-none focus:ring-0 focus-visible:ring-0 text-gray-500' : 'w-full'}
                    readOnly={!isEditable}
                  />
                </div>

                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg shadow-sm">
                  <VenusAndMars className="text-pink-500" />
                  <Select
                    value={profile.gender}
                    onValueChange={(value) =>
                      setProfile({ ...profile, gender: value })
                    }
                    disabled={!isEditable}
                  >
                    <SelectTrigger className="w-full border-gray-300 ">
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="p-4 bg-pink-50 rounded-xl shadow hover:bg-pink-100 transition">
                <Heart className="text-pink-500 mx-auto" size={32} />
                <h3 className="text-center mt-2 font-semibold">
                  Saved Recipes
                </h3>
              </div>

              <div className="p-4 bg-green-50 rounded-xl shadow hover:bg-green-100 transition">
                <ShoppingCart className="text-green-500 mx-auto" size={32} />
                <h3 className="text-center mt-2 font-semibold">
                  Shopping List
                </h3>
              </div>

              <div className="p-4 bg-yellow-50 rounded-xl shadow hover:bg-yellow-100 transition">
                <BarChart2 className="text-yellow-500 mx-auto" size={32} />
                <h3 className="text-center mt-2 font-semibold">
                  Calorie Tracker
                </h3>
              </div>
            </div>

            <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg mt-6">
              <div className="flex items-center gap-3">
                <Bell className="text-blue-600" />
                <div>
                  <h2 className="font-semibold">Notifications</h2>
                  <p className="text-sm text-blue-600">
                    Manage notification preferences
                  </p>
                </div>
              </div>
              <Switch
                checked={profile.notifications}
                onCheckedChange={() =>
                  setProfile({
                    ...profile,
                    notifications: !profile.notifications,
                  })
                }
              />
            </div>

            <div className="flex justify-between mt-8 gap-4">
              <Button className="w-full" onClick={handleSave}>
                Save Changes
              </Button>
              <Button className="w-full" variant="destructive">
                Delete Account
              </Button>
            </div>

            <div className="text-center mt-4">
              <Button
                variant="link"
                className="text-red-600 flex items-center justify-center gap-2"
              >
                <LogOut size={18} /> Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
