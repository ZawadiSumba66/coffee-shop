import React from 'react';
import '../User.css';

/* eslint-disable react/jsx-filename-extension */
function AvatarFile() {
  return (
    <div className="text-sm pl-40">
      <div className="cursor-pointer avatar-file mb-2 bg-amber-700 rounded-full" />
      <input type="file" />
      <h4 className="font-bold mt-2 pt-3">Add or Update your avatar</h4>
    </div>
  );
}

export default AvatarFile;
