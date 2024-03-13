public class Link
    {
        public String data;
        public Link next;
        public Link(String datain) // constructor
        {
            data = datain; // initialize data
            // 'next' is automatically set to null
        }

        public String displayLink ()
        {
            return data;
        }
    }