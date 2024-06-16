export const Item () {
    const [card, setCard] = useState({
        names: "Ring 2in1",
        namess: "Ring Baring",
        namesss: "Ring 2in1 + Bracelet",
        price: "price",
        rs: "250",
        rss: "250",
        rsss: "250",
        item: "items",
        total: "Total-Price",
      });
      const [value1, setvalue1] = useState(0);
      const [value2, setvalue2] = useState(0);
      function value1Add() {
        setvalue1((value1) => value1 + 1);
      }
      function value2Add() {
        setvalue2((value2) => value2 + 250);
      }
      const [value3, setvalue3] = useState(0);
      const [value4, setvalue4] = useState(0);
      function value3Add() {
        setvalue3((value3) => value3 + 1);
      }
      function value4Add() {
        setvalue4((value4) => value4 + 250);
      }
      const [value5, setvalue5] = useState(0);
      const [value6, setvalue6] = useState(0);
      function value5Add() {
        setvalue5((value5) => value5 + 1);
      }
      function value6Add() {
        setvalue6((value6) => value6 + 250);
      }
    return(
<div>

</div>
    );
}