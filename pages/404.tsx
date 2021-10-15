export default function Custom404() {
  return (
    <section className="not-found mx-auto mt-5">
      <div className="container-fluid">
        <div className="text-center">
          <img className="img-fluid" src="/icon/404 Page.svg" alt="" width={450} />
          <p className="medium text-primary text-lg mt-5 ">
            Halaman yang anda kunjungi sudah
            <br className="d-sm-block d-none" />
            tidak tersedia dalam sistem kami
          </p>
          <a
            href="/" 
            className="btn btn-homepage btn-lg active rounded-pill mt-3" 
            role="button" 
            aria-pressed="true"
          >
            Homepage
          </a>
        </div>
      </div>
    </section>
  );
}
