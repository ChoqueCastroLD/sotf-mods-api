/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Badge_AdopterInputs */

const en_requests_badge_adopter = /** @type {(inputs: Requests_Badge_AdopterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Working on it`)
};

const es_requests_badge_adopter = /** @type {(inputs: Requests_Badge_AdopterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trabajando en ello`)
};

const de_requests_badge_adopter = /** @type {(inputs: Requests_Badge_AdopterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arbeitet daran`)
};

const fr_requests_badge_adopter = /** @type {(inputs: Requests_Badge_AdopterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`S’en occupe`)
};

const it_requests_badge_adopter = /** @type {(inputs: Requests_Badge_AdopterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ci lavora`)
};

const nl_requests_badge_adopter = /** @type {(inputs: Requests_Badge_AdopterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkt eraan`)
};

const pl_requests_badge_adopter = /** @type {(inputs: Requests_Badge_AdopterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pracuje nad tym`)
};

const pt_requests_badge_adopter = /** @type {(inputs: Requests_Badge_AdopterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trabalhando nisso`)
};

const ru_requests_badge_adopter = /** @type {(inputs: Requests_Badge_AdopterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работает над этим`)
};

const sv_requests_badge_adopter = /** @type {(inputs: Requests_Badge_AdopterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jobbar på det`)
};

const tr_requests_badge_adopter = /** @type {(inputs: Requests_Badge_AdopterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üzerinde çalışıyor`)
};

const zh_requests_badge_adopter = /** @type {(inputs: Requests_Badge_AdopterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在制作`)
};

const ja_requests_badge_adopter = /** @type {(inputs: Requests_Badge_AdopterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`対応中`)
};

/**
* | output |
* | --- |
* | "Working on it" |
*
* @param {Requests_Badge_AdopterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_badge_adopter = /** @type {((inputs?: Requests_Badge_AdopterInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Badge_AdopterInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_badge_adopter(inputs)
	if (locale === "de") return de_requests_badge_adopter(inputs)
	if (locale === "fr") return fr_requests_badge_adopter(inputs)
	if (locale === "it") return it_requests_badge_adopter(inputs)
	if (locale === "nl") return nl_requests_badge_adopter(inputs)
	if (locale === "pl") return pl_requests_badge_adopter(inputs)
	if (locale === "pt") return pt_requests_badge_adopter(inputs)
	if (locale === "ru") return ru_requests_badge_adopter(inputs)
	if (locale === "sv") return sv_requests_badge_adopter(inputs)
	if (locale === "tr") return tr_requests_badge_adopter(inputs)
	if (locale === "zh") return zh_requests_badge_adopter(inputs)
	if (locale === "ja") return ja_requests_badge_adopter(inputs)
	return en_requests_badge_adopter(inputs)
});
