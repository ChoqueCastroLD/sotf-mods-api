/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Language_FailedInputs */

const en_console_language_failed = /** @type {(inputs: Console_Language_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not change the language`)
};

const es_console_language_failed = /** @type {(inputs: Console_Language_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo cambiar el idioma`)
};

const de_console_language_failed = /** @type {(inputs: Console_Language_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Sprache konnte nicht geändert werden`)
};

const fr_console_language_failed = /** @type {(inputs: Console_Language_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de changer la langue`)
};

const it_console_language_failed = /** @type {(inputs: Console_Language_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile cambiare la lingua`)
};

const nl_console_language_failed = /** @type {(inputs: Console_Language_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De taal kon niet worden gewijzigd`)
};

const pl_console_language_failed = /** @type {(inputs: Console_Language_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zmienić języka`)
};

const pt_console_language_failed = /** @type {(inputs: Console_Language_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível mudar o idioma`)
};

const ru_console_language_failed = /** @type {(inputs: Console_Language_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось сменить язык`)
};

const sv_console_language_failed = /** @type {(inputs: Console_Language_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att byta språk`)
};

const tr_console_language_failed = /** @type {(inputs: Console_Language_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dil değiştirilemedi`)
};

const zh_console_language_failed = /** @type {(inputs: Console_Language_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法切换语言`)
};

const ja_console_language_failed = /** @type {(inputs: Console_Language_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`言語を変更できませんでした`)
};

/**
* | output |
* | --- |
* | "Could not change the language" |
*
* @param {Console_Language_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_language_failed = /** @type {((inputs?: Console_Language_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Language_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_language_failed(inputs)
	if (locale === "de") return de_console_language_failed(inputs)
	if (locale === "fr") return fr_console_language_failed(inputs)
	if (locale === "it") return it_console_language_failed(inputs)
	if (locale === "nl") return nl_console_language_failed(inputs)
	if (locale === "pl") return pl_console_language_failed(inputs)
	if (locale === "pt") return pt_console_language_failed(inputs)
	if (locale === "ru") return ru_console_language_failed(inputs)
	if (locale === "sv") return sv_console_language_failed(inputs)
	if (locale === "tr") return tr_console_language_failed(inputs)
	if (locale === "zh") return zh_console_language_failed(inputs)
	if (locale === "ja") return ja_console_language_failed(inputs)
	return en_console_language_failed(inputs)
});
