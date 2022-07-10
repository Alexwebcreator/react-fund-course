import React, {useMemo, useRef, useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import MyModal from './components/UI/MyModal/MyModal';
import MySelect from './components/UI/select/MySelect';
import './styles/app.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'bAss', body: 'Description'},
    {id: 2, title: 'ass', body: 'mescription'},
    {id: 3, title: 'Jass', body: 'aescription'}
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter 
        filter={filter} 
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
    </div>
  );
}

export default App;
