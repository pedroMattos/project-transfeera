import { useRoute } from '@/composables/useRoute'
import type { Destination } from '@/types/destination'
import HeaderLinkDto from './dtos/header_link.dto'

export default class HeaderViewModel {

	goToDestination(destination: Destination) {
		return useRoute().push(destination)
	}

    getHeaderLinks() {
        const headerLinks = [new HeaderLinkDto('Seus favorecidos', '/clients')]

        return headerLinks
    }
}
