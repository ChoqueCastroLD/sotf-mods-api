/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Overview_TitleInputs */

const en_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
};

const es_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panel`)
};

const de_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
};

const fr_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tableau de bord`)
};

const it_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
};

const nl_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
};

const pl_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panel`)
};

const pt_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Painel`)
};

const ru_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Панель`)
};

const sv_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Översikt`)
};

const tr_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panel`)
};

const zh_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`控制台`)
};

const ja_basecamp_overview_title = /** @type {(inputs: Basecamp_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダッシュボード`)
};

/**
* | output |
* | --- |
* | "Dashboard" |
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
