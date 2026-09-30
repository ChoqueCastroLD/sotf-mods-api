/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Viewer_ControlsInputs */

const en_viewer_controls = /** @type {(inputs: Viewer_ControlsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drag to rotate, scroll or pinch to zoom, arrow keys to orbit, plus and minus to zoom.`)
};

const es_viewer_controls = /** @type {(inputs: Viewer_ControlsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arrastra para girar, usa la rueda o pellizca para acercar, las flechas para orbitar y más y menos para el zoom.`)
};

const de_viewer_controls = /** @type {(inputs: Viewer_ControlsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ziehen zum Drehen, Scrollen oder Zusammenziehen zum Zoomen, Pfeiltasten zum Umkreisen, Plus und Minus zum Zoomen.`)
};

const fr_viewer_controls = /** @type {(inputs: Viewer_ControlsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Glisse pour tourner, molette ou pincement pour zoomer, flèches pour orbiter, plus et moins pour zoomer.`)
};

const it_viewer_controls = /** @type {(inputs: Viewer_ControlsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trascina per ruotare, scorri o pizzica per ingrandire, frecce per orbitare, più e meno per lo zoom.`)
};

const nl_viewer_controls = /** @type {(inputs: Viewer_ControlsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sleep om te draaien, scroll of knijp om te zoomen, pijltjestoetsen om te cirkelen, plus en min om te zoomen.`)
};

const pl_viewer_controls = /** @type {(inputs: Viewer_ControlsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeciągnij, aby obrócić, przewiń lub ściśnij, aby przybliżyć, strzałki obracają widok, plus i minus zmieniają zoom.`)
};

const pt_viewer_controls = /** @type {(inputs: Viewer_ControlsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arrasta para rodar, usa a roda ou beliscar para aproximar, setas para orbitar e mais e menos para o zoom.`)
};

const ru_viewer_controls = /** @type {(inputs: Viewer_ControlsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перетаскивайте, чтобы вращать, колесо или щипок для масштаба, стрелки для облёта, плюс и минус для масштаба.`)
};

const sv_viewer_controls = /** @type {(inputs: Viewer_ControlsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dra för att rotera, scrolla eller nyp för att zooma, piltangenter för att kretsa, plus och minus för zoom.`)
};

const tr_viewer_controls = /** @type {(inputs: Viewer_ControlsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Döndürmek için sürükle, yakınlaştırmak için kaydır veya sıkıştır, yön tuşlarıyla dön, artı ve eksi ile yakınlaştır.`)
};

const zh_viewer_controls = /** @type {(inputs: Viewer_ControlsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拖动旋转，滚轮或双指缩放，方向键环绕，加减号缩放。`)
};

const ja_viewer_controls = /** @type {(inputs: Viewer_ControlsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ドラッグで回転、スクロールまたはピンチでズーム、矢印キーで周回、プラスとマイナスでズームします。`)
};

/**
* | output |
* | --- |
* | "Drag to rotate, scroll or pinch to zoom, arrow keys to orbit, plus and minus to zoom." |
*
* @param {Viewer_ControlsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const viewer_controls = /** @type {((inputs?: Viewer_ControlsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Viewer_ControlsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_viewer_controls(inputs)
	if (locale === "de") return de_viewer_controls(inputs)
	if (locale === "fr") return fr_viewer_controls(inputs)
	if (locale === "it") return it_viewer_controls(inputs)
	if (locale === "nl") return nl_viewer_controls(inputs)
	if (locale === "pl") return pl_viewer_controls(inputs)
	if (locale === "pt") return pt_viewer_controls(inputs)
	if (locale === "ru") return ru_viewer_controls(inputs)
	if (locale === "sv") return sv_viewer_controls(inputs)
	if (locale === "tr") return tr_viewer_controls(inputs)
	if (locale === "zh") return zh_viewer_controls(inputs)
	if (locale === "ja") return ja_viewer_controls(inputs)
	return en_viewer_controls(inputs)
});
