package com.example.inicial1.entities.audit;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.envers.RevisionEntity;
import org.hibernate.envers.RevisionNumber;
import org.hibernate.envers.RevisionTimestamp;

import java.io.Serial;
import java.io.Serializable;
import java.sql.Date;

@Entity
@Table(name="REVISION_INFO")
@RevisionEntity
@Data
public class Revision implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "revision_seq")
    @SequenceGenerator(
            name="revision_seq",
            sequenceName = "rbac.seq_revision_id"
    )

    @RevisionNumber
    private int id;

    @Column (name="REVISION_DATE")
    @Temporal(TemporalType.TIMESTAMP)
    @RevisionTimestamp
    private Date date;
}
