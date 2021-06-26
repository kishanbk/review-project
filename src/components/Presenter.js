import React from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";


const Presenter = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <ScrollContainer>
            <div id="pg1">
                <ScrollPage page={0} >
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                        <span style={{ fontSize: "2.5em", color: 'white' }}>
                            Get a Different Stream Gaming Experience.
                        </span>
                    </Animator>
                </ScrollPage>
            </div>
            <div id="pg2">
                <ScrollPage page={1}>
                    <Animator animation={FadeUp}>
                        <span style={{ fontSize: "2.5em", color: 'white' }}>
                            With our latest ML Recommandation System.
                        </span>
                    </Animator>
                </ScrollPage>
            </div>
            <div id="pg3">
                <ScrollPage page={2}>
                    <Animator animation={FadeUp}>
                        <span style={{ fontSize: "2.5em", color: 'white' }}>
                            So What's You been Waiting for? </span>
                    </Animator>
                </ScrollPage>
            </div>
            <div id="pg4">
                <ScrollPage page={3}>
                    <Animator animation={FadeUp}>
                        <span style={{ fontSize: "2.5em", color: '#3498DB' }}>
                            Join Us for getting an revolutionary change with you Gaming Experience.
                        </span>
                    </Animator>
                </ScrollPage>
            </div>
            <div id="pg5">
                <ScrollPage page={4}>
                    <Animator animation={batch(Fade(), Sticky())}>
                        <div style={{ fontSize: "5em", textAlign: "center" }}>
                            <i class="fab fa-steam"> </i>&nbsp;
                            <i class="fas fa-plus"> </i>&nbsp;
                            <i class="fas fa-server"> </i>
                        </div>
                        <br />
                        <br />
                        <span style={{ fontSize: "2vh" }}>

                            <div style={{ textAlign: "center" }}>
                                <button>Sign in through <i class="fab fa-steam"></i>Stream</button>
                            </div>
                            <br />
                            <br />
                            <div id="terms">
                                <p>
                                    Logging into SteamDB allows you to access additional features.
                                    To provide a better service we will fetch public information about your account from the Steam Web API (this includes steamid, profile name, avatar, and game list).
                                </p>
                            </div>
                        </span>
                    </Animator>
                </ScrollPage>
            </div>
        </ScrollContainer >
    );
};

export default Presenter;