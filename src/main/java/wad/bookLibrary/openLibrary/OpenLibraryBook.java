package wad.bookLibrary.openLibrary;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class OpenLibraryBook
{
    private String title;
    private List<String> author_name;
    private String key;

    public String getTitle()
    {
        return title;
    }

    public void setTitle(String title)
    {
        this.title = title;
    }

    public List<String> getAuthor_name()
    {
        return author_name;
    }

    public void setAuthor_name(List<String> author_name)
    {
        this.author_name = author_name;
    }

    public String getKey()
    {
        return key;
    }

    public void setKey(String key)
    {
        this.key = key;
    }
}