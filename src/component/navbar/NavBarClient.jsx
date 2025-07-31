import logo from '../../assets/img/—Pngtree—logo template for and restaurant_5255565.png'

const NavBarClient = () => {
    return (
<header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={logo} alt=""/></a>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="index.html">Trang Chủ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="chinh-sach-dat-hang.html">Chính Sách Đặt Bàn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">Bài Viết</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="danh-sach-mon-an.html">Đặt Món</a>
            </li>
            <li className="nav-item">
              <a className="nav-link reserve me-2" href="trang-dat-ban.html">Đặt Bàn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn" data-bs-toggle="modal" data-bs-target="#opencart"><i className="fa-solid fa-cart-shopping"></i></a>
            </li>
          </ul>
          <div className="d-flex my-2 my-lg-0">
            <a href="#!" className="btn me-2 " data-bs-toggle="modal" data-bs-target="#modaldangky">Đăng
              Ký</a>
            <a href="#!" className="btn" data-bs-toggle="modal" data-bs-target="#dangnhap">Đăng Nhập</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
    )
}

export default NavBarClient;