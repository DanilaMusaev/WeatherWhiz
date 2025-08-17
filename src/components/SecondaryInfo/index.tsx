import { useWeatherStore } from "../../store/useWeatherStore";
import { Flex } from "../../styledComponents/Flex";
import HumidityIcon from "../../styledComponents/icons/HumidityIcon";
import SunriseIcon from "../../styledComponents/icons/SunriseIcon";
import SunsetIcon from "../../styledComponents/icons/SunsetIcon";
import WindIcon from "../../styledComponents/icons/WindIcon";
import { TempProperty } from "./styles";

const SecondaryInfo = () => {
    const unit = useWeatherStore(state => state.unit);
    const humidity = useWeatherStore((state) => state.current?.humidity);
    const windSpeed = useWeatherStore((state) => state.current?.wind_speed);
    const sunrise = useWeatherStore((state) => state.current?.sunrise);
    const sunset = useWeatherStore((state) => state.current?.sunset);

    return (
        <Flex $align="center" $justify="space-between">
            <Flex $gap="30px">
                <TempProperty>
                    <WindIcon size={25} />
                    <p>Wind: {windSpeed} {unit === 'metric' ? 'm/s' : 'mi/s'}</p>
                </TempProperty>
                <TempProperty>
                    <HumidityIcon size={25} />
                    <p>Humidity: {humidity}%</p>
                </TempProperty>
            </Flex>
            <Flex $gap="30px">
                <TempProperty>
                    <SunriseIcon size={25}/>
                    <p>Sunrise: {sunrise}</p>
                </TempProperty>
                <TempProperty>
                    <SunsetIcon size={25}/>
                    <p>Sunset: {sunset}</p>
                </TempProperty>
            </Flex>
        </Flex>
    );
}
 
export default SecondaryInfo;