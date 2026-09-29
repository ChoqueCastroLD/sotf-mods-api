/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_LiveInputs */

const en_ui_live = /** @type {(inputs: Ui_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live`)
};

const es_ui_live = /** @type {(inputs: Ui_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En vivo`)
};

const de_ui_live = /** @type {(inputs: Ui_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live`)
};

const fr_ui_live = /** @type {(inputs: Ui_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En direct`)
};

const it_ui_live = /** @type {(inputs: Ui_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In diretta`)
};

const nl_ui_live = /** @type {(inputs: Ui_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live`)
};

const pl_ui_live = /** @type {(inputs: Ui_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na żywo`)
};

const pt_ui_live = /** @type {(inputs: Ui_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ao vivo`)
};

const ru_ui_live = /** @type {(inputs: Ui_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В эфире`)
};

const sv_ui_live = /** @type {(inputs: Ui_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live`)
};

const tr_ui_live = /** @type {(inputs: Ui_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canlı`)
};

const zh_ui_live = /** @type {(inputs: Ui_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`实时`)
};

const ja_ui_live = /** @type {(inputs: Ui_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライブ`)
};

/**
* | output |
* | --- |
* | "Live" |
*
* @param {Ui_LiveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_live = /** @type {((inputs?: Ui_LiveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_LiveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_live(inputs)
	if (locale === "de") return de_ui_live(inputs)
	if (locale === "fr") return fr_ui_live(inputs)
	if (locale === "it") return it_ui_live(inputs)
	if (locale === "nl") return nl_ui_live(inputs)
	if (locale === "pl") return pl_ui_live(inputs)
	if (locale === "pt") return pt_ui_live(inputs)
	if (locale === "ru") return ru_ui_live(inputs)
	if (locale === "sv") return sv_ui_live(inputs)
	if (locale === "tr") return tr_ui_live(inputs)
	if (locale === "zh") return zh_ui_live(inputs)
	if (locale === "ja") return ja_ui_live(inputs)
	return en_ui_live(inputs)
});
