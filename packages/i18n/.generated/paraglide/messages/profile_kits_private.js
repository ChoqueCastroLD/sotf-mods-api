/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Profile_Kits_PrivateInputs */

const en_profile_kits_private = /** @type {(inputs: Profile_Kits_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} keeps their kits private.`)
};

const es_profile_kits_private = /** @type {(inputs: Profile_Kits_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} mantiene sus kits en privado.`)
};

const de_profile_kits_private = /** @type {(inputs: Profile_Kits_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} hält die eigenen Kits privat.`)
};

const fr_profile_kits_private = /** @type {(inputs: Profile_Kits_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} garde ses kits privés.`)
};

const it_profile_kits_private = /** @type {(inputs: Profile_Kits_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} tiene privati i suoi kit.`)
};

const nl_profile_kits_private = /** @type {(inputs: Profile_Kits_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} houdt de eigen kits privé.`)
};

const pl_profile_kits_private = /** @type {(inputs: Profile_Kits_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ukrywa swoje zestawy.`)
};

const pt_profile_kits_private = /** @type {(inputs: Profile_Kits_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} mantém seus kits privados.`)
};

const ru_profile_kits_private = /** @type {(inputs: Profile_Kits_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} скрывает свои наборы.`)
};

const sv_profile_kits_private = /** @type {(inputs: Profile_Kits_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} håller sina kit privata.`)
};

const tr_profile_kits_private = /** @type {(inputs: Profile_Kits_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} kitlerini gizli tutuyor.`)
};

const zh_profile_kits_private = /** @type {(inputs: Profile_Kits_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 未公开其套装。`)
};

const ja_profile_kits_private = /** @type {(inputs: Profile_Kits_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} はキットを非公開にしています。`)
};

/**
* | output |
* | --- |
* | "{name} keeps their kits private." |
*
* @param {Profile_Kits_PrivateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_kits_private = /** @type {((inputs: Profile_Kits_PrivateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Kits_PrivateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_kits_private(inputs)
	if (locale === "de") return de_profile_kits_private(inputs)
	if (locale === "fr") return fr_profile_kits_private(inputs)
	if (locale === "it") return it_profile_kits_private(inputs)
	if (locale === "nl") return nl_profile_kits_private(inputs)
	if (locale === "pl") return pl_profile_kits_private(inputs)
	if (locale === "pt") return pt_profile_kits_private(inputs)
	if (locale === "ru") return ru_profile_kits_private(inputs)
	if (locale === "sv") return sv_profile_kits_private(inputs)
	if (locale === "tr") return tr_profile_kits_private(inputs)
	if (locale === "zh") return zh_profile_kits_private(inputs)
	if (locale === "ja") return ja_profile_kits_private(inputs)
	return en_profile_kits_private(inputs)
});
