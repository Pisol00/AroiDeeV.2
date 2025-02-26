import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, X, Upload } from 'lucide-react';

const AddRecipe = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>เพิ่มสูตรอาหารใหม่</CardTitle>
          <CardDescription>
            แบ่งปันสูตรอาหารของคุณกับผู้อื่น
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                ชื่อเมนู
              </label>
              <Input placeholder="ใส่ชื่อเมนูอาหาร" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                คำอธิบาย
              </label>
              <Textarea 
                placeholder="อธิบายเกี่ยวกับเมนูนี้..."
                className="h-24"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  หมวดหมู่
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="เลือกหมวดหมู่" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="thai">อาหารไทย</SelectItem>
                    <SelectItem value="healthy">อาหารสุขภาพ</SelectItem>
                    <SelectItem value="dessert">ของหวาน</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  เวลาในการทำ (นาที)
                </label>
                <Input type="number" min="1" />
              </div>
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">
              รูปภาพเมนู
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="mt-2">
                <Button variant="outline">อัพโหลดรูปภาพ</Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                PNG, JPG หรือ GIF ขนาดไม่เกิน 5MB
              </p>
            </div>
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-sm font-medium mb-2">
              วัตถุดิบ
            </label>
            <div className="space-y-2">
              <div className="flex gap-4">
                <Input placeholder="ชื่อวัตถุดิบ" className="flex-[2]" />
                <Input placeholder="ปริมาณ" className="flex-1" />
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                เพิ่มวัตถุดิบ
              </Button>
            </div>
          </div>

          {/* Steps */}
          <div>
            <label className="block text-sm font-medium mb-2">
              วิธีทำ
            </label>
            <div className="space-y-2">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <Textarea placeholder="อธิบายขั้นตอน..." className="flex-1" />
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                เพิ่มขั้นตอน
              </Button>
            </div>
          </div>

          {/* Nutrition Information */}
          <div>
            <label className="block text-sm font-medium mb-2">
              ข้อมูลโภชนาการ (ต่อ 1 ที่)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  แคลอรี่ (kcal)
                </label>
                <Input type="number" min="0" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  โปรตีน (g)
                </label>
                <Input type="number" min="0" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  คาร์โบไฮเดรต (g)
                </label>
                <Input type="number" min="0" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  ไขมัน (g)
                </label>
                <Input type="number" min="0" />
              </div>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <Button variant="outline">บันทึกแบบร่าง</Button>
            <Button>เผยแพร่สูตรอาหาร</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddRecipe;