function HTTP() {
  this.http = new XMLHttpRequest();
}

HTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url);
  const self = this;

  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(self.http.responseText, null);
    } else {
      callback(null, `There was an error. Status: ${self.http.status}`);
    }
  };

  this.http.send();
};

HTTP.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);
  const self = this;

  this.http.setRequestHeader('Content-type', 'application/json');

  this.http.onload = function () {
    if (self.http.status === 201) {
      callback(self.http.responseText, null);
    } else {
      callback(null, `There was an error. Status: ${self.http.status}`);
    }
  };

  this.http.send(JSON.stringify(data));
};

HTTP.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);
  const self = this;

  this.http.setRequestHeader('Content-type', 'application/json');

  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(self.http.responseText, null);
    } else {
      callback(null, `There was an error. Status: ${self.http.status}`);
    }
  };

  this.http.send(JSON.stringify(data));
};

HTTP.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url);
  const self = this;

  this.http.onload = function () {
    if (self.http.status === 200) {
      callback('post deleted', null);
    } else {
      callback(null, `There was an error. Status: ${self.http.status}`);
    }
  };

  this.http.send();
};
