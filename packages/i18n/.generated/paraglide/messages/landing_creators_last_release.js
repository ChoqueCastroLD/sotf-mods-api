/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ when: NonNullable<unknown> }} Landing_Creators_Last_ReleaseInputs */

const en_landing_creators_last_release = /** @type {(inputs: Landing_Creators_Last_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Last release ${i?.when}`)
};

const es_landing_creators_last_release = /** @type {(inputs: Landing_Creators_Last_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Última versión ${i?.when}`)
};

const de_landing_creators_last_release = /** @type {(inputs: Landing_Creators_Last_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Letzte Version ${i?.when}`)
};

const fr_landing_creators_last_release = /** @type {(inputs: Landing_Creators_Last_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dernière version ${i?.when}`)
};

const it_landing_creators_last_release = /** @type {(inputs: Landing_Creators_Last_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ultima versione ${i?.when}`)
};

const nl_landing_creators_last_release = /** @type {(inputs: Landing_Creators_Last_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Laatste release ${i?.when}`)
};

const pl_landing_creators_last_release = /** @type {(inputs: Landing_Creators_Last_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ostatnie wydanie ${i?.when}`)
};

const pt_landing_creators_last_release = /** @type {(inputs: Landing_Creators_Last_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Última versão ${i?.when}`)
};

const ru_landing_creators_last_release = /** @type {(inputs: Landing_Creators_Last_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Последний релиз ${i?.when}`)
};

const sv_landing_creators_last_release = /** @type {(inputs: Landing_Creators_Last_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Senaste version ${i?.when}`)
};

const tr_landing_creators_last_release = /** @type {(inputs: Landing_Creators_Last_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Son sürüm ${i?.when}`)
};

const zh_landing_creators_last_release = /** @type {(inputs: Landing_Creators_Last_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最近发布 ${i?.when}`)
};

const ja_landing_creators_last_release = /** @type {(inputs: Landing_Creators_Last_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最新リリース ${i?.when}`)
};

/**
* | output |
* | --- |
* | "Last release {when}" |
*
* @param {Landing_Creators_Last_ReleaseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_creators_last_release = /** @type {((inputs: Landing_Creators_Last_ReleaseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Creators_Last_ReleaseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_creators_last_release(inputs)
	if (locale === "de") return de_landing_creators_last_release(inputs)
	if (locale === "fr") return fr_landing_creators_last_release(inputs)
	if (locale === "it") return it_landing_creators_last_release(inputs)
	if (locale === "nl") return nl_landing_creators_last_release(inputs)
	if (locale === "pl") return pl_landing_creators_last_release(inputs)
	if (locale === "pt") return pt_landing_creators_last_release(inputs)
	if (locale === "ru") return ru_landing_creators_last_release(inputs)
	if (locale === "sv") return sv_landing_creators_last_release(inputs)
	if (locale === "tr") return tr_landing_creators_last_release(inputs)
	if (locale === "zh") return zh_landing_creators_last_release(inputs)
	if (locale === "ja") return ja_landing_creators_last_release(inputs)
	return en_landing_creators_last_release(inputs)
});
