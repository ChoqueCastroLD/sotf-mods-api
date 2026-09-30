/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Viewer_ExploreInputs */

const en_viewer_explore = /** @type {(inputs: Viewer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explore in 3D`)
};

const es_viewer_explore = /** @type {(inputs: Viewer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar en 3D`)
};

const de_viewer_explore = /** @type {(inputs: Viewer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In 3D erkunden`)
};

const fr_viewer_explore = /** @type {(inputs: Viewer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorer en 3D`)
};

const it_viewer_explore = /** @type {(inputs: Viewer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esplora in 3D`)
};

const nl_viewer_explore = /** @type {(inputs: Viewer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verken in 3D`)
};

const pl_viewer_explore = /** @type {(inputs: Viewer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz w 3D`)
};

const pt_viewer_explore = /** @type {(inputs: Viewer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar em 3D`)
};

const ru_viewer_explore = /** @type {(inputs: Viewer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Посмотреть в 3D`)
};

const sv_viewer_explore = /** @type {(inputs: Viewer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utforska i 3D`)
};

const tr_viewer_explore = /** @type {(inputs: Viewer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3B olarak incele`)
};

const zh_viewer_explore = /** @type {(inputs: Viewer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`以 3D 查看`)
};

const ja_viewer_explore = /** @type {(inputs: Viewer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3D で見る`)
};

/**
* | output |
* | --- |
* | "Explore in 3D" |
*
* @param {Viewer_ExploreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const viewer_explore = /** @type {((inputs?: Viewer_ExploreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Viewer_ExploreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_viewer_explore(inputs)
	if (locale === "de") return de_viewer_explore(inputs)
	if (locale === "fr") return fr_viewer_explore(inputs)
	if (locale === "it") return it_viewer_explore(inputs)
	if (locale === "nl") return nl_viewer_explore(inputs)
	if (locale === "pl") return pl_viewer_explore(inputs)
	if (locale === "pt") return pt_viewer_explore(inputs)
	if (locale === "ru") return ru_viewer_explore(inputs)
	if (locale === "sv") return sv_viewer_explore(inputs)
	if (locale === "tr") return tr_viewer_explore(inputs)
	if (locale === "zh") return zh_viewer_explore(inputs)
	if (locale === "ja") return ja_viewer_explore(inputs)
	return en_viewer_explore(inputs)
});
