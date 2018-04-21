const path = require('path');
const server = require(path.join(__dirname,'/server/server.js'));

const {supported_formats} = require(
  path.join(__dirname,'/lib/utils/suported_formats.js'));

var config = require(path.join(__dirname,'/config.json'));

var image_displayer = new Vue({
  el: '#image-diplayer',
  data:{
    selected_image  : null,
    images_folder   : config.images_path,
    images          : [],
    hovered_image   : null,
    text_content    : require(
      path.join(__dirname,'/lang/',config.language+'.json'))
  },
  methods:{
    selectImage:function(index){
      this.selected_image = this.images[index];
      server.setLiveImage(fs.readFileSync(this.selected_image));
    },
    isImageSelected:function(image) {
      return this.selected_image == image;
    },
    getBackgroundImage:function(index){
      return "background-image: url('" + this.images[index] + "');";
    },
    changeFolder:function(event) {
      this.images_folder = event.target.files[0].path.replace(/\\/g, '/');
      config.images_path = this.images_folder;
      fs.writeFile(
        path.join(__dirname,'/config.json'),JSON.stringify(config)
      );
    }
  }
});

setInterval(() => {
  try {
    var files_list = fs.readdirSync(image_displayer.images_folder);
    var images_list = [];
    for (var i = 0; i < files_list.length; i++) {
      if(supported_formats.isSupported(files_list[i])){
        images_list.push(image_displayer.images_folder+'/'+files_list[i]);
      }
    }
    image_displayer.images = images_list;
  } catch (e) {
    image_displayer.images = [];
  }
},300);
