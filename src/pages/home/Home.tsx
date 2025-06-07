import './home.scss'
import Index from '../../components/home/Index'
import Currency from './Currency';
import Favorite from '../../components/common/favorite/Favorite';
import Recommend from '../../components/common/recommend/Recommend';
import News from '../../components/common/news/News';

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
                         