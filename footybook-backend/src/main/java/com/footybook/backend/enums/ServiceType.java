package com.footybook.backend.enums;

public enum ServiceType {
    RENTAL("Cho thuê"),
    SALE("Bán"),
    SERVICE("Dịch vụ");

    private final String displayName;

    ServiceType(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}