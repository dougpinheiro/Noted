import md5 from 'md5'

export const doEncrypt = word => md5(word)
