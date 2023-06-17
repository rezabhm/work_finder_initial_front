import React from "react";

import TableCellText from "../../../../SimpleComponent/Table/TableCellText/TableCellText";
import ProfileImage from "../../../../SimpleComponent/Image/ProfileImage/ProfileImage";
import TableCellButtonImage from "../../../../SimpleComponent/Table/TableCellButtonImage/TableCellButtonImage";
import TableRow from "../../../../SimpleComponent/Table/TableRow/TableRow";

function chooseTableCell (data){

    if(data.type === 'text'){

        return <TableCellText style={data.style} text={data.text} />

    }else if(data.type === 'profile-image'){

        return <ProfileImage styleDesktop={data.styleDesktop} styleMobile={data.styleMobile} image={data.image} />

    }else if(data.type === 'button'){

        return <TableCellButtonImage styleDesktop={data.styleDesktop} styleMobile={data.styleMobile} image={data.image} pushLink={data.pushLink} />
    }


}



export function generateRow(row, rowStyle){

    // row = [
    //
    //     {
    //
    //         name:string,
    //         style:object,
    //         text:string,
    //         type:'text',
    //
    //
    //
    //     },
    //
    //     {
    //
    //         name:string,
    //         styleDesktop:object,
    //         styleMobile:object,
    //         type:'profile-image'
    //
    //     },
    //

    //     {
    //
    //         name:string,
    //         styleDesktop:object,
    //         styleMobile:object,
    //         type:'button',
    //         image:image,
    //         pushLink:'string'
    //
    //     },
    //     ... ,
    //
    // }
    //




    return(

        <TableRow

            styleDesktop={rowStyle.desktop_style}
            styleMobile={rowStyle.mobile_style}
            content={

                row.map(data=>{

                        return chooseTableCell(data)

                    }

                )
            }

        />


    )

}

