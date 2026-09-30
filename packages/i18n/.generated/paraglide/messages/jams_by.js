/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_ByInputs */

const en_jams_by = /** @type {(inputs: Jams_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`by`)
};

const es_jams_by = /** @type {(inputs: Jams_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`por`)
};

const de_jams_by = /** @type {(inputs: Jams_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`von`)
};

const fr_jams_by = /** @type {(inputs: Jams_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`par`)
};

const it_jams_by = /** @type {(inputs: Jams_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`di`)
};

const nl_jams_by = /** @type {(inputs: Jams_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`door`)
};

const pl_jams_by = /** @type {(inputs: Jams_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`autor:`)
};

const pt_jams_by = /** @type {(inputs: Jams_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`por`)
};

const ru_jams_by = /** @type {(inputs: Jams_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`автор:`)
};

const sv_jams_by = /** @type {(inputs: Jams_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`av`)
};

const tr_jams_by = /** @type {(inputs: Jams_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`yapan:`)
};

const zh_jams_by = /** @type {(inputs: Jams_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者：`)
};

const ja_jams_by = /** @type {(inputs: Jams_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者：`)
};

/**
* | output |
* | --- |
* | "by" |
*
* @param {Jams_ByInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_by = /** @type {((inputs?: Jams_ByInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_ByInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_by(inputs)
	if (locale === "de") return de_jams_by(inputs)
	if (locale === "fr") return fr_jams_by(inputs)
	if (locale === "it") return it_jams_by(inputs)
	if (locale === "nl") return nl_jams_by(inputs)
	if (locale === "pl") return pl_jams_by(inputs)
	if (locale === "pt") return pt_jams_by(inputs)
	if (locale === "ru") return ru_jams_by(inputs)
	if (locale === "sv") return sv_jams_by(inputs)
	if (locale === "tr") return tr_jams_by(inputs)
	if (locale === "zh") return zh_jams_by(inputs)
	if (locale === "ja") return ja_jams_by(inputs)
	return en_jams_by(inputs)
});
