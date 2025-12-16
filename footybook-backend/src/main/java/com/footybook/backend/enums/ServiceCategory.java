package com.footybook.backend.enums;

public enum ServiceCategory {
    EQUIPMENT("Thiết bị"),
    FOOD_BEVERAGE("Đồ ăn/Uống"),
    PROFESSIONAL("Dịch vụ chuyên nghiệp");

    private final String displayName;

    ServiceCategory(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}