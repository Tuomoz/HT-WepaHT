package wad.bookLibrary.services;

import java.util.List;
import wad.bookLibrary.models.Book;

public interface BookService
{
    Book save(Book book);
    Book read(Long id);
    void delete(Long id);
    List<Book> list();
}
