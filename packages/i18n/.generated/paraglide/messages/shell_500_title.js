/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_500_TitleInputs */

const en_shell_500_title = /** @type {(inputs: Shell_500_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something went wrong`)
};

const es_shell_500_title = /** @type {(inputs: Shell_500_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo salió mal`)
};

const de_shell_500_title = /** @type {(inputs: Shell_500_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etwas ist schiefgelaufen`)
};

const fr_shell_500_title = /** @type {(inputs: Shell_500_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une erreur s’est produite`)
};

const it_shell_500_title = /** @type {(inputs: Shell_500_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcosa è andato storto`)
};

const nl_shell_500_title = /** @type {(inputs: Shell_500_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er ging iets mis`)
};

const pl_shell_500_title = /** @type {(inputs: Shell_500_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coś poszło nie tak`)
};

const pt_shell_500_title = /** @type {(inputs: Shell_500_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo deu errado`)
};

const ru_shell_500_title = /** @type {(inputs: Shell_500_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что-то пошло не так`)
};

const sv_shell_500_title = /** @type {(inputs: Shell_500_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Något gick fel`)
};

const tr_shell_500_title = /** @type {(inputs: Shell_500_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir şeyler ters gitti`)
};

const zh_shell_500_title = /** @type {(inputs: Shell_500_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`出了点问题`)
};

const ja_shell_500_title = /** @type {(inputs: Shell_500_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`問題が発生しました`)
};

/**
* | output |
* | --- |
* | "Something went wrong" |
*
* @param {Shell_500_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_500_title = /** @type {((inputs?: Shell_500_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_500_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_500_title(inputs)
	if (locale === "de") return de_shell_500_title(inputs)
	if (locale === "fr") return fr_shell_500_title(inputs)
	if (locale === "it") return it_shell_500_title(inputs)
	if (locale === "nl") return nl_shell_500_title(inputs)
	if (locale === "pl") return pl_shell_500_title(inputs)
	if (locale === "pt") return pt_shell_500_title(inputs)
	if (locale === "ru") return ru_shell_500_title(inputs)
	if (locale === "sv") return sv_shell_500_title(inputs)
	if (locale === "tr") return tr_shell_500_title(inputs)
	if (locale === "zh") return zh_shell_500_title(inputs)
	if (locale === "ja") return ja_shell_500_title(inputs)
	return en_shell_500_title(inputs)
});
