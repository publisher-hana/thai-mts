import './home.scss'
import Index from '../../components/home/Index'
import Recommend from './recommend/Recommend';
import Favorite from './favorite/Favorite';
import News from './news/News';
import Currency from './Currency';

export const Home = () => {
  return (
    <>
      <Index />
      <Recommend />
      <Favorite />
      <Currency />
      <News />
    </>
  )
};
                         