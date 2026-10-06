/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Internal_TitleInputs */

const en_errors_code_internal_title = /** @type {(inputs: Errors_Code_Internal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server error`)
};

const es_errors_code_internal_title = /** @type {(inputs: Errors_Code_Internal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error del servidor`)
};

const de_errors_code_internal_title = /** @type {(inputs: Errors_Code_Internal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serverfehler`)
};

const fr_errors_code_internal_title = /** @type {(inputs: Errors_Code_Internal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erreur du serveur`)
};

const it_errors_code_internal_title = /** @type {(inputs: Errors_Code_Internal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Errore del server`)
};

const nl_errors_code_internal_title = /** @type {(inputs: Errors_Code_Internal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serverfout`)
};

const pl_errors_code_internal_title = /** @type {(inputs: Errors_Code_Internal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Błąd serwera`)
};

const pt_errors_code_internal_title = /** @type {(inputs: Errors_Code_Internal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erro do servidor`)
};

const ru_errors_code_internal_title = /** @type {(inputs: Errors_Code_Internal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ошибка сервера`)
};

const sv_errors_code_internal_title = /** @type {(inputs: Errors_Code_Internal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serverfel`)
};

const tr_errors_code_internal_title = /** @type {(inputs: Errors_Code_Internal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sunucu hatası`)
};

const zh_errors_code_internal_title = /** @type {(inputs: Errors_Code_Internal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`服务器错误`)
};

const ja_errors_code_internal_title = /** @type {(inputs: Errors_Code_Internal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サーバーエラー`)
};

/**
* | output |
* | --- |
* | "Server error" |
*
* @param {Errors_Code_Internal_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_internal_title = /** @type {((inputs?: Errors_Code_Internal_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Internal_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_internal_title(inputs)
	if (locale === "de") return de_errors_code_internal_title(inputs)
	if (locale === "fr") return fr_errors_code_internal_title(inputs)
	if (locale === "it") return it_errors_code_internal_title(inputs)
	if (locale === "nl") return nl_errors_code_internal_title(inputs)
	if (locale === "pl") return pl_errors_code_internal_title(inputs)
	if (locale === "pt") return pt_errors_code_internal_title(inputs)
	if (locale === "ru") return ru_errors_code_internal_title(inputs)
	if (locale === "sv") return sv_errors_code_internal_title(inputs)
	if (locale === "tr") return tr_errors_code_internal_title(inputs)
	if (locale === "zh") return zh_errors_code_internal_title(inputs)
	if (locale === "ja") return ja_errors_code_internal_title(inputs)
	return en_errors_code_internal_title(inputs)
});
