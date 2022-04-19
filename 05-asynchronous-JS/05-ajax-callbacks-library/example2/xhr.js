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
    callback(JSON.parse(self.xhr.responseText));
    console.log(typeof self.xhr.responseText);
    console.log(typeof JSON.parse(self.xhr.responseText));
  };

  this.xhr.send();
};

XHR.prototype.post = function () {};
XHR.prototype.put = function () {};
XHR.prototype.delete = function () {};
