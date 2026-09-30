/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Save_DiscardInputs */

const en_basecamp_save_discard = /** @type {(inputs: Basecamp_Save_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discard`)
};

const es_basecamp_save_discard = /** @type {(inputs: Basecamp_Save_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartar`)
};

const de_basecamp_save_discard = /** @type {(inputs: Basecamp_Save_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwerfen`)
};

const fr_basecamp_save_discard = /** @type {(inputs: Basecamp_Save_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler les modifications`)
};

const it_basecamp_save_discard = /** @type {(inputs: Basecamp_Save_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarta`)
};

const nl_basecamp_save_discard = /** @type {(inputs: Basecamp_Save_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwerpen`)
};

const pl_basecamp_save_discard = /** @type {(inputs: Basecamp_Save_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odrzuć`)
};

const pt_basecamp_save_discard = /** @type {(inputs: Basecamp_Save_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartar`)
};

const ru_basecamp_save_discard = /** @type {(inputs: Basecamp_Save_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отменить`)
};

const sv_basecamp_save_discard = /** @type {(inputs: Basecamp_Save_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förkasta`)
};

const tr_basecamp_save_discard = /** @type {(inputs: Basecamp_Save_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vazgeç`)
};

const zh_basecamp_save_discard = /** @type {(inputs: Basecamp_Save_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`放弃`)
};

const ja_basecamp_save_discard = /** @type {(inputs: Basecamp_Save_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`破棄`)
};

/**
* | output |
* | --- |
* | "Discard" |
*
* @param {Basecamp_Save_DiscardInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_save_discard = /** @type {((inputs?: Basecamp_Save_DiscardInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Save_DiscardInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_save_discard(inputs)
	if (locale === "de") return de_basecamp_save_discard(inputs)
	if (locale === "fr") return fr_basecamp_save_discard(inputs)
	if (locale === "it") return it_basecamp_save_discard(inputs)
	if (locale === "nl") return nl_basecamp_save_discard(inputs)
	if (locale === "pl") return pl_basecamp_save_discard(inputs)
	if (locale === "pt") return pt_basecamp_save_discard(inputs)
	if (locale === "ru") return ru_basecamp_save_discard(inputs)
	if (locale === "sv") return sv_basecamp_save_discard(inputs)
	if (locale === "tr") return tr_basecamp_save_discard(inputs)
	if (locale === "zh") return zh_basecamp_save_discard(inputs)
	if (locale === "ja") return ja_basecamp_save_discard(inputs)
	return en_basecamp_save_discard(inputs)
});
