import { useEffect, useState } from 'react';
import { Progress } from 'react-bulma-components'
import { MAX_SECONDS_PAGE } from 'config';

export default function SliderControls({ onMoveNext: moveNext, onMoveBack: moveBack }) {
    const [sliderCounter, setSliderCounter] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSliderCounter((counter) => counter === MAX_SECONDS_PAGE ? 0 : counter + 1)
            if (sliderCounter === MAX_SECONDS_PAGE) {
                moveNext();
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [sliderCounter, moveNext]);

    return (
        <>
            <Progress max={MAX_SECONDS_PAGE} value={sliderCounter} size="small" />
        </>
    );

}
