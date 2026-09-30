/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Error_Handle_FormatInputs */

const en_auth_error_handle_format = /** @type {(inputs: Auth_Error_Handle_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use lowercase letters, numbers and single hyphens, not at the start or end.`)
};

const es_auth_error_handle_format = /** @type {(inputs: Auth_Error_Handle_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa minúsculas, números y guiones sueltos, pero no al principio ni al final.`)
};

const de_auth_error_handle_format = /** @type {(inputs: Auth_Error_Handle_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwende Kleinbuchstaben, Ziffern und einzelne Bindestriche, aber nicht am Anfang oder Ende.`)
};

const fr_auth_error_handle_format = /** @type {(inputs: Auth_Error_Handle_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisez des minuscules, des chiffres et des tirets simples, ni au début ni à la fin.`)
};

const it_auth_error_handle_format = /** @type {(inputs: Auth_Error_Handle_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa lettere minuscole, numeri e trattini singoli, non all’inizio né alla fine.`)
};

const nl_auth_error_handle_format = /** @type {(inputs: Auth_Error_Handle_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruik kleine letters, cijfers en losse koppeltekens, niet aan het begin of eind.`)
};

const pl_auth_error_handle_format = /** @type {(inputs: Auth_Error_Handle_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Używaj małych liter, cyfr i pojedynczych myślników, ale nie na początku ani na końcu.`)
};

const pt_auth_error_handle_format = /** @type {(inputs: Auth_Error_Handle_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use letras minúsculas, números e hifens simples, mas não no início nem no fim.`)
};

const ru_auth_error_handle_format = /** @type {(inputs: Auth_Error_Handle_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Используйте строчные латинские буквы, цифры и одиночные дефисы, но не в начале и не в конце.`)
};

const sv_auth_error_handle_format = /** @type {(inputs: Auth_Error_Handle_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd små bokstäver, siffror och enstaka bindestreck, men inte först eller sist.`)
};

const tr_auth_error_handle_format = /** @type {(inputs: Auth_Error_Handle_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Küçük harf, rakam ve tek tire kullan; tire başta veya sonda olamaz.`)
};

const zh_auth_error_handle_format = /** @type {(inputs: Auth_Error_Handle_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`只能使用小写字母、数字和单个连字符，且不能以连字符开头或结尾。`)
};

const ja_auth_error_handle_format = /** @type {(inputs: Auth_Error_Handle_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`小文字の英字、数字、1 つずつのハイフンを使ってください。先頭と末尾にハイフンは使えません。`)
};

/**
* | output |
* | --- |
* | "Use lowercase letters, numbers and single hyphens, not at the start or end." |
*
* @param {Auth_Error_Handle_FormatInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_error_handle_format = /** @type {((inputs?: Auth_Error_Handle_FormatInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Error_Handle_FormatInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_error_handle_format(inputs)
	if (locale === "de") return de_auth_error_handle_format(inputs)
	if (locale === "fr") return fr_auth_error_handle_format(inputs)
	if (locale === "it") return it_auth_error_handle_format(inputs)
	if (locale === "nl") return nl_auth_error_handle_format(inputs)
	if (locale === "pl") return pl_auth_error_handle_format(inputs)
	if (locale === "pt") return pt_auth_error_handle_format(inputs)
	if (locale === "ru") return ru_auth_error_handle_format(inputs)
	if (locale === "sv") return sv_auth_error_handle_format(inputs)
	if (locale === "tr") return tr_auth_error_handle_format(inputs)
	if (locale === "zh") return zh_auth_error_handle_format(inputs)
	if (locale === "ja") return ja_auth_error_handle_format(inputs)
	return en_auth_error_handle_format(inputs)
});
