import Image from "next/image";
import React, { useState } from "react";

export default function Test() {

  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };
  
  return (
    <div className="bg-white">
        
    </div>
  );
}
