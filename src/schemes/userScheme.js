import { z } from 'zod'

export const userScheme = z.object({
    email: z.string().max(50).email(),
    password: z.string().max(50),
    country: z.enum(['China', 'India', 'United States', 'Indonesia', 'Pakistan', 'Brazil', 'Nigeria',  'Bangladesh', 'Russia', 'Mexico', 'Japan', 'Ethiopia', 'Philippines', 'Egypt',  'Vietnam', 'DR Congo', 'Turkey', 'Iran', 'Germany', 'Thailand', 'Argentina',  'Spain', 'England', 'Italy', 'International']),
    sport: z.enum(['Futbol', 'Basquetball', 'Formula 1']),
    username: z.string().max(50),
})

export function validateUser (object) {
    return userScheme.safeParse(object)
};