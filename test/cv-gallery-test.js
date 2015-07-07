import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import {createComponent} from './utilities';
import expect from 'expect';
import Gallery from '../src/cv-gallery';

describe('cv-gallery component test suite', function () {

  describe('loading', function() {
    it('component is loaded properly', function () {
      expect(Gallery).toNotBe(undefined);
    });
  });

  describe('cv-gallery renders properly', function () {
    let component;

    beforeEach(() => {
      component = createComponent(Gallery);
    });

    afterEach(() => {
      component = null;
    });

    it('renders correctly', function() {
      expect(component).toExist();
    });
  });
});
