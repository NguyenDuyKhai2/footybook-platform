package com.footybook.backend.enums;

public enum ReviewStatus {
    ACTIVE("Hiển thị"),
    HIDDEN("Đã ẩn"),
    REPORTED("Bị báo cáo");

    private final String displayName;

    ReviewStatus(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}