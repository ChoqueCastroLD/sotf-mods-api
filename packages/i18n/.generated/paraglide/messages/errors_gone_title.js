/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Gone_TitleInputs */

const en_errors_gone_title = /** @type {(inputs: Errors_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This trail is closed.`)
};

const es_errors_gone_title = /** @type {(inputs: Errors_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este sendero está cerrado.`)
};

const de_errors_gone_title = /** @type {(inputs: Errors_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Weg ist gesperrt.`)
};

const fr_errors_gone_title = /** @type {(inputs: Errors_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce sentier est fermé.`)
};

const it_errors_gone_title = /** @type {(inputs: Errors_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo sentiero è chiuso.`)
};

const nl_errors_gone_title = /** @type {(inputs: Errors_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit pad is afgesloten.`)
};

const pl_errors_gone_title = /** @type {(inputs: Errors_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten szlak jest zamknięty.`)
};

const pt_errors_gone_title = /** @type {(inputs: Errors_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta trilha está fechada.`)
};

const ru_errors_gone_title = /** @type {(inputs: Errors_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эта тропа закрыта.`)
};

const sv_errors_gone_title = /** @type {(inputs: Errors_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här stigen är stängd.`)
};

const tr_errors_gone_title = /** @type {(inputs: Errors_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu patika kapalı.`)
};

const zh_errors_gone_title = /** @type {(inputs: Errors_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这条小路已封闭。`)
};

const ja_errors_gone_title = /** @type {(inputs: Errors_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この道は閉ざされています。`)
};

/**
* | output |
* | --- |
* | "This trail is closed." |
*
* @param {Errors_Gone_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_gone_title = /** @type {((inputs?: Errors_Gone_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Gone_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_gone_title(inputs)
	if (locale === "de") return de_errors_gone_title(inputs)
	if (locale === "fr") return fr_errors_gone_title(inputs)
	if (locale === "it") return it_errors_gone_title(inputs)
	if (locale === "nl") return nl_errors_gone_title(inputs)
	if (locale === "pl") return pl_errors_gone_title(inputs)
	if (locale === "pt") return pt_errors_gone_title(inputs)
	if (locale === "ru") return ru_errors_gone_title(inputs)
	if (locale === "sv") return sv_errors_gone_title(inputs)
	if (locale === "tr") return tr_errors_gone_title(inputs)
	if (locale === "zh") return zh_errors_gone_title(inputs)
	if (locale === "ja") return ja_errors_gone_title(inputs)
	return en_errors_gone_title(inputs)
});
