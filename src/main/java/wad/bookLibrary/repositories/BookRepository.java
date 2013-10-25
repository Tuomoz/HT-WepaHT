package wad.bookLibrary.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import wad.bookLibrary.models.Book;

public interface BookRepository extends JpaRepository<Book, Long>
{

}
