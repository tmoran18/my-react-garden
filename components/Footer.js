import Link from 'next/link';

export default function Footer() {

	return (
        <>
            <footer>
                Footer
            </footer>
            <style jsx>{`
            footer {
                left: 0;
                width: 100%;
                background-color: #80E5A6;
                color: white;
                text-align: center;
                height:50px;
                position:fixed;
                bottom:0;
                    }
            `
                }
            </style>
        </>
	);
}
