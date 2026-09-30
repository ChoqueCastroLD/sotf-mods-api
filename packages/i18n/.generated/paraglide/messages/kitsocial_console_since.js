/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Kitsocial_Console_SinceInputs */

const en_kitsocial_console_since = /** @type {(inputs: Kitsocial_Console_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Following since ${i?.date}`)
};

const es_kitsocial_console_since = /** @type {(inputs: Kitsocial_Console_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Siguiendo desde el ${i?.date}`)
};

const de_kitsocial_console_since = /** @type {(inputs: Kitsocial_Console_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Folgt seit ${i?.date}`)
};

const fr_kitsocial_console_since = /** @type {(inputs: Kitsocial_Console_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Suivi depuis le ${i?.date}`)
};

const it_kitsocial_console_since = /** @type {(inputs: Kitsocial_Console_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Segui dal ${i?.date}`)
};

const nl_kitsocial_console_since = /** @type {(inputs: Kitsocial_Console_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gevolgd sinds ${i?.date}`)
};

const pl_kitsocial_console_since = /** @type {(inputs: Kitsocial_Console_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Obserwujesz od ${i?.date}`)
};

const pt_kitsocial_console_since = /** @type {(inputs: Kitsocial_Console_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seguindo desde ${i?.date}`)
};

const ru_kitsocial_console_since = /** @type {(inputs: Kitsocial_Console_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вы подписаны с ${i?.date}`)
};

const sv_kitsocial_console_since = /** @type {(inputs: Kitsocial_Console_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Följer sedan ${i?.date}`)
};

const tr_kitsocial_console_since = /** @type {(inputs: Kitsocial_Console_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} tarihinden beri takip ediliyor`)
};

const zh_kitsocial_console_since = /** @type {(inputs: Kitsocial_Console_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`自 ${i?.date} 起关注`)
};

const ja_kitsocial_console_since = /** @type {(inputs: Kitsocial_Console_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} からフォロー中`)
};

/**
* | output |
* | --- |
* | "Following since {date}" |
*
* @param {Kitsocial_Console_SinceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_console_since = /** @type {((inputs: Kitsocial_Console_SinceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Console_SinceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_console_since(inputs)
	if (locale === "de") return de_kitsocial_console_since(inputs)
	if (locale === "fr") return fr_kitsocial_console_since(inputs)
	if (locale === "it") return it_kitsocial_console_since(inputs)
	if (locale === "nl") return nl_kitsocial_console_since(inputs)
	if (locale === "pl") return pl_kitsocial_console_since(inputs)
	if (locale === "pt") return pt_kitsocial_console_since(inputs)
	if (locale === "ru") return ru_kitsocial_console_since(inputs)
	if (locale === "sv") return sv_kitsocial_console_since(inputs)
	if (locale === "tr") return tr_kitsocial_console_since(inputs)
	if (locale === "zh") return zh_kitsocial_console_since(inputs)
	if (locale === "ja") return ja_kitsocial_console_since(inputs)
	return en_kitsocial_console_since(inputs)
});
