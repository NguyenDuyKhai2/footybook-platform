package com.footybook.backend.enums;

public enum CancellationStatus {
    PENDING("Chờ xử lý"),
    APPROVED("Đã chấp nhận"),
    REJECTED("Đã từ chối");

    private final String displayName;

    CancellationStatus(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}