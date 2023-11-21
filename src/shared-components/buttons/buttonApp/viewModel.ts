import type { Theme } from '@/types/buttons'

export default class ButtonViewModel {

	getTheme(theme: Theme) {
    switch (theme) {
      case 'outlined':
        return theme
      default:
        return 'tonal'
    }
	}

    getThemeClass(theme: Theme) {
      switch (theme) {
        case 'outlined':
          return 'outlined-btn'
        case 'warn':
          return 'warn-btn'
        case 'danger':
          return 'danger-btn'
        default:
          return 'primary-btn'
      }
    }
}
