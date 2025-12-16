package com.footybook.backend.entity;

import com.footybook.backend.enums.VenueStatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import lombok.experimental.FieldDefaults;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.math.BigDecimal;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

/**
 * Venue entity - Football field location
 * Single Owner model - one venue managed by the company
 */
@Entity
@Table(name = "venues", indexes = {
        @Index(name = "idx_venues_owner", columnList = "owner_id"),
        @Index(name = "idx_venues_status", columnList = "status")
})
@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Venue extends BaseEntity {

    // ========== Owner ==========

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id", nullable = false)
    private User owner;

    // ========== Basic Info ==========

    @NotBlank
    @Column(nullable = false, length = 255)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(unique = true, length = 255)
    private String slug;

    // ========== Contact Info ==========

    @NotBlank
    @Column(name = "phone_number", nullable = false, length = 20)
    private String phoneNumber;

    @Column(length = 255)
    private String email;

    @Column(length = 255)
    private String website;

    // ========== Location ==========

    @NotBlank
    @Column(nullable = false, columnDefinition = "TEXT")
    private String address;

    @Column(length = 100)
    private String district;

    @Column(length = 100)
    private String city;

    @Column(precision = 10, scale = 8)
    private BigDecimal latitude;

    @Column(precision = 11, scale = 8)
    private BigDecimal longitude;

    // ========== Operating Hours ==========

    @Column(name = "open_time", nullable = false)
    @Builder.Default
    private LocalTime openTime = LocalTime.of(6, 0);

    @Column(name = "close_time", nullable = false)
    @Builder.Default
    private LocalTime closeTime = LocalTime.of(23, 0);

    // ========== Media ==========

    /**
     * JSON array of images
     * [{"url": "...", "caption": "...", "order": 1}, ...]
     */
    @JdbcTypeCode(SqlTypes.JSON)
    @Column(columnDefinition = "jsonb")
    private List<Object> images;

    @Column(name = "cover_image", columnDefinition = "TEXT")
    private String coverImage;

    // ========== Status ==========

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    @Builder.Default
    private VenueStatus status = VenueStatus.ACTIVE;

    // ========== Statistics ==========

    @Column(name = "avg_rating", precision = 3, scale = 2)
    @Builder.Default
    private BigDecimal avgRating = BigDecimal.ZERO;

    @Column(name = "total_reviews")
    @Builder.Default
    private Integer totalReviews = 0;

    @Column(name = "total_bookings")
    @Builder.Default
    private Integer totalBookings = 0;

    // ========== Facilities ==========

    /**
     * JSON array of facilities
     * ["Parking", "Shower", "Locker", "Cafe", "Wifi"]
     */
    @JdbcTypeCode(SqlTypes.JSON)
    @Column(columnDefinition = "jsonb")
    private List<String> facilities;

    // ========== Policies ==========

    @Column(name = "cancellation_hours")
    @Builder.Default
    private Integer cancellationHours = 2; // Must cancel before 2 hours

    // ========== Relationships ==========

    @OneToMany(mappedBy = "venue", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<Field> fields = new ArrayList<>();

    @OneToMany(mappedBy = "venue")
    @Builder.Default
    private List<Booking> bookings = new ArrayList<>();

    @OneToMany(mappedBy = "venue", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<Service> services = new ArrayList<>();

    @OneToMany(mappedBy = "venue")
    @Builder.Default
    private List<Review> reviews = new ArrayList<>();

    // ========== Helper Methods ==========

    public boolean isActive() {
        return this.status == VenueStatus.ACTIVE;
    }

    public void activate() {
        this.status = VenueStatus.ACTIVE;
    }

    public void deactivate() {
        this.status = VenueStatus.INACTIVE;
    }

    public void setMaintenance() {
        this.status = VenueStatus.MAINTENANCE;
    }

    public void updateRating(BigDecimal newAvgRating, Integer totalReviews) {
        this.avgRating = newAvgRating;
        this.totalReviews = totalReviews;
    }

    public void incrementBookingCount() {
        this.totalBookings = (this.totalBookings == null ? 0 : this.totalBookings) + 1;
    }

    @Override
    public String toString() {
        return "Venue{" +
                "id=" + getId() +
                ", name='" + name + '\'' +
                ", status=" + status +
                ", totalBookings=" + totalBookings +
                '}';
    }
}