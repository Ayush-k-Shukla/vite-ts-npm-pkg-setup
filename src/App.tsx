import './App.scss';

/** This will be done in order to utc formatting work in dayjs */
import dayjs from 'dayjs/esm/index';
import advancedFormat from 'dayjs/esm/plugin/advancedFormat';
import customParseFormat from 'dayjs/esm/plugin/customParseFormat';
import localData from 'dayjs/esm/plugin/localeData';
import timezone from 'dayjs/esm/plugin/timezone';
import utc from 'dayjs/esm/plugin/utc';

dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(customParseFormat);
dayjs.extend(timezone);
dayjs.extend(localData);

function App() {
    return (
        <>
            <div>
                <p>My app test</p>
            </div>
        </>
    );
}

export default App;
