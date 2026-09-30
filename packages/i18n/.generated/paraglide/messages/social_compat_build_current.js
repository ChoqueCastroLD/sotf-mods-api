/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ label: NonNullable<unknown> }} Social_Compat_Build_CurrentInputs */

const en_social_compat_build_current = /** @type {(inputs: Social_Compat_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} (current)`)
};

const es_social_compat_build_current = /** @type {(inputs: Social_Compat_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} (actual)`)
};

const de_social_compat_build_current = /** @type {(inputs: Social_Compat_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} (aktuell)`)
};

const fr_social_compat_build_current = /** @type {(inputs: Social_Compat_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} (actuelle)`)
};

const it_social_compat_build_current = /** @type {(inputs: Social_Compat_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} (attuale)`)
};

const nl_social_compat_build_current = /** @type {(inputs: Social_Compat_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} (huidig)`)
};

const pl_social_compat_build_current = /** @type {(inputs: Social_Compat_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} (aktualna)`)
};

const pt_social_compat_build_current = /** @type {(inputs: Social_Compat_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} (atual)`)
};

const ru_social_compat_build_current = /** @type {(inputs: Social_Compat_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} (текущая)`)
};

const sv_social_compat_build_current = /** @type {(inputs: Social_Compat_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} (aktuell)`)
};

const tr_social_compat_build_current = /** @type {(inputs: Social_Compat_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} (güncel)`)
};

const zh_social_compat_build_current = /** @type {(inputs: Social_Compat_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label}（当前）`)
};

const ja_social_compat_build_current = /** @type {(inputs: Social_Compat_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label}（現行）`)
};

/**
* | output |
* | --- |
* | "{label} (current)" |
*
* @param {Social_Compat_Build_CurrentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_build_current = /** @type {((inputs: Social_Compat_Build_CurrentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Build_CurrentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_build_current(inputs)
	if (locale === "de") return de_social_compat_build_current(inputs)
	if (locale === "fr") return fr_social_compat_build_current(inputs)
	if (locale === "it") return it_social_compat_build_current(inputs)
	if (locale === "nl") return nl_social_compat_build_current(inputs)
	if (locale === "pl") return pl_social_compat_build_current(inputs)
	if (locale === "pt") return pt_social_compat_build_current(inputs)
	if (locale === "ru") return ru_social_compat_build_current(inputs)
	if (locale === "sv") return sv_social_compat_build_current(inputs)
	if (locale === "tr") return tr_social_compat_build_current(inputs)
	if (locale === "zh") return zh_social_compat_build_current(inputs)
	if (locale === "ja") return ja_social_compat_build_current(inputs)
	return en_social_compat_build_current(inputs)
});
