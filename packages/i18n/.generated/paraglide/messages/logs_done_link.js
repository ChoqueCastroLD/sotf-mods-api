/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Done_LinkInputs */

const en_logs_done_link = /** @type {(inputs: Logs_Done_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share this link`)
};

const es_logs_done_link = /** @type {(inputs: Logs_Done_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparte este enlace`)
};

const de_logs_done_link = /** @type {(inputs: Logs_Done_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teile diesen Link`)
};

const fr_logs_done_link = /** @type {(inputs: Logs_Done_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partagez ce lien`)
};

const it_logs_done_link = /** @type {(inputs: Logs_Done_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Condividi questo link`)
};

const nl_logs_done_link = /** @type {(inputs: Logs_Done_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deel deze link`)
};

const pl_logs_done_link = /** @type {(inputs: Logs_Done_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Udostępnij ten link`)
};

const pt_logs_done_link = /** @type {(inputs: Logs_Done_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partilhe esta ligação`)
};

const ru_logs_done_link = /** @type {(inputs: Logs_Done_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поделитесь этой ссылкой`)
};

const sv_logs_done_link = /** @type {(inputs: Logs_Done_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dela den här länken`)
};

const tr_logs_done_link = /** @type {(inputs: Logs_Done_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu bağlantıyı paylaşın`)
};

const zh_logs_done_link = /** @type {(inputs: Logs_Done_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分享此链接`)
};

const ja_logs_done_link = /** @type {(inputs: Logs_Done_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このリンクを共有`)
};

/**
* | output |
* | --- |
* | "Share this link" |
*
* @param {Logs_Done_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_done_link = /** @type {((inputs?: Logs_Done_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Done_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_done_link(inputs)
	if (locale === "de") return de_logs_done_link(inputs)
	if (locale === "fr") return fr_logs_done_link(inputs)
	if (locale === "it") return it_logs_done_link(inputs)
	if (locale === "nl") return nl_logs_done_link(inputs)
	if (locale === "pl") return pl_logs_done_link(inputs)
	if (locale === "pt") return pt_logs_done_link(inputs)
	if (locale === "ru") return ru_logs_done_link(inputs)
	if (locale === "sv") return sv_logs_done_link(inputs)
	if (locale === "tr") return tr_logs_done_link(inputs)
	if (locale === "zh") return zh_logs_done_link(inputs)
	if (locale === "ja") return ja_logs_done_link(inputs)
	return en_logs_done_link(inputs)
});
