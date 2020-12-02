import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlayerScreen from "./player-screen";
import {noop, FILM} from "../../../mock-test";

configure({adapter: new Adapter()});

it(`Should button exit be pressed`, () => {
  const handleBtnExitClick = jest.fn();

  const wrapper = shallow(
      <PlayerScreen
        name={FILM.name}
        isPlaying={false}
        videoCurrentTime={12}
        progressBarPosition={23}
        handlePlayerExitClick={handleBtnExitClick}
        handlePlayerFullScreenClick={noop}
        handlePlayerPlayClick={noop}
        handlePlayerPauseClick={noop}
      >
        <div/>
      </PlayerScreen>
  );

  const exitBtn = wrapper.find(`.player__exit`);
  exitBtn.simulate(`click`);
  expect(handleBtnExitClick).toHaveBeenCalledTimes(1);
});

it(`Should button play be pressed`, () => {
  const handleBtnPlayClick = jest.fn();

  const wrapper = shallow(
      <PlayerScreen
        name={FILM.name}
        isPlaying={false}
        videoCurrentTime={12}
        progressBarPosition={23}
        handlePlayerExitClick={noop}
        handlePlayerFullScreenClick={noop}
        handlePlayerPlayClick={handleBtnPlayClick}
        handlePlayerPauseClick={noop}
      >
        <div/>
      </PlayerScreen>
  );

  const playBtn = wrapper.find(`.player__play`);
  playBtn.simulate(`click`);
  expect(handleBtnPlayClick).toHaveBeenCalledTimes(1);
});

it(`Should button pause be pressed`, () => {
  const handleBtnPauseClick = jest.fn();

  const wrapper = shallow(
      <PlayerScreen
        name={FILM.name}
        isPlaying={true}
        videoCurrentTime={19}
        progressBarPosition={13}
        handlePlayerExitClick={noop}
        handlePlayerFullScreenClick={noop}
        handlePlayerPlayClick={noop}
        handlePlayerPauseClick={handleBtnPauseClick}
      >
        <div/>
      </PlayerScreen>
  );
  const pauseBtn = wrapper.find(`.player__play`);
  pauseBtn.simulate(`click`);
  expect(handleBtnPauseClick).toHaveBeenCalledTimes(1);
});

it(`Should button fullscreen be pressed`, () => {
  const handleBtnFullScreenClick = jest.fn();

  const wrapper = shallow(
      <PlayerScreen
        name={FILM.name}
        isPlaying={true}
        videoCurrentTime={19}
        progressBarPosition={13}
        handlePlayerExitClick={noop}
        handlePlayerFullScreenClick={handleBtnFullScreenClick}
        handlePlayerPlayClick={noop}
        handlePlayerPauseClick={noop}
      >
        <div/>
      </PlayerScreen>
  );

  const fullScreenBtn = wrapper.find(`.player__full-screen`);
  fullScreenBtn.simulate(`click`);
  expect(handleBtnFullScreenClick).toHaveBeenCalledTimes(1);
});
