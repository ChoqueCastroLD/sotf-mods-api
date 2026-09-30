/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Profile_Activity_PrivateInputs */

const en_profile_activity_private = /** @type {(inputs: Profile_Activity_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} keeps their activity private.`)
};

const es_profile_activity_private = /** @type {(inputs: Profile_Activity_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} mantiene su actividad en privado.`)
};

const de_profile_activity_private = /** @type {(inputs: Profile_Activity_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} hält die eigene Aktivität privat.`)
};

const fr_profile_activity_private = /** @type {(inputs: Profile_Activity_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} garde son activité privée.`)
};

const it_profile_activity_private = /** @type {(inputs: Profile_Activity_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} tiene privata la sua attività.`)
};

const nl_profile_activity_private = /** @type {(inputs: Profile_Activity_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} houdt de eigen activiteit privé.`)
};

const pl_profile_activity_private = /** @type {(inputs: Profile_Activity_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ukrywa swoją aktywność.`)
};

const pt_profile_activity_private = /** @type {(inputs: Profile_Activity_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} mantém sua atividade privada.`)
};

const ru_profile_activity_private = /** @type {(inputs: Profile_Activity_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} скрывает свою активность.`)
};

const sv_profile_activity_private = /** @type {(inputs: Profile_Activity_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} håller sin aktivitet privat.`)
};

const tr_profile_activity_private = /** @type {(inputs: Profile_Activity_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} etkinliğini gizli tutuyor.`)
};

const zh_profile_activity_private = /** @type {(inputs: Profile_Activity_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 未公开其动态。`)
};

const ja_profile_activity_private = /** @type {(inputs: Profile_Activity_PrivateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} はアクティビティを非公開にしています。`)
};

/**
* | output |
* | --- |
* | "{name} keeps their activity private." |
*
* @param {Profile_Activity_PrivateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_private = /** @type {((inputs: Profile_Activity_PrivateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_PrivateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_private(inputs)
	if (locale === "de") return de_profile_activity_private(inputs)
	if (locale === "fr") return fr_profile_activity_private(inputs)
	if (locale === "it") return it_profile_activity_private(inputs)
	if (locale === "nl") return nl_profile_activity_private(inputs)
	if (locale === "pl") return pl_profile_activity_private(inputs)
	if (locale === "pt") return pt_profile_activity_private(inputs)
	if (locale === "ru") return ru_profile_activity_private(inputs)
	if (locale === "sv") return sv_profile_activity_private(inputs)
	if (locale === "tr") return tr_profile_activity_private(inputs)
	if (locale === "zh") return zh_profile_activity_private(inputs)
	if (locale === "ja") return ja_profile_activity_private(inputs)
	return en_profile_activity_private(inputs)
});
