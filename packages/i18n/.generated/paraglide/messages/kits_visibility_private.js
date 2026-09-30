/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Visibility_PrivateInputs */

const en_kits_visibility_private = /** @type {(inputs: Kits_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Private`)
};

const es_kits_visibility_private = /** @type {(inputs: Kits_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privado`)
};

const de_kits_visibility_private = /** @type {(inputs: Kits_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privat`)
};

const fr_kits_visibility_private = /** @type {(inputs: Kits_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privé`)
};

const it_kits_visibility_private = /** @type {(inputs: Kits_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privato`)
};

const nl_kits_visibility_private = /** @type {(inputs: Kits_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privé`)
};

const pl_kits_visibility_private = /** @type {(inputs: Kits_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prywatny`)
};

const pt_kits_visibility_private = /** @type {(inputs: Kits_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privado`)
};

const ru_kits_visibility_private = /** @type {(inputs: Kits_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрытый`)
};

const sv_kits_visibility_private = /** @type {(inputs: Kits_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privat`)
};

const tr_kits_visibility_private = /** @type {(inputs: Kits_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gizli`)
};

const zh_kits_visibility_private = /** @type {(inputs: Kits_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`私密`)
};

const ja_kits_visibility_private = /** @type {(inputs: Kits_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非公開`)
};

/**
* | output |
* | --- |
* | "Private" |
*
* @param {Kits_Visibility_PrivateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_visibility_private = /** @type {((inputs?: Kits_Visibility_PrivateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Visibility_PrivateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_visibility_private(inputs)
	if (locale === "de") return de_kits_visibility_private(inputs)
	if (locale === "fr") return fr_kits_visibility_private(inputs)
	if (locale === "it") return it_kits_visibility_private(inputs)
	if (locale === "nl") return nl_kits_visibility_private(inputs)
	if (locale === "pl") return pl_kits_visibility_private(inputs)
	if (locale === "pt") return pt_kits_visibility_private(inputs)
	if (locale === "ru") return ru_kits_visibility_private(inputs)
	if (locale === "sv") return sv_kits_visibility_private(inputs)
	if (locale === "tr") return tr_kits_visibility_private(inputs)
	if (locale === "zh") return zh_kits_visibility_private(inputs)
	if (locale === "ja") return ja_kits_visibility_private(inputs)
	return en_kits_visibility_private(inputs)
});
