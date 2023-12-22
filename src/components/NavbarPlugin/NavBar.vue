<template>
  <!-- partial:partials/_horizontal-navbar.html -->
  <div class="horizontal-menu">
    <nav class="navbar top-navbar col-lg-12 col-12 p-0">
      <div class="container">
        <div
          class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center"
        >
          <a class="navbar-brand brand-logo" href="/"
            ><img
              src="../../assets/images/icons/8cbcdc4e-10cb-4887-9b4b-e2256b7d15ef_noimage.jpg"
              alt="logo"
          /></a>
          <a class="navbar-brand brand-logo-mini" href="/"
            ><img src="../../assets/images/icons/ML_bijeli.png" alt="logo"
          /></a>
        </div>
        <div
          class="navbar-menu-wrapper d-flex align-items-center justify-content-end"
        >
          <ul class="navbar-nav w-100">
            <!-- <li class="nav-item w-100">
              <form class="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Pretraži ovdje..."
                />
              </form>
            </li> -->
          </ul>
          <ul class="navbar-nav navbar-nav-right">
            <li class="nav-item dropdown border-left">
              <a
                class="nav-link count-indicator dropdown-toggle"
                id="notificationDropdown"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i class="mdi mdi-bell"></i>
                <span class="count bg-danger">5</span>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="notificationDropdown"
              >
                <h6 class="p-3 mb-0">Sve obavijesti</h6>
                <div class="dropdown-divider" id="notifications"></div>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <img
                  class="img-xs rounded-circle"
                  src="../../assets/images/faces-clipart/pic-1.png"
                  alt=""
                />
              </a>
            </li>
            <li class="nav-item nav-settings d-none d-lg-block">
              <a class="nav-link" href="~/">
                <i class="mdi mdi-view-grid"></i>
              </a>
            </li>
          </ul>
          <button
            class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="horizontal-menu-toggle"
          >
            <span class="mdi mdi-menu"></span>
          </button>
        </div>
      </div>
    </nav>
    <nav class="bottom-navbar">
      <div class="container">
        <ul class="nav page-navigation">
          <li class="nav-item menu-items">
            <router-link to="/" class="nav-link">
              <i class="mdi mdi-home menu-icon"></i>
              <span class="menu-title">Home</span>
            </router-link>
          </li>

          <li class="nav-item menu-items">
            <router-link to="/" class="nav-link">
              <i class="mdi mdi-speedometer menu-icon"></i>
              <span class="menu-title">Home</span>
            </router-link>
          </li>

          <li class="nav-item menu-items">
            <a class="nav-link" href="/">
              <i class="mdi mdi-speedometer menu-icon"></i>
              <span class="menu-title">Dashboard</span>
            </a>
          </li>

          <li class="nav-item menu-items">
            <router-link to="/profile" class="nav-link">
              <i class="mdi mdi-account menu-icon"></i>
              <span class="menu-title">Profile</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <!-- partial -->
</template>
