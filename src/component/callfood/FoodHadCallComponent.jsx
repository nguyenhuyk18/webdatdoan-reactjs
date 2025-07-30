import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FoodHadCallComponent = () => {
    const navigate = useNavigate()
    const [allFoodCalled , setFoodsCalled] = useState([]);

    const [amout , setAmount] = useState({});

    useEffect(()=> {
      loadingData();
    }, []);

    const loadingData = () => {
      const data = localStorage.getItem('call-food');
      // console.log(data)
      if(data) {
        const dataParse = JSON.parse(data);
        const tmp1 = amout;
        for ( const tmp of dataParse) {
          tmp1[tmp.id] = tmp.amount
        }
        setAmount(tmp1);
        setFoodsCalled(dataParse);
      }
      else {
        alert('Bạn Chưa Thêm Món Ăn Nào Vui Lòng Thêm Món Ăn !!');
        navigate('/call-food');
      }
    }

    const handlerOnChange = (food_id , val) => {
      const data = localStorage.getItem('call-food');
      const dataParse = JSON.parse(data);

      for( const tmp of dataParse ) {
        if(tmp.id == food_id) {
          tmp.amount = val;
        }
      }
      localStorage.setItem('call-food' ,JSON.stringify(dataParse)  );
      loadingData();
    }

    const handleDeleteFood = (food_id) => {
      const data = localStorage.getItem('call-food');
      const dataParse = JSON.parse(data);
      // console.log(dataParse)
      const dataAfterFilter = dataParse.filter(row => row.id != food_id );

      // console.log(dataAfterFilter.length)


      // console.log(dataAfterFilter)
      localStorage.setItem('call-food' ,JSON.stringify(dataAfterFilter));

      if(dataAfterFilter.length == 0) {
        // console.log('sdsdsd')
        localStorage.removeItem('call-food')
      } 

      loadingData();
    }
// console.log(amout)
    return (
        <>
          <main>
              <section id="listfoods">
                <div className="container-fluid listfoods">
                  <div className="row">
                    <div className="col-12 all-product py-5">
                      <h3 className="text-center mb-5 text-danger">TẤT CẢ MÓN ĂN ĐÃ GỌI</h3>
                      { allFoodCalled.length ? allFoodCalled.map(row =>  
                        <div className="row mb-3" key={row.id} >
                          <div className="col-12 prepare-food">
                            <div className="prepare-food-container">
                              <div className="image text-center">
                                <img className="img-fluid" src={import.meta.env.VITE_BACKEND_URL + `/api/v1/admin/image-product/${row.id}`} alt="com-ga-xoi-mo-ngon-png-flushing-fat-chicken-rice-4GeLQy.png" />
                              </div>
                              <div className="foods-meta text-center mt-2">
                                <h5>
                                  <a href="#!">{row.product_name}</a>
                                </h5>
                              </div>
                              <div className="amount-call">
                                <input type="number" min="1" onChange={(e) => handlerOnChange(row.id , e.target.value)} value={amout[row.id]} />
                              </div>
                              <div className="delete">
                                <button className="delete-btn" onClick={() => handleDeleteFood(row.id)} title="Xóa món ăn">
                                  <i className="fa-solid fa-trash"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>) 
                      : '' }

                    </div>
                  </div>
                  <div className="cac-nut-bam d-flex justify-content-center pb-5">
                      <Link to="/call-food" className="btn btn-danger me-5">Quay Lại</Link>
                      <button className="btn btn-success" >Gọi Món</button>
                </div>
                </div>

              </section>
          </main>
        </>
    )
}

export default FoodHadCallComponent;