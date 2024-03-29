import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './tincon.css';


class Tincon extends Component {
    constructor(props) {
        super(props);

    }

    chuyenDoiURL = (str) => {

            // Chuyển hết sang chữ thường
            str = str.toLowerCase();     
         
            // xóa dấu
            str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
            str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
            str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
            str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
            str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
            str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
            str = str.replace(/(đ)/g, 'd');
         
            // Xóa ký tự đặc biệt
            str = str.replace(/([^0-9a-z-\s])/g, '');
         
            // Xóa khoảng trắng thay bằng ký tự -
            str = str.replace(/(\s+)/g, '-');
         
            // xóa phần dự - ở đầu
            str = str.replace(/^-+/g, '');
         
            // xóa phần dư - ở cuối
            str = str.replace(/-+$/g, '');
         
            // return
            return str;
        }
    render() {
        return (
            <div className="mottin">

                <Link to={"/blog/" + this.chuyenDoiURL(this.props.title)+ "." + this.props.id + ".html"}>
                    <h5 className=" tieude mt-3">{this.props.title}</h5>
                    <img className="anhtieude mt-3 pt-3" src={this.props.ba} alt="Card image cap" /> </Link>
                    <div className="ochua">
                        <p className="text">{this.props.text}</p>
                    </div>

                    <a href="" className="btn btn-primary nut mt-3">Continue</a>
               

            </div>

        )
    }
}

export default Tincon;