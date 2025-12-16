package com.footybook.backend.enums;

public enum VenueStatus {
    ACTIVE("Đang hoạt động"),
    INACTIVE("Tạm đóng"),
    MAINTENANCE("Bảo trì");

    private final String displayName;

    VenueStatus(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}