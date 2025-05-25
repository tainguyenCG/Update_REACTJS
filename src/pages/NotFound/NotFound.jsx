import NotFoundImage from "../../assets/404.svg";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-wrapper">
      <div className="notfound-card">
        <img src={NotFoundImage} alt="404 Not Found" className="notfound-img" />
        <h1 className="notfound-title">Trang không tồn tại</h1>
        <p className="notfound-desc">
          Trang bạn đang tìm có thể đã bị xóa, đổi tên hoặc hiện không khả dụng.
        </p>
        <Link to="/">
          <button className="notfound-btn">← Trang chủ</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
