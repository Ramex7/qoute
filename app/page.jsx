import Feed from '@components/Feed'
const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>Create and share your</h1>
    <h1 className='head_text text-center'>qoute of the day</h1>
    <p className='desc text-center'>
      QOT is an open-source platform to share what your feeling today with just
      50 letters
    </p>

    <Feed />
  </section>
)

export default Home
