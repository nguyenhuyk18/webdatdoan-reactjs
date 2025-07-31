const ModalLogin = (props) => {
  const { isLoginOpen } = props

    return (
<div className="modal fade show d-block" id="dangnhap" >
  <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-md" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="modalTitleId">
          Đăng Nhập
        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form action="">
        <div className="modal-body">

          <div className="row">

            <div className="col-12 mb-3">
              <input type="email" name="email" className="form-control" placeholder="Nhập email"/>
            </div>
            <div className="col-12 mb-3">
              <input type="password" name="password" className="form-control" placeholder="Nhập mật khẩu"/>
            </div>

          </div>
        </div>
        <div className="modal-footer flex-nowrap">
          <button type="button" className="btn btn-danger w-50" data-bs-dismiss="modal">
            Đóng
          </button>
          <button type="button" className="btn btn-success w-50">Đăng Ký</button>
        </div>
      </form>
    </div>
  </div>
</div>
    )
}

export default ModalLogin