-- ============================================================================
-- FOOTYBOOK SEED DATA - MATCHING JAVA ENTITIES
-- ============================================================================

-- 1. USERS (Conflict on EMAIL or PHONE_NUMBER)
INSERT INTO users (
    id, email, phone_number, password_hash, full_name, role, status,
    created_at, updated_at, version, deleted, created_by, updated_by
) VALUES
      (
          '550e8400-e29b-41d4-a716-446655440001', 'admin@footybook.com', '0901234567',
          '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhkO', -- Password123!
          'Admin FootyBook', 'ADMIN', 'ACTIVE',
          NOW(), NOW(), 0, false, 'system', 'system'
      ),
      (
          '550e8400-e29b-41d4-a716-446655440002', 'owner@footybook.com', '0902345678',
          '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhkO',
          'Chủ Sân Demo', 'OWNER', 'ACTIVE',
          NOW(), NOW(), 0, false, 'system', 'system'
      ),
      (
          '550e8400-e29b-41d4-a716-446655440003', 'customer@gmail.com', '0909999999',
          '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhkO',
          'Nguyễn Văn Khách', 'CUSTOMER', 'ACTIVE',
          NOW(), NOW(), 0, false, 'system', 'system'
      )
ON CONFLICT (email) DO NOTHING;

-- 2. FIELD TYPES (Loại sân - Conflict on FIELD_SIZE)
INSERT INTO field_types (
    id, name, field_size, capacity, base_price,
    length_meters, width_meters, is_active, display_order,
    created_at, updated_at, version, deleted, created_by, updated_by
) VALUES
      (
          '650e8400-e29b-41d4-a716-446655440001', 'Sân 5 người', 'FIELD_5', 10, 200000.00,
          25.0, 15.0, true, 1,
          NOW(), NOW(), 0, false, 'system', 'system'
      ),
      (
          '650e8400-e29b-41d4-a716-446655440002', 'Sân 7 người', 'FIELD_7', 14, 400000.00,
          40.0, 20.0, true, 2,
          NOW(), NOW(), 0, false, 'system', 'system'
      )
ON CONFLICT (field_size) DO NOTHING;

-- 3. PRICING RULES (Bảng giá)
INSERT INTO pricing_rules (
    id, field_type_id, start_time, end_time, time_slot_name,
    price_per_hour, price_multiplier, is_active, display_order,
    created_at, updated_at, version, deleted, created_by, updated_by
) VALUES
      (
          '750e8400-e29b-41d4-a716-446655440001',
          (SELECT id FROM field_types WHERE field_size = 'FIELD_5' LIMIT 1),
          '06:00:00', '16:00:00', 'Sáng - Chiều',
          150000.00, 1.0, true, 1,
          NOW(), NOW(), 0, false, 'system', 'system'
      ),
      (
          '750e8400-e29b-41d4-a716-446655440002',
          (SELECT id FROM field_types WHERE field_size = 'FIELD_5' LIMIT 1),
          '16:00:00', '22:00:00', 'Giờ Vàng',
          300000.00, 1.5, true, 2,
          NOW(), NOW(), 0, false, 'system', 'system'
      )
ON CONFLICT (id) DO NOTHING;

-- 4. VENUES (Sân bóng)
INSERT INTO venues (
    id, owner_id, name, slug, address, phone_number,
    open_time, close_time, status, avg_rating, total_reviews, total_bookings,
    created_at, updated_at, version, deleted, created_by, updated_by
) VALUES
    (
        '850e8400-e29b-41d4-a716-446655440001',
        (SELECT id FROM users WHERE email = 'owner@footybook.com' LIMIT 1),
        'Sân Bóng Quận 7', 'san-bong-quan-7', '123 Nguyễn Văn Linh', '0281234567',
        '06:00:00', '23:00:00', 'ACTIVE', 5.0, 0, 0,
        NOW(), NOW(), 0, false, 'system', 'system'
    )
ON CONFLICT (slug) DO NOTHING;

-- 5. FIELDS (Sân con - Table 'fields' chưa có entity nhưng Booking cần field_id)
-- Giả định cấu trúc bảng fields dựa trên Booking references
INSERT INTO fields (
    id, venue_id, field_type_id, name, is_sub_field, status, display_order,
    created_at, updated_at, version, deleted, created_by, updated_by
) VALUES
      (
          '950e8400-e29b-41d4-a716-446655440001',
          (SELECT id FROM venues WHERE slug = 'san-bong-quan-7' LIMIT 1),
          (SELECT id FROM field_types WHERE field_size = 'FIELD_5' LIMIT 1),
          'Sân 5A', false, 'AVAILABLE', 1,
          NOW(), NOW(), 0, false, 'system', 'system'
      ),
      (
          '950e8400-e29b-41d4-a716-446655440002',
          (SELECT id FROM venues WHERE slug = 'san-bong-quan-7' LIMIT 1),
          (SELECT id FROM field_types WHERE field_size = 'FIELD_5' LIMIT 1),
          'Sân 5B', false, 'AVAILABLE', 2,
          NOW(), NOW(), 0, false, 'system', 'system'
      )
ON CONFLICT (id) DO NOTHING;

-- 6. SERVICES (Dịch vụ)
INSERT INTO services (
    id, venue_id, name, category, service_type, base_price, unit, has_inventory, is_active,
    created_at, updated_at, version, deleted, created_by, updated_by
) VALUES
      (
          'a50e8400-e29b-41d4-a716-446655440001',
          (SELECT id FROM venues WHERE slug = 'san-bong-quan-7' LIMIT 1),
          'Nước Suối', 'FOOD_BEVERAGE', 'SALE', 10000.00, 'CHAI', true, true,
          NOW(), NOW(), 0, false, 'system', 'system'
      ),
      (
          'a50e8400-e29b-41d4-a716-446655440002',
          (SELECT id FROM venues WHERE slug = 'san-bong-quan-7' LIMIT 1),
          'Thuê Áo Đấu', 'EQUIPMENT', 'RENTAL', 20000.00, 'BO', true, true,
          NOW(), NOW(), 0, false, 'system', 'system'
      )
ON CONFLICT (id) DO NOTHING;

-- 7. SERVICE INVENTORY (Kho hàng)
INSERT INTO service_inventory (
    id, service_id, quantity_available, quantity_reserved, min_stock_level, last_updated,
    created_at, updated_at, version, deleted, created_by, updated_by
) VALUES
    (
        'b50e8400-e29b-41d4-a716-446655440001',
        (SELECT id FROM services WHERE name = 'Nước Suối' LIMIT 1),
        100, 0, 10, NOW(),
        NOW(), NOW(), 0, false, 'system', 'system'
    )
ON CONFLICT (id) DO NOTHING;

-- 8. BOOKINGS (Đã fix lỗi field_price null và map đúng Entity Booking)
INSERT INTO bookings (
    id, booking_code,
    user_id, field_id, venue_id, promotion_id,
    booking_date, start_time, end_time, duration_hours,
    customer_name, customer_phone, customer_email, number_of_players,
    field_price, service_amount, discount_amount, total_amount,
    booking_status, payment_status,
    special_requests,
    created_at, updated_at, version, deleted, created_by, updated_by
) VALUES
    (
        'd50e8400-e29b-41d4-a716-446655440001',
        'BK-2025-001',
        (SELECT id FROM users WHERE email = 'customer@gmail.com' LIMIT 1),
        (SELECT id FROM fields WHERE name = 'Sân 5A' LIMIT 1),
        (SELECT id FROM venues WHERE slug = 'san-bong-quan-7' LIMIT 1),
        NULL, -- No promotion
        CURRENT_DATE + INTERVAL '1 day', -- Ngày mai
        '17:00:00', '18:30:00', 1.5,
        'Nguyễn Văn Khách', '0909999999', 'customer@gmail.com', 10,
        450000.00, -- field_price (NOT NULL)
        0.00,      -- service_amount (Mặc định 0)
        0.00,      -- discount_amount (Mặc định 0)
        450000.00, -- total_amount (NOT NULL)
        'CONFIRMED', 'PENDING',
        'Lấy sân gần cổng ra vào',
        NOW(), NOW(), 0, false, 'system', 'system'
    )
ON CONFLICT (booking_code) DO NOTHING;

-- 9. BOOKING SERVICES (Thêm dịch vụ cho booking)
INSERT INTO booking_services (
    id, booking_id, service_id, quantity, unit_price, total_price,
    created_at, updated_at, version, deleted, created_by, updated_by
) VALUES
    (
        'e50e8400-e29b-41d4-a716-446655440001',
        (SELECT id FROM bookings WHERE booking_code = 'BK-2025-001' LIMIT 1),
        (SELECT id FROM services WHERE name = 'Nước Suối' LIMIT 1),
        5, 10000.00, 50000.00,
        NOW(), NOW(), 0, false, 'system', 'system'
    )
ON CONFLICT (id) DO NOTHING;

-- Update lại booking để cộng tiền dịch vụ (Logic Business)
UPDATE bookings
SET service_amount = 50000.00,
    total_amount = 450000.00 + 50000.00
WHERE booking_code = 'BK-2025-001';