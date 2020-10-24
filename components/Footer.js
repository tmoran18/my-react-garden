import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <div>All content &copy; Tim Moran</div>
        <div className="icon_container">
          <a href="https://github.com/tmoran18" target="_blank" rel="noopener">
            <img src="/github.svg" width="20" alt="Github Icon" />
          </a>
          <a
            href="https://twitter.com/Tim__Moran"
            target="_blank"
            rel="noopener"
          >
            <img src="/twitter.svg" width="20" alt="Twitter Icon" />
          </a>
          <a href="https://tim-moran.com/" arget="_blank" rel="noopener">
            <img
              src="/world-wide-web.svg"
              width="20"
              alt="World wide web Icon"
            />
          </a>
        </div>
      </footer>
      <style jsx>
        {`
          footer {
            position: absolute;
            left: 0;
            bottom: 0;
            right: 0;
            background-color: #80e5a6;
            color: #333;
            text-align: center;
            height: 70px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .icon_container {
            display: flex;
          }
          .icon_container a {
            margin: 5px 5px;
          }
        `}
      </style>
    </>
  );
}
