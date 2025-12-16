package com.footybook.backend.entity;

import com.footybook.backend.enums.CancellationStatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import lombok.experimental.FieldDefaults;
import lombok.experimental.SuperBuilder;

import java.time.LocalDateTime;

@Entity
@Table(name = "booking_cancellations", indexes = {
        @Index(name = "idx_cancellations_booking", columnList = "booking_id"),
        @Index(name = "idx_cancellations_status", columnList = "status")
})
@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BookingCancellation extends BaseEntity {

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "booking_id", nullable = false)
    private Booking booking;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "requested_by", nullable = false)
    private User requestedBy;

    @NotBlank
    @Column(name = "cancellation_reason", nullable = false, columnDefinition = "TEXT")
    private String cancellationReason;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    @Builder.Default
    private CancellationStatus status = CancellationStatus.PENDING;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "approved_by")
    private User approvedBy; // Staff who approved/rejected

    @Column(name = "staff_notes", columnDefinition = "TEXT")
    private String staffNotes;

    @Column(name = "requested_at")
    private LocalDateTime requestedAt;

    @Column(name = "processed_at")
    private LocalDateTime processedAt;

    @PrePersist
    protected void onCreate() {
        if (this.requestedAt == null) {
            this.requestedAt = LocalDateTime.now();
        }
    }

    public void approve(User staff, String notes) {
        this.status = CancellationStatus.APPROVED;
        this.approvedBy = staff;
        this.staffNotes = notes;
        this.processedAt = LocalDateTime.now();
    }

    public void reject(User staff, String notes) {
        this.status = CancellationStatus.REJECTED;
        this.approvedBy = staff;
        this.staffNotes = notes;
        this.processedAt = LocalDateTime.now();
    }
}