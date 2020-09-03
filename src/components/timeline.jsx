import React, { Component } from 'react';

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Web Developer Intern at MacArthur Foundation
                          <span>06/2021-08/2021</span>
                        </h2>
                        <p>
                          I interned as a Full stack Engineer where i created
                          Admin pages for the Content Management system using
                          Python Django, wagtail CMS, jquery, AWS and SQLite.I
                          also enhanced the performance of the CMS by
                          refactoring the code from HTML blocks into wagtail
                          code using advanced Django capabilities.Furthermore, I
                          Assisted Director in upgrading and evaluating new
                          capabilities of the Highcharts.JS library for CMS.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Pursuing Masters in Computer Science{' '}
                          <span>2019-present</span>
                        </h2>
                        <p>
                          I joined UNCC Fall 2019 and is expected to graduate by
                          May 2021. These two years are going to be very crucial
                          and special as i get to learn new techologies and
                          enhance my expertise, thus extending horizons.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Software Engineer at Toshiba <span>2017-2019</span>
                        </h2>
                        <p>
                          As a Software Developer, I worked on developing
                          Embedded web applications in an Agile Environment for
                          Toshiba Multi-Functional Printers. My responsibilities
                          were participating in daily standup meetings, working
                          with stakeholders to gather functional and technical
                          requirements, creating proof of concepts to test our
                          ideas, writing code primarily using HTML5, CSS3,
                          JavaScript, Jquery, React.js and Python.conducting
                          peer reviews with other members in the team and
                          utilizing manual and automated methods to test the
                          written code.
                        </p>

                        <p>
                          I have also developed an Emulator alongside (A windows
                          application used to emulate the Printer UI) using Qt
                          C++ for Toshiba's third-party vendors.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Associate Software Engineer at Robert Bosch{' '}
                          <span>2015-2017</span>
                        </h2>
                        <p>
                          Worked as a software developer for Graphical user
                          interface Displays of Instrument Clusters using C, C++
                          and python. Developed a Configuration Manager
                          Application using C++, which configures Default or
                          User Settings of the UI based on user selection in
                          instrument clusters present in car Dashboards. Several
                          key Software Features of the Dashboard was developed
                          Using C++ and Embedded C in the back end.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
