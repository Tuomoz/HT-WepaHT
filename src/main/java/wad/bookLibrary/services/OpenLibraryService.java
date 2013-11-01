package wad.bookLibrary.services;

import java.util.ArrayList;
import javax.annotation.PostConstruct;
import org.springframework.http.MediaType;
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
        MappingJackson2HttpMessageConverter jackson = new MappingJackson2HttpMessageConverter();
        
        ArrayList<MediaType> mediatypes = new ArrayList<MediaType>();
        mediatypes.add(MediaType.APPLICATION_JSON);
        mediatypes.add(MediaType.ALL); // :(
        jackson.setSupportedMediaTypes(mediatypes);
        
        restTemplate.getMessageConverters().add(jackson);
        
    }
    
    public OpenLibrarySearchMapper test()
    {
        return restTemplate.getForObject("http://openlibrary.org/search.json?isbn=0395489318", OpenLibrarySearchMapper.class);
    }
}
