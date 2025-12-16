package com.footybook.backend.enums;

public enum UserRole {
    CUSTOMER("Khách hàng"),
    STAFF("Nhân viên"),
    OWNER("Chủ sân"),
    ADMIN("Quản trị viên");

    private final String displayName;

    UserRole(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}