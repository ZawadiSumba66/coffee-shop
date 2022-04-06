import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <iframe title="not found" src="https://giphy.com/embed/qHXSYtyW0kANmLLzcG" height="426" className="w-100" />
      <div className="flex justify-center mt-4">
        <FontAwesomeIcon icon={faAngleLeft} className="text-2xl pr-1" />
        <Link className="text-lg" to="/dashboard">Go to Dashboard</Link>
      </div>
    </div>
  );
}

export default NotFound;
