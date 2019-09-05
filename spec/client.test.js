import { shallow, mount, render } from 'enzyme';
import React from 'react';
import { sum } from './sum.js';
import Reservation from '../client/index.jsx';
import Guest from '../client/components/Guest.jsx';
import Total from '../client/components/Total.jsx';
import RoomDetails from '../client/components/RoomDetails.jsx';
import Reserve from '../client/components/ReserveBtn.jsx';
import Date from '../client/components/Date.jsx';
import Calendar from '../client/components/Calendar.jsx';


// need to comment out line with document and window before test (temp)

describe('test the test', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('unit test for <Reservation />', () => {
  test('renders without crashing', () => {
    shallow(<Reservation />);
  });
  test('should has a onSubmit handler', () => {
    const wrapper = shallow(<Reservation />);
    expect(wrapper.instance().onSubmit()).toBe(undefined);
  });
  test('should has a onScroll handler', () => {
    const wrapper = shallow(<Reservation />);
    expect(wrapper.instance().onScroll()).toBe(undefined);
  });
});

describe('unit test for <Calendar />', () => {
  test('renders without crashing', () => {
    shallow(<Calendar currentCal={{ month: '8', year: '2019' }} booking={[]} />);
  });
  test('should have a default state', () => {
    const wrapper = shallow(<Calendar currentCal={{ month: '8', year: '2019' }} booking={[]} />);
    expect(wrapper.instance()).toHaveProperty('state');
  });
  test('should create calendar', () => {
    const wrapper = shallow(<Calendar currentCal={{ month: '8', year: '2019' }} booking={[]} />);
    expect(wrapper.instance().state.calendarBoard.length).toBe(5);
  });
  test('should have a onClick function', () => {
    const wrapper = shallow(<Calendar currentCal={{ month: '8', year: '2019' }} booking={[]} />);
    expect(typeof wrapper.instance().onClick()).toBe(undefined);
  });
  test('should have a onMouseEnter function', () => {
    const wrapper = shallow(<Calendar currentCal={{ month: '8', year: '2019' }} booking={[]} />);
    expect(typeof wrapper.instance().onMouseEnter()).toBe(undefined);
  });
  test('should have a onMouseLeave function', () => {
    const wrapper = shallow(<Calendar currentCal={{ month: '8', year: '2019' }} booking={[]} />);
    expect(typeof wrapper.instance().onMouseLeave()).toBe(undefined);
  });
});

describe('unit test for <Date />', () => {
  test('renders without crashing', () => {
    shallow(<Date />);
  });
  test('it has a Calendar component', () => {
    const wrapper = shallow(<Date />);
    wrapper.setState({ overlay: true });
    expect(wrapper.find(Calendar).length).toBe(1);
  });
  test('onClickStart should change state', () => {
    const wrapper = shallow(<Date />);
    wrapper.instance().onClickStart();
    expect(wrapper.instance().state.overlay).toBe(true);
  });
  test('onClickEnd should change state', () => {
    const wrapper = shallow(<Date />);
    wrapper.instance().onClickEnd();
    expect(wrapper.instance().state.overlay).toBe(true);
  });
  test('hideAll should change state', () => {
    const wrapper = shallow(<Date />);
    wrapper.instance().onClickStart();
    wrapper.instance().hideAll();
    expect(wrapper.instance().state.overlay).toBe(false);
  });
  test('onClickNext should change state', () => {
    const wrapper = shallow(<Date />);
    wrapper.setState({ currentMonth: '1' });
    wrapper.instance().onClickNext();
    expect(wrapper.instance().state.currentMonth).toBe('2');
    wrapper.setState({ currentMonth: '12', currentYear: '2019' });
    wrapper.instance().onClickNext();
    expect(wrapper.instance().state.currentYear).toBe('2020');
  });
  test('onClickPrev should change state', () => {
    const wrapper = shallow(<Date />);
    wrapper.setState({ currentMonth: '12' });
    wrapper.instance().onClickPrev();
    expect(wrapper.instance().state.currentMonth).toBe('11');
    wrapper.setState({ currentMonth: '1', currentYear: '2020' });
    wrapper.instance().onClickPrev();
    expect(wrapper.instance().state.currentYear).toBe('2019');
  });
});

describe('unit test for <Guest />', () => {
  const wrapper = shallow(<Guest />);
  test('renders without crashing', () => {
    shallow(<Guest />);
  });

  test('onClick function should exist', () => {
    expect(typeof wrapper.instance().onClick).toBe('function');
  });

  test('it should render', () => {
    expect(typeof wrapper.instance().render).toBe('function');
  });

  test('should have a default state', () => {
    expect(wrapper.instance()).toHaveProperty('state');
  });

  test('should set state when onclick is called', () => {
    wrapper.instance().onClick();
    expect(wrapper.instance().state.overlay).toBe(true);
    wrapper.instance().onClick();
    expect(wrapper.instance().state.overlay).toBe(false);
  });
});

describe('unit test for <Reserve />', () => {
  test('renders without crashing', () => {
    shallow(<Reserve />);
  });
});

describe('unit test for <RoomDetails />', () => {
  test('renders without crashing', () => {
    shallow(<RoomDetails />);
  });
});

describe('unit test for <Total />', () => {
  test('renders without crashing', () => {
    shallow(<Total />);
  });
});
