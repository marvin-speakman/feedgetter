
var fs = require("fs");
var axios = require("axios");


axios.get(`http://phph.co.uk/alderley-park/wp-json/wp/v2/property?order=asc&per_page=100&orderby=slug&property_sites=6,7,8`).then( response => {
    var allprops = response.data;
    // console.log(sampleObject);
    buildFile(allprops, 'allprops');
});

axios.get(`http://phph.co.uk/alderley-park/wp-json/wp/v2/pages/54`).then( response => {
    var data54 = response.data;
    // console.log(sampleObject);
    buildFile(data54, '54');
});

axios.get(`http://phph.co.uk/alderley-park/wp-json/wp/v2/pages/70`).then( response => {
    var data70 = response.data;
    // console.log(sampleObject);
    buildFile(data70, '70');
});

axios.get(`http://phph.co.uk/alderley-park/wp-json/wp/v2/pages/74`).then( response => {
    var data74 = response.data;
    // console.log(sampleObject);
    buildFile(data74, '74');
});

axios.get(`http://phph.co.uk/alderley-park/wp-json/wp/v2/pages/72`).then( response => {
    var data72 = response.data;
    // console.log(sampleObject);
    buildFile(data72, '72');
});

axios.get(`http://phph.co.uk/alderley-park/wp-json/wp/v2/specification`).then( response => {
    var specification = response.data;
    // console.log(sampleObject);
    buildFile(specification, 'spec');
});


function buildFile(data, name){
    fs.writeFile("../touchscreen/build/localdata/" + name + ".json", JSON.stringify(data), (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log( name + " data File has been created");
    });
}
