package com.url.shortener.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
public class UrlMapping {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String OriginalUrl;
    private String shortUrl;
    private int clickCount = 0;
    private LocalDateTime created;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


    @OneToMany(mappedBy = "urlMapping")
   private List<ClickEvent> clickEvents;

    public void setCreatedDate(LocalDateTime now) {
        this.created = now;
    }

    public LocalDateTime getCreatedDate() {
        return this.created;
    }

}
