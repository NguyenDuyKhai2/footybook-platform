package com.footybook.backend.entity;

import com.footybook.backend.enums.ServiceCategory;
import com.footybook.backend.enums.ServiceType;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.experimental.FieldDefaults;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "services", indexes = {
        @Index(name = "idx_services_venue", columnList = "venue_id"),
        @Index(name = "idx_services_category", columnList = "category"),
        @Index(name = "idx_services_active", columnList = "is_active")
})
@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Service extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "venue_id", nullable = false)
    private Venue venue;

    @NotBlank
    @Column(nullable = false)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 50)
    private ServiceCategory category;

    @Enumerated(EnumType.STRING)
    @Column(name = "service_type", nullable = false, length = 20)
    private ServiceType serviceType; // RENTAL, SALE, SERVICE

    @NotNull
    @Column(name = "base_price", nullable = false, precision = 10, scale = 2)
    private BigDecimal basePrice;

    @Column(length = 20)
    @Builder.Default
    private String unit = "ITEM"; // ITEM, HOUR, PAIR, etc.

    @Column(name = "has_inventory")
    @Builder.Default
    private Boolean hasInventory = false;

    @Column(name = "is_active")
    @Builder.Default
    private Boolean isActive = true;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(columnDefinition = "jsonb")
    private List<Object> images;

    @Column(length = 50)
    private String icon;

    @Column(name = "display_order")
    @Builder.Default
    private Integer displayOrder = 0;

    @OneToOne(mappedBy = "service", cascade = CascadeType.ALL, orphanRemoval = true)
    private ServiceInventory inventory;

    @OneToMany(mappedBy = "service")
    @Builder.Default
    private List<BookingService> bookingServices = new ArrayList<>();

    public void activate() {
        this.isActive = true;
    }

    public void deactivate() {
        this.isActive = false;
    }

    public boolean needsInventoryTracking() {
        return this.hasInventory &&
                (this.serviceType == ServiceType.RENTAL || this.serviceType == ServiceType.SALE);
    }
}
