/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Empty_DetailInputs */

const en_console_empty_detail = /** @type {(inputs: Console_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This part of camp is still being set up. Check back soon.`)
};

const es_console_empty_detail = /** @type {(inputs: Console_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta parte del campamento todavía se está montando. Vuelve pronto.`)
};

const de_console_empty_detail = /** @type {(inputs: Console_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Teil des Lagers wird noch aufgebaut. Schau bald wieder vorbei.`)
};

const fr_console_empty_detail = /** @type {(inputs: Console_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette partie du camp est encore en construction. Revenez bientôt.`)
};

const it_console_empty_detail = /** @type {(inputs: Console_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa parte del campo è ancora in allestimento. Torna presto.`)
};

const nl_console_empty_detail = /** @type {(inputs: Console_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit deel van het kamp wordt nog opgezet. Kom snel terug.`)
};

const pl_console_empty_detail = /** @type {(inputs: Console_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta część obozu jest jeszcze w budowie. Zajrzyj wkrótce.`)
};

const pt_console_empty_detail = /** @type {(inputs: Console_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta parte do acampamento ainda está sendo montada. Volte em breve.`)
};

const ru_console_empty_detail = /** @type {(inputs: Console_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эта часть лагеря ещё обустраивается. Загляните позже.`)
};

const sv_console_empty_detail = /** @type {(inputs: Console_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här delen av lägret håller fortfarande på att byggas. Titta in snart igen.`)
};

const tr_console_empty_detail = /** @type {(inputs: Console_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kampın bu bölümü hâlâ kuruluyor. Yakında tekrar uğra.`)
};

const zh_console_empty_detail = /** @type {(inputs: Console_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`营地的这一部分还在搭建中，请稍后再来。`)
};

const ja_console_empty_detail = /** @type {(inputs: Console_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンプのこの場所はまだ準備中です。また後で来てください。`)
};

/**
* | output |
* | --- |
* | "This part of camp is still being set up. Check back soon." |
*
* @param {Console_Empty_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_empty_detail = /** @type {((inputs?: Console_Empty_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Empty_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_empty_detail(inputs)
	if (locale === "de") return de_console_empty_detail(inputs)
	if (locale === "fr") return fr_console_empty_detail(inputs)
	if (locale === "it") return it_console_empty_detail(inputs)
	if (locale === "nl") return nl_console_empty_detail(inputs)
	if (locale === "pl") return pl_console_empty_detail(inputs)
	if (locale === "pt") return pt_console_empty_detail(inputs)
	if (locale === "ru") return ru_console_empty_detail(inputs)
	if (locale === "sv") return sv_console_empty_detail(inputs)
	if (locale === "tr") return tr_console_empty_detail(inputs)
	if (locale === "zh") return zh_console_empty_detail(inputs)
	if (locale === "ja") return ja_console_empty_detail(inputs)
	return en_console_empty_detail(inputs)
});
