import './propertyList.css';

const PropertyList = () => {
  return (
    <div className='pList'>
      <div className='pListItem'>
        <img
          src='https://images.unsplash.com/photo-1532194579966-1455bade30d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNpdGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          alt=''
          className='pListImg'
        />
        <div className='pListTitles'>
          <h1>Hotels</h1>
          <h2>255</h2>
        </div>
      </div>
      <div className='pListItem'>
        <img
          src='https://images.unsplash.com/photo-1545469045-d0c82c7fc7bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNpdGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          alt=''
          className='pListImg'
        />
        <div className='pListTitles'>
          <h1>Resorts</h1>
          <h2>255</h2>
        </div>
      </div>
      <div className='pListItem'>
        <img
          src='https://images.unsplash.com/photo-1588733103629-b77afe0425ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNpdGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          alt=''
          className='pListImg'
        />
        <div className='pListTitles'>
          <h1>Apartments</h1>
          <h2>2605</h2>
        </div>
      </div>
      <div className='pListItem'>
        <img
          src='https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNpdGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          alt=''
          className='pListImg'
        />
        <div className='pListTitles'>
          <h1>Villas</h1>
          <h2>2556</h2>
        </div>
      </div>
      <div className='pListItem'>
        <img
          src='https://images.unsplash.com/photo-1516563973696-145e6e4cd90c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNpdGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          alt=''
          className='pListImg'
        />
        <div className='pListTitles'>
          <h1>Cabins</h1>
          <h2>2554</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
