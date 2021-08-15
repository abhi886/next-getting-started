import React from "react";
import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className='bg-purple-500 py-2 px-6 rounded text-white'
    >
      Back
    </button>
  );
};

BackButton.propTypes = {};

export default BackButton;
