package com.footybook.backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.experimental.FieldDefaults;
import lombok.experimental.SuperBuilder;

import java.math.BigDecimal;
import java.time.LocalTime;

/**
 * PricingRule entity - Flexible pricing based on time slots
 * Allows different prices for different time periods
 */
@Entity
@Table(name = "pricing_rules", indexes = {
        @Index(name = "idx_pricing_field_type", columnList = "field_type_id"),
        @Index(name = "idx_pricing_time", columnList = "start_time,end_time"),
        @Index(name = "idx_pricing_active", columnList = "is_active")
})
@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class PricingRule extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "field_type_id", nullable = false)
    private FieldType fieldType;

    @NotNull
    @Column(name = "start_time", nullable = false)
    private LocalTime startTime;

    @NotNull
    @Column(name = "end_time", nullable = false)
    private LocalTime endTime;

    @Column(name = "time_slot_name", length = 50)
    private String timeSlotName; // "Sáng sớm", "Giờ vàng", etc.

    @NotNull
    @Column(name = "price_per_hour", nullable = false, precision = 10, scale = 2)
    private BigDecimal pricePerHour;

    @Column(name = "price_multiplier", precision = 3, scale = 2)
    @Builder.Default
    private BigDecimal priceMultiplier = BigDecimal.ONE;

    @Column(name = "is_active")
    @Builder.Default
    private Boolean isActive = true;

    @Column(name = "display_order")
    @Builder.Default
    private Integer displayOrder = 0;

    public void activate() {
        this.isActive = true;
    }

    public void deactivate() {
        this.isActive = false;
    }

    public boolean isTimeInRange(LocalTime time) {
        return !time.isBefore(startTime) && time.isBefore(endTime);
    }
}