import {
      SyntheticEvent,
      MouseEvent as ReactMouseEvent,
      FC,
      ReactNode,
    } from "react";

function ReactPortal() {
   export  const OnShow=(SyntheticEvent,ReactMouseEvent) => {
       /*  (event)= void; */
      }
    
      export const OnHide = OnShow(ReactMouseEvent,MouseEvent,KeyboardEvent);
    
      export const RCPF=(SyntheticEvent,ReactMouseEvent) =>{
        /* (event)= void; */
      }
    
       const Args = {
        containerId = string,
        defaultShow = boolean,
        clickOutsideToHide = boolean,
        escToHide = boolean,
        internalShowHide = boolean,
        onShow = OnShow,
        onHide = OnHide,
      }

    return (
    {Portal= FC,
    isShow= boolean,
    show= RCPF,
    hide= RCPF,
    toggle= RCPF,}
    );
}

export default ReactPortal