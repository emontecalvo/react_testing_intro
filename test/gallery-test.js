var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Gallery = require('../js/components/gallery');


// You should check that the container has the 
// correct class name, that the correct number 
// of Images are rendered, and that 
// each Image has the correct props set.



describe('Gallery component', function() {
    it('Should give number of images in the gallery', function() {
        var images = ["image1.png", "image2.png", "image3.png"];
        let renderer = TestUtils.createRenderer();
        renderer.render(<Gallery images={images} />);
        let result = renderer.getRenderOutput();
        console.log(result.props);
        result.props.children.should.be.an("array");
        result.props.children.length.should.equal(3);
        result.props.children[0].key.should.equal('0');
        result.props.children[0].props.should.be.an("object");
        result.props.children[0].type.should.be.a("function");
        result.props.className.should.equal('gallery');
    })

});