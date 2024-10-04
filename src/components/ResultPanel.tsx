import React from "react";
import PadDiv from "./PadDiv";

function ResultPanel(props: { isEnd: boolean; result: string }) {
  if (props.isEnd) {
    return (
      <div className="flex flex-col justify-center items-center">
        <span>あなたが決めた、あなたのMBTI診断は</span>
        <div className="pt-4">
          <span className="text-4xl font-bold">{props.result}</span>
        </div>
        <div className="pt-4">
          <span className="text-gray-500">
            ※ちゃんと診断した結果ではないので
            <br />「{props.result}っぽい」とか言うようにしましょう
          </span>
        </div>
        <PadDiv>
          <div className="pt-8">{props.result}の詳しい解説はこちら</div>
          <div>
            <a
              target="_blank"
              className="text-blue-400 underline break-all"
              href={
                "https://www.16personalities.com/ja/" +
                props.result.toLowerCase() +
                "%E5%9E%8B%E3%81%AE%E6%80%A7%E6%A0%BC"

                // "https://www.16personalities.com/" +
                // props.result.toLowerCase() +
                // "-personality"
              }
            >
              {
                "https://www.16personalities.com/ja/" +
                  props.result.toLowerCase() +
                  "%E5%9E%8B%E3%81%AE%E6%80%A7%E6%A0%BC"

                // "https://www.16personalities.com/" +
                // props.result.toLowerCase() +
                // "-personality"
              }
            </a>
          </div>
        </PadDiv>
      </div>
    );
  } else {
    <></>;
  }
}

export default ResultPanel;
