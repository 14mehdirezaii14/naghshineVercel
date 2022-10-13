import { FunctionComponent, useEffect, useState, } from "react"
const CanvasDotsBackground = (props: any) => {
    const [widthPage, setWidthPage] = useState<number>(0)
    useEffect(() => {
        console.log(window.outerWidth)
        setWidthPage(window.outerWidth + 500)
        const width = window.outerWidth + 500;
        const height = window.outerHeight + 1600;
        const count = 80;
        const rowsize = 50;
        let dotsize: any = 1;
        const dotmin = 2.5;
        const dotsizebase = 10;
        let PosX: any = ''
        let PosY: any = ''
        // Calc 
        var canvases = document.querySelectorAll(".CanvasDots");
        let section = document.getElementsByClassName('sectionBlog')[0]
        canvases.forEach((canvas: any) => {
            var ctx = canvas.getContext('2d');
            ctx.canvas.width = width;
            ctx.canvas.height = height;
            mouseOver(canvas, ctx, false)

            section.addEventListener('mousemove', function () { mouseOver(canvas, ctx, true); });
            section.addEventListener('mouseleave', function () { mouseOver(canvas, ctx, false); });
        });

        function mouseOver(canvas: any, ctx: any, cursor: any) {
            if (cursor) {
                PosX = getPositionX(event);
                PosY = getPositionY(event);
            } else {
                PosX = -50;
                PosY = -50;
            }

            let LocX = canvas.getBoundingClientRect().left - 100;
            let LocY = canvas.getBoundingClientRect().top - 100;

            let GlobalX = PosX - LocX;
            let GlobalY = PosY - LocY;

            var ctx = canvas.getContext('2d');
            ctx.canvas.width = width;
            ctx.canvas.height = height;

            // The counter is used to calculate the color (fake random) if u want to have multiple canvas grids with a different color order just increase or decrease the value 
            let $counter = 0;
            for (let $ix = 4; $ix <= (count); $ix++) {
                for (let $iy = 4; $iy <= (count); $iy++) {
                    ctx.beginPath();
                    let $scaler = Math.hypot(GlobalX / rowsize - $ix, GlobalY / rowsize - $iy);
                    dotsize = dotsizebase - $scaler;
                    if (dotsize < dotmin) {
                        dotsize = 1;
                    }
                    ctx.arc(rowsize * $ix, rowsize * $iy, dotsize, 0, 50 * Math.PI);
                    $counter = $counter;
                    ctx.strokeStyle = "#41f3b7";


                    ctx.lineWidth = 1;
                    ctx.stroke();

                }
            }
        }


        function getPositionX(event: any) {
            let CursorX = event.clientX;
            return CursorX;
        }

        function getPositionY(event: any) {
            let CursorY = event.clientY;
            return CursorY;
        }
    }, [])
    return (
        <canvas className="CanvasDots absolute z-0 -left-40 -top-36 w-full " style={{
            left: '-328px',
            width: `${widthPage}px`,
        }}>
        </canvas>
    )

}

export default CanvasDotsBackground