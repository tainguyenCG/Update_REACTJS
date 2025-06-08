

import { Button, Drawer, message } from "antd";
import { useState } from "react";
import { handleUploadFile, updateUserAPI } from "../../services/api.service";

const ViewUserDetail = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileOnChange = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(null);
      setPreview(null);
      return;
    }

    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdateUserAvatar = async () => {
    try {
      if (!selectedFile || !dataDetail?._id) {
        message.error("Vui lòng chọn ảnh trước khi lưu.");
        return;
      }

      // Bước 1: Upload ảnh lên server
      const resUpload = await handleUploadFile(selectedFile, "avatar");
      if (resUpload?.data) {
        const newAvatar = resUpload.data.fileUploaded;

        // Bước 2: Gọi API cập nhật avatar cho user
        const resUpdate = await updateUserAPI(
          dataDetail.fullName,
          dataDetail._id,
          dataDetail.phone,
          newAvatar,
          dataDetail.email
        );

        if (resUpdate && resUpdate.data) {
          message.success("Cập nhật avatar thành công!");
          // Cập nhật lại dữ liệu hiển thị
          setDataDetail({
            ...dataDetail,
            avatar: newAvatar,
          });
          setSelectedFile(null);
          setPreview(null);
        } else {
          throw new Error("Update API không thành công.");
        }
      } else {
        throw new Error("Upload file thất bại.");
      }
    } catch (error) {
      console.error(error);
      message.error("Đã xảy ra lỗi khi cập nhật avatar.");
    }
  };

  return (
    <Drawer
      title="Chi tiết User"
      onClose={() => {
        setDataDetail(null);
        setIsDetailOpen(false);
      }}
      open={isDetailOpen}
    >
      {dataDetail ? (
        <>
          <p>ID: {dataDetail._id}</p>
          <div>
            <img
            
              src={`${import.meta.env.VITE_BE_URL}/images/avatar/${dataDetail.avatar}`}
              alt="avatar"
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                objectFit: "cover",
                border: "1px solid #ccc",
                padding: 4,
                marginBottom: 16,
                marginTop: 16,
              }}
            />
          </div>
          <p>Full Name: {dataDetail.fullName}</p>
          <p>Email: {dataDetail.email}</p>
          <p>Phone: {dataDetail.phone}</p>
          <div style={{ marginTop: 20 }}>
            <label
              htmlFor="upload-avatar"
              style={{
                display: "inline-block",
                padding: "8px 16px",
                backgroundColor: "#1890ff",
                color: "#fff",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "#40a9ff")
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "#1890ff")
              }
            >
              Upload Avatar
            </label>
            <input
              type="file"
              id="upload-avatar"
              hidden
              onChange={handleFileOnChange}
            />
          </div>
          {preview && (
            <>
              <div>
                <img
                  src={preview}
                  alt="avatar-preview"
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "1px solid #ccc",
                    padding: 4,
                    marginBottom: 16,
                    marginTop: 16,
                  }}
                />
              </div>
              <Button type="primary" onClick={handleUpdateUserAvatar}>
                Save Avatar
              </Button>
            </>
          )}
        </>
      ) : (
        <p>Không có dữ liệu</p>
      )}
    </Drawer>
  );
};

export default ViewUserDetail;
