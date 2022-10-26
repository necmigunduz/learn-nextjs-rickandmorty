import { GetStaticProps, NextPage } from 'next'
import { Character, GetCharacterResults } from '../types/types'
import Image from 'next/image'
import Link from 'next/link'

const Characters: NextPage<{ characters: Character[] }> = ({ characters }) => {
    return (
        <>
            <Link href={"/"} className="text-blue-300 text-lg mx-12">Back to homepage</Link>
            <h1 className='ml-4 mt-8 font-bold text-3xl'>Rick and Marty Characters</h1>
            <div className='flex flex-wrap justify-start'>
                {characters.map((character) => {
                    return (
                        <div key={character.id} className="m-4">
                            <Image
                                src={character.image}
                                alt={character.name}
                                width={200}
                                height={200}
                            />
                            <p className='text-slate-900'>{character.name}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const { results }: GetCharacterResults = await res.json()
    return {
        props: {
            characters: results
        }
    }
}

export default Characters