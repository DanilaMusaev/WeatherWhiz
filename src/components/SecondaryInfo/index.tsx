import { Flex } from "../../styledComponents/Flex";
import HumidityIcon from "../../styledComponents/icons/HumidityIcon";
import SunriseIcon from "../../styledComponents/icons/SunriseIcon";
import SunsetIcon from "../../styledComponents/icons/SunsetIcon";
import WindIcon from "../../styledComponents/icons/WindIcon";
import { TempProperty } from "./styles";

const SecondaryInfo = () => {
    return (
        <Flex $align="center" $justify="space-between">
            <Flex $gap="30px">
                <TempProperty>
                    <WindIcon size={25} />
                    <p>Wind: 10 km/h</p>
                </TempProperty>
                <TempProperty>
                    <HumidityIcon size={25} />
                    <p>Humidity: 35%</p>
                </TempProperty>
            </Flex>
            <Flex $gap="30px">
                <TempProperty>
                    <SunriseIcon size={25}/>
                    <p>Sunrise: 6:30</p>
                </TempProperty>
                <TempProperty>
                    <SunsetIcon size={25}/>
                    <p>Sunset: 22:38</p>
                </TempProperty>
            </Flex>
        </Flex>
    );
}
 
export default SecondaryInfo;