public class DocumentFactory {

    public static Document createDocument(String type) {

    if(type.equalsIgnoreCase("WORD")) {
        return new WordDocument();
    }
    else if(type.equalsIgnoreCase("PDF")) {
        return new PdfDocument();
    }

    return null;
    }
}