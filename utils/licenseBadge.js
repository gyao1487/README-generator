//Function for license Badge

function licenseBadge(data) {
    if (data === "") {
      return ""
  
    }else {
      return '![Github license](http://img.shields.io/badge/license-'+ data +'-blue.svg)'
    }
  }

  module.exports = licenseBadge
  