import React from "react";
import pic1 from "../pic1.webp";
import pic2 from "../pic2.webp";
import pic3 from "../pic3.webp";
import { Star } from "../star";  
import { useState } from "react";
import { Point } from "../star";
import { Sticker } from "../star";
import { Item } from "../card";


export function Class() {
  const [star, setStar] = useState(0);
  const [point, setPoint] = useState(0);
  const [sticker, setSticker] = useState(0);
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

  return (
    <>
      <div className="container w-screen h-auto">
        <div className="flex justify-center">
          <div className="bg-black m-4 w-auto h-auto rounded-md">
            <img src={pic1} className=" py-10 px-10 hover:tex " />
            <h1 className="text-2xl text-yellow-500 px-6 font-bold">{card.names}</h1>
            <div className="flex justify-between px-6">
              <p className="text-xl text-yellow-500 font-semibold ">{card.price}</p>
              <p className="text-xl text-yellow-500 font-semibold">Rs:{card.rs}</p>
            </div>
            <button
              onClick={() => {
                value1Add();
                value2Add();
              }}
              className="black text-yellow-400  font-bold w-auto rounded-md py-4 px-28 m-8 hover:bg-yellow-500 hover:text-black border-black-400 border-opacity-20"
            >
              Add to Cart
            </button>

            <div className=" flex justify-between">
              <div class="flex items-center m-4">
                {[1, 2, 3, 4, 5].map((v) => {
                  const checkWhite = v <= star;
                  return (
                    <div onClick={() => setStar(v)}>
                      <Star key={v} color={checkWhite ? "yellow" : "White"} />
                    </div>
                  );
                })}
              </div>
              <p className="text-xl text-yellow-500 border-spacing-x-11 m-4 ">
                {card.item}:{value1} {card.total}:{value2}
              </p>
            </div>
          </div>
          <div className="bg-black m-4 w-96 h-auto rounded-md">
            <img src={pic2} className="  py-10 px-10 " />
            <h1 className="text-2xl text-yellow-500 px-6 font-bold">{card.namess}</h1>
            <div className="flex justify-between px-6">
              <p className="text-xl text-yellow-500 font-semibold ">{card.price}</p>
              <p className="text-xl text-yellow-500  font-semibold">Rs:{card.rss}</p>
            </div>
            <button
              onClick={() => {
                value3Add();
                value4Add();
              }}
              className="bg-black text-yellow-400 rounded-md  py-4 px-28 m-8  font-bold  hover:bg-yellow-500 hover:text-black border-black-400 "
            >
              Add to Cart
            </button>

            <div className=" flex justify-between">
              <div class="flex items-center m-4">
                {[1, 2, 3, 4, 5].map((x) => {
                  const checkWhite = x <= point;
                  return (
                    <div onClick={() => setPoint(x)}>
                      <Point key={x} color={checkWhite ? "yellow" : "White"} />
                    </div>
                  );
                })}
              </div>
              <p className="text-xl text-yellow-500 border-spacing-x-11 m-4 ">
                {card.item}:{value3} {card.total}:{value4}
              </p>
            </div>
          </div>
          <div className="bg-black m-4 w-96 h-auto rounded-md">
            <img src={pic3} className="  py-14 px-10 " />
            <h1 className="text-2xl text-yellow-500 px-6 font-bold">{card.namesss}</h1>
            <div className="flex justify-between px-6">
              <p className="text-xl text-yellow-500 font-semibold ">{card.price}</p>
              <p className="text-xl text-yellow-500 font-semibold">Rs:{card.rsss}</p>
            </div>
            <button
              onClick={() => {
                value5Add();
                value6Add();
              }}
              className="bg-black text-yellow-400 rounded-md py-4 px-28 m-7 font-bold  hover:bg-yellow-500 hover:text-black border-black-400"
            >
              Add to Cart
            </button>
            <div className=" flex justify-between">
              <div class="flex items-center m-4">
                {[1, 2, 3, 4, 5].map((z) => {
                  const checkWhite = z <= sticker;
                  return (
                    <div onClick={() => setSticker(z)}>
                      <Sticker
                        key={z}
                        color={checkWhite ? "yellow" : "White"}
                      />
                    </div>
                  );
                })}
              </div>
              <p className="text-xl text-yellow-500 border-spacing-x-11 m-4 ">
                {card.item}:{value5} {card.total}:{value6}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
