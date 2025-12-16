package com.footybook.backend.entity;

import com.footybook.backend.enums.SkillLevel;
import com.footybook.backend.enums.TeamMatchStatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.experimental.FieldDefaults;
import lombok.experimental.SuperBuilder;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "team_matches", indexes = {
        @Index(name = "idx_team_matches_host", columnList = "host_user_id"),
        @Index(name = "idx_team_matches_field", columnList = "field_id"),
        @Index(name = "idx_team_matches_date", columnList = "match_date"),
        @Index(name = "idx_team_matches_status", columnList = "status")
})
@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TeamMatch extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "host_user_id", nullable = false)
    private User hostUser;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "field_id", nullable = false)
    private Field field;

    @NotNull
    @Column(name = "match_date", nullable = false)
    private LocalDate matchDate;

    @NotNull
    @Column(name = "start_time", nullable = false)
    private LocalTime startTime;

    @NotNull
    @Column(name = "end_time", nullable = false)
    private LocalTime endTime;

    @Enumerated(EnumType.STRING)
    @Column(name = "skill_level", length = 20)
    private SkillLevel skillLevel;

    @Column(name = "current_players", nullable = false)
    @Builder.Default
    private Integer currentPlayers = 1; // Host counts as 1

    @Column(name = "required_players", nullable = false)
    private Integer requiredPlayers;

    @Column(name = "cost_per_person", precision = 10, scale = 2)
    private BigDecimal costPerPerson;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(name = "positions_needed", length = 255)
    private String positionsNeeded; // "Defender, Midfielder"

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    @Builder.Default
    private TeamMatchStatus status = TeamMatchStatus.OPEN;

    @OneToOne
    @JoinColumn(name = "booking_id")
    private Booking booking; // Created when match is full

    @OneToMany(mappedBy = "teamMatch", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<TeamMatchParticipant> participants = new ArrayList<>();

    public boolean isFull() {
        return currentPlayers >= requiredPlayers;
    }

    public void addParticipant() {
        this.currentPlayers++;
        if (isFull()) {
            this.status = TeamMatchStatus.FULL;
        }
    }

    public void removeParticipant() {
        this.currentPlayers = Math.max(1, this.currentPlayers - 1); // At least host
        if (!isFull() && this.status == TeamMatchStatus.FULL) {
            this.status = TeamMatchStatus.OPEN;
        }
    }
}