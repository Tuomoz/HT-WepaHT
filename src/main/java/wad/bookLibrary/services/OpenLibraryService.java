package wad.bookLibrary.services;

import javax.annotation.PostConstruct;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import wad.bookLibrary.openLibrary.OpenLibrarySearchMapper;

@Service
public class OpenLibraryService 
{
    private RestTemplate restTemplate;
    
    @PostConstruct
    private void init()
    {
        restTemplate = new RestTemplate();
        restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());
        
    }
    
    public OpenLibrarySearchMapper test()
    {
        return restTemplate.getForObject("http://openlibrary.org/search.json?author=tolkien", OpenLibrarySearchMapper.class);
    }
}
