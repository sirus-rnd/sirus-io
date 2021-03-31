import React, { PropsWithChildren } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import 'twin.macro';
import { css } from '@emotion/react';
import Img, { FluidObject } from 'gatsby-image';

export interface JumbotronProps {
  items: JumbotronItem[];
  interval?: number;
}

export interface JumbotronItem {
  title?: string;
  content?: string;
  image?: FluidObject;
}

export interface JumbotronState {
  activeIdx: number;
}

class Jumbotron extends React.Component<JumbotronProps, JumbotronState> {
  timer!: NodeJS.Timer;

  constructor(props: PropsWithChildren<JumbotronProps>) {
    super(props);
    this.state = {
      activeIdx: 0,
    };
  }

  activateItem(idx: number) {
    this.setState({
      activeIdx: idx,
    });
    this.autoSlide();
  }

  componentDidMount() {
    this.autoSlide();
  }

  autoSlide() {
    this.resetAutoSlide();
    this.timer = setInterval(() => {
      if (this.state.activeIdx === this.props.items.length - 1) {
        this.setState({
          activeIdx: 0,
        });
      } else {
        this.setState({
          activeIdx: this.state.activeIdx + 1,
        });
      }
    }, this.props.interval ?? 5000);
  }

  resetAutoSlide() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    const items = this.props.items;
    const activeIdx = this.state.activeIdx;
    const activeItem = items[activeIdx];

    return (
      <section
        css={css`
          background: #373737;
          position: relative;
        `}
      >
        <SwitchTransition mode="out-in">
          <CSSTransition<undefined>
            key={activeIdx}
            classNames="fade"
            addEndListener={(node: HTMLElement, done: () => void) => {
              node.addEventListener('transitionend', done, false);
            }}
          >
            <Img
              fluid={activeItem.image as FluidObject}
              css={css`
                height: 100vh;
              `}
            />
          </CSSTransition>
        </SwitchTransition>
        <div
          tw="flex items-center"
          css={css`
            color: white;
            width: 100%;
            height: 100%;
            top: 0;
            position: absolute;
            background: rgba(0, 0, 0, 0.5);
            background: linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.9) 0%,
              rgba(0, 0, 0, 0.8) 50%,
              rgba(0, 0, 0, 0.4) 100%
            );
          `}
        >
          <div
            tw="container grid grid-cols-1 md:grid-cols-2 px-8"
            css={css`
              margin-top: 213px;
            `}
          >
            <div>
              <SwitchTransition mode="out-in">
                <CSSTransition<undefined>
                  key={activeIdx}
                  classNames="slide"
                  addEndListener={(node: HTMLElement, done: () => void) => {
                    node.addEventListener('transitionend', done, false);
                  }}
                >
                  <h1 tw="text-5xl lg:text-7xl text-primary">{activeItem?.title}</h1>
                </CSSTransition>
              </SwitchTransition>
              <SwitchTransition mode="out-in">
                <CSSTransition<undefined>
                  key={activeIdx}
                  classNames="slide-down"
                  addEndListener={(node: HTMLElement, done: () => void) => {
                    node.addEventListener('transitionend', done, false);
                  }}
                >
                  <p
                    css={css`
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-line-clamp: 5; /* number of lines to show */
                      -webkit-box-orient: vertical;
                    `}
                  >
                    {activeItem?.content}
                  </p>
                </CSSTransition>
              </SwitchTransition>
              <ul
                tw="m-0 mt-4 lg:mt-12 p-0 flex justify-start"
                css={css`
                  li {
                    display: block;
                    border-radius: 100%;
                    width: 10px;
                    height: 10px;
                    background: rgba(255, 255, 255, 0.6);
                    margin-right: 10px;
                    cursor: pointer;
                    &:hover {
                      background: rgba(255, 255, 255, 1);
                    }
                    &.active {
                      background: rgba(255, 255, 255, 1);
                    }
                  }
                `}
              >
                {items.map((_, i) => (
                  <li
                    className={i === activeIdx ? 'active' : ''}
                    key={i}
                    onClick={() => this.activateItem(i)}
                  ></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Jumbotron;
