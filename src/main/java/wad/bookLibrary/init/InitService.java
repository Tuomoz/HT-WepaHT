package wad.bookLibrary.init;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import wad.bookLibrary.models.Book;
import wad.bookLibrary.repositories.BookRepository;

@Component
public class InitService 
{
    @Autowired
    BookRepository bookRepo;
    
    @PostConstruct
    private void init()
    {
        Book book = new Book();
        List<String> authors = new ArrayList<String>();
        List<String> pubs = new ArrayList<String>();
        
        authors.add("Auth 1");
        pubs.add("Pub 1");
        
        book.setAuthors(authors);
        book.setIsbn("1234567890");
        book.setName("Book 1");
        book.setPublishers(pubs);
        book.setPublishingYear(new Integer(2013));
        bookRepo.save(book);
        
        book = new Book();
        authors.add("Auth 2");
        pubs.add("Pub 2");
        book.setAuthors(authors);
        book.setIsbn("9876543210");
        book.setName("Book 2");
        book.setPublishers(pubs);
        book.setPublishingYear(new Integer(1991));
        bookRepo.save(book);
    }
}
