import React from "react";
import s from './SingIn.module.css'

export default function Layout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <ul className={s.listItems}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        {children}
        </body>
        </html>
    );
}
