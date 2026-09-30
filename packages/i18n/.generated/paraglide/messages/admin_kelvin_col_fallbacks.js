/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kelvin_Col_FallbacksInputs */

const en_admin_kelvin_col_fallbacks = /** @type {(inputs: Admin_Kelvin_Col_FallbacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Offline answers`)
};

const es_admin_kelvin_col_fallbacks = /** @type {(inputs: Admin_Kelvin_Col_FallbacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Respuestas sin conexión`)
};

const de_admin_kelvin_col_fallbacks = /** @type {(inputs: Admin_Kelvin_Col_FallbacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Offline-Antworten`)
};

const fr_admin_kelvin_col_fallbacks = /** @type {(inputs: Admin_Kelvin_Col_FallbacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réponses hors ligne`)
};

const it_admin_kelvin_col_fallbacks = /** @type {(inputs: Admin_Kelvin_Col_FallbacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risposte offline`)
};

const nl_admin_kelvin_col_fallbacks = /** @type {(inputs: Admin_Kelvin_Col_FallbacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Offline antwoorden`)
};

const pl_admin_kelvin_col_fallbacks = /** @type {(inputs: Admin_Kelvin_Col_FallbacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpowiedzi offline`)
};

const pt_admin_kelvin_col_fallbacks = /** @type {(inputs: Admin_Kelvin_Col_FallbacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Respostas offline`)
};

const ru_admin_kelvin_col_fallbacks = /** @type {(inputs: Admin_Kelvin_Col_FallbacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Офлайн-ответы`)
};

const sv_admin_kelvin_col_fallbacks = /** @type {(inputs: Admin_Kelvin_Col_FallbacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Offlinesvar`)
};

const tr_admin_kelvin_col_fallbacks = /** @type {(inputs: Admin_Kelvin_Col_FallbacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çevrimdışı yanıtlar`)
};

const zh_admin_kelvin_col_fallbacks = /** @type {(inputs: Admin_Kelvin_Col_FallbacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`离线回复`)
};

const ja_admin_kelvin_col_fallbacks = /** @type {(inputs: Admin_Kelvin_Col_FallbacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`オフライン応答`)
};

/**
* | output |
* | --- |
* | "Offline answers" |
*
* @param {Admin_Kelvin_Col_FallbacksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_col_fallbacks = /** @type {((inputs?: Admin_Kelvin_Col_FallbacksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_Col_FallbacksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_col_fallbacks(inputs)
	if (locale === "de") return de_admin_kelvin_col_fallbacks(inputs)
	if (locale === "fr") return fr_admin_kelvin_col_fallbacks(inputs)
	if (locale === "it") return it_admin_kelvin_col_fallbacks(inputs)
	if (locale === "nl") return nl_admin_kelvin_col_fallbacks(inputs)
	if (locale === "pl") return pl_admin_kelvin_col_fallbacks(inputs)
	if (locale === "pt") return pt_admin_kelvin_col_fallbacks(inputs)
	if (locale === "ru") return ru_admin_kelvin_col_fallbacks(inputs)
	if (locale === "sv") return sv_admin_kelvin_col_fallbacks(inputs)
	if (locale === "tr") return tr_admin_kelvin_col_fallbacks(inputs)
	if (locale === "zh") return zh_admin_kelvin_col_fallbacks(inputs)
	if (locale === "ja") return ja_admin_kelvin_col_fallbacks(inputs)
	return en_admin_kelvin_col_fallbacks(inputs)
});
