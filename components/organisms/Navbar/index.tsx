import Menu from './Menu';

export default function NavBar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 my-lg-24">
        <div className="container">
          <a className="navbar-brand ms-5" href="/#">
            <img src="/icon/Logo gameshop.svg" alt="" width={240} height={60} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-lg-0 gap-2">
              <Menu title="Home" active href="/" />
              <Menu title="Games" href="/games" />
              <Menu title="Discover" />
              <li className="nav-item my-auto">
                <a
                  className="btn btn-primary d-flex justify-content-center ms-lg-20 px-3 py-2 rounded-pill"
                  href="/#"
                  role="button"
                >
                  Sign in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
