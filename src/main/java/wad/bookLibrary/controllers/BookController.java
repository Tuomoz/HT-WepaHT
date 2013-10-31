package wad.bookLibrary.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import wad.bookLibrary.models.Book;
import wad.bookLibrary.services.BookService;

@Controller
public class BookController 
{
    @Autowired
    private BookService bookService;
    
    @RequestMapping(value = "books", method = RequestMethod.GET)
    @ResponseBody
    public List<Book> list()
    {
        return bookService.list();
    }
    
    @RequestMapping(value = "books/{id}")
    @ResponseBody
    public Book getBook(@PathVariable Long id)
    {
        return bookService.read(id);
    }
    
    @RequestMapping(value = "books", method = RequestMethod.POST)
    @ResponseBody
    public Book postBook(@RequestBody Book book)
    {
        return bookService.save(book);
    }
    
    @RequestMapping(value = "books/{id}", method = RequestMethod.PUT)
    @ResponseBody
    public Book putBook(@RequestBody Book book)
    {
        return bookService.save(book);
    }
    
    @RequestMapping(value = "books/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public void deleteBook(@PathVariable Long id)
    {
        bookService.delete(id);
    }
}
