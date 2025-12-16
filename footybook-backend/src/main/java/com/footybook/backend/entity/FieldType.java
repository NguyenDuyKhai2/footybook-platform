package com.footybook.backend.entity;

import com.footybook.backend.enums.FieldSize;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.experimental.FieldDefaults;
import lombok.experimental.SuperBuilder;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/**
 * FieldType entity - Types/categories of fields
 * 5v5, 7v7, 11v11
 */
@Entity
@Table(name = "field_types", indexes = {
        @Index(name = "idx_field_types_size", columnList = "fieldSize"),
        @Index(name = "idx_field_types_active", columnList = "isActive")
})
@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class FieldType extends BaseEntity {

    // ========== Basic Info ==========

    @NotBlank
    @Column(nullable = false, unique = true, length = 50)
    private String name; // "Sân 5 người", "Sân 7 người"

    @Enumerated(EnumType.STRING)
    @Column(name = "field_size", nullable = false, unique = true, length = 20)
    private FieldSize fieldSize; // FIELD_5, FIELD_7, FIELD_11

    @Column(columnDefinition = "TEXT")
    private String description;

    // ========== Specifications ==========

    @NotNull
    @Column(nullable = false)
    private Integer capacity; // 10, 14, 22 người

    @Column(name = "length_meters", precision = 5, scale = 2)
    private BigDecimal lengthMeters;

    @Column(name = "width_meters", precision = 5, scale = 2)
    private BigDecimal widthMeters;

    // ========== Base Price ==========
    // Note: Actual price depends on time slots (PricingRule)

    @NotNull
    @Column(name = "base_price", nullable = false, precision = 10, scale = 2)
    private BigDecimal basePrice;

    // ========== Status ==========

    @Column(name = "is_active")
    @Builder.Default
    private Boolean isActive = true;

    @Column(name = "display_order")
    @Builder.Default
    private Integer displayOrder = 0;

    // ========== Relationships ==========

    @OneToMany(mappedBy = "fieldType")
    @Builder.Default
    private List<Field> fields = new ArrayList<>();

    @OneToMany(mappedBy = "fieldType", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<PricingRule> pricingRules = new ArrayList<>();

    // ========== Helper Methods ==========

    public void activate() {
        this.isActive = true;
    }

    public void deactivate() {
        this.isActive = false;
    }

    public boolean canSplitIntoSmaller() {
        // Only 7v7 can split into 5v5
        return this.fieldSize == FieldSize.FIELD_7;
    }

    @Override
    public String toString() {
        return "FieldType{" +
                "id=" + getId() +
                ", name='" + name + '\'' +
                ", fieldSize=" + fieldSize +
                ", capacity=" + capacity +
                ", basePrice=" + basePrice +
                '}';
    }
}