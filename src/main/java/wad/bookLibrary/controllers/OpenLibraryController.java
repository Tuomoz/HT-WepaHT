package wad.bookLibrary.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import wad.bookLibrary.openLibrary.OpenLibrarySearchMapper;
import wad.bookLibrary.services.OpenLibraryService;

@Controller
public class OpenLibraryController 
{
    @Autowired
    OpenLibraryService openLibraryService;
    
    @RequestMapping(value = "openlibrary/test", method = RequestMethod.GET)
    @ResponseBody
    public OpenLibrarySearchMapper test()
    {
        return openLibraryService.test();
    }
}
