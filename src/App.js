import React, { Component } from "react";
import Searchbar from "./components/searchbar/Searchbar";
import ImageGallery from "./components/imageGallery/ImageGallery";
import Loader from "./components/loader/Loader";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
import ErrorNotification from "./components/errorNotification/ErrorNotification";
import { fetchImages } from "./services/image-api";
import "./App.module.css";

class App extends Component {
  state = {
    data: [],
    isLoading: false,
    isModalOpen: false,
    query: "",
    currentPage: 1,
    largeImg: "",
    error: null
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const data = await fetchImages(this.state.query, this.state.currentPage);
      this.setState({ data: data.data.hits, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.currentPage !== prevState.currentPage) {
      try {
        this.setState({ isLoading: true });
        const data = await fetchImages(
          this.state.query,
          this.state.currentPage
        );

        this.setState(prevState => ({
          data: [...prevState.data, ...data.data.hits],
          isLoading: false
        }));

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth"
        });
      } catch (error) {
        console.log(error);
      }
    } else if (this.state.query !== prevState.query) {
      try {
        const data = await fetchImages(
          this.state.query,
          this.state.currentPage
        );
        this.setState({
          data: [...data.data.hits],
          isLoading: false
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements[1].value;
    this.setState({ query });
  };

  loadMore = () => {
    this.setState(prevState => {
      return {
        isLoading: true,
        currentPage: prevState.currentPage + 1
      };
    });
  };

  openModal = event => {
    this.setState({
      isModalOpen: true
    });

    this.state.data.forEach(item => {
      const targetId = parseInt(event.target.id, 10);
      const currentId = item.id;
      const largeImg = item.largeImageURL;

      if (targetId === currentId) {
        this.setState({ largeImg });
      }
    });
    window.onkeydown = this.closeModal;
  };

  closeModal = event => {
    if (event.code && event.code !== "Escape") {
      return;
    }

    if (event.target.nodeName !== "IMG") {
      this.setState({
        isModalOpen: false
      });
    }
    window.onkeydown = null;
  };

  render() {
    const { data, isLoading, isModalOpen, largeImg, error } = this.state;
    return (
      <>
        <Searchbar onHandleSubmit={this.handleSubmit} />
        {error && <ErrorNotification message={error.message} />}
        {data.length > 0 && (
          <>
            <ImageGallery
              items={data}
              load={isLoading}
              onOpenModal={this.openModal}
            />
            {isLoading ? <Loader /> : <Button onLoadMore={this.loadMore} />}
          </>
        )}
        {isModalOpen && (
          <Modal
            data={data}
            largeImg={largeImg}
            onCloseModal={this.closeModal}
          />
        )}
      </>
    );
  }
}

export default App;
