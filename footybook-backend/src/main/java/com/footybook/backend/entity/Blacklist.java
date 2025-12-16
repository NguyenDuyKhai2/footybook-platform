package com.footybook.backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import lombok.experimental.FieldDefaults;
import lombok.experimental.SuperBuilder;

import java.time.LocalDateTime;

@Entity
@Table(name = "blacklist", indexes = {
        @Index(name = "idx_blacklist_phone", columnList = "phone_number", unique = true),
        @Index(name = "idx_blacklist_blocked_until", columnList = "blocked_until")
})
@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Blacklist extends BaseEntity {

    @NotBlank
    @Column(name = "phone_number", nullable = false, unique = true, length = 20)
    private String phoneNumber;

    @Column(name = "no_show_count", nullable = false)
    @Builder.Default
    private Integer noShowCount = 0;

    @Column(name = "blocked_until")
    private LocalDateTime blockedUntil;

    @Column(name = "is_permanent")
    @Builder.Default
    private Boolean isPermanent = false;

    @Column(name = "reason", columnDefinition = "TEXT")
    private String reason;

    /**
     * Increment no-show count and calculate new block duration
     * Lần 1: 30 ngày
     * Lần 2: 45 ngày
     * Lần 3+: Vĩnh viễn
     */
    public void incrementNoShow() {
        this.noShowCount++;

        if (this.noShowCount == 1) {
            // Lần 1: Khóa 30 ngày
            this.blockedUntil = LocalDateTime.now().plusDays(30);
            this.isPermanent = false;
        } else if (this.noShowCount == 2) {
            // Lần 2: Khóa 45 ngày
            this.blockedUntil = LocalDateTime.now().plusDays(45);
            this.isPermanent = false;
        } else {
            // Lần 3+: Khóa vĩnh viễn
            this.blockedUntil = null;
            this.isPermanent = true;
        }
    }

    public boolean isCurrentlyBlocked() {
        if (isPermanent) {
            return true;
        }
        return blockedUntil != null && LocalDateTime.now().isBefore(blockedUntil);
    }

    public long getDaysUntilUnblock() {
        if (isPermanent || blockedUntil == null) {
            return -1;
        }
        return java.time.Duration.between(LocalDateTime.now(), blockedUntil).toDays();
    }
}
