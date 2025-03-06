import tippy, {createSingleton} from 'tippy.js/headless';
import TippyGenerator from './Tippy';
import useSingletonGenerator from './useSingleton';

const useSingleton = useSingletonGenerator(createSingleton);

// Export the Tippy component directly without forwardRef
export default TippyGenerator(tippy);
export {useSingleton, tippy};
