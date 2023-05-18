import { useState, useEffect } from "react";
import axios from "axios";
import '../index.css';
import { Link } from "react-router-dom";

const HVBible = () => {
    const [bibleBook, setBibleBook] = useState("Revelation");
    const [bibleChapter, setBibleChapter] = useState(1);
    const [bibleVerseFrom, setBibleVerseFrom] = useState(1);
    const [bibleVerseTo, setBibleVerseTo] = useState(10);
    const [bibleContents, setBibleContents] = useState("");

    const formatNumberWithRegex = (text) => {
      return text.replace(/\d+/g, (match) => `<strong><u>${match}</u></strong>`)
    };
  
    useEffect(() => {
      axios.get('https://ajith-holy-bible.p.rapidapi.com/GetVerses', {
        headers: {
          'X-RapidAPI-Key': 'd883ae7305mshce31ebfdba1f1c4p1bbdf2jsndda4caeb4e9b',
          'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com',
          'Content-Type': 'application/json',
        },
        params: {
          Book: bibleBook,
          chapter: bibleChapter,
          VerseFrom: bibleVerseFrom,
          VerseTo: bibleVerseTo
        },
      })
      .then(response => {
        setBibleContents(formatNumberWithRegex(response.data.Output))
        console.log(response.data.Output)
      })
      .catch(error => {
        console.error(error);
      })
    }, [bibleBook, bibleChapter, bibleVerseFrom, bibleVerseTo]);

    const element = (
      <>
        <div className="fixed navbar font-poppins bg-white shadow-md text-black z-50">
          <div className="navbar-start lg:justify-center p-0 z-50">
              <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="bg-white menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                      <li onClick={() => {setBibleBook("Luke")}}><p className="bg-transparent z-50">Search in bible</p></li>
                      <li><Link className="bg-transparent z-50" to={"/contribute"}>Contribute</Link></li>
                  </ul>
              </div>
              <Link className="normal-case font-semibold text-lg md:block z-50">HV Bible</Link>
          </div>

          <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                  <li onClick={() => {setBibleBook("Luke")}}><p className="bg-transparent z-50">Search in bible</p></li>
                  <li><Link className="bg-transparent z-50" to={"/contribute"}>Contribute</Link></li>
              </ul>
          </div>
      </div>

        <div className="px-7 py-24 lg:p-32 leading-8 text-justify">
          <h1 className="font-poppins text-lg font-bold mb-5">{bibleBook} {bibleChapter} : {bibleVerseFrom} - {bibleVerseTo}</h1>
          <p className="font-poppins" dangerouslySetInnerHTML={{__html: bibleContents}}></p>
        </div>
      </>
    )

    return element;
}


export default HVBible;