import Link from "next/link"
import Image from "next/image"
import poster from '../assets/poster.JPG'

const About = () => {
    return (
        <>
            <Link href={'/'} className="mx-12 text-blue-300" >Back to homepage</Link>
            <h1 className='mx-12 my-2 text-slate-900 text-3xl font-bold'>About Rick and Morty</h1>
            <div className='flex justify-center bg-slate-600'>
                <Image
                    src={poster}
                    alt="Rick and Morty"
                    width={900}
                    height={1200}
                    className="mx-6 py-4 rounded-[8em]"
                />
                <p className='text-justify my-10 p-8 border rounded-3xl text-white'>
                    Rick and Morty is an American adult animated science-fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. It is distributed internationally by Warner Bros. Domestic Television. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often travelling to other planets and dimensions through portals and on Rick's flying saucer. The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama, and an alcoholic grandfather dragging his grandson into high jinks.

                    Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer, and Sarah Chalke voicing the rest of Rick and Morty's family. The series originated from an animated short parody film of Back to the Future created by Roiland for Channel 101, a short-film festival cofounded by Harmon. Since its debut, the series has received critical acclaim for its originality, creativity, and humor. They have been nominated for three Primetime Emmy Awards for Outstanding Animated Program and won the award in 2018 and 2020. They've also received two Annie Awards. The series has several times been the most viewed television comedy of adults. The popularity of Rick and Morty has made it a billion-dollar merchandising and media franchise.

                    The fifth season premiered on June 20, 2021, and consisted of ten episodes. The sixth season started airing on September 4, 2022,[2] and is currently in hiatus after the release of the season's sixth episode. A seventh season was confirmed as part of a long-term deal with Cartoon Network that ordered 70 new episodes.[3]
                </p>
            </div>
        </>

    )
}

export default About