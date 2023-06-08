import Vue from 'vue'
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue'
import ChevronUpIcon from 'vue-material-design-icons/ChevronUp.vue'
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue'
import PlusThickIcon from 'vue-material-design-icons/PlusThick.vue'
import MinusThickIcon from 'vue-material-design-icons/MinusThick.vue'
import ArrowUpIcon from 'vue-material-design-icons/ArrowUp.vue'
import ArrowRightIcon from 'vue-material-design-icons/ArrowRight.vue'
import CheckCircleIcon from 'vue-material-design-icons/CheckCircle.vue'
import SegmentIcon from 'vue-material-design-icons/Segment.vue'
import CloseIcon from 'vue-material-design-icons/Close.vue'
import PhoneIcon from 'vue-material-design-icons/Phone.vue'
import MailIcon from 'vue-material-design-icons/Mail.vue'
import FacebookIcon from 'vue-material-design-icons/Facebook.vue'
const components = {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronRightIcon,
  PlusThickIcon,
  MinusThickIcon,
  ArrowUpIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  SegmentIcon,
  CloseIcon,
  PhoneIcon,
  MailIcon,
  FacebookIcon
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
