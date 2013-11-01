package wad.bookLibrary.models;

import java.io.Serializable;
import java.util.List;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.NotBlank;

@Entity
@Table(name = "Book")
public class Book implements Serializable 
{
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "id")
    Long id;
    
    @Column(name = "name")
    @NotBlank
    String name;
    
    @Column(name = "ISBN")
    @NotBlank
    String isbn;
    
    @Column(name = "publishingYear")
    @NotNull
    Integer publishingYear;
    
    @Column(name = "authors")
    @ElementCollection
    @CollectionTable(name = "book_authors")
    List<String> authors;
    
    @Column(name = "publishers")
    @ElementCollection
    @CollectionTable(name = "book_publishers")
    List<String> publishers;

    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getIsbn()
    {
        return isbn;
    }

    public void setIsbn(String isbn)
    {
        this.isbn = isbn;
    }

    public List<String> getAuthors()
    {
        return authors;
    }

    public void setAuthors(List<String> authors)
    {
        this.authors = authors;
    }

    public List<String> getPublishers()
    {
        return publishers;
    }

    public void setPublishers(List<String> publishers)
    {
        this.publishers = publishers;
    }
    
    public Integer getPublishingYear()
    {
        return publishingYear;
    }

    public void setPublishingYear(Integer publishingYear)
    {
        this.publishingYear = publishingYear;
    }
}
