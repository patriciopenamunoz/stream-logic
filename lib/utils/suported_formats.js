exports.supported_formats = {
  image : ['bmp','jpg','jpeg','png','gif'],
  isSupported : function(file) {
    var format = file.match(/[^\.]*$/);
    if (format){
      return this.image.includes(format[0]);
    }else{
      return false;
    }
  }
};
