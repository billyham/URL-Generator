import React from 'react';
import validator from 'validator';

import EntryForm from '../entry-form/entryFrom';
import UploadUrl from '../upload-url/uploadUrl';

import './styles.css';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rtid: '',
      email: '',
      anonymous: true,
      cache: false,
      attachments: false,
    }

    this.updateData = this.updateData.bind(this);
    this.isValidRtId = this.isValidRtId.bind(this);
    this.isValidEmail = this.isValidEmail.bind(this);
  }

  updateData(name, value) {
    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  isValidRtId() {
    return validator.isInt(this.state.rtid, { min: 100000, lt: 10000000 });
  }

  isValidEmail() {
    return validator.isEmail(this.state.email);
  }

  generateUpdateUrl() {
    const rtid = `rtid=${this.state.rtid}`;
    const email = `&email=${this.state.email}`;
    const anonymous = this.state.anonymous ? '' : '&anonymizeDatabase=false';
    const attachments = this.state.attachments ? '&includeAttachments=true' : '';
    const cache = this.state.cache ? '&includeCache=true' : '';

    return `omnifocus:///upload-database?${rtid}${email}${anonymous}${cache}${attachments}`;
  }
 
  render() {
    const { anonymous, attachments, cache, email, rtid } = this.state;
    const uploadUrl = this.generateUpdateUrl();

    return (
      <main className="App">
        <h1>
          Upload Database Url Generator
        </h1>
          <EntryForm
            anonymous={anonymous}
            attachments={attachments}
            cache={cache}
            email={email}
            isValidEmail={this.isValidEmail}
            isValidRtId={this.isValidRtId}
            rtid={rtid}
            updateData={this.updateData}
            />
          <UploadUrl 
            isValidEmail={this.isValidEmail}
            isValidRtId={this.isValidRtId}
            uploadUrl={uploadUrl}
            />
      </main>
    );
  }
}
