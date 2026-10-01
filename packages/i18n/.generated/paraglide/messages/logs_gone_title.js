/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Gone_TitleInputs */

const en_logs_gone_title = /** @type {(inputs: Logs_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This log is gone`)
};

const es_logs_gone_title = /** @type {(inputs: Logs_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este log ya no existe`)
};

const de_logs_gone_title = /** @type {(inputs: Logs_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieses Log ist weg`)
};

const fr_logs_gone_title = /** @type {(inputs: Logs_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce log n’existe plus`)
};

const it_logs_gone_title = /** @type {(inputs: Logs_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo log non c’è più`)
};

const nl_logs_gone_title = /** @type {(inputs: Logs_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze log is weg`)
};

const pl_logs_gone_title = /** @type {(inputs: Logs_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tego logu już nie ma`)
};

const pt_logs_gone_title = /** @type {(inputs: Logs_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este log já não existe`)
};

const ru_logs_gone_title = /** @type {(inputs: Logs_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этого лога больше нет`)
};

const sv_logs_gone_title = /** @type {(inputs: Logs_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här loggen är borta`)
};

const tr_logs_gone_title = /** @type {(inputs: Logs_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu log artık yok`)
};

const zh_logs_gone_title = /** @type {(inputs: Logs_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此日志已不存在`)
};

const ja_logs_gone_title = /** @type {(inputs: Logs_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このログはもうありません`)
};

/**
* | output |
* | --- |
* | "This log is gone" |
*
* @param {Logs_Gone_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_gone_title = /** @type {((inputs?: Logs_Gone_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Gone_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_gone_title(inputs)
	if (locale === "de") return de_logs_gone_title(inputs)
	if (locale === "fr") return fr_logs_gone_title(inputs)
	if (locale === "it") return it_logs_gone_title(inputs)
	if (locale === "nl") return nl_logs_gone_title(inputs)
	if (locale === "pl") return pl_logs_gone_title(inputs)
	if (locale === "pt") return pt_logs_gone_title(inputs)
	if (locale === "ru") return ru_logs_gone_title(inputs)
	if (locale === "sv") return sv_logs_gone_title(inputs)
	if (locale === "tr") return tr_logs_gone_title(inputs)
	if (locale === "zh") return zh_logs_gone_title(inputs)
	if (locale === "ja") return ja_logs_gone_title(inputs)
	return en_logs_gone_title(inputs)
});
