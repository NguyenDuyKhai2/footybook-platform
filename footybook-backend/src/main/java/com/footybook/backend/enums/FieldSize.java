package com.footybook.backend.enums;

public enum FieldSize {
    FIELD_5("5V5", "Sân 5 người", 10),
    FIELD_7("7V7", "Sân 7 người", 14),
    FIELD_11("11V11", "Sân 11 người", 22);

    private final String code;
    private final String displayName;
    private final int capacity;

    FieldSize(String code, String displayName, int capacity) {
        this.code = code;
        this.displayName = displayName;
        this.capacity = capacity;
    }

    public String getCode() {
        return code;
    }

    public String getDisplayName() {
        return displayName;
    }

    public int getCapacity() {
        return capacity;
    }
}