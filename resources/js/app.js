import {version} from '../../package.json';
import { createApp, h } from 'vue'
import { InertiaProgress } from '@inertiajs/progress'
import { createInertiaApp } from '@inertiajs/inertia-vue3'

import PrimeVue from 'primevue/config';
import AutoComplete from 'primevue/autocomplete';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Badge from 'primevue/badge';
import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import CascadeSelect from 'primevue/cascadeselect';
import Carousel from 'primevue/carousel';
import Chart from 'primevue/chart';
import Checkbox from 'primevue/checkbox';
import Chip from 'primevue/chip';
import Chips from 'primevue/chips';
import ColorPicker from 'primevue/colorpicker';
import Column from 'primevue/column';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import ContextMenu from 'primevue/contextmenu';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import Dropdown from 'primevue/dropdown';
import Fieldset from 'primevue/fieldset';
import FileUpload from 'primevue/fileupload';
import Galleria from 'primevue/galleria';
import Image from 'primevue/image';
import InlineMessage from 'primevue/inlinemessage';
import Inplace from 'primevue/inplace';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import Knob from 'primevue/knob';
import Listbox from 'primevue/listbox';
import MegaMenu from 'primevue/megamenu';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';
import MultiSelect from 'primevue/multiselect';
import OrderList from 'primevue/orderlist';
import OrganizationChart from 'primevue/organizationchart';
import OverlayPanel from 'primevue/overlaypanel';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import Password from 'primevue/password';
import PickList from 'primevue/picklist';
import ProgressBar from 'primevue/progressbar';
import Rating from 'primevue/rating';
import RadioButton from 'primevue/radiobutton';
import Ripple from 'primevue/ripple';
import SelectButton from 'primevue/selectbutton';
import ScrollPanel from 'primevue/scrollpanel';
import ScrollTop from 'primevue/scrolltop';
import Skeleton from 'primevue/skeleton';
import Slider from 'primevue/slider';
import Sidebar from 'primevue/sidebar';
import SplitButton from 'primevue/splitbutton';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Steps from 'primevue/steps';
import TabMenu from 'primevue/tabmenu';
import TieredMenu from 'primevue/tieredmenu';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import Toolbar from 'primevue/toolbar';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Tag from 'primevue/tag';
import Timeline from 'primevue/timeline';
import ToggleButton from 'primevue/togglebutton';
import Tooltip from 'primevue/tooltip';
import Tree from 'primevue/tree';
import TreeSelect from 'primevue/treeselect';
import TreeTable from 'primevue/treetable';
import TriStateCheckbox from 'primevue/tristatecheckbox';


import PrimeVueLocale from './locale/it/PrimeVue';
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
import BadgeDirective from "primevue/badgedirective";

import 'primevue/resources/themes/saga-blue/theme.css'  //theme
import 'primevue/resources/primevue.css'            //core css
import 'primeicons/primeicons.css'                      //icons

InertiaProgress.init()

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  title: title => title ? `${title} - ETS Facile` : 'ETS Facile',
  setup({ el, App, props, plugin }) {
    const VueApp = createApp({ render: () => h(App, props) });
    VueApp.config.globalProperties.$version = version;
    VueApp.use(plugin)
      .use(PrimeVue, {
        locale: PrimeVueLocale
      })
      .use(ToastService)
      .use(ConfirmationService)
        .component('Accordion', Accordion)
        .component('AccordionTab', AccordionTab)
        .component('AutoComplete', AutoComplete)
        .component('Avatar', Avatar)
        .component('AvatarGroup', AvatarGroup)
        .component('Badge', Badge)
        .component('Breadcrumb', Breadcrumb)
        .component('Button', Button)
        .component('Calendar', Calendar)
        .component('Card', Card)
        .component('Carousel', Carousel)
        .component('CascadeSelect', CascadeSelect)
        .component('Chart', Chart)
        .component('Checkbox', Checkbox)
        .component('Chip', Chip)
        .component('Chips', Chips)
        .component('ColorPicker', ColorPicker)
        .component('Column', Column)
        .component('ConfirmDialog', ConfirmDialog)
        .component('ConfirmPopup', ConfirmPopup)
        .component('ContextMenu', ContextMenu)
        .component('DataTable', DataTable)
        .component('DataView', DataView)
        .component('DataViewLayoutOptions', DataViewLayoutOptions)
        .component('Dialog', Dialog)
        .component('Divider', Divider)
        .component('Dropdown', Dropdown)
        .component('Fieldset', Fieldset)
        .component('FileUpload', FileUpload)
        .component('Galleria', Galleria)
        .component('Image', Image)
        .component('InlineMessage', InlineMessage)
        .component('Inplace', Inplace)
        .component('InputMask', InputMask)
        .component('InputNumber', InputNumber)
        .component('InputSwitch', InputSwitch)
        .component('InputText', InputText)
        .component('Knob', Knob)
        .component('Listbox', Listbox)
        .component('MegaMenu', MegaMenu)
        .component('Menu', Menu)
        .component('Menubar', Menubar)
        .component('Message', Message)
        .component('MultiSelect', MultiSelect)
        .component('OrderList', OrderList)
        .component('OrganizationChart', OrganizationChart)
        .component('OverlayPanel', OverlayPanel)
        .component('Paginator', Paginator)
        .component('Panel', Panel)
        .component('PanelMenu', PanelMenu)
        .component('Password', Password)
        .component('PickList', PickList)
        .component('ProgressBar', ProgressBar)
        .component('RadioButton', RadioButton)
        .component('Ripple', Ripple)
        .component('Rating', Rating)
        .component('SelectButton', SelectButton)
        .component('ScrollPanel', ScrollPanel)
        .component('ScrollTop', ScrollTop)
        .component('Slider', Slider)
        .component('Sidebar', Sidebar)
        .component('Skeleton', Skeleton)
        .component('SplitButton', SplitButton)
        .component('Splitter', Splitter)
        .component('SplitterPanel', SplitterPanel)
        .component('Steps', Steps)
        .component('TabMenu', TabMenu)
        .component('TabView', TabView)
        .component('TabPanel', TabPanel)
        .component('Tag', Tag)
        .component('Textarea', Textarea)
        .component('TieredMenu', TieredMenu)
        .component('Timeline', Timeline)
        .component('Toast', Toast)
        .component('Toolbar', Toolbar)
        .component('ToggleButton', ToggleButton)
        .component('Tooltip', Tooltip)
        .component('Tree', Tree)
        .component('TreeSelect', TreeSelect)
        .component('TreeTable', TreeTable)
        .component('TriStateCheckbox', TriStateCheckbox)
      .mount(el)
  },
})
