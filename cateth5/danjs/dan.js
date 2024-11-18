let currentIndex = 0; // Chỉ số của nội dung hiện tại
const contents = document.querySelectorAll('.content'); // Lấy tất cả các phần tử nội dung
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Cập nhật trạng thái hiển thị của nội dung
function updateContent() {
    // Ẩn tất cả nội dung
    contents.forEach(content => content.classList.remove('active'));
    // Hiển thị nội dung hiện tại
    contents[currentIndex].classList.add('active');

    // Cập nhật trạng thái của các nút
    prevButton.disabled = currentIndex === 0; // Vô hiệu hóa nút "Quay lại" ở đầu
    nextButton.disabled = currentIndex === contents.length - 1; // Vô hiệu hóa nút "Tiếp theo" ở cuối
}

// Hiển thị nội dung trước
function showPrev() {
    if (currentIndex > 0) {
        currentIndex--;
        updateContent();
    }
}

// Hiển thị nội dung tiếp theo
function showNext() {
    if (currentIndex < contents.length - 1) {
        currentIndex++;
        updateContent();
    }
}

// Khởi tạo hiển thị ban đầu
updateContent();
