import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default function UploadUrl(props) {
  const { isValidEmail, isValidRtId, uploadUrl } = props;

  const renderUrl = () => {
    return isValidEmail() && isValidRtId() && (
        <p>{uploadUrl}</p>
      );
  }

  return  (
    <section className="upload-url">
      <h2>Upload Url</h2>
      <div className="url-output">
       {renderUrl()}
      </div>
    </section>
  );
}

UploadUrl.propTypes = {
  isValidEmail: PropTypes.func,
  isValidRdId: PropTypes.func,
  uploadUrl: PropTypes.string,
}
