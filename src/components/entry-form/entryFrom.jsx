import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default function EntryForm(props) {
  const {
    rtid,
    isValidEmail,
    isValidRtId,
    email,
    anonymous,
    cache,
    attachments,
    updateData,
  } = props;

  const handleTextInputChange = (event) => {
    updateData(event.target.name, event.target.value);
  }

  const handleCheckboxChange = (event) => {
    updateData(event.target.name, event.target.checked);
  }

  const renderRtIdWarning = () => {
    const isHidden = !isValidRtId() ? '' : ' is-hidden';
    const classnames = `rt-id invalid${isHidden}`;

    return (
      <p className={classnames}>
        *A support ticket number is required
      </p>
    );
  }

  const renderEmailWarning = () => {
    const isHidden = !isValidEmail() ? '' : ' is-hidden';
    const classnames = `email invalid${isHidden}`;

    return (
      <p className={classnames}>
        *An email address is required
      </p>
    );
  }

  return (
    <section className="entry-form">
      <h2>
        Enter data
      </h2>
      <form>
        <div className="text-input">
          <label>
            RT ID
            <input autoComplete="off" type="text" name="rtid" value={rtid} onChange={handleTextInputChange} />
          </label>
          {renderRtIdWarning()}
        </div>
        
        <div className="text-input">
          <label>
            Customer Email Address
            <input autoComplete="off" type="text" name="email" value={email} onChange={handleTextInputChange} />
          </label>
          {renderEmailWarning()}
        </div>

        <div className="checkbox-input">
          <label>
            Anonymize customer data
            <input type="checkbox" name="anonymous" checked={anonymous} onChange={handleCheckboxChange} />
          </label>
        </div>

        <div className="checkbox-input">
          <label>
            Include Omni cache
            <input type="checkbox" name="cache" checked={cache} onChange={handleCheckboxChange} />
          </label>
        </div>

        <div className="checkbox-input">
          <label>
            Include attached files
            <input type="checkbox" name="attachments" checked={attachments} onChange={handleCheckboxChange} />
          </label>
        </div>
      </form>
    </section>
  )
}

EntryForm.propTypes = {
  rtid: PropTypes.string,
  isValidEmail: PropTypes.func,
  isValidRtId: PropTypes.func,
  email: PropTypes.string,
  anonymous: PropTypes.bool,
  cache: PropTypes.bool,
  attachments: PropTypes.bool,
  updateData: PropTypes.func,
}
