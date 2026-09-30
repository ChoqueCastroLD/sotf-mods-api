/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Overview_TitleInputs */

const en_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Basecamp`)
};

const es_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Campamento`)
};

const de_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Basislager`)
};

const fr_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Camp de base`)
};

const it_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Campo base`)
};

const nl_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Basiskamp`)
};

const pl_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obóz`)
};

const pt_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acampamento`)
};

const ru_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лагерь`)
};

const sv_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Basläger`)
};

const tr_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ana Kamp`)
};

const zh_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`营地`)
};

const ja_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ベースキャンプ`)
};

/**
* | output |
* | --- |
* | "Basecamp" |
*
* @param {Basecamp_Overview_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_overview_title = /** @type {((inputs?: Basecamp_Overview_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Overview_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_overview_title(inputs)
	if (locale === "de") return de_basecamp_overview_title(inputs)
	if (locale === "fr") return fr_basecamp_overview_title(inputs)
	if (locale === "it") return it_basecamp_overview_title(inputs)
	if (locale === "nl") return nl_basecamp_overview_title(inputs)
	if (locale === "pl") return pl_basecamp_overview_title(inputs)
	if (locale === "pt") return pt_basecamp_overview_title(inputs)
	if (locale === "ru") return ru_basecamp_overview_title(inputs)
	if (locale === "sv") return sv_basecamp_overview_title(inputs)
	if (locale === "tr") return tr_basecamp_overview_title(inputs)
	if (locale === "zh") return zh_basecamp_overview_title(inputs)
	if (locale === "ja") return ja_basecamp_overview_title(inputs)
	return en_basecamp_overview_title(inputs)
});
