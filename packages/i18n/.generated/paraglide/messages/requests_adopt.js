/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_AdoptInputs */

const en_requests_adopt = /** @type {(inputs: Requests_AdoptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I’m working on it`)
};

const es_requests_adopt = /** @type {(inputs: Requests_AdoptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estoy en ello`)
};

const de_requests_adopt = /** @type {(inputs: Requests_AdoptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ich arbeite daran`)
};

const fr_requests_adopt = /** @type {(inputs: Requests_AdoptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je m’en occupe`)
};

const it_requests_adopt = /** @type {(inputs: Requests_AdoptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ci sto lavorando`)
};

const nl_requests_adopt = /** @type {(inputs: Requests_AdoptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ik werk eraan`)
};

const pl_requests_adopt = /** @type {(inputs: Requests_AdoptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pracuję nad tym`)
};

const pt_requests_adopt = /** @type {(inputs: Requests_AdoptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estou trabalhando nisso`)
};

const ru_requests_adopt = /** @type {(inputs: Requests_AdoptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Я работаю над этим`)
};

const sv_requests_adopt = /** @type {(inputs: Requests_AdoptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jag jobbar på det`)
};

const tr_requests_adopt = /** @type {(inputs: Requests_AdoptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üzerinde çalışıyorum`)
};

const zh_requests_adopt = /** @type {(inputs: Requests_AdoptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我来做`)
};

const ja_requests_adopt = /** @type {(inputs: Requests_AdoptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取り組み中にする`)
};

/**
* | output |
* | --- |
* | "I’m working on it" |
*
* @param {Requests_AdoptInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_adopt = /** @type {((inputs?: Requests_AdoptInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_AdoptInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_adopt(inputs)
	if (locale === "de") return de_requests_adopt(inputs)
	if (locale === "fr") return fr_requests_adopt(inputs)
	if (locale === "it") return it_requests_adopt(inputs)
	if (locale === "nl") return nl_requests_adopt(inputs)
	if (locale === "pl") return pl_requests_adopt(inputs)
	if (locale === "pt") return pt_requests_adopt(inputs)
	if (locale === "ru") return ru_requests_adopt(inputs)
	if (locale === "sv") return sv_requests_adopt(inputs)
	if (locale === "tr") return tr_requests_adopt(inputs)
	if (locale === "zh") return zh_requests_adopt(inputs)
	if (locale === "ja") return ja_requests_adopt(inputs)
	return en_requests_adopt(inputs)
});
