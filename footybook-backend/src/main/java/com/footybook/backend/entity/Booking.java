package com.footybook.backend.entity;

import com.footybook.backend.enums.BookingStatus;
import com.footybook.backend.enums.PaymentStatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.experimental.FieldDefaults;
import lombok.experimental.SuperBuilder;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

/**
 * Booking entity - Field reservations
 *
 * Status flow:
 * PENDING → CONFIRMED → CHECKED_IN → COMPLETED
 *    ↓
 * CANCELLED / NO_SHOW
 */
@Entity
@Table(name = "bookings", indexes = {
        @Index(name = "idx_bookings_code", columnList = "booking_code"),
        @Index(name = "idx_bookings_user", columnList = "user_id"),
        @Index(name = "idx_bookings_field", columnList = "field_id"),
        @Index(name = "idx_bookings_venue", columnList = "venue_id"),
        @Index(name = "idx_bookings_date", columnList = "booking_date"),
        @Index(name = "idx_bookings_status", columnList = "booking_status"),
        @Index(name = "idx_bookings_phone", columnList = "customer_phone"),
        @Index(name = "idx_bookings_field_date", columnList = "field_id,booking_date")
})
@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Booking extends BaseEntity {

    @Column(name = "booking_code", nullable = false, unique = true, length = 20)
    private String bookingCode; // FB20250115001

    // ========== References ==========

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "field_id", nullable = false)
    private Field field;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "venue_id", nullable = false)
    private Venue venue;

    // ========== Booking Details ==========

    @NotNull
    @Column(name = "booking_date", nullable = false)
    private LocalDate bookingDate;

    @NotNull
    @Column(name = "start_time", nullable = false)
    private LocalTime startTime;

    @NotNull
    @Column(name = "end_time", nullable = false)
    private LocalTime endTime;

    @NotNull
    @Column(name = "duration_hours", nullable = false, precision = 3, scale = 1)
    private BigDecimal durationHours; // 1.0, 1.5, 2.0

    // ========== Customer Info ==========

    @NotBlank
    @Column(name = "customer_name", nullable = false)
    private String customerName;

    @NotBlank
    @Column(name = "customer_phone", nullable = false, length = 20)
    private String customerPhone;

    @Column(name = "customer_email")
    private String customerEmail;

    @Column(name = "number_of_players")
    private Integer numberOfPlayers;

    // ========== Pricing ==========

    @NotNull
    @Column(name = "field_price", nullable = false, precision = 10, scale = 2)
    private BigDecimal fieldPrice;

    @Column(name = "service_amount", precision = 10, scale = 2)
    @Builder.Default
    private BigDecimal serviceAmount = BigDecimal.ZERO;

    @Column(name = "discount_amount", precision = 10, scale = 2)
    @Builder.Default
    private BigDecimal discountAmount = BigDecimal.ZERO;

    @NotNull
    @Column(name = "total_amount", nullable = false, precision = 10, scale = 2)
    private BigDecimal totalAmount;

    // ========== Status ==========

    @Enumerated(EnumType.STRING)
    @Column(name = "booking_status", nullable = false, length = 20)
    @Builder.Default
    private BookingStatus bookingStatus = BookingStatus.PENDING;

    @Enumerated(EnumType.STRING)
    @Column(name = "payment_status", nullable = false, length = 20)
    @Builder.Default
    private PaymentStatus paymentStatus = PaymentStatus.PENDING;

    // ========== Additional Info ==========

    @Column(name = "special_requests", columnDefinition = "TEXT")
    private String specialRequests;

    @Column(name = "notes", columnDefinition = "TEXT")
    private String notes;

    // ========== Timestamps ==========

    @Column(name = "confirmed_at")
    private LocalDateTime confirmedAt;

    @Column(name = "checked_in_at")
    private LocalDateTime checkedInAt;

    @Column(name = "completed_at")
    private LocalDateTime completedAt;

    @Column(name = "cancelled_at")
    private LocalDateTime cancelledAt;

    // ========== Relationships ==========

    @OneToMany(mappedBy = "booking", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<BookingService> bookingServices = new ArrayList<>();

    @OneToOne(mappedBy = "booking", cascade = CascadeType.ALL, orphanRemoval = true)
    private Payment payment;

    @OneToOne(mappedBy = "booking", cascade = CascadeType.ALL, orphanRemoval = true)
    private BookingCancellation cancellation;

    @OneToOne(mappedBy = "booking")
    private Review review;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "promotion_id")
    private Promotion promotion;

    // ========== Helper Methods ==========

    public void confirm() {
        this.bookingStatus = BookingStatus.CONFIRMED;
        this.confirmedAt = LocalDateTime.now();
    }

    public void checkIn() {
        this.bookingStatus = BookingStatus.CHECKED_IN;
        this.checkedInAt = LocalDateTime.now();
    }

    public void complete() {
        this.bookingStatus = BookingStatus.COMPLETED;
        this.completedAt = LocalDateTime.now();
    }

    public void cancel() {
        this.bookingStatus = BookingStatus.CANCELLED;
        this.cancelledAt = LocalDateTime.now();
    }

    public void markNoShow() {
        this.bookingStatus = BookingStatus.NO_SHOW;
    }

    public void markPaymentCompleted() {
        this.paymentStatus = PaymentStatus.COMPLETED;
    }

    public boolean isPending() {
        return this.bookingStatus == BookingStatus.PENDING;
    }

    public boolean isConfirmed() {
        return this.bookingStatus == BookingStatus.CONFIRMED;
    }

    public boolean isCompleted() {
        return this.bookingStatus == BookingStatus.COMPLETED;
    }

    public boolean canBeCancelled() {
        return this.bookingStatus == BookingStatus.PENDING ||
                this.bookingStatus == BookingStatus.CONFIRMED;
    }

    public void recalculateTotalAmount() {
        this.totalAmount = this.fieldPrice
                .add(this.serviceAmount)
                .subtract(this.discountAmount);
    }
}
