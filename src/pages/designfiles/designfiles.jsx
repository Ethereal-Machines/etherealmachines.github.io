/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';
import * as actionType from '../../store/actions/action-type';
import Modal from '../../components/ui/modal/modal'
// importing the API used for this page
import getResource from '../../services/api/get-resource';
import pubUnpubDesignFiles from '../../services/api/designfiles-unpublised'
import deleteMedia from '../../services/api/resource-delete'
// importing UI component used
import SectionHeading from '../../components/pages-component/section-heading/section-heading';
import PageBanner from '../../components/ui/page-banner/page-banner';

import ContentLoader from '../../components/ui/content-loader/content-loader';
import ContactUsBanner from '../../components/pages-component/contact-us-banner/contact-us-banner';
import './designfiles.css';
import '../../components/pages-component/button/button.css'
// import { Helmet } from "react-helmet";
import DocumentMeta from 'react-document-meta';

import ShowMsg from '../../components/pages-component/showMSG/msg'
import DesignFilesForm from './components/designfiles-form/designfiles-form';
import DesignFilesItem from './components/designfiles-item/designfiles-item';
import Header from '../../components/layout/header/header';
import Footer from '../../components/layout/footer/footer';

class DesignFiles extends Component {
   state = {
    loadingContent: this.props.firstRun ? true : false,
    showModal: false,
    createMedia:false,
    updateMedia:false,
    mediaId:'',
    msg:false,
    msgContent:'',
    attention:false
  }

  ongetResource = () => {
    this.setState({
      loadingContent: false
    });
       let data1 =  [{
        "id": 1,
        "title": "COVID-19 | 3D PRINTING AND CNC SOLUTIONS",
        "link": "https://3drenders.glideapp.io/",
        "is_filesattached": true,
        "is_public": true,
        "file1": "https://ethereal-website.s3-ap-southeast-1.amazonaws.com/static/COVID-19/appicon.png",
        "file2": null,
        "file3": null,
        "file4": null,
        "file5": null,
        "description": "We have built an app with the design files that can be manufactured locally. The maker community can use this to add designs, get proven design files and hospitals can use it to make requests for any particular design/part they want. Members of the maker community can look up requests and take up projects depending on their capacity. Given the lockdown, we need to be ready to distribute manufacturing capability to all parts of the country. Let's fight #COVID19A collection of all 3D printable products and requests from healthcare staff." ,
     }
    ,{
        "id": 2,
        "title": "DIFFERENTIAL VENTILATOR SPLITTER",
        "link": "https://drive.google.com/drive/folders/1SOv0lzhADn2JY50EPHhyOzWX_-2xcg6V",
        "is_filesattached": true,
        "is_public": true,
        "file1": "https://ethereal-website.s3-ap-southeast-1.amazonaws.com/static/COVID-19/WhatsApp+Image+2020-03-30+at+5.36.39+PM.jpeg",
        "file2": null,
        "file3": null,
        "file4": null,
        "file5": null,
        "description": "Our team has tested a 3D printed ventilator splitter at Aster Hospital, Bangalore. The part splits the supply into a 50-50 ratio. This part aids in splitting the supply of oxygen from one source to two patients. The above design is an upgrade to the existing 2-way splitter that was shared a couple of days ago with the community.Below is a brief explanation of the design and the different components that are a part of it. Please refer to the above image for a better understanding of the part being discussed. There are two 2-way splitters that are connected to the circuit, one on the inspiration side and the other on the expiration side. On the inspiration side we have a ball valve connected to one of the two outputs which is used to control the volume of gas going into the lung connected to that output. This helps us in achieving differential ventilation by restricting the amount of gas flowing into the circuit. A simple splitter is being used in dire circumstances right now in order to ventilate two patients with a 50-50% capacity. Differential ventilation is required in the case that the split ratio between two patients from a splitter has to be 30-70 for example in the case that one patient is healthy and another patient’s condition is deteriorating. Now on the expiration side we have two flow control valves (non-return) connected. It is connected such that it will only let the gases to go out and prevent it from getting back in the circuit. What this does is it prevents the gas from Patient 1’s lungs from going into Patient-2 thus preventing the lungs from getting ventilated because of each other and also it prevents the chances of cross contamination because of gas exchange.",
         },
    {
        "id": 3,
        "title": "Explaining Differential Ventilator Splitter",
        "link": "https://www.facebook.com/AsterBangalore/videos/726789408129961/",
        "is_filesattached": true,
        "is_public": true,
        "file1": "https://ethereal-website.s3-ap-southeast-1.amazonaws.com/static/COVID-19/WhatsApp+Image+2020-03-30+at+5.37.57+PM.jpeg",
        "file2": null,
        "file3": null,
        "file4": null,
        "file5": null,
        "description": "Doctors from Aster CMI Hospital in Bangalore and a team from Ethereal Machines demonstrate the prototype ventilator splitter for CoVID19 Surge and explain a few misgivings about utilizing a splitter.",
         }]
      this.props.onUpdateDesignFilesItems(data1);
      this.props.onUpdateFirstRun(false);
    }
  



  componentDidMount() {
    document.title = `MIA | Ethereal Machines | Bangalore, India`;
    // scrolling the component to the top when the page is mounted
    window.scrollTo(0, 0);

    /**
     * If the component is being loaded for the first time
     * then fetch the media items available on the server. If component is
     * not loaded for the first time, no need to fetch the media
     * items from the server. The Redux Store will have all the
     * available items.
    */
    if (this.props.firstRun) {
      this.ongetResource()
    }
  }

  addMedia = () => {
    this.setState({
      ...this.state,
      showModal: true,
      createMedia: true
    })
  };
  closeModal = () => {
    this.setState({
      ...this.state,
      showModal: false,
      mediaId: '',
      msg:false,
      msgContent:'',
      attention:false,
      createMedia: false,
      updateMedia:false
    });
  }
  onUpdate = (id) => {
    this.setState({
      ...this.state,
      showModal: true,
      mediaId: id,
      updateMedia:true
    })
  };

  unPublishCallback = (data) => {
    if(data.status === 200){
      this.setState({
        msg:true,
        msgContent: 'Successfully Changed',
        showModal: true,
        attention:false
      })
    }else{
      this.setState({
        msg:true,
        msgContent: 'Something Went Wrong',
        showModal: true,
        attention:true
      })
    }
  };
  
  publishMedia = (id) => {
    const data = {
      id: id,
      publish: true
    }
    pubUnpubDesignFiles(this.unPublishCallback,id,{publish:true})
    this.props.pubUnpubDesignFiles(data)
  };
  unpublishMedia = (id) => {
    const data = {
      id: id,
      publish: false
    }
    pubUnpubDesignFiles(this.unPublishCallback,id,{publish:false})
    this.props.pubUnpubDesignFiles(data)
  };

  deleteJobCallback = (data) => {
    if(data.status === 204){
      this.setState({
        msg:true,
        msgContent: 'Successfully Deleted',
        showModal: true,
        attention: false
      })
    }else{
      this.setState({
        msg:true,
        msgContent: 'Something Went Wrong',
        showModal: true,
        attention: true
      })
    }
  };
  deleteMedia = (id) => {
    deleteMedia(this.deleteJobCallback,id)
    this.props.deleteMedia(id)
  };

  render() {
    const media = this.props.mediaItems.map(item => {
      if(item.is_public){
        return (
          <LazyLoad height={200} offset={100} placeholder={<ContentLoader />} once key={item.id}>
            <DesignFilesItem 
              item={item} 
              onUpdate={this.onUpdate} 
              session={this.props.session.session}
              publishMedia={this.publishMedia} 
              unpublishMedia={this.unpublishMedia}
              deleteMedia = {this.deleteMedia}
            />
          </LazyLoad>
        );
      }
      console.log(item)
      }
      );

    let mediaLoader = [];

    for (let i = 0; i < 6; i++) {
      mediaLoader.push(
        <ContentLoader key={i + '_loader'} />
      );
    }
    const meta = {
      title: 'Media Coverage – CNC Machine,3D printer |Ethereal Machines-Bangalore, India.',
      meta: {
        property: {
          'title': 'Media Coverage – CNC Machine,3D printer |Ethereal Machines-Bangalore, India.',
           'description': 'Ethereal Machines – Media Coverage: simultaneous 5-axis CNC Machine & 3D Printer.',
          }
      }
    };
    return (
      <React.Fragment>
      <div className="page page--media">
      <Header />
        {/* <Helmet>
        <title>Media Coverage – CNC Machine,3D printer |Ethereal Machines-Bangalore, India.</title>
        <meta name="description" content="Ethereal Machines – Media Coverage: simultaneous 5-axis CNC Machine & 3D Printer."/>
        </Helmet> */}
        <DocumentMeta {...meta} />

        {
          this.state.msg
            ?
            <Modal show={this.state.showModal} clicked={this.closeModal}>
              <ShowMsg msg={this.state.msgContent} attention={this.state.attention}/>
            </Modal>
            : null
        }
        {
          this.state.updateMedia || this.state.createMedia
          ?
          <Modal show={this.state.showModal} clicked={this.closeModal} >
            <DesignFilesForm 
              mediaId={this.state.mediaId} 
              closeModal={this.closeModal}
              updateMedia={this.state.updateMedia}
            />
          </Modal>
          : null
        }
          <PageBanner heading={"Ethereal Machines in Design Files"} classValue={'page-banner--media'}/>
          <section className="section section--media">
            <div className="container">
              {/* <SectionHeading name={"What media says about us"} classValue={"u-margin-bottom-big u-text-center"}/> */}
              
                  {/* this.props.session.session */}
                 
              <div className="media-container"style={{width:'70%'}}>
                
                {
                  this.state.loadingContent ? 
                  mediaLoader :
                  media
                }
              </div>
            </div>
          </section>
          {/*<section className="section section--contact-us">
            <div className="container">
                <SectionHeading name={"Contact Us"} classValue={"u-margin-bottom-big u-text-center"}/>
                <ContactUsBanner
                  firstText={"We are excited to tell you more about our story."}
                  secondText={"Let's get in touch."}
                />
            </div>
              </section> */}
              <Footer />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstRun: state.media.firstRun,
    mediaItems: state.media.mediaItems,
    session: state.login
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateFirstRun: (firstRun) => {
      dispatch({
        type: actionType.UPDATE_FIRST_RUN_MEDIA,
        value: firstRun
      });
    },
    onUpdateDesignFilesItems: (mediaItems) => {
      dispatch({
        type: actionType.UPDATE_MEDIA_ITEMS,
        value: mediaItems
      });
    },
    pubUnpubDesignFiles: (data) => {
      dispatch({
        type: actionType.UNPUBLISHED_MEDIA,
        value: data
      });
    },
    deleteMedia: (data) => {
      dispatch({
        type: actionType.DELETE_MEDIA,
        value: data
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DesignFiles);