import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import {createComponent} from './utilities';
import expect from 'expect';
import MasonryGallery from '../src/cv-masonry-gallery';

describe('cv-gallery component test suite', function () {

  describe('loading', function() {
    it('component is loaded properly', function () {
      expect(MasonryGallery).toNotBe(undefined);
    });
  });

  describe('cv-gallery renders properly', function () {
    let component;

    beforeEach(() => {
      component = createComponent(MasonryGallery, {images: []});
    });

    afterEach(() => {
      component = null;
    });

    it('renders correctly', function() {
      expect(component).toExist();
    });
  });
});
