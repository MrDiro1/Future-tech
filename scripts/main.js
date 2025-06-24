//

import initHeader from './Header.js'
import TabsCollection from './Tabs.js'
import defineScrollBarWidthCSSVar from './utils/defineScrollBarWidthCSSVar.js'
import VideoPlayerCollection from './VideoPlayer.js'
import ExpandableContentCollection from './ExpandableContent.js'
import inputMaskCollection from './inputMask.js'
import SelectCollection from './Select.js'

initHeader()

new TabsCollection()

defineScrollBarWidthCSSVar()

new VideoPlayerCollection()

new ExpandableContentCollection()

new inputMaskCollection()

new SelectCollection()
