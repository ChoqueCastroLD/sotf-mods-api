/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Done_AnotherInputs */

const en_logs_done_another = /** @type {(inputs: Logs_Done_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share another`)
};

const es_logs_done_another = /** @type {(inputs: Logs_Done_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compartir otro`)
};

const de_logs_done_another = /** @type {(inputs: Logs_Done_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weiteres teilen`)
};

const fr_logs_done_another = /** @type {(inputs: Logs_Done_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En partager un autre`)
};

const it_logs_done_another = /** @type {(inputs: Logs_Done_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Condividine un altro`)
};

const nl_logs_done_another = /** @type {(inputs: Logs_Done_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog een delen`)
};

const pl_logs_done_another = /** @type {(inputs: Logs_Done_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Udostępnij kolejny`)
};

const pt_logs_done_another = /** @type {(inputs: Logs_Done_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partilhar outro`)
};

const ru_logs_done_another = /** @type {(inputs: Logs_Done_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поделиться другим`)
};

const sv_logs_done_another = /** @type {(inputs: Logs_Done_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dela en till`)
};

const tr_logs_done_another = /** @type {(inputs: Logs_Done_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başka bir tane paylaş`)
};

const zh_logs_done_another = /** @type {(inputs: Logs_Done_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再分享一个`)
};

const ja_logs_done_another = /** @type {(inputs: Logs_Done_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`別のログを共有`)
};

/**
* | output |
* | --- |
* | "Share another" |
*
* @param {Logs_Done_AnotherInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_done_another = /** @type {((inputs?: Logs_Done_AnotherInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Done_AnotherInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_done_another(inputs)
	if (locale === "de") return de_logs_done_another(inputs)
	if (locale === "fr") return fr_logs_done_another(inputs)
	if (locale === "it") return it_logs_done_another(inputs)
	if (locale === "nl") return nl_logs_done_another(inputs)
	if (locale === "pl") return pl_logs_done_another(inputs)
	if (locale === "pt") return pt_logs_done_another(inputs)
	if (locale === "ru") return ru_logs_done_another(inputs)
	if (locale === "sv") return sv_logs_done_another(inputs)
	if (locale === "tr") return tr_logs_done_another(inputs)
	if (locale === "zh") return zh_logs_done_another(inputs)
	if (locale === "ja") return ja_logs_done_another(inputs)
	return en_logs_done_another(inputs)
});
