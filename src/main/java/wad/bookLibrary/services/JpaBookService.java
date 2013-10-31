package wad.bookLibrary.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import wad.bookLibrary.models.Book;
import wad.bookLibrary.repositories.BookRepository;

@Service
public class JpaBookService implements BookService
{
    @Autowired
    BookRepository bookRepo;
    
    @Override
    public Book save(Book book)
    {
        return bookRepo.save(book);
    }

    @Override
    public Book read(Long id)
    {
        return bookRepo.findOne(id);
    }

    @Override
    public void delete(Long id)
    {
        bookRepo.delete(id);
    }

    @Override
    public List<Book> list()
    {
        return bookRepo.findAll();
    }

}
