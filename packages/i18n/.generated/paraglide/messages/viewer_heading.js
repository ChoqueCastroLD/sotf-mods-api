/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Viewer_HeadingInputs */

const en_viewer_heading = /** @type {(inputs: Viewer_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Top-down view`)
};

const es_viewer_heading = /** @type {(inputs: Viewer_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vista cenital`)
};

const de_viewer_heading = /** @type {(inputs: Viewer_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ansicht von oben`)
};

const fr_viewer_heading = /** @type {(inputs: Viewer_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vue de dessus`)
};

const it_viewer_heading = /** @type {(inputs: Viewer_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vista dall'alto`)
};

const nl_viewer_heading = /** @type {(inputs: Viewer_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bovenaanzicht`)
};

const pl_viewer_heading = /** @type {(inputs: Viewer_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Widok z góry`)
};

const pt_viewer_heading = /** @type {(inputs: Viewer_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vista de cima`)
};

const ru_viewer_heading = /** @type {(inputs: Viewer_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вид сверху`)
};

const sv_viewer_heading = /** @type {(inputs: Viewer_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vy uppifrån`)
};

const tr_viewer_heading = /** @type {(inputs: Viewer_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yukarıdan görünüm`)
};

const zh_viewer_heading = /** @type {(inputs: Viewer_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`俯视图`)
};

const ja_viewer_heading = /** @type {(inputs: Viewer_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上からの表示`)
};

/**
* | output |
* | --- |
* | "Top-down view" |
*
* @param {Viewer_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const viewer_heading = /** @type {((inputs?: Viewer_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Viewer_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_viewer_heading(inputs)
	if (locale === "de") return de_viewer_heading(inputs)
	if (locale === "fr") return fr_viewer_heading(inputs)
	if (locale === "it") return it_viewer_heading(inputs)
	if (locale === "nl") return nl_viewer_heading(inputs)
	if (locale === "pl") return pl_viewer_heading(inputs)
	if (locale === "pt") return pt_viewer_heading(inputs)
	if (locale === "ru") return ru_viewer_heading(inputs)
	if (locale === "sv") return sv_viewer_heading(inputs)
	if (locale === "tr") return tr_viewer_heading(inputs)
	if (locale === "zh") return zh_viewer_heading(inputs)
	if (locale === "ja") return ja_viewer_heading(inputs)
	return en_viewer_heading(inputs)
});
