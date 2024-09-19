"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ImageAvater({image}:any) {
  return (
    <Avatar>
      <AvatarImage src={image} alt="img" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
