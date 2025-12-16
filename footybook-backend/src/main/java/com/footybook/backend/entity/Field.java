package com.footybook.backend.entity;

import com.footybook.backend.enums.FieldStatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import lombok.experimental.FieldDefaults;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.util.ArrayList;
import java.util.List;

/**
 * Field entity - Individual football fields
 *
 * IMPORTANT: Handles parent-child relationship for 7v7 fields
 * A 7v7 field (parent) can split into 3x 5v5 fields (children)
 *
 * Example structure:
 * - Sân 7A (parent, is_sub_field=false, parent_field_id=null)
 *   ├─ Sân 7A - Khu 1 (child, is_sub_field=true, parent_field_id=7A.id)
 *   ├─ Sân 7A - Khu 2 (child, is_sub_field=true, parent_field_id=7A.id)
 *   └─ Sân 7A - Khu 3 (child, is_sub_field=true, parent_field_id=7A.id)
 */
@Entity
@Table(name = "fields", indexes = {
        @Index(name = "idx_fields_venue", columnList = "venue_id"),
        @Index(name = "idx_fields_type", columnList = "field_type_id"),
        @Index(name = "idx_fields_status", columnList = "status"),
        @Index(name = "idx_fields_parent", columnList = "parent_field_id")
})
@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Field extends BaseEntity {

    // ========== References ==========

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "venue_id", nullable = false)
    private Venue venue;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "field_type_id", nullable = false)
    private FieldType fieldType;

    // ========== Parent-Child Relationship ==========

    /**
     * Parent field (for sub-fields only)
     * If this is a sub-field (part of a split 7v7), this points to the parent
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_field_id")
    private Field parentField;

    /**
     * Sub-fields (for parent fields only)
     * If this 7v7 field can be split, these are the 3x 5v5 sub-fields
     */
    @OneToMany(mappedBy = "parentField", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<Field> subFields = new ArrayList<>();

    /**
     * Flag to indicate if this is a sub-field
     */
    @Column(name = "is_sub_field", nullable = false)
    @Builder.Default
    private Boolean isSubField = false;

    // ========== Basic Info ==========

    @NotBlank
    @Column(nullable = false, length = 100)
    private String name; // "Sân A1", "Sân 7A - Khu 1"

    @Column(columnDefinition = "TEXT")
    private String description;

    // ========== Media ==========

    /**
     * JSON array of images
     */
    @JdbcTypeCode(SqlTypes.JSON)
    @Column(columnDefinition = "jsonb")
    private List<Object> images;

    // ========== Status ==========

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    @Builder.Default
    private FieldStatus status = FieldStatus.AVAILABLE;

    // ========== Display Order ==========

    @Column(name = "display_order")
    @Builder.Default
    private Integer displayOrder = 0;

    // ========== Relationships ==========

    @OneToMany(mappedBy = "field")
    @Builder.Default
    private List<Booking> bookings = new ArrayList<>();

    @OneToMany(mappedBy = "field")
    @Builder.Default
    private List<TeamMatch> teamMatches = new ArrayList<>();

    // ========== Helper Methods ==========

    public boolean isAvailable() {
        return this.status == FieldStatus.AVAILABLE;
    }

    public boolean isOccupied() {
        return this.status == FieldStatus.OCCUPIED;
    }

    public void setAvailable() {
        this.status = FieldStatus.AVAILABLE;
    }

    public void setOccupied() {
        this.status = FieldStatus.OCCUPIED;
    }

    public void setMaintenance() {
        this.status = FieldStatus.MAINTENANCE;
    }

    public void setInactive() {
        this.status = FieldStatus.INACTIVE;
    }

    /**
     * Check if this field is a parent field that can be split
     */
    public boolean canBeSplit() {
        return !this.isSubField && this.fieldType.canSplitIntoSmaller();
    }

    /**
     * Check if this field has any bookings (for deletion prevention)
     */
    public boolean hasBookings() {
        return this.bookings != null && !this.bookings.isEmpty();
    }

    /**
     * Get full field name including parent info
     */
    public String getFullName() {
        if (this.isSubField && this.parentField != null) {
            return this.parentField.getName() + " - " + this.name;
        }
        return this.name;
    }

    @Override
    public String toString() {
        return "Field{" +
                "id=" + getId() +
                ", name='" + name + '\'' +
                ", fieldType=" + (fieldType != null ? fieldType.getName() : "null") +
                ", status=" + status +
                ", isSubField=" + isSubField +
                '}';
    }
}