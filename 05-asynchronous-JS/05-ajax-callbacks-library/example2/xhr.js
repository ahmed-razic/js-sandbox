function XHR() {
  this.xhr = new XMLHttpRequest();
}

XHR.prototype.get = function (url, callback) {
  const self = this;
  this.xhr.open('GET', url, true);
  /*
  this.xhr.setRequestHeader('content-type', 'application/json');

  this.xhr.onreadystatechange = function () {
    console.log(
      'OnReadyStateChange',
      'Status: ',
      self.xhr.status,
      'ReadyState: ',
      self.xhr.readyState
    );
  };

  this.xhr.onloadstart = function () {
    console.log(
      'OnLoadStart',
      'Status: ',
      self.xhr.status,
      'ReadyState: ',
      self.xhr.readyState
    );
  };
  this.xhr.onprogress = function () {
    console.log(
      'OnProgress',
      'Status: ',
      self.xhr.status,
      'ReadyState: ',
      self.xhr.readyState
    );
  };

  this.xhr.onloadend = function () {
    console.log(
      'OnLoadEnd',
      'Status: ',
      self.xhr.status,
      'ReadyState: ',
      self.xhr.readyState
    );
  }; */

  this.xhr.onload = function () {
    if (self.xhr.status === 200) {
      callback(JSON.parse(self.xhr.responseText));
    } else {
      console.log('There was an error');
    }
  };

  this.xhr.send();
};

XHR.prototype.post = function (url, data, callback) {
  const self = this;
  this.xhr.open('POST', url, true);
  this.xhr.setRequestHeader = ('Content-Type', 'application/json');

  this.xhr.onload = function () {
    if (self.xhr.status === 201) {
      callback(JSON.parse(self.xhr.responseText));
    } else {
      console.log('There was an error');
    }
  };

  this.xhr.send(JSON.stringify(data));
};

XHR.prototype.put = function (url, data, callback) {
  const self = this;
  this.xhr.open('PUT', url, true);
  this.xhr.setRequestHeader = ('Content-Type', 'application/json');

  this.xhr.onload = function () {
    if (self.xhr.status === 201) {
      callback(JSON.parse(self.xhr.responseText));
    } else {
      console.log('There was an error');
    }
  };

  this.xhr.send(JSON.stringify(data));
};

XHR.prototype.delete = function (url) {
  const self = this;
  this.xhr.open('DELETE', url, true);

  this.xhr.onload = function () {
    if (self.xhr.status === 200) {
      console.log('post deleted');
    } else {
      console.log('There was an error');
    }
  };

  this.xhr.send();
};
