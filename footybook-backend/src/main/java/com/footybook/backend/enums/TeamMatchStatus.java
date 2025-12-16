package com.footybook.backend.enums;

public enum TeamMatchStatus {
    OPEN("Đang tìm người"),
    FULL("Đã đủ người"),
    IN_PROGRESS("Đang diễn ra"),
    COMPLETED("Đã hoàn thành"),
    CANCELLED("Đã hủy");

    private final String displayName;

    TeamMatchStatus(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}