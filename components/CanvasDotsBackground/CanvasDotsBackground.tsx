import { FunctionComponent, useEffect } from "react"
const CanvasDotsBackground: FunctionComponent<{}> = () => {
    useEffect(() => {
        const width = 2100;
        const height = 800;
        const count = 80;
        const rowsize = 50;
        let dotsize:any = 1;
        const dotmin = 1.5;
        const dotsizebase = 7;
        let PosX:any = ''
        let PosY:any = ''
        // Calc
        var canvases = document.querySelectorAll(".CanvasDots");
        canvases.forEach((canvas:any) => {
            var ctx = canvas.getContext('2d');
            ctx.canvas.width  = width;
            ctx.canvas.height = height;
            mouseOver(canvas, ctx, false)
            canvas.addEventListener('mousemove', function(){mouseOver(canvas,ctx, true);});
            canvas.addEventListener('mouseleave', function(){mouseOver(canvas,ctx, false);});
        });

        function mouseOver(canvas:any, ctx:any, cursor:any) {
            if(cursor){
                 PosX = getPositionX(event);
                 PosY = getPositionY(event);
            }else{
                 PosX = -100;
                 PosY = -100;
            }

            let LocX = canvas.getBoundingClientRect().left;
            let LocY = canvas.getBoundingClientRect().top;

            let GlobalX = PosX - LocX;
            let GlobalY = PosY - LocY;

            var ctx = canvas.getContext('2d');
            ctx.canvas.width  =width;
            ctx.canvas.height = height;

            // The counter is used to calculate the color (fake random) if u want to have multiple canvas grids with a different color order just increase or decrease the value 
            let $counter = 5.56;
            for (let $ix = 4; $ix <= (count-3); $ix++){
                for ( let $iy = 4; $iy <= (count); $iy++){
                        ctx.beginPath();
                        let $scaler = Math.hypot(GlobalX/rowsize - $ix,GlobalY/rowsize - $iy);
                         dotsize = dotsizebase - $scaler *1;
                        if(dotsize < dotmin){
                            dotsize = 0.4;
                        }
                        ctx.arc(rowsize*$ix,rowsize*$iy,dotsize,0, 100 * Math.PI);
                        $counter = $counter * 1;
                        ctx.strokeStyle = "#41f3b7";  


                        ctx.lineWidth = 1;
                        ctx.stroke();

                }
            }
        }


        function getPositionX(event:any){
          let CursorX = event.clientX; 
          return CursorX;   
        }

        function getPositionY(event:any){
          let CursorY = event.clientY;
          return CursorY;
        }
    },[])
    return (
        <canvas className="CanvasDots relative -top-20"></canvas>
    )

}

export default CanvasDotsBackground