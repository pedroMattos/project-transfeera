export function useGetCurrentDateTime(): string {
  const now = new Date()

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')

  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')

  const timezoneOffset = now.getTimezoneOffset()
  const timezoneOffsetHours = Math.floor(Math.abs(timezoneOffset) / 60)
  const timezoneOffsetMinutes = Math.abs(timezoneOffset) % 60
  const timezoneSign = timezoneOffset >= 0 ? '-' : '+'

  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}${timezoneSign}${String(timezoneOffsetHours).padStart(2, '0')}:${String(timezoneOffsetMinutes).padStart(2, '0')}`

  return formattedDateTime
}