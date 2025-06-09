import { Button, Drawer, message } from "antd";
import { useEffect, useState } from "react";
import { handleUploadFile, updateUserAPI } from "../../services/api.service";

const ViewUserDetail = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen, loadUser } = props;

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [imageVersion, setImageVersion] = useState(Date.now());

  useEffect(() => {
    if (isDetailOpen) {
      setImageVersion(Date.now());
      setSelectedFile(null);
      setPreview(null);
    }
  }, [isDetailOpen]);

  const handleFileOnChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    } else {
      setSelectedFile(null);
      setPreview(null);
    }
  };

  const handleUpdateUserAvatar = async () => {
    if (!selectedFile || !dataDetail?._id) {
      message.error("Vui lòng chọn ảnh trước khi lưu.");
      return;
    }

    try {
      const resUpload = await handleUploadFile(selectedFile, "avatar");
      const newAvatar = resUpload?.data?.fileUploaded;

      if (!newAvatar) throw new Error("Upload file thất bại.");

      const resUpdate = await updateUserAPI(
        dataDetail.fullName,
        dataDetail._id,
        dataDetail.phone,
        newAvatar,
        dataDetail.email
      );

      if (!resUpdate?.data) throw new Error("Update API không thành công.");

      message.success("Cập nhật avatar thành công!");
      if (loadUser) loadUser();

      setSelectedFile(null);
      setPreview(null);
      setImageVersion(Date.now());

      setTimeout(() => {
        setDataDetail(null);
        setIsDetailOpen(false);
      }, 300);
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
              src={`${import.meta.env.VITE_BE_URL}/images/avatar/${
                dataDetail.avatar
              }?v=${imageVersion}`}
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
              onMouseOver={(e) => (e.target.style.backgroundColor = "#40a9ff")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#1890ff")}
            >
              Upload Avatar
            </label>
            <input type="file" id="upload-avatar" hidden onChange={handleFileOnChange} />
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
