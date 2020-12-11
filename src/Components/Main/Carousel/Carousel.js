import React, { Component } from "react";
import Caption from "../../Caption/Caption";
import Heading from "../../Heading/Heading";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { Icon } from "semantic-ui-react";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./Carousel.scss";

export default class CarouselTestimonial extends Component {
  render() {
    return (
      <div className="carousel-container container offset-background padding-top-65">
        <div className="title-bundle mar-side-15 mar-bottom-40">
          <Caption text="testimonials" class="text-center site-font" />
          <Heading
            text="What our members say"
            class="text-center mar-top-bottom-15 site-font"
          />
        </div>
        <div className="mar-side-15">
          <CarouselProvider
            naturalSlideWidth={285}
            naturalSlideHeight={364}
            totalSlides={3}
            touchEnabled={true}
          >
            <Slider>
              <Slide index={0}>
                <div className="">
                  <div className=""></div>
                  <div className="site-font">
                    <p className="site-font f22 text-center l30 mar-top-bottom-10">
                      Labore amet reprehenderit qui cillum nostrud mollit.
                      Occaecat non cupidatat non consequat sint. Proident veniam
                      do ut nisi.
                    </p>
                  </div>
                  <div className="mar-top-15">
                    <div className="">
                      <h2 className="f18 l26 weight600 mar-top-bottom-10 site-font text-center">
                        Lorem Ipsum
                      </h2>
                    </div>
                    <div className="">
                      <h3 className="f13 l17 site-font text-center">
                        Lorem Ipsum
                      </h3>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="">
                  <div className=""></div>
                  <div className="site-font">
                    <p className="site-font text-center f22 l30 mar-top-bottom-10">
                      Labore amet reprehenderit qui cillum nostrud mollit.
                      Occaecat non cupidatat non consequat sint. Proident veniam
                      do ut nisi.
                    </p>
                  </div>
                  <div className="mar-top-15">
                    <div className="">
                      <h2 className="f18 l26 weight600 mar-top-bottom-10 site-font text-center">
                        Lorem Ipsum
                      </h2>
                    </div>
                    <div className="">
                      <h3 className="f13 l17 site-font text-center">
                        Lorem Ipsum
                      </h3>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={2}>
                <div className="">
                  <div className=""></div>
                  <div className="site-font">
                    <p className="site-font f22 text-center l30 mar-top-bottom-10">
                      Labore amet reprehenderit qui cillum nostrud mollit.
                      Occaecat non cupidatat non consequat sint. Proident veniam
                      do ut nisi.
                    </p>
                  </div>
                  <div className="mar-top-15">
                    <div className="">
                      <h2 className="f18 l26 weight600 mar-top-bottom-10 site-font text-center">
                        Lorem Ipsum
                      </h2>
                    </div>
                    <div className="">
                      <h3 className="f13 l17 site-font text-center">
                        Lorem Ipsum
                      </h3>
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
            <div className="">
              <ButtonBack>
                <Icon name="left arrow" />
              </ButtonBack>
              <ButtonNext>
                <Icon name="right arrow" />
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
    );
  }
}
