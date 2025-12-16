package com.footybook.backend.enums;

public enum SkillLevel {
    BEGINNER("Người mới"),
    INTERMEDIATE("Trung bình"),
    ADVANCED("Nâng cao");

    private final String displayName;

    SkillLevel(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}