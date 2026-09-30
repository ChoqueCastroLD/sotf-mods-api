/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Details_DiscardInputs */

const en_kits_details_discard = /** @type {(inputs: Kits_Details_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discard`)
};

const es_kits_details_discard = /** @type {(inputs: Kits_Details_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartar`)
};

const de_kits_details_discard = /** @type {(inputs: Kits_Details_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwerfen`)
};

const fr_kits_details_discard = /** @type {(inputs: Kits_Details_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler les modifications`)
};

const it_kits_details_discard = /** @type {(inputs: Kits_Details_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla modifiche`)
};

const nl_kits_details_discard = /** @type {(inputs: Kits_Details_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwerpen`)
};

const pl_kits_details_discard = /** @type {(inputs: Kits_Details_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odrzuć`)
};

const pt_kits_details_discard = /** @type {(inputs: Kits_Details_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartar`)
};

const ru_kits_details_discard = /** @type {(inputs: Kits_Details_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отменить`)
};

const sv_kits_details_discard = /** @type {(inputs: Kits_Details_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förkasta`)
};

const tr_kits_details_discard = /** @type {(inputs: Kits_Details_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vazgeç`)
};

const zh_kits_details_discard = /** @type {(inputs: Kits_Details_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`放弃修改`)
};

const ja_kits_details_discard = /** @type {(inputs: Kits_Details_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`破棄`)
};

/**
* | output |
* | --- |
* | "Discard" |
*
* @param {Kits_Details_DiscardInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_details_discard = /** @type {((inputs?: Kits_Details_DiscardInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Details_DiscardInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_details_discard(inputs)
	if (locale === "de") return de_kits_details_discard(inputs)
	if (locale === "fr") return fr_kits_details_discard(inputs)
	if (locale === "it") return it_kits_details_discard(inputs)
	if (locale === "nl") return nl_kits_details_discard(inputs)
	if (locale === "pl") return pl_kits_details_discard(inputs)
	if (locale === "pt") return pt_kits_details_discard(inputs)
	if (locale === "ru") return ru_kits_details_discard(inputs)
	if (locale === "sv") return sv_kits_details_discard(inputs)
	if (locale === "tr") return tr_kits_details_discard(inputs)
	if (locale === "zh") return zh_kits_details_discard(inputs)
	if (locale === "ja") return ja_kits_details_discard(inputs)
	return en_kits_details_discard(inputs)
});
