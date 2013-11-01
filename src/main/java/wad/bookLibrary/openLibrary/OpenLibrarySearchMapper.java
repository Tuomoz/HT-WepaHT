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
}