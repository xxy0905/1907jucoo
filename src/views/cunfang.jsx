 
           <div>
           <div className={home.navCheng}></div>
                <div className={home.navtop}>
                      <div className={home.left}>s
                              <span>全国</span>
                      </div>
                    <div className={home.center}>
                          <i>图片</i>
                          <span>搜索热门演出</span>
                    </div>
                    <div className={home.right}>
                       <i>图</i>
                    </div>
                </div>
                
              {/* 广告轮播 */}
                <div className={home.swipe}>
                    <Swipe></Swipe>
                </div>
              <section className={home.content}>
                  <div className={home.top}>
                          {
                          this.props.home.data.classify_list.map(v=>(
                              <div className={home.menu} key={v.id}>
                                  <a href='/ticket'>
                                      <div className={home.menuUi}>
                                          <img src={v.pic} alt=""/>
                                      </div>
                                      <div className={home.menuText}>{v.name}</div>
                                  </a>
                              </div>
                          ))
                          } 
                  </div>
                  <div className={home.section_center}>
                          <a href="">
                              <div className={home.section_center_top}>
                                      <div className={home.top_left}>
                                              <i><img className={home.img} src={img1} alt=""/></i>
                                              <span>会员专享折扣</span>
                                      </div>
                                      <div className={home.top_right}>
                                          <span>99元/年</span>
                                      </div>
                              </div>
                          </a>
                      <div className={home.section_center_bottom}>
                          <Swipe2></Swipe2>
                      </div>
                  </div>
                  <div className={home.section_bottom}>
                      <img src="https://image.juooo.com/group1/M00/03/96/rAoKmV6W4RyAdkouAAJa2-GtD74165.png" alt=""/>
                  </div>
              </section>
              {/* 热门演出 */}
              <div className={home.hotslider}>
                  <Tittle  p='热门演出' href='www.baidu.com' right='全部'></Tittle>
                  <HotSlider data={this.props}></HotSlider>
              </div>
              {/* 巡回演出 */}
              {this.props.theTour.state.state?
                <TheTour she={this.state.v} pro={this.props.theTour.state.state}></TheTour>:
                <div/>
              }
              
              {/* 舞台剧 */}
              <div className={home.stage}>
              <Tittle p="舞台剧" href='https://m.juooo.com/show/showsLibrary?cid=0&caid=37'></Tittle>
              <div className={home.stage_content}>
                  <div className={home.stage_content_left}>
                      <img src="https://image.juooo.com//group1/M00/04/21/rAoKNV4Jj32AC3hcAAMtvdtNV6E061.png" alt=""/>
                  </div>
                  <div className={home.stage_content_right}>
                      <p>2020.07.03<span>周五20.00</span></p>
                      <p className={home.stage_content_right_p}>[演出延期]2020第七届城市喜剧荒诞喜剧《解除人生》-深圳站</p>
                      <p>深圳|南山文体中心剧场戏剧小院</p>
                  </div>
              </div>
              <div className={home.state_list}>
              </div>
              </div>


          {/* 为你推荐 */}
          <div className={home.recommended}
           ref={ref=>this.header=ref}
           onScroll={this.fetchData}>
              <Tittle p='为你推荐' className='header'  ></Tittle>
               <div  
               className={home.recommended_content}
               ref={body=>this.scrollDom = body} 
               className='scroll-body' 
               onScroll={this.handleScroll.bind(this)}
               >

              </div>
          </div>




          <div className={home.cheng}>
              {/* <button onClick={this.tiao.bind(this)}>跳转</button> */}
          </div>
          </div>