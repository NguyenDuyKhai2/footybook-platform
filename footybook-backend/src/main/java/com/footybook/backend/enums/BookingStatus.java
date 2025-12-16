package com.footybook.backend.enums;

public enum BookingStatus {
    PENDING("Chờ xác nhận"),
    CONFIRMED("Đã xác nhận"),
    CHECKED_IN("Đã check-in"),
    COMPLETED("Hoàn thành"),
    CANCELLED("Đã hủy"),
    NO_SHOW("Không đến");

    private final String displayName;

    BookingStatus(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}