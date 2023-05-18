import { useState, useEffect } from "react";
import axios from "axios";
import '../index.css';
import Navbar from "../components/Navbar";

const HVBible = () => {
    const [bibleBook, setBibleBook] = useState("Luke");
    const [bibleChapter, setBibleChapter] = useState(1);
    const [bibleVerseFrom, setBibleVerseFrom] = useState(1);
    const [bibleVerseTo, setBibleVerseTo] = useState(10);
    const [bibleContents, setBibleContents] = useState("1 The Revelation of Jesus Christ which God gave him so that his servants might have knowledge of the things which will quickly take place: and he sent and made it clear by his angel to his servant John; 2 Who gave witness of the word of God, and of the witness of Jesus Christ, even of all the things which he saw. 3 A blessing be on the reader, and on those who give ear to the prophet's words, and keep the things which he has put in the book: for the time is near. 4 John to the seven churches which are in Asia: Grace to you and peace, from him who is and was and is to come; and from the seven Spirits which are before his high seat; 5 And from Jesus Christ, the true witness, the first to come back from the dead, and the ruler of the kings of the earth. To him who had love for us and has made us clean from our sins by his blood; 6 And has made us to be a kingdom and priests to his God and Father; to him let glory and power be given for ever and ever. So be it. 7 See, he comes with the clouds, and every eye will see him, and those by whom he was wounded; and all the tribes of the earth will be sorrowing because of him. Yes, so be it. 8 I am the First and the Last, says the Lord God who is and was and is to come, the Ruler of all. 9 I, John, your brother, who have a part with you in the trouble and the kingdom and the quiet strength of Jesus, was in the island which is named Patmos, for the word of God and the witness of Jesus. 10 I was in the Spirit on the Lord's day, and a great voice at my back, as of a horn, came to my ears,");

    const formatNumberWithRegex = (text) => {
      return text.replace(/\d+/g, (match) => `<strong><u>${match}</u></strong>`)
    };
  
    const formattedBibleContents = formatNumberWithRegex(bibleContents);
  
    // useEffect(() => {
    //   axios.get('https://ajith-holy-bible.p.rapidapi.com/GetVerses', {
    //     headers: {
    //       'X-RapidAPI-Key': 'd883ae7305mshce31ebfdba1f1c4p1bbdf2jsndda4caeb4e9b',
    //       'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com',
    //       'Content-Type': 'application/json',
    //     },
    //     params: {
    //       Book: bibleBook,
    //       chapter: bibleChapter,
    //       VerseFrom: bibleVerseFrom,
    //       VerseTo: bibleVerseTo
    //     },
    //   })
    //   .then(response => {
    //     setBibleContents(response.data.Output)
    //     console.log(response.data.Output)
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   }) 
    // }, []);

    const element = (
      <>
          <Navbar />

          <div className="px-7 py-20 lg:p-32 leading-8 text-justify">
            <p className="font-poppins" dangerouslySetInnerHTML={{__html: formattedBibleContents}}></p>
          </div>
      </>
    )

    return element;
}

export default HVBible;