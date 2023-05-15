import { ToastContainer } from "react-toastify";
import Form from "./Form";
import Items from "./Items";

//react query nujen dla togo shto bi keshirovat dannie s backenda
// shto b user prosto tak ne otpravlal v backend zaprosi
//react query xorosh, on pri errore nesk raz kidayet zapros, dumayet shto a vdruq poluchitsa
// delay vseqda clg shto b ponat shto tebe prixodit, est klasnie veshi kak isloading, error, iserror, i koneshno je nash data
//read documentation esli shto i use chatgpt
// thunder client - kak postman

const App = () => {
    return (
        <section className="section-center">
            <ToastContainer position="top-center" />
            <Form />
            <Items />
        </section>
    );
};
export default App;
