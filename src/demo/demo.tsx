import React from 'react';
// *** assume open-props is loaded ***
import { stVars as openPropsStVars } from '../open-props-interface.st.css';
import { st, classes, vars } from './demo.st.css';

export interface DemoProps {
    className?: string;
}

export const Demo: React.FC<DemoProps> = ({ className }) => {
    const [gradientNoiseIndex, setGradientNoiseIndex] = React.useState(0);
    const [gradientFilterIndex, setGradientFilterIndex] = React.useState(0);

    let gradientNoise = '';
    let gradientFilter = '';
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const anyVars = openPropsStVars as any;
    if (gradientNoiseIndex) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        gradientNoise = anyVars['noise'][gradientNoiseIndex - 1] || '';
    }
    if (gradientFilterIndex) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        gradientFilter = anyVars['noise-filter'][gradientFilterIndex - 1] || '';
    }
    return (
        <main className={st(classes.root, className)}>
            <section className={classes.section}>
                <header>
                    <h2>Colors</h2>
                </header>
                <section className={st(classes.section, { layout: 'line' })}>
                    <h3>Gray</h3>
                    <div className={classes.content}>
                        <div className={st(classes.sample, classes.gray0)} data-label="0"></div>
                        <div className={st(classes.sample, classes.gray1)} data-label="1"></div>
                        <div className={st(classes.sample, classes.gray2)} data-label="2"></div>
                        <div className={st(classes.sample, classes.gray3)} data-label="3"></div>
                        <div className={st(classes.sample, classes.gray4)} data-label="4"></div>
                        <div className={st(classes.sample, classes.gray5)} data-label="5"></div>
                        <div className={st(classes.sample, classes.gray6)} data-label="6"></div>
                        <div className={st(classes.sample, classes.gray7)} data-label="7"></div>
                        <div className={st(classes.sample, classes.gray8)} data-label="8"></div>
                        <div className={st(classes.sample, classes.gray9)} data-label="9"></div>
                    </div>
                </section>
                <section className={st(classes.section, { layout: 'line' })}>
                    <h3>Red</h3>
                    <div className={classes.content}>
                        <div className={st(classes.sample, classes.red0)} data-label="0"></div>
                        <div className={st(classes.sample, classes.red1)} data-label="1"></div>
                        <div className={st(classes.sample, classes.red2)} data-label="2"></div>
                        <div className={st(classes.sample, classes.red3)} data-label="3"></div>
                        <div className={st(classes.sample, classes.red4)} data-label="4"></div>
                        <div className={st(classes.sample, classes.red5)} data-label="5"></div>
                        <div className={st(classes.sample, classes.red6)} data-label="6"></div>
                        <div className={st(classes.sample, classes.red7)} data-label="7"></div>
                        <div className={st(classes.sample, classes.red8)} data-label="8"></div>
                        <div className={st(classes.sample, classes.red9)} data-label="9"></div>
                    </div>
                </section>
                <section className={st(classes.section, { layout: 'line' })}>
                    <h3>Pink</h3>
                    <div className={classes.content}>
                        <div className={st(classes.sample, classes.pink0)} data-label="0"></div>
                        <div className={st(classes.sample, classes.pink1)} data-label="1"></div>
                        <div className={st(classes.sample, classes.pink2)} data-label="2"></div>
                        <div className={st(classes.sample, classes.pink3)} data-label="3"></div>
                        <div className={st(classes.sample, classes.pink4)} data-label="4"></div>
                        <div className={st(classes.sample, classes.pink5)} data-label="5"></div>
                        <div className={st(classes.sample, classes.pink6)} data-label="6"></div>
                        <div className={st(classes.sample, classes.pink7)} data-label="7"></div>
                        <div className={st(classes.sample, classes.pink8)} data-label="8"></div>
                        <div className={st(classes.sample, classes.pink9)} data-label="9"></div>
                    </div>
                </section>
                <section className={st(classes.section, { layout: 'line' })}>
                    <h3>Grape</h3>
                    <div className={classes.content}>
                        <div className={st(classes.sample, classes.grape0)} data-label="0"></div>
                        <div className={st(classes.sample, classes.grape1)} data-label="1"></div>
                        <div className={st(classes.sample, classes.grape2)} data-label="2"></div>
                        <div className={st(classes.sample, classes.grape3)} data-label="3"></div>
                        <div className={st(classes.sample, classes.grape4)} data-label="4"></div>
                        <div className={st(classes.sample, classes.grape5)} data-label="5"></div>
                        <div className={st(classes.sample, classes.grape6)} data-label="6"></div>
                        <div className={st(classes.sample, classes.grape7)} data-label="7"></div>
                        <div className={st(classes.sample, classes.grape8)} data-label="8"></div>
                        <div className={st(classes.sample, classes.grape9)} data-label="9"></div>
                    </div>
                </section>
                <section className={st(classes.section, { layout: 'line' })}>
                    <h3>Violet</h3>
                    <div className={classes.content}>
                        <div className={st(classes.sample, classes.violet0)} data-label="0"></div>
                        <div className={st(classes.sample, classes.violet1)} data-label="1"></div>
                        <div className={st(classes.sample, classes.violet2)} data-label="2"></div>
                        <div className={st(classes.sample, classes.violet3)} data-label="3"></div>
                        <div className={st(classes.sample, classes.violet4)} data-label="4"></div>
                        <div className={st(classes.sample, classes.violet5)} data-label="5"></div>
                        <div className={st(classes.sample, classes.violet6)} data-label="6"></div>
                        <div className={st(classes.sample, classes.violet7)} data-label="7"></div>
                        <div className={st(classes.sample, classes.violet8)} data-label="8"></div>
                        <div className={st(classes.sample, classes.violet9)} data-label="9"></div>
                    </div>
                </section>
                <section className={st(classes.section, { layout: 'line' })}>
                    <h3>Indigo</h3>
                    <div className={classes.content}>
                        <div className={st(classes.sample, classes.indigo0)} data-label="0"></div>
                        <div className={st(classes.sample, classes.indigo1)} data-label="1"></div>
                        <div className={st(classes.sample, classes.indigo2)} data-label="2"></div>
                        <div className={st(classes.sample, classes.indigo3)} data-label="3"></div>
                        <div className={st(classes.sample, classes.indigo4)} data-label="4"></div>
                        <div className={st(classes.sample, classes.indigo5)} data-label="5"></div>
                        <div className={st(classes.sample, classes.indigo6)} data-label="6"></div>
                        <div className={st(classes.sample, classes.indigo7)} data-label="7"></div>
                        <div className={st(classes.sample, classes.indigo8)} data-label="8"></div>
                        <div className={st(classes.sample, classes.indigo9)} data-label="9"></div>
                    </div>
                </section>
                <section className={st(classes.section, { layout: 'line' })}>
                    <h3>Blue</h3>
                    <div className={classes.content}>
                        <div className={st(classes.sample, classes.blue0)} data-label="0"></div>
                        <div className={st(classes.sample, classes.blue1)} data-label="1"></div>
                        <div className={st(classes.sample, classes.blue2)} data-label="2"></div>
                        <div className={st(classes.sample, classes.blue3)} data-label="3"></div>
                        <div className={st(classes.sample, classes.blue4)} data-label="4"></div>
                        <div className={st(classes.sample, classes.blue5)} data-label="5"></div>
                        <div className={st(classes.sample, classes.blue6)} data-label="6"></div>
                        <div className={st(classes.sample, classes.blue7)} data-label="7"></div>
                        <div className={st(classes.sample, classes.blue8)} data-label="8"></div>
                        <div className={st(classes.sample, classes.blue9)} data-label="9"></div>
                    </div>
                </section>
                <section className={st(classes.section, { layout: 'line' })}>
                    <h3>Cyan</h3>
                    <div className={classes.content}>
                        <div className={st(classes.sample, classes.cyan0)} data-label="0"></div>
                        <div className={st(classes.sample, classes.cyan1)} data-label="1"></div>
                        <div className={st(classes.sample, classes.cyan2)} data-label="2"></div>
                        <div className={st(classes.sample, classes.cyan3)} data-label="3"></div>
                        <div className={st(classes.sample, classes.cyan4)} data-label="4"></div>
                        <div className={st(classes.sample, classes.cyan5)} data-label="5"></div>
                        <div className={st(classes.sample, classes.cyan6)} data-label="6"></div>
                        <div className={st(classes.sample, classes.cyan7)} data-label="7"></div>
                        <div className={st(classes.sample, classes.cyan8)} data-label="8"></div>
                        <div className={st(classes.sample, classes.cyan9)} data-label="9"></div>
                    </div>
                </section>
                <section className={st(classes.section, { layout: 'line' })}>
                    <h3>Teal</h3>
                    <div className={classes.content}>
                        <div className={st(classes.sample, classes.teal0)} data-label="0"></div>
                        <div className={st(classes.sample, classes.teal1)} data-label="1"></div>
                        <div className={st(classes.sample, classes.teal2)} data-label="2"></div>
                        <div className={st(classes.sample, classes.teal3)} data-label="3"></div>
                        <div className={st(classes.sample, classes.teal4)} data-label="4"></div>
                        <div className={st(classes.sample, classes.teal5)} data-label="5"></div>
                        <div className={st(classes.sample, classes.teal6)} data-label="6"></div>
                        <div className={st(classes.sample, classes.teal7)} data-label="7"></div>
                        <div className={st(classes.sample, classes.teal8)} data-label="8"></div>
                        <div className={st(classes.sample, classes.teal9)} data-label="9"></div>
                    </div>
                </section>
                <section className={st(classes.section, { layout: 'line' })}>
                    <h3>Green</h3>
                    <div className={classes.content}>
                        <div className={st(classes.sample, classes.green0)} data-label="0"></div>
                        <div className={st(classes.sample, classes.green1)} data-label="1"></div>
                        <div className={st(classes.sample, classes.green2)} data-label="2"></div>
                        <div className={st(classes.sample, classes.green3)} data-label="3"></div>
                        <div className={st(classes.sample, classes.green4)} data-label="4"></div>
                        <div className={st(classes.sample, classes.green5)} data-label="5"></div>
                        <div className={st(classes.sample, classes.green6)} data-label="6"></div>
                        <div className={st(classes.sample, classes.green7)} data-label="7"></div>
                        <div className={st(classes.sample, classes.green8)} data-label="8"></div>
                        <div className={st(classes.sample, classes.green9)} data-label="9"></div>
                    </div>
                </section>
                <section className={st(classes.section, { layout: 'line' })}>
                    <h3>Lime</h3>
                    <div className={classes.content}>
                        <div className={st(classes.sample, classes.lime0)} data-label="0"></div>
                        <div className={st(classes.sample, classes.lime1)} data-label="1"></div>
                        <div className={st(classes.sample, classes.lime2)} data-label="2"></div>
                        <div className={st(classes.sample, classes.lime3)} data-label="3"></div>
                        <div className={st(classes.sample, classes.lime4)} data-label="4"></div>
                        <div className={st(classes.sample, classes.lime5)} data-label="5"></div>
                        <div className={st(classes.sample, classes.lime6)} data-label="6"></div>
                        <div className={st(classes.sample, classes.lime7)} data-label="7"></div>
                        <div className={st(classes.sample, classes.lime8)} data-label="8"></div>
                        <div className={st(classes.sample, classes.lime9)} data-label="9"></div>
                    </div>
                </section>
                <section className={st(classes.section, { layout: 'line' })}>
                    <h3>Yellow</h3>
                    <div className={classes.content}>
                        <div className={st(classes.sample, classes.yellow0)} data-label="0"></div>
                        <div className={st(classes.sample, classes.yellow1)} data-label="1"></div>
                        <div className={st(classes.sample, classes.yellow2)} data-label="2"></div>
                        <div className={st(classes.sample, classes.yellow3)} data-label="3"></div>
                        <div className={st(classes.sample, classes.yellow4)} data-label="4"></div>
                        <div className={st(classes.sample, classes.yellow5)} data-label="5"></div>
                        <div className={st(classes.sample, classes.yellow6)} data-label="6"></div>
                        <div className={st(classes.sample, classes.yellow7)} data-label="7"></div>
                        <div className={st(classes.sample, classes.yellow8)} data-label="8"></div>
                        <div className={st(classes.sample, classes.yellow9)} data-label="9"></div>
                    </div>
                </section>
                <section className={st(classes.section, { layout: 'line' })}>
                    <h3>Orange</h3>
                    <div className={classes.content}>
                        <div className={st(classes.sample, classes.orange0)} data-label="0"></div>
                        <div className={st(classes.sample, classes.orange1)} data-label="1"></div>
                        <div className={st(classes.sample, classes.orange2)} data-label="2"></div>
                        <div className={st(classes.sample, classes.orange3)} data-label="3"></div>
                        <div className={st(classes.sample, classes.orange4)} data-label="4"></div>
                        <div className={st(classes.sample, classes.orange5)} data-label="5"></div>
                        <div className={st(classes.sample, classes.orange6)} data-label="6"></div>
                        <div className={st(classes.sample, classes.orange7)} data-label="7"></div>
                        <div className={st(classes.sample, classes.orange8)} data-label="8"></div>
                        <div className={st(classes.sample, classes.orange9)} data-label="9"></div>
                    </div>
                </section>
            </section>
            <section className={classes.section}>
                <header>
                    <h2>Gradients</h2>
                    <form style={{ display: 'flex', gap: '0.5em', padding: '0.5em' }}>
                        <label>noise</label>
                        <select
                            name="noise"
                            value={gradientNoiseIndex}
                            onChange={({ currentTarget: { value } }) => {
                                setGradientNoiseIndex(Number(value));
                            }}
                        >
                            <option value="0">none</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <label>filter</label>
                        <select
                            name="noise"
                            value={gradientFilterIndex}
                            onChange={({ currentTarget: { value } }) => {
                                setGradientFilterIndex(Number(value));
                            }}
                        >
                            <option value="0">none</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </form>
                </header>
                <section
                    className={st(classes.section, { layout: 'grid' }, classes.gradientsWrapper)}
                    style={{ [vars.noise]: gradientNoise, [vars.filter]: gradientFilter }}
                >
                    <div className={st(classes.sample, classes.gradient1)} data-label="1"></div>
                    <div className={st(classes.sample, classes.gradient2)} data-label="2"></div>
                    <div className={st(classes.sample, classes.gradient3)} data-label="3"></div>
                    <div className={st(classes.sample, classes.gradient4)} data-label="4"></div>
                    <div className={st(classes.sample, classes.gradient5)} data-label="5"></div>
                    <div className={st(classes.sample, classes.gradient6)} data-label="6"></div>
                    <div className={st(classes.sample, classes.gradient7)} data-label="7"></div>
                    <div className={st(classes.sample, classes.gradient8)} data-label="8"></div>
                    <div className={st(classes.sample, classes.gradient9)} data-label="9"></div>
                    <div className={st(classes.sample, classes.gradient10)} data-label="10"></div>
                    <div className={st(classes.sample, classes.gradient11)} data-label="11"></div>
                    <div className={st(classes.sample, classes.gradient12)} data-label="12"></div>
                    <div className={st(classes.sample, classes.gradient13)} data-label="13"></div>
                    <div className={st(classes.sample, classes.gradient14)} data-label="14"></div>
                    <div className={st(classes.sample, classes.gradient15)} data-label="15"></div>
                    <div className={st(classes.sample, classes.gradient16)} data-label="16"></div>
                    <div className={st(classes.sample, classes.gradient17)} data-label="17"></div>
                    <div className={st(classes.sample, classes.gradient18)} data-label="18"></div>
                    <div className={st(classes.sample, classes.gradient19)} data-label="19"></div>
                    <div className={st(classes.sample, classes.gradient20)} data-label="20"></div>
                    <div className={st(classes.sample, classes.gradient21)} data-label="21"></div>
                    <div className={st(classes.sample, classes.gradient22)} data-label="22"></div>
                    <div className={st(classes.sample, classes.gradient23)} data-label="23"></div>
                    <div className={st(classes.sample, classes.gradient24)} data-label="24"></div>
                    <div className={st(classes.sample, classes.gradient25)} data-label="25"></div>
                    <div className={st(classes.sample, classes.gradient26)} data-label="26"></div>
                    <div className={st(classes.sample, classes.gradient27)} data-label="27"></div>
                    <div className={st(classes.sample, classes.gradient28)} data-label="28"></div>
                    <div className={st(classes.sample, classes.gradient29)} data-label="29"></div>
                    <div className={st(classes.sample, classes.gradient30)} data-label="30"></div>
                </section>
            </section>
            <section className={classes.section}>
                <header>
                    <h2>Shadows</h2>
                </header>
                <section className={st(classes.section, { layout: 'line' })}>
                    <h3>Shadow</h3>
                    <div className={classes.content}>
                        <div className={st(classes.sample, classes.shadow1)} data-label="1"></div>
                        <div className={st(classes.sample, classes.shadow2)} data-label="2"></div>
                        <div className={st(classes.sample, classes.shadow3)} data-label="3"></div>
                        <div className={st(classes.sample, classes.shadow4)} data-label="4"></div>
                        <div className={st(classes.sample, classes.shadow5)} data-label="5"></div>
                        <div className={st(classes.sample, classes.shadow6)} data-label="6"></div>
                    </div>
                </section>
                <section className={st(classes.section, { layout: 'line' })}>
                    <h3>Inner Shadow</h3>
                    <div className={classes.content}>
                        <div
                            className={st(classes.sample, classes.innerShadow1)}
                            data-label="1"
                        ></div>
                        <div
                            className={st(classes.sample, classes.innerShadow2)}
                            data-label="2"
                        ></div>
                        <div
                            className={st(classes.sample, classes.innerShadow3)}
                            data-label="3"
                        ></div>
                        <div
                            className={st(classes.sample, classes.innerShadow4)}
                            data-label="4"
                        ></div>
                        <div
                            className={st(classes.sample, classes.innerShadow5)}
                            data-label="5"
                        ></div>
                        <div className={st(classes.sample)} style={{ visibility: 'hidden' }}></div>
                    </div>
                </section>
            </section>
        </main>
    );
};
