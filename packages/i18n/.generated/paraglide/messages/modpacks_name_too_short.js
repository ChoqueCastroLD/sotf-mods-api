/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Name_Too_ShortInputs */

const en_modpacks_name_too_short = /** @type {(inputs: Modpacks_Name_Too_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use at least 2 characters.`)
};

const es_modpacks_name_too_short = /** @type {(inputs: Modpacks_Name_Too_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa al menos 2 caracteres.`)
};

const de_modpacks_name_too_short = /** @type {(inputs: Modpacks_Name_Too_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mindestens 2 Zeichen.`)
};

const fr_modpacks_name_too_short = /** @type {(inputs: Modpacks_Name_Too_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Au moins 2 caractères.`)
};

const it_modpacks_name_too_short = /** @type {(inputs: Modpacks_Name_Too_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa almeno 2 caratteri.`)
};

const nl_modpacks_name_too_short = /** @type {(inputs: Modpacks_Name_Too_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruik minstens 2 tekens.`)
};

const pl_modpacks_name_too_short = /** @type {(inputs: Modpacks_Name_Too_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj co najmniej 2 znaków.`)
};

const pt_modpacks_name_too_short = /** @type {(inputs: Modpacks_Name_Too_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use pelo menos 2 caracteres.`)
};

const ru_modpacks_name_too_short = /** @type {(inputs: Modpacks_Name_Too_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Минимум 2 символа.`)
};

const sv_modpacks_name_too_short = /** @type {(inputs: Modpacks_Name_Too_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd minst 2 tecken.`)
};

const tr_modpacks_name_too_short = /** @type {(inputs: Modpacks_Name_Too_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En az 2 karakter kullan.`)
};

const zh_modpacks_name_too_short = /** @type {(inputs: Modpacks_Name_Too_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`至少 2 个字符。`)
};

const ja_modpacks_name_too_short = /** @type {(inputs: Modpacks_Name_Too_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2 文字以上にしてください。`)
};

/**
* | output |
* | --- |
* | "Use at least 2 characters." |
*
* @param {Modpacks_Name_Too_ShortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_name_too_short = /** @type {((inputs?: Modpacks_Name_Too_ShortInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Name_Too_ShortInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_name_too_short(inputs)
	if (locale === "de") return de_modpacks_name_too_short(inputs)
	if (locale === "fr") return fr_modpacks_name_too_short(inputs)
	if (locale === "it") return it_modpacks_name_too_short(inputs)
	if (locale === "nl") return nl_modpacks_name_too_short(inputs)
	if (locale === "pl") return pl_modpacks_name_too_short(inputs)
	if (locale === "pt") return pt_modpacks_name_too_short(inputs)
	if (locale === "ru") return ru_modpacks_name_too_short(inputs)
	if (locale === "sv") return sv_modpacks_name_too_short(inputs)
	if (locale === "tr") return tr_modpacks_name_too_short(inputs)
	if (locale === "zh") return zh_modpacks_name_too_short(inputs)
	if (locale === "ja") return ja_modpacks_name_too_short(inputs)
	return en_modpacks_name_too_short(inputs)
});
