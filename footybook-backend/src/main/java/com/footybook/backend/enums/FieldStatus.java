package com.footybook.backend.enums;

public enum FieldStatus {
    AVAILABLE("Sẵn sàng"),
    OCCUPIED("Đang sử dụng"),
    MAINTENANCE("Bảo trì"),
    INACTIVE("Không hoạt động");

    private final String displayName;

    FieldStatus(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}