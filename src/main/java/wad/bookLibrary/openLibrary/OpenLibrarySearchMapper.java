package wad.bookLibrary.openLibrary;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class OpenLibrarySearchMapper 
{
    private Integer numFound;
    private List<OpenLibraryBook> docs;

    public Integer getNumFound()
    {
        return numFound;
    }

    public void setNumFound(Integer numFound)
    {
        this.numFound = numFound;
    }
        public List<OpenLibraryBook> getDocs()
    {
        return docs;
    }

    public void setDocs(List<OpenLibraryBook> docs)
    {
        this.docs = docs;
    }
    
    
    
    @JsonIgnoreProperties(ignoreUnknown = true)
    private class OpenLibraryBook
    {
        private String title;
        private String author_name;
        private String key;

        public String getTitle()
        {
            return title;
        }

        public void setTitle(String title)
        {
            this.title = title;
        }

        public String getAuthor_name()
        {
            return author_name;
        }

        public void setAuthor_name(String author_name)
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
}