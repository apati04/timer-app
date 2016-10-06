import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import Countdown from 'Countdown';


describe('Countdown', ()=>{
  it('should exist', ()=>{
    expect(Countdown).toExist();
  });

  describe('setCountdown', ()=>{
    it('should set state to started & countdown', (done) =>{
      //render component
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.setCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countStatus).toBe('started');

      setTimeout(()=>{
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    })

    it('should not set state to a negative number', (done) =>{
      //render component
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.setCountdown(1);

      expect(countdown.state.count).toBe(1);
      expect(countdown.state.countStatus).toBe('started');

      setTimeout(()=>{
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    })
  })
})
