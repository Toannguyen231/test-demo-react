// src/utils/axiosCustomize.js
import axios from 'axios';
import NProgress from 'nprogress'; // Thư viện thanh tiến trình
import 'nprogress/nprogress.css'; // Style của NProgress

// Tạo một instance Axios với cấu hình cơ bản
const instance = axios.create({
    baseURL: 'http://localhost:8081/', // URL cơ sở của API
    timeout: 10000, // Thời gian chờ tối đa cho yêu cầu (ms)
});

// Thêm request interceptor để hiển thị thanh tiến trình khi gửi yêu cầu
instance.interceptors.request.use(
    function (config) {
        NProgress.start();  // Bắt đầu thanh tiến trình
        return config;
    },
    function (error) {
        NProgress.done();  // Kết thúc thanh tiến trình nếu có lỗi
        return Promise.reject(error);
    }
);


NProgress.configure({
    showSpinner: false, // Ẩn biểu tượng spinner
    trickleSpeed: 100, // Tốc độ di chuyển của thanh tiến trình
}
)
// Thêm response interceptor để dừng thanh tiến trình khi nhận được phản hồi
instance.interceptors.response.use(
    function (response) {
        NProgress.done();  // Dừng thanh tiến trình khi nhận được phản hồi thành công
        return response;
    },
    function (error) {
        NProgress.done();  // Dừng thanh tiến trình khi có lỗi phản hồi
        return Promise.reject(error);
    }
);

export default instance;  // Xuất instance để sử dụng trong các API service
