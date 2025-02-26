import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, RotateCw, Plus } from 'lucide-react';

interface ScannedItem {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

const BarcodeScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [manualCode, setManualCode] = useState('');
  
  // Mock data สำหรับผลการสแกน
  const [scannedItems, setScannedItems] = useState<ScannedItem[]>([
    {
      id: "8850999999999",
      name: "นมจืด",
      calories: 120,
      protein: 8,
      carbs: 12,
      fat: 4
    }
  ]);

  const handleScan = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>สแกนบาร์โค้ดวัตถุดิบ</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Scanner UI */}
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            {isScanning ? (
              <div className="text-center">
                <RotateCw className="w-12 h-12 animate-spin mx-auto mb-4" />
                <p>กำลังสแกน...</p>
              </div>
            ) : (
              <div className="text-center">
                <Camera className="w-12 h-12 mx-auto mb-4" />
                <p>กดปุ่มด้านล่างเพื่อเริ่มสแกน</p>
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <Button 
              className="flex-1"
              onClick={handleScan}
              disabled={isScanning}
            >
              <Camera className="w-5 h-5 mr-2" />
              เริ่มสแกน
            </Button>
          </div>

          {/* Manual Input */}
          <div className="flex gap-4">
            <Input
              placeholder="ป้อนรหัสบาร์โค้ดด้วยตนเอง"
              value={manualCode}
              onChange={(e) => setManualCode(e.target.value)}
            />
            <Button variant="outline">
              <Plus className="w-5 h-5 mr-2" />
              เพิ่ม
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Scanned Items List */}
      <Card>
        <CardHeader>
          <CardTitle>รายการที่สแกนแล้ว</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scannedItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">รหัส: {item.id}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{item.calories} แคลอรี่</p>
                      <p className="text-sm">โปรตีน: {item.protein}g</p>
                      <p className="text-sm">คาร์บส์: {item.carbs}g</p>
                      <p className="text-sm">ไขมัน: {item.fat}g</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BarcodeScanner;