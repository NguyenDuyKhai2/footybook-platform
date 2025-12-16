package com.footybook.backend.enums;

public enum Position {
    GOALKEEPER("Thủ môn"),
    DEFENDER("Hậu vệ"),
    MIDFIELDER("Tiền vệ"),
    STRIKER("Tiền đạo"),
    ANY("Bất kỳ");

    private final String displayName;

    Position(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}