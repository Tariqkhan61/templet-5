export const animeAtom = atom([
    {
      title: 'Ghost in the Shell',
      year: 1995,
      watched: true
    },
    {
      title: 'Serial Experiments Lain',
      year: 1998,
      watched: false
    }
  ])

function atom(arg0: { title: string; year: number; watched: boolean; }[]) {
    throw new Error("Function not implemented.");
}
