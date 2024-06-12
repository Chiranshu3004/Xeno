import React from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

export function Orders() {
  return (
    <div className="flex justify-center items-center h-screen">
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Order Details</CardTitle>
        <CardDescription>Enter the order information below.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="customer-id">Customer ID</Label>
          <Input id="customer-id" placeholder="Enter customer ID" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="order-date">Order Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="w-full justify-start text-left font-normal" variant="outline">
                <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
                Select date
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-auto p-0">
              <Calendar initialFocus mode="single" />
            </PopoverContent>
          </Popover>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="order-amount">Order Amount</Label>
          <Input id="order-amount" placeholder="Enter order amount" type="number" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
    </div>
  )
}

interface CalendarDaysIconProps {
  className?: string;
  // Add other props here as needed
}

function CalendarDaysIcon(props: CalendarDaysIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}
