import { createApp } from 'vue';
import App from './App.vue';
import NovaDesign from 'nova-design';
import '../src/assets/styles/index.scss'
import * as svgIcons from '@nova-design/icons'
import '@nova-design/icons/dist/index.css'
import en from 'nova-design/es/locale/lang/en'

import {
  SysHome,
  SysSelected,
  SysClose,
  SysDoubleArrowRight,
  SysDoubleArrowLeft,
  SysDoubleArrowUp,
  SysDoubleArrowDown,
  SysImage,
  SysUpload,
  SysDownload,
  SysShow,
  SysHidden,
  SysClock,
  SysCalendar,
  SysDatetime,
  SysFilter,
  SysFile,
  SysRefresh,
  SysSearch,
  SysZoomIn,
  SysZoomOut,
  SysMaximize,
  SysMinimize,
  SysMore,
  SysSuccess,
  SysWarning,
  SysError,
  SysInfo,
  SysStar,
  SysStarFill,
  SysSuccessFill,
  SysWarningFill,
  SysErrorFill,
  SysInfoFill,
  SysAdd,
  SysRemove,
  SysArrowUp,
  SysArrowDown,
  SysArrowLeft,
  SysArrowRight,
  SysSelectArrow,
  SysChecked,
  SysClearble,
  SysCaret,
  SysCaretUp,
  SysIndeterminate,
  SysHandle,
  SysLoading,
} from 'nova-design'

const app = createApp(App);

Object.keys(svgIcons).forEach(key => {
  app.component(key, (svgIcons as any)[key])
})

const SystemIcons: any = {
  SysHome,
  SysSelected,
  SysClose,
  SysDoubleArrowRight,
  SysDoubleArrowLeft,
  SysDoubleArrowUp,
  SysDoubleArrowDown,
  SysImage,
  SysUpload,
  SysDownload,
  SysShow,
  SysHidden,
  SysClock,
  SysCalendar,
  SysDatetime,
  SysFilter,
  SysFile,
  SysRefresh,
  SysSearch,
  SysZoomIn,
  SysZoomOut,
  SysMaximize,
  SysMinimize,
  SysMore,
  SysSuccess,
  SysWarning,
  SysError,
  SysInfo,
  SysStar,
  SysStarFill,
  SysSuccessFill,
  SysWarningFill,
  SysErrorFill,
  SysInfoFill,
  SysAdd,
  SysRemove,
  SysArrowUp,
  SysArrowDown,
  SysArrowLeft,
  SysArrowRight,
  SysSelectArrow,
  SysChecked,
  SysClearble,
  SysCaret,
  SysCaretUp,
  SysIndeterminate,
  SysHandle,
  SysLoading,
}

Object.keys(SystemIcons).forEach(key => {
  app.component(key, SystemIcons[key])
})

app.use(NovaDesign, {
  locale: en,
})
app.mount('#app')