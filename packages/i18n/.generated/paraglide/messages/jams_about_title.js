/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_About_TitleInputs */

const en_jams_about_title = /** @type {(inputs: Jams_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`About this jam`)
};

const es_jams_about_title = /** @type {(inputs: Jams_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobre este jam`)
};

const de_jams_about_title = /** @type {(inputs: Jams_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Über diese Jam`)
};

const fr_jams_about_title = /** @type {(inputs: Jams_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À propos de ce jam`)
};

const it_jams_about_title = /** @type {(inputs: Jams_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informazioni su questo jam`)
};

const nl_jams_about_title = /** @type {(inputs: Jams_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Over deze jam`)
};

const pl_jams_about_title = /** @type {(inputs: Jams_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O tym jamie`)
};

const pt_jams_about_title = /** @type {(inputs: Jams_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobre este jam`)
};

const ru_jams_about_title = /** @type {(inputs: Jams_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`О джеме`)
};

const sv_jams_about_title = /** @type {(inputs: Jams_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Om den här jammen`)
};

const tr_jams_about_title = /** @type {(inputs: Jams_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu jam hakkında`)
};

const zh_jams_about_title = /** @type {(inputs: Jams_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关于本场 Jam`)
};

const ja_jams_about_title = /** @type {(inputs: Jams_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このジャムについて`)
};

/**
* | output |
* | --- |
* | "About this jam" |
*
* @param {Jams_About_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_about_title = /** @type {((inputs?: Jams_About_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_About_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_about_title(inputs)
	if (locale === "de") return de_jams_about_title(inputs)
	if (locale === "fr") return fr_jams_about_title(inputs)
	if (locale === "it") return it_jams_about_title(inputs)
	if (locale === "nl") return nl_jams_about_title(inputs)
	if (locale === "pl") return pl_jams_about_title(inputs)
	if (locale === "pt") return pt_jams_about_title(inputs)
	if (locale === "ru") return ru_jams_about_title(inputs)
	if (locale === "sv") return sv_jams_about_title(inputs)
	if (locale === "tr") return tr_jams_about_title(inputs)
	if (locale === "zh") return zh_jams_about_title(inputs)
	if (locale === "ja") return ja_jams_about_title(inputs)
	return en_jams_about_title(inputs)
});
