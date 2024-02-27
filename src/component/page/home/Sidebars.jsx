<nav
  id="sidebarMenu"
  className="col-md-2 col-lg-2 col-sm-2 d-md-block bg-light sidebar "
>
  <div className="position-sticky">
    <ul className="nav flex-column">
      {/* <!-- Dashboard --> */}

      <li className="nav-item">
        <a className="nav-link active" href="#">
          ড্যাশবোর্ড
        </a>
      </li>

      {/* <!-- Member Start --> */}
      <li className="nav-item ">
        <a
          className="member nav-link "
          href="#member"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
        >
          সদস্য
        </a>
        <div className="collapse" id="member">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item">
              <Link to="memberadmission" className="nav-link">
                সদস্য ভর্তি
              </Link>
            </li>
          </ul>
        </div>
      </li>

      {/* /* <!-- Member End--> */}

      {/* Worker Start*/}

      <li className="nav-item">
        <a
          className="nav-link"
          href="#worker"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
        >
          কর্মী
        </a>
        <div className="collapse" id="worker">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item">
              <a className="nav-link" href="#">
                কর্মী ভর্তি
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                কর্মী তালিকা
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                কর্মী ট্র্যান্সফার
              </a>
            </li>
          </ul>
        </div>
      </li>

      {/* Worker End*/}

      {/* Branch Start */}

      <li className="nav-item">
        <a
          className="nav-link"
          href="#branch"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
        >
          শাখা
        </a>
        <div className="collapse" id="branch">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item">
              <a className="nav-link" href="#">
                শাঁখা খুলুন
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                শাঁখার তালিকা
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                শাঁখার সদস্য তালিকা
              </a>
            </li>
          </ul>
        </div>
      </li>

      {/* Branch End */}

      {/* Center Start */}

      <li className="nav-item">
        <a
          className="nav-link"
          href="#center"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
        >
          কেন্দ্র
        </a>
        <div className="collapse" id="center">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item">
              <a className="nav-link" href="#">
                কেন্দ্র খুলুন
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                কেন্দ্র তালিকা
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                কেন্দ্রের সদস্য তালিকা
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                অফিস জমা
              </a>
            </li>
          </ul>
        </div>
      </li>

      {/* Center End */}

      {/* Loan Start */}

      <li className="nav-item">
        <a
          className="nav-link"
          href="#loan"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
        >
          ঋণ
        </a>
        <div className="collapse" id="loan">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item">
              <a className="nav-link" href="#">
                ঋণ খুলুন
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ঋণের বিবরণ
              </a>
            </li>
          </ul>
        </div>
      </li>

      {/* Loan End */}

      {/* Savings Start */}

      <li className="nav-item">
        <a
          className="nav-link"
          href="#savings"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
        >
          সঞ্চয়
        </a>
        <div className="collapse" id="savings">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item">
              <a className="nav-link" href="#">
                সঞ্চয় খুলুন
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                সঞ্চয় বিবরণ
              </a>
            </li>
          </ul>
        </div>
      </li>

      {/* Savings End */}

      {/* Accounting Start */}

      <li className="nav-item">
        <a
          className="nav-link"
          href="#accounts"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
        >
          হিসাব
        </a>
        <div className="collapse" id="accounts">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item">
              <a className="nav-link" href="#">
                কর্মী ভর্তি
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                কর্মী তালিকা
              </a>
            </li>
          </ul>
        </div>
      </li>

      {/* Accounting End */}
    </ul>
  </div>
</nav>;
