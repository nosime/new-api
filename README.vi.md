<p align="right">
   <a href="./README.md">中文</a> | <a href="./README.en.md">English</a> | <strong>Tiếng Việt</strong>
</p>
<div align="center">

![new-api](/web/public/logo.png)

# New API

🍥 Hệ thống Gateway Mô hình Lớn Thế hệ Mới và Quản lý Tài sản AI

<a href="https://trendshift.io/repositories/8227" target="_blank"><img src="https://trendshift.io/api/badge/repositories/8227" alt="Calcium-Ion%2Fnew-api | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

<p align="center">
  <a href="https://raw.githubusercontent.com/Calcium-Ion/new-api/main/LICENSE">
    <img src="https://img.shields.io/github/license/Calcium-Ion/new-api?color=brightgreen" alt="license">
  </a>
  <a href="https://github.com/Calcium-Ion/new-api/releases/latest">
    <img src="https://img.shields.io/github/v/release/Calcium-Ion/new-api?color=brightgreen&include_prereleases" alt="release">
  </a>
  <a href="https://github.com/users/Calcium-Ion/packages/container/package/new-api">
    <img src="https://img.shields.io/badge/docker-ghcr.io-blue" alt="docker">
  </a>
  <a href="https://hub.docker.com/r/CalciumIon/new-api">
    <img src="https://img.shields.io/badge/docker-dockerHub-blue" alt="docker">
  </a>
  <a href="https://goreportcard.com/report/github.com/Calcium-Ion/new-api">
    <img src="https://goreportcard.com/badge/github.com/Calcium-Ion/new-api" alt="GoReportCard">
  </a>
</p>
</div>

## 📝 Mô tả Dự án

> [!NOTE]  
> Đây là một dự án mã nguồn mở được phát triển dựa trên [One API](https://github.com/songquanpeng/one-api)

> [!IMPORTANT]  
> - Dự án này chỉ dành cho mục đích học tập cá nhân, không đảm bảo tính ổn định và không cung cấp hỗ trợ kỹ thuật.
> - Người dùng phải tuân thủ [Điều khoản Sử dụng](https://openai.com/policies/terms-of-use) của OpenAI và **các quy định pháp luật**, không được sử dụng cho mục đích bất hợp pháp.
> - Theo yêu cầu của [《Biện pháp Tạm thời Quản lý Dịch vụ Trí tuệ Nhân tạo Sinh tạo》](http://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm), vui lòng không cung cấp bất kỳ dịch vụ AI sinh tạo nào chưa được đăng ký cho công chúng tại Trung Quốc.

<h2>🤝 Đối tác Tin cậy</h2>
<p id="premium-sponsors">&nbsp;</p>
<p align="center"><strong>Không theo thứ tự cụ thể</strong></p>
<p align="center">
  <a href="https://www.cherry-ai.com/" target=_blank><img
    src="./docs/images/cherry-studio.png" alt="Cherry Studio" height="120"
  /></a>
  <a href="https://bda.pku.edu.cn/" target=_blank><img
    src="./docs/images/pku.png" alt="Đại học Bắc Kinh" height="120"
  /></a>
  <a href="https://www.compshare.cn/?ytag=GPU_yy_gh_newapi" target=_blank><img
    src="./docs/images/ucloud.png" alt="UCloud" height="120"
  /></a>
  <a href="https://www.aliyun.com/" target=_blank><img
    src="./docs/images/aliyun.png" alt="Alibaba Cloud" height="120"
  /></a>
  <a href="https://io.net/" target=_blank><img
    src="./docs/images/io-net.png" alt="IO.NET" height="120"
  /></a>
</p>
<p>&nbsp;</p>

## 📚 Tài liệu

Để biết tài liệu chi tiết, vui lòng truy cập Wiki chính thức của chúng tôi: [https://docs.newapi.pro/](https://docs.newapi.pro/)

Bạn cũng có thể truy cập DeepWiki do AI tạo ra:
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/QuantumNous/new-api)

## ✨ Tính năng Chính

New API cung cấp nhiều tính năng phong phú, vui lòng tham khảo [Giới thiệu Tính năng](https://docs.newapi.pro/wiki/features-introduction) để biết chi tiết:

1. 🎨 Giao diện UI hoàn toàn mới
2. 🌍 Hỗ trợ đa ngôn ngữ
3. 💰 Chức năng nạp tiền trực tuyến (YiPay)
4. 🔍 Hỗ trợ truy vấn hạn ngạch sử dụng với key (kết hợp với [neko-api-key-tool](https://github.com/Calcium-Ion/neko-api-key-tool))
5. 🔄 Tương thích với cơ sở dữ liệu One API gốc
6. 💵 Hỗ trợ tính phí theo lượt sử dụng mô hình
7. ⚖️ Hỗ trợ lựa chọn kênh ngẫu nhiên có trọng số
8. 📈 Bảng điều khiển dữ liệu (console)
9. 🔒 Nhóm token và hạn chế mô hình
10. 🤖 Hỗ trợ nhiều phương thức đăng nhập xác thực hơn (LinuxDO, Telegram, OIDC)
11. 🔄 Hỗ trợ mô hình Rerank (Cohere và Jina), [Tài liệu API](https://docs.newapi.pro/api/jinaai-rerank)
12. ⚡ Hỗ trợ OpenAI Realtime API (bao gồm kênh Azure), [Tài liệu API](https://docs.newapi.pro/api/openai-realtime)
13. ⚡ Hỗ trợ định dạng Claude Messages, [Tài liệu API](https://docs.newapi.pro/api/anthropic-chat)
14. Hỗ trợ vào giao diện chat qua route /chat2link
15. 🧠 Hỗ trợ thiết lập reasoning effort thông qua hậu tố tên mô hình:
    1. Mô hình o-series của OpenAI
        - Thêm hậu tố `-high` cho high reasoning effort (ví dụ: `o3-mini-high`)
        - Thêm hậu tố `-medium` cho medium reasoning effort (ví dụ: `o3-mini-medium`)
        - Thêm hậu tố `-low` cho low reasoning effort (ví dụ: `o3-mini-low`)
    2. Mô hình thinking của Claude
        - Thêm hậu tố `-thinking` để bật chế độ thinking (ví dụ: `claude-3-7-sonnet-20250219-thinking`)
16. 🔄 Chức năng chuyển đổi thinking-to-content
17. 🔄 Chức năng giới hạn tốc độ mô hình cho người dùng
18. 💰 Hỗ trợ tính phí cache, khi bật có thể tính phí theo tỷ lệ đặt sẵn khi cache hit:
    1. Thiết lập tùy chọn `Tỷ lệ Cache Prompt` trong `Cài đặt Hệ thống-Cài đặt Vận hành`
    2. Thiết lập `Tỷ lệ Cache Prompt` trong kênh, phạm vi 0-1, ví dụ thiết lập 0.5 có nghĩa là tính phí 50% khi cache hit
    3. Các kênh được hỗ trợ:
        - [x] OpenAI
        - [x] Azure
        - [x] DeepSeek
        - [x] Claude

## Hỗ trợ Mô hình

Phiên bản này hỗ trợ nhiều mô hình, vui lòng tham khảo [Tài liệu API-Giao diện Relay](https://docs.newapi.pro/api) để biết chi tiết:

1. Mô hình bên thứ ba **gpts** (gpt-4-gizmo-*)
2. Giao diện kênh bên thứ ba [Midjourney-Proxy(Plus)](https://github.com/novicezk/midjourney-proxy), [Tài liệu API](https://docs.newapi.pro/api/midjourney-proxy-image)
3. Giao diện kênh bên thứ ba [Suno API](https://github.com/Suno-API/Suno-API), [Tài liệu API](https://docs.newapi.pro/api/suno-music)
4. Kênh tùy chỉnh, hỗ trợ nhập địa chỉ gọi đầy đủ
5. Mô hình Rerank ([Cohere](https://cohere.ai/) và [Jina](https://jina.ai/)), [Tài liệu API](https://docs.newapi.pro/api/jinaai-rerank)
6. Định dạng Claude Messages, [Tài liệu API](https://docs.newapi.pro/api/anthropic-chat)
7. Dify, hiện tại chỉ hỗ trợ chatflow

## Cấu hình Biến Môi trường

Để biết hướng dẫn cấu hình chi tiết, vui lòng tham khảo [Hướng dẫn Cài đặt-Cấu hình Biến Môi trường](https://docs.newapi.pro/installation/environment-variables):

- `GENERATE_DEFAULT_TOKEN`: Có tạo token ban đầu cho người dùng mới đăng ký hay không, mặc định là `false`
- `STREAMING_TIMEOUT`: Thời gian chờ phản hồi streaming, mặc định 300 giây
- `DIFY_DEBUG`: Kênh Dify có xuất thông tin workflow và node hay không, mặc định `true`
- `FORCE_STREAM_OPTION`: Có ghi đè tham số stream_options của client hay không, mặc định `true`
- `GET_MEDIA_TOKEN`: Có thống kê token hình ảnh hay không, mặc định `true`
- `GET_MEDIA_TOKEN_NOT_STREAM`: Có thống kê token hình ảnh trong trường hợp không streaming hay không, mặc định `true`
- `UPDATE_TASK`: Có cập nhật tác vụ bất đồng bộ (Midjourney, Suno) hay không, mặc định `true`
- `COHERE_SAFETY_SETTING`: Cài đặt an toàn mô hình Cohere, các tùy chọn là `NONE`, `CONTEXTUAL`, `STRICT`, mặc định `NONE`
- `GEMINI_VISION_MAX_IMAGE_NUM`: Số lượng hình ảnh tối đa cho mô hình Gemini, mặc định `16`
- `MAX_FILE_DOWNLOAD_MB`: Kích thước tải xuống file tối đa tính bằng MB, mặc định `20`
- `CRYPTO_SECRET`: Khóa mã hóa dùng để mã hóa nội dung cơ sở dữ liệu
- `AZURE_DEFAULT_API_VERSION`: Phiên bản API mặc định kênh Azure, mặc định `2025-04-01-preview`
- `NOTIFICATION_LIMIT_DURATION_MINUTE`: Thời gian giới hạn thông báo, mặc định `10` phút
- `NOTIFY_LIMIT_COUNT`: Số lượng thông báo tối đa của người dùng trong khoảng thời gian chỉ định, mặc định `2`
- `ERROR_LOG_ENABLED=true`: Có ghi lại và hiển thị log lỗi hay không, mặc định `false`

## Triển khai

Để biết hướng dẫn triển khai chi tiết, vui lòng tham khảo [Hướng dẫn Cài đặt-Phương thức Triển khai](https://docs.newapi.pro/installation):

> [!TIP]
> Docker image mới nhất: `calciumion/new-api:latest`

### Lưu ý Triển khai Đa máy
- Phải thiết lập biến môi trường `SESSION_SECRET`, nếu không sẽ dẫn đến trạng thái đăng nhập không nhất quán khi triển khai đa máy
- Nếu dùng chung Redis, phải thiết lập `CRYPTO_SECRET`, nếu không sẽ dẫn đến không thể lấy nội dung Redis khi triển khai đa máy

### Yêu cầu Triển khai
- Cơ sở dữ liệu cục bộ (mặc định): SQLite (triển khai Docker phải mount thư mục `/data`)
- Cơ sở dữ liệu từ xa: MySQL phiên bản >= 5.7.8, PgSQL phiên bản >= 9.6

### Phương thức Triển khai

#### Sử dụng Tính năng Docker của Panel BaoTa
Cài đặt Panel BaoTa (phiên bản **9.2.0** trở lên), tìm **New-API** trong cửa hàng ứng dụng và cài đặt.
[Hướng dẫn có hình ảnh](./docs/BT.md)

#### Sử dụng Docker Compose (Khuyến nghị)
```shell
# Tải dự án
git clone https://github.com/Calcium-Ion/new-api.git
cd new-api
# Chỉnh sửa docker-compose.yml theo nhu cầu
# Khởi động
docker-compose up -d
```

#### Sử dụng Docker Image Trực tiếp
```shell
# Sử dụng SQLite
docker run --name new-api -d --restart always -p 3000:3000 -e TZ=Asia/Shanghai -v /home/ubuntu/data/new-api:/data calciumion/new-api:latest

# Sử dụng MySQL
docker run --name new-api -d --restart always -p 3000:3000 -e SQL_DSN="root:123456@tcp(localhost:3306)/oneapi" -e TZ=Asia/Shanghai -v /home/ubuntu/data/new-api:/data calciumion/new-api:latest
```

## Retry Kênh và Cache
Chức năng retry kênh đã được triển khai, bạn có thể thiết lập số lần retry trong `Cài đặt->Cài đặt Vận hành->Cài đặt Chung`, **khuyến nghị bật** chức năng cache.

### Phương pháp Cài đặt Cache
1. `REDIS_CONN_STRING`: Thiết lập Redis làm cache
2. `MEMORY_CACHE_ENABLED`: Bật memory cache (không cần thiết lập thủ công nếu đã thiết lập Redis)

## Tài liệu API

Để biết tài liệu API chi tiết, vui lòng tham khảo [Tài liệu API](https://docs.newapi.pro/api):

- [API Chat](https://docs.newapi.pro/api/openai-chat)
- [API Hình ảnh](https://docs.newapi.pro/api/openai-image)
- [API Rerank](https://docs.newapi.pro/api/jinaai-rerank)
- [API Realtime](https://docs.newapi.pro/api/openai-realtime)
- [API Chat Claude (messages)](https://docs.newapi.pro/api/anthropic-chat)

## Các Dự án Liên quan
- [One API](https://github.com/songquanpeng/one-api): Dự án gốc
- [Midjourney-Proxy](https://github.com/novicezk/midjourney-proxy): Hỗ trợ giao diện Midjourney
- [chatnio](https://github.com/Deeptrain-Community/chatnio): Giải pháp một cửa AI thế hệ tiếp theo cho B/C-end
- [neko-api-key-tool](https://github.com/Calcium-Ion/neko-api-key-tool): Truy vấn hạn ngạch sử dụng với key

Các dự án khác dựa trên New API:
- [new-api-horizon](https://github.com/Calcium-Ion/new-api-horizon): Phiên bản tối ưu hiệu suất cao của New API
- [VoAPI](https://github.com/VoAPI/VoAPI): Phiên bản frontend đẹp mắt dựa trên New API

## Trợ giúp và Hỗ trợ

Nếu có câu hỏi, vui lòng tham khảo [Trợ giúp và Hỗ trợ](https://docs.newapi.pro/support):
- [Tương tác Cộng đồng](https://docs.newapi.pro/support/community-interaction)
- [Phản hồi Vấn đề](https://docs.newapi.pro/support/feedback-issues)
- [Câu hỏi Thường gặp](https://docs.newapi.pro/support/faq)

## 🌟 Lịch sử Star

[![Star History Chart](https://api.star-history.com/svg?repos=Calcium-Ion/new-api&type=Date)](https://star-history.com/#Calcium-Ion/new-api&Date)