import React from "react";

import TableHeaderText from "../../../../SimpleComponent/Table/TableHeaderText/TableHeaderText";
import TableRow from "../../../../SimpleComponent/Table/TableRow/TableRow";

export function generateHeader(header, rowStyle){


    // header = [
    //
    //     {
    //
    //         name:string,
    //         style:object,
    //         text:string,
    //
    //
    //     },
    //
    //     {
    //
    //         name:string,
    //         style:object,
    //         text:string,
    //
    //
    //     },
    //
    //     ... ,
    //
    // }
    //


    return(

        <TableRow

            styleDesktop={rowStyle.desktop_style}
            styleMobile={rowStyle.mobile_style}
            content={

                header.map(data=>{

                        return <TableHeaderText style={data.style} text={data.text} />

                    }

                )
            }

        />


    )

}
