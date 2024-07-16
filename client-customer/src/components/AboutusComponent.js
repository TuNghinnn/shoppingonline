import React, { Component } from 'react';
import aboutus from './assets/aboutus.png';

class Aboutus extends Component {
    constructor(props) {
        super(props);
        this.state = {
              txtID: '',
      txtToken: ''
        };
    }
  render() {
    return (
      
      <div className="align-center">
      <div>
        <img className= 'photo' src={aboutus} alt='aboutus'></img>
        </div>
       <h2 className='text-center'>Thông tin về OWL</h2>
      <div>
        <b className='text-indam'>OWL. – DAILY LIFE OF YOUTH</b>
      </div>
      <div>
      <h0 className='text-normal'>THƯƠNG HIỆU THỜI TRANG HẰNG NGÀY DÀNH CHO THANH NIÊN<br></br>
      “OWL” dịch sang tiếng Việt là Chim Cú – mang ý nghĩa biểu thị sự thông minh, tinh tế, đại diện cho những con người trẻ đang trên con đường tìm kiếm,
         khẳng định bản thân mình.<br></br> OWL. cung cấp cho bạn những sản phẩm may mặc và phụ kiện với tiêu chí trendy, chất lượng và đặc biệt là sự mềm-mại nhằm hỗ trợ cho các hoạt động hằng ngày trong thành thị ngày nay</h0>
      </div>
      <div> <b className='text-indamxuonghang'> Soft-wear<br></br>Soft-work<br></br>Soft-life<br></br><i>/Soft-everything/</i></b></div>
      <div>
        <h0 className='text=normal'>OWL. hướng đến hình ảnh một thương hiệu cung cấp các sản phẩm thời trang ứng dụng hằng ngày dành cho giới trẻ, mang đến trải nghiệm sản phẩm và dịch vụ với tiêu chuẩn tốt nhất. Chúng tôi tập trung vào việc sử dụng những chất liệu thông dụng như <b>Jeans, Thun, Nỉ</b>, Chất liệu gió nhưng vẫn mang màu sắc tươi mới, thân thiện với môi trường và liên tục phát triển về công nghệ sản phẩm.</h0>
      </div>
      </div>
      
    );
  }
}
export default Aboutus;