# Website Demo - Dobee Shop

## THỰC HÀNH LẬP TRÌNH WEB VỚI HTML , CSS VÀ KỸ THUẬT RESPONSIVE

### 1. Dựng base source

- base.css : css cho những thành phần dùng chung của trang web

- main.css : là file css chính cho trang web

- folder img và fonts là nơi chứa các image và font chữ của trang web

- index.html : là file chính (bộ khung) của 1 trang web.

### 2. Reset CSS

Mục đích: để loại bỏ đi những css mặc định do các trình duyệt tự thêm vào (không phải trình duyệt nào css cũng giống nhau , nhiều trình duyệt có css khác )

Có 2 cách để reset css:

Cách 1: viết đoạn css vào trong file css 
   
   `* {

       margin: 0;

       padding: 0;

    }`

Cách 2: sử dụng thư viện reset css (normalize)

Link: http://cdnjs.com/libraries/normalize

    1: tải file chứa min.css về source code của các bạn rồi link vào html

    2: link trực tiếp vào luôn, copy link chứa .min.css vào href của thẻ link

    `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">`

### 3. Dựng base CSS

san-serif : là 1 chủng những chữ không có chân.

### 4. Dựng khung web

Đặt tên class theo quy chuẩn BEM

### 5. Nhúng Font CSS

Sử dụng font của Font AweSome 6

### 6. Dựng Header QR Code 

### 7. Base Modal 