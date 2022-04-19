import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import '../User.css';
import store from '../../../redux/store';
import { createAvatar, fetchAvatar } from '../../../redux/slices/avatar.slice';

type AvatarProps = {
  avatar: string
};

function AvatarFile({ avatar }: AvatarProps) {
  const [image, setImage] = useState<File | null>(null);

  const fileChange = (files: FileList | null) => {
    if (files) setImage(files[0]);
  };

  const handleUpload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    store.dispatch(createAvatar(image));
    setImage(null);
  };

  useEffect(() => {
    store.dispatch(fetchAvatar());
  }, []);

  return (
    <div className="text-sm pl-40">
      <div className="cursor-pointer avatar-file mb-2 bg-amber-700 rounded-full">
        <img src={avatar} alt="user profile" className="avatar-file rounded-full" />
      </div>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={(e) => fileChange(e.target.files)} />
        <div className="flex items-center mt-2 pt-3">
          <h4 className="font-bold pr-3">Add or Update your avatar</h4>
          <button type="submit" className="focus: border-none">
            <FontAwesomeIcon icon={faCheck} className="text-2xl cursor-pointer" />
          </button>
        </div>
      </form>
    </div>
  );
}

type AvatarState = {
  avatar: {
    avatar: string,
  }
};

const mapStateToProps = (state: AvatarState) => ({
  avatar: state.avatar.avatar,
});

export default connect(mapStateToProps)(AvatarFile);
