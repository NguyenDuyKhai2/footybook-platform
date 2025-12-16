package com.footybook.backend.entity;

import com.footybook.backend.enums.ReviewStatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.*;
import lombok.experimental.FieldDefaults;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.util.List;

@Entity
@Table(name = "reviews", indexes = {
        @Index(name = "idx_reviews_user", columnList = "user_id"),
        @Index(name = "idx_reviews_venue", columnList = "venue_id"),
        @Index(name = "idx_reviews_booking", columnList = "booking_id"),
        @Index(name = "idx_reviews_rating", columnList = "overall_rating"),
        @Index(name = "idx_reviews_status", columnList = "status")
})
@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Review extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "venue_id", nullable = false)
    private Venue venue;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "booking_id", nullable = false, unique = true)
    private Booking booking;

    @Min(1) @Max(5)
    @Column(name = "overall_rating", nullable = false)
    private Integer overallRating;

    @Min(1) @Max(5)
    @Column(name = "field_quality")
    private Integer fieldQuality;

    @Min(1) @Max(5)
    @Column(name = "service_quality")
    private Integer serviceQuality;

    @Column(columnDefinition = "TEXT")
    private String comment;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(columnDefinition = "jsonb")
    private List<Object> images;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    @Builder.Default
    private ReviewStatus status = ReviewStatus.ACTIVE;

    public void hide() {
        this.status = ReviewStatus.HIDDEN;
    }

    public void show() {
        this.status = ReviewStatus.ACTIVE;
    }

    public void report() {
        this.status = ReviewStatus.REPORTED;
    }
}