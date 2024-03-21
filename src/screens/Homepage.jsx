

function Homepage(props) {

    function showResult() {
        const result = (props.translatedText);

        props.translatedText = result;
        console.log(result);
        

    }

    return(
        <div id="homepage" className=" h-screen w-screen flex flex-col gap-5 justify-center items-center">
            <div id="outer" className=" h-2/5 w-5/12 border-4 border-gray flex flex-col justify-center items-center rounded-3xl bg-cyan-700">
                <div id="one-heading" className="w-full h-1/5 text-center">
                    <p className="text-3xl font-semibold text-red-500">Language Translator</p>
                </div>

                <div id="two-texts" className="w-full h-1/5 px-14 flex justify-between items-end text-black">
                    <p className="text-xl">Translate from</p>
                    <p className="text-xl">Translate to</p>
                </div>


                <div id="three-translators" className="w-full h-1/5 px-16 flex justify-between items-start">
                    <select name="lang" id="language" className="border-2 rounded-lg p-1">
                        <option value="" id="options-tag" className="">Options</option>
                    </select>
                    <select name="" id="language-2" className="border-2 rounded-lg p-1">
                        <option value="" id="options-tag-two" className="border-2">Options</option>
                    </select>
                </div>

                <div id="four-textbox" className="w-full h-1/5 flex gap-5 justify-center items-center">
                    {/* <input type="text" className="border-2 h-full w-3/5 px-2" id="input-field" placeholder="Enter text to translate"  /> */}
                    <textarea name="" id="" cols="50" rows="2" placeholder="Enter text to translate" className="border-2 p-3"></textarea>
                    <button type="button" className=" border-white border-2 bg-green-500 text-white font-semibold rounded-xl p-2 hover:text-black hover:border-emerald-50" onClick={showResult}>Translate</button>
                </div>

            </div>


            <div id="result" className=" rounded-2xl border-2 border-red-400 h-1/5 w-4/12 p-8 bg-slate-500 text-start">
                    {/* <p>{props.translatedText}</p> */}
                    {/* <textarea className="border-2 border-black p-10" value={""} placeholder="Result" id="" cols="50" rows="5"></textarea> */}
                    <p>ok</p>
            </div>


        </div>
    )
}

export default Homepage;