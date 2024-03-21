import { useRef, useState } from "react";
import axios from "axios";
import { data } from "./Data.js" 


function Homepage(props) {

    // function showResult() {
    //     // const result = (props.translatedText);

    //     // props.translatedText = result;
    //     // console.log(result);
    // }


    const [option, setOption] = useState('en');
    const [option_2, setOption_2] = useState('hi');
    const [input, setInput] = useState();
    const [result_ouput, setResult_output] = useState();
    const hidden_result = useRef()

    async function showResult() {

        const encodedParams = new URLSearchParams();
        encodedParams.set('source_language', option);
        encodedParams.set('target_language', option_2);
        encodedParams.set('text', input);

        const options = {
        method: 'POST',
        url: 'https://text-translator2.p.rapidapi.com/translate',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'b658243438msh5878b8a9418efd7p168765jsnd8c990dedd19',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
            data: encodedParams,
        };

        try {
            const response = await axios.request(options);

            
            setResult_output(response.data.data.translatedText)

            console.log(response.data.data.translatedText)

            hidden_result.current.style.display = 'block'

        } 

        catch (error) {
            console.error(error);
        }

    }

    return(
        <div id="homepage" className=" h-screen w-screen flex flex-col gap-5 justify-center items-center">
            <div id="outer" className=" h-2/5 w-5/12 border-4 border-gray flex flex-col justify-center items-center rounded-3xl bg-cyan-700">
                <div id="one-heading" className="w-full h-1/5 text-center">
                    <p className="text-3xl font-semibold text-red-500">Language Translator</p>
                </div>

                <div id="two-texts" className="w-full h-1/5 flex justify-around items-end text-black">
                    <p className="text-xl">Translate from</p>
                    <p className="text-xl">Translate to</p>
                </div>


                <div id="three-translators" className="w-full h-1/5 px-16 flex justify-between items-start">
                    <select name="lang" value={option} onChange={(e) => {                            
                            setOption(e.target.value)
                        }} id="language" className="border-2 rounded-lg p-1">
                        {/* <option value="" id="options-tag" className="">Options</option> */}

                        {Object.entries(data).map(([language, code]) => (
                        <option key={code} value={code}>
                            {language}
                        </option>
                        ))}


                    </select>
                    <select name="" value={option_2} onChange={(e) => {
                            setOption_2(e.target.value);
                        }}  id="language-2" className="border-2 rounded-lg p-1">
                        {/* <option value="" id="options-tag-two" className="border-2">Options</option> */}

                            {Object.entries(data).map(([language, code]) => (
                            <option key={code} value={code}>
                            {language}
                            </option>
                            ))}

                    </select>
                </div>

                <div id="four-textbox" className="w-full h-1/5 flex gap-5 justify-center items-center">
                    {/* <input type="text" className="border-2 h-full w-3/5 px-2" id="input-field" placeholder="Enter text to translate"  /> */}
                    <textarea name="" onChange={(e) => {
                        setInput(e.target.value)
                    }} id="" cols="50" rows="2" placeholder="Enter text to translate" className="border-2 p-3"></textarea>
                    <button type="button" className=" border-white border-2 bg-green-500 text-white font-semibold rounded-xl p-2 hover:text-black hover:border-emerald-50" onClick={showResult}>Translate</button>
                </div>

            </div>


            <div id="result" ref={hidden_result} className=" hidden rounded-2xl border-2 h-1/5 w-4/12 p-8 bg-slate-500 text-start">
                    {/* <p>{props.translatedText}</p> */}
                    {/* <textarea className="border-2 border-black p-10" value={""} placeholder="Result" id="" cols="50" rows="5"></textarea> */}
                    <p className="text-white text-2xl">{result_ouput}</p>
            </div>


        </div>
    )
}

export default Homepage;