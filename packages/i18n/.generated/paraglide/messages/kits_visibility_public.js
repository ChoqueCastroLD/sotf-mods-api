/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Visibility_PublicInputs */

const en_kits_visibility_public = /** @type {(inputs: Kits_Visibility_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Public`)
};

const es_kits_visibility_public = /** @type {(inputs: Kits_Visibility_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Público`)
};

const de_kits_visibility_public = /** @type {(inputs: Kits_Visibility_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öffentlich`)
};

const fr_kits_visibility_public = /** @type {(inputs: Kits_Visibility_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Public`)
};

const it_kits_visibility_public = /** @type {(inputs: Kits_Visibility_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblico`)
};

const nl_kits_visibility_public = /** @type {(inputs: Kits_Visibility_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Openbaar`)
};

const pl_kits_visibility_public = /** @type {(inputs: Kits_Visibility_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiczny`)
};

const pt_kits_visibility_public = /** @type {(inputs: Kits_Visibility_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Público`)
};

const ru_kits_visibility_public = /** @type {(inputs: Kits_Visibility_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Публичный`)
};

const sv_kits_visibility_public = /** @type {(inputs: Kits_Visibility_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Offentligt`)
};

const tr_kits_visibility_public = /** @type {(inputs: Kits_Visibility_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herkese açık`)
};

const zh_kits_visibility_public = /** @type {(inputs: Kits_Visibility_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公开`)
};

const ja_kits_visibility_public = /** @type {(inputs: Kits_Visibility_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開`)
};

/**
* | output |
* | --- |
* | "Public" |
*
* @param {Kits_Visibility_PublicInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_visibility_public = /** @type {((inputs?: Kits_Visibility_PublicInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Visibility_PublicInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_visibility_public(inputs)
	if (locale === "de") return de_kits_visibility_public(inputs)
	if (locale === "fr") return fr_kits_visibility_public(inputs)
	if (locale === "it") return it_kits_visibility_public(inputs)
	if (locale === "nl") return nl_kits_visibility_public(inputs)
	if (locale === "pl") return pl_kits_visibility_public(inputs)
	if (locale === "pt") return pt_kits_visibility_public(inputs)
	if (locale === "ru") return ru_kits_visibility_public(inputs)
	if (locale === "sv") return sv_kits_visibility_public(inputs)
	if (locale === "tr") return tr_kits_visibility_public(inputs)
	if (locale === "zh") return zh_kits_visibility_public(inputs)
	if (locale === "ja") return ja_kits_visibility_public(inputs)
	return en_kits_visibility_public(inputs)
});
