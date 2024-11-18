
// Số lượng voucher ban đầu
let voucherCount = 50;
const totalVouchers = 50;
        
function updateVoucherDisplay() {
    const voucherCountElement = document.getElementById('voucherCount');
    const voucherProgress = document.getElementById('voucherProgress');
    const voucherText = document.getElementById('voucherText');
    const useVoucherButton = document.getElementById('useVoucherButton');

            // Cập nhật số lượng voucher còn lại
    voucherCountElement.textContent = voucherCount;

            // Cập nhật thanh tiến độ
    const progressWidth = (voucherCount / totalVouchers) * 100;
    voucherProgress.style.width = progressWidth + '%';

            // Cập nhật thông báo khi hết voucher
    if (voucherCount <= 0) {
        voucherText.textContent = 'Bạn đã hết voucher!';
        useVoucherButton.disabled = true;  // Disable button khi hết voucher
    }
}

function useVoucher() {
    if (voucherCount > 0) {
        voucherCount--;  // Giảm số lượng voucher
        updateVoucherDisplay();  // Cập nhật lại giao diện
    }
}
        // Gọi hàm cập nhật hiển thị ngay khi trang được tải
        updateVoucherDisplay();