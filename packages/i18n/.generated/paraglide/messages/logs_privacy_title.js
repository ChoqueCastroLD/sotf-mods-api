/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Privacy_TitleInputs */

const en_logs_privacy_title = /** @type {(inputs: Logs_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What gets hidden`)
};

const es_logs_privacy_title = /** @type {(inputs: Logs_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qué se oculta`)
};

const de_logs_privacy_title = /** @type {(inputs: Logs_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was ausgeblendet wird`)
};

const fr_logs_privacy_title = /** @type {(inputs: Logs_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce qui est masqué`)
};

const it_logs_privacy_title = /** @type {(inputs: Logs_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cosa viene nascosto`)
};

const nl_logs_privacy_title = /** @type {(inputs: Logs_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat wordt verborgen`)
};

const pl_logs_privacy_title = /** @type {(inputs: Logs_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co jest ukrywane`)
};

const pt_logs_privacy_title = /** @type {(inputs: Logs_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que é ocultado`)
};

const ru_logs_privacy_title = /** @type {(inputs: Logs_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что скрывается`)
};

const sv_logs_privacy_title = /** @type {(inputs: Logs_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad som döljs`)
};

const tr_logs_privacy_title = /** @type {(inputs: Logs_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nelerin gizlendiği`)
};

const zh_logs_privacy_title = /** @type {(inputs: Logs_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`会隐藏什么`)
};

const ja_logs_privacy_title = /** @type {(inputs: Logs_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非表示になるもの`)
};

/**
* | output |
* | --- |
* | "What gets hidden" |
*
* @param {Logs_Privacy_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_privacy_title = /** @type {((inputs?: Logs_Privacy_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Privacy_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_privacy_title(inputs)
	if (locale === "de") return de_logs_privacy_title(inputs)
	if (locale === "fr") return fr_logs_privacy_title(inputs)
	if (locale === "it") return it_logs_privacy_title(inputs)
	if (locale === "nl") return nl_logs_privacy_title(inputs)
	if (locale === "pl") return pl_logs_privacy_title(inputs)
	if (locale === "pt") return pt_logs_privacy_title(inputs)
	if (locale === "ru") return ru_logs_privacy_title(inputs)
	if (locale === "sv") return sv_logs_privacy_title(inputs)
	if (locale === "tr") return tr_logs_privacy_title(inputs)
	if (locale === "zh") return zh_logs_privacy_title(inputs)
	if (locale === "ja") return ja_logs_privacy_title(inputs)
	return en_logs_privacy_title(inputs)
});
