/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Slug_InvalidInputs */

const en_kits_slug_invalid = /** @type {(inputs: Kits_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use 2–80 lowercase letters, digits and hyphens, not at the start or the end.`)
};

const es_kits_slug_invalid = /** @type {(inputs: Kits_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa de 2 a 80 minúsculas, cifras y guiones, sin guion al principio ni al final.`)
};

const de_kits_slug_invalid = /** @type {(inputs: Kits_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2–80 Kleinbuchstaben, Ziffern und Bindestriche, nicht am Anfang oder Ende.`)
};

const fr_kits_slug_invalid = /** @type {(inputs: Kits_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De 2 à 80 minuscules, chiffres et tirets, sans tiret au début ni à la fin.`)
};

const it_kits_slug_invalid = /** @type {(inputs: Kits_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Da 2 a 80 lettere minuscole, cifre e trattini, non all’inizio né alla fine.`)
};

const nl_kits_slug_invalid = /** @type {(inputs: Kits_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2–80 kleine letters, cijfers en koppeltekens, niet aan het begin of einde.`)
};

const pl_kits_slug_invalid = /** @type {(inputs: Kits_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2–80 małych liter, cyfr i łączników, bez łącznika na początku i końcu.`)
};

const pt_kits_slug_invalid = /** @type {(inputs: Kits_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De 2 a 80 letras minúsculas, números e hifens, sem hífen no início ou no fim.`)
};

const ru_kits_slug_invalid = /** @type {(inputs: Kits_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`От 2 до 80 строчных латинских букв, цифр и дефисов, без дефиса в начале и конце.`)
};

const sv_kits_slug_invalid = /** @type {(inputs: Kits_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2–80 små bokstäver, siffror och bindestreck, inte först eller sist.`)
};

const tr_kits_slug_invalid = /** @type {(inputs: Kits_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2–80 küçük harf, rakam ve kısa çizgi; başta veya sonda çizgi olmasın.`)
};

const zh_kits_slug_invalid = /** @type {(inputs: Kits_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请使用 2–80 个小写字母、数字和连字符，开头和结尾不能是连字符。`)
};

const ja_kits_slug_invalid = /** @type {(inputs: Kits_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`小文字・数字・ハイフンで 2〜80 文字（先頭と末尾にハイフン不可）。`)
};

/**
* | output |
* | --- |
* | "Use 2–80 lowercase letters, digits and hyphens, not at the start or the end." |
*
* @param {Kits_Slug_InvalidInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_slug_invalid = /** @type {((inputs?: Kits_Slug_InvalidInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Slug_InvalidInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_slug_invalid(inputs)
	if (locale === "de") return de_kits_slug_invalid(inputs)
	if (locale === "fr") return fr_kits_slug_invalid(inputs)
	if (locale === "it") return it_kits_slug_invalid(inputs)
	if (locale === "nl") return nl_kits_slug_invalid(inputs)
	if (locale === "pl") return pl_kits_slug_invalid(inputs)
	if (locale === "pt") return pt_kits_slug_invalid(inputs)
	if (locale === "ru") return ru_kits_slug_invalid(inputs)
	if (locale === "sv") return sv_kits_slug_invalid(inputs)
	if (locale === "tr") return tr_kits_slug_invalid(inputs)
	if (locale === "zh") return zh_kits_slug_invalid(inputs)
	if (locale === "ja") return ja_kits_slug_invalid(inputs)
	return en_kits_slug_invalid(inputs)
});
