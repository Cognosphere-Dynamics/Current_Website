<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico" />

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
    <!-- Notika icon CSS
		============================================ -->
    <link rel="stylesheet" href="/assets/vendors/css/notika-custom-icon.css" />

    <!-- style CSS
		============================================ -->
    <link rel="stylesheet" href="/assets/vendors/css/styles.css" />

    <link
      rel="stylesheet"
      href="https://unicons.iconscout.com/release/v3.0.6/css/line.css"
    />

    <link rel="stylesheet" href="/assets/css/styles.css" />

    <title>S.A.D | Overview</title>
  </head>
  <body>
    <aside
      class="sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left"
      id="show-side-navigation1"
    >
      <i
        class="uil-bars close-aside d-md-none d-lg-none"
        data-close="show-side-navigation1"
      ></i>
      <ul class="categories list-unstyled">
        <li>
          <i class="notika-icon notika-house"></i>
          <a href="#" class="selected">Overview</a>
        </li>
        <li class="has-dropdown">
          <i class="notika-icon notika-flag"></i> <a href="#">Twogere</a>
          <ul class="sidebar-dropdown list-unstyled">
            <li>
              <a href="/twogere_organizations.html">Organizations</a>
            </li>
            <li>
              <a href="/twogere_individuals.html">Individuals</a>
            </li>
            <li>
              <a href="/twogere_sessions.html">Sessions</a>
            </li>
            <li class="has-dropdown">
              <a href="#">Subscriptions</a>
              <ul class="sidebar-dropdown list-unstyled">
                <li>
                  <a href="/twogere_subscriptions_organizations.html"
                    >Organizations</a
                  >
                </li>
                <li>
                  <a href="/twogere_subscriptions_individuals.html"
                    >Individuals</a
                  >
                </li>
              </ul>
            </li>
            <li class="has-dropdown">
              <a href="#">Support</a>
              <ul class="sidebar-dropdown list-unstyled">
                <li>
                  <a href="#">Organizations</a>
                </li>
                <li>
                  <a href="#">Individuals</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li class="has-dropdown">
          <i class="notika-icon notika-edit"></i> <a href="#">YoDegree</a>
          <ul class="sidebar-dropdown list-unstyled">
            <li>
              <a href="/yodegree_institutions.html">Institutions</a>
            </li>
            <li>
              <a href="/yodegree_individuals.html">Individuals</a>
            </li>
            <li>
              <a href="/yodegree_sessions.html">User Sessions</a>
            </li>
            <li class="has-dropdown">
              <a href="#">Subscriptions</a>
              <ul class="sidebar-dropdown list-unstyled">
                <li>
                  <a href="/yodegree_subscriptions_institutions.html"
                    >Institutions</a
                  >
                </li>
                <li>
                  <a href="/yodegree_subscriptions_individuals.html"
                    >Individuals</a
                  >
                </li>
              </ul>
            </li>
            <li class="has-dropdown">
              <a href="#">Support</a>
              <ul class="sidebar-dropdown list-unstyled">
                <li>
                  <a href="#">Institutions</a>
                </li>
                <li>
                  <a href="#">Individuals</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <i class="notika-icon notika-chat"></i>
          <a href="/administrators.html">Administrators</a>
        </li>

        <li class="has-dropdown">
          <i class="notika-icon notika-mail"></i><a href="#">Mail</a>
          <ul class="sidebar-dropdown list-unstyled">
            <li>
              <a href="/mail_inbox.html">Inbox</a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
    <section id="wrapper">
      <nav class="navbar navbar-expand-md fixed-top">
        <div class="container-fluid">
          <div class="navbar-header d-flex align-items-center">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#toggle-navbar"
              aria-controls="toggle-navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="uil-bars text-dark"></i>
            </button>
            <div class="d-flex align-items-center">
              <a class="nav-link d-none d-lg-block" href="#">
                <i
                  data-show="show-side-navigation1"
                  class="show-side-btn text-dark p-0 fs-6 mx-3"
                  width="32"
                  height="32"
                >
                  <img src="/assets/images/hamburger.png" alt="site gif 3"
                /></i>
              </a>
              <img
                src="/assets/images/sphere_site_3.gif"
                alt="site gif 3"
                width="32"
              />
              <a class="navbar-brand mx-2" href="#">Cognosphere Dynamics</a>
              | Overview
            </div>
          </div>
          <div class="collapse navbar-collapse" id="toggle-navbar">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#"
                  ><i class="notika-icon notika-chat"></i><span>23</span></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                  ><i class="notika-icon notika-alarm"></i> <span>98</span></a
                >
              </li>
              <li class="nav-item position-relative profile">
                <a class="nav-link" href="#">
                  <img
                    class="rounded-pill img-fluid"
                    width="32"
                    src="assets/images/prof4.jpeg"
                    alt=""
                  />
                </a>
                <ul class="profile-dropdown position-absolute rounded">
                  <li class="nav-item">
                    <a href="#" class="nav-link text-white"
                      ><i class="uil-setting me-2"></i>settings</a
                    >
                  </li>
                  <li>
                    <hr>
                  </li>
                  <li class="nav-item logout">
                    <a href="#" class="nav-link text-white"
                      ><i class="uil-arrow-right me-2"></i>logout</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="pt-3 mt-5"></div>
      <div class="p-4">
        <section class="statis mt-4 text-center">
          <div class="row">
            <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div class="box p-3 border rounded">
                <div
                  class="d-flex align-items-start stat-num justify-content-center"
                >
                  <i class="uil-eye fs-5 fw-light me-2"></i>
                  <h3><span class="counter">50,154</span></h3>
                </div>

                <p class="lead">Page views</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div class="box p-3 border rounded">
                <div
                  class="d-flex align-items-start stat-num justify-content-center"
                >
                  <i class="uil-user fs-5 fw-light me-2"></i>
                  <h3><span class="counter">245</span></h3>
                </div>

                <p class="lead">User registered</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-4 mb-md-0">
              <div class="box p-3 border rounded">
                <div
                  class="d-flex align-items-start stat-num justify-content-center"
                >
                  <i class="uil-shopping-cart fs-5 fw-light me-2"></i>
                  <h3><span class="counter">5,154</span></h3>
                </div>

                <p class="lead">Product sales</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="box p-3 border rounded">
                <div
                  class="d-flex align-items-start stat-num justify-content-center"
                >
                  <i class="uil-feedback fs-5 fw-light me-2"></i>
                  <h3><span class="counter">5,154</span></h3>
                </div>

                <p class="lead">Transactions</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Start Sale Statistic area-->
        <div class="sale-statistic-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-9 col-md-8 col-sm-7 col-xs-12">
                <div class="sale-statistic-inner notika-shadow mg-tb-30">
                  <div class="curved-inner-pro">
                    <div class="curved-ctn">
                      <h2>Sales Statistics</h2>
                      <p>
                        Vestibulum purus quam scelerisque, mollis nonummy metus
                      </p>
                    </div>
                  </div>
                  <div
                    id="bar-chart"
                    class="flot-chart bar-three bar-hm-three"
                  ></div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-5 col-xs-12">
                <div
                  class="statistic-right-area notika-shadow mg-tb-30 sm-res-mg-t-0"
                >
                  <div class="past-day-statis">
                    <h2>For The Past 30 Days</h2>
                    <p>
                      Fusce eget dolor id justo luctus the commodo vel pharetra
                      nisi. Donec velit of libero.
                    </p>
                  </div>
                  <div class="dash-widget-visits"></div>
                  <div class="past-statistic-an">
                    <div class="past-statistic-ctn">
                      <h3><span class="counter">3,20,000</span></h3>
                      <p>Page Views</p>
                    </div>
                    <div class="past-statistic-graph">
                      <div class="stats-bar"></div>
                    </div>
                  </div>
                  <div class="past-statistic-an">
                    <div class="past-statistic-ctn">
                      <h3><span class="counter">1,03,000</span></h3>
                      <p>Total Clicks</p>
                    </div>
                    <div class="past-statistic-graph">
                      <div class="stats-line"></div>
                    </div>
                  </div>
                  <div class="past-statistic-an">
                    <div class="past-statistic-ctn">
                      <h3><span class="counter">24,00,000</span></h3>
                      <p>Site Visitors</p>
                    </div>
                    <div class="past-statistic-graph">
                      <div class="stats-bar-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Sale Statistic area-->
      </div>
    </section>

    <script src="/assets/vendors/js/vendor/jquery-1.12.4.min.js"></script>

    <!-- counterup JS
		============================================ -->
    <script src="/assets/vendors/js/counterup/jquery.counterup.min.js"></script>
    <script src="/assets/vendors/js/counterup/waypoints.min.js"></script>
    <script src="/assets/vendors/js/counterup/counterup-active.js"></script>

    <!-- sparkline JS
		============================================ -->
    <script src="/assets/vendors/js/sparkline/jquery.sparkline.min.js"></script>
    <script src="/assets/vendors/js/sparkline/sparkline-active.js"></script>

    <!-- flot JS
		============================================ -->
    <script src="/assets/vendors/js/flot/jquery.flot.js"></script>
    <script src="/assets/vendors/js/flot/jquery.flot.resize.js"></script>
    <script src="/assets/vendors/js/flot/jquery.flot.pie.js"></script>
    <script src="/assets/vendors/js/flot/jquery.flot.tooltip.min.js"></script>
    <script src="/assets/vendors/js/flot/jquery.flot.orderBars.js"></script>
    <script src="/assets/vendors/js/flot/curvedLines.js"></script>
    <script src="/assets/vendors/js/flot/flot-active.js"></script>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
      crossorigin="anonymous"
    ></script>
    <script type="module" src="/assets/js/logout.js"></script>
    <script src="/assets/js/main.js"></script>
  </body>
</html>
