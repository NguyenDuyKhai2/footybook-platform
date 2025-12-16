package com.footybook.backend.enums;

public enum ParticipantStatus {
    JOINED("Đã tham gia"),
    LEFT("Đã rời"),
    KICKED("Bị đuổi");

    private final String displayName;

    ParticipantStatus(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}