package com.footybook.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import lombok.experimental.SuperBuilder;

import java.time.LocalDateTime;

@Entity
@Table(name = "service_inventory", indexes = {
        @Index(name = "idx_inventory_service", columnList = "service_id")
})
@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ServiceInventory extends BaseEntity {

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "service_id", nullable = false)
    private Service service;

    @Column(name = "quantity_available", nullable = false)
    @Builder.Default
    private Integer quantityAvailable = 0;

    @Column(name = "quantity_reserved", nullable = false)
    @Builder.Default
    private Integer quantityReserved = 0;

    @Column(name = "min_stock_level")
    @Builder.Default
    private Integer minStockLevel = 0;

    @Column(name = "last_updated")
    private LocalDateTime lastUpdated;

    @PreUpdate
    protected void onUpdate() {
        this.lastUpdated = LocalDateTime.now();
    }

    public Integer getActualAvailable() {
        return quantityAvailable - quantityReserved;
    }

    public boolean isLowStock() {
        return getActualAvailable() <= minStockLevel;
    }

    public boolean canReserve(Integer quantity) {
        return getActualAvailable() >= quantity;
    }

    public void reserve(Integer quantity) {
        if (!canReserve(quantity)) {
            throw new IllegalStateException("Không đủ số lượng để đặt");
        }
        this.quantityReserved += quantity;
    }

    public void releaseReservation(Integer quantity) {
        this.quantityReserved = Math.max(0, this.quantityReserved - quantity);
    }

    public void consume(Integer quantity) {
        this.quantityReserved -= quantity;
        this.quantityAvailable -= quantity;
    }

    public void addStock(Integer quantity) {
        this.quantityAvailable += quantity;
    }
}
