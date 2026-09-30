/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Update_TitleInputs */

const en_console_update_title = /** @type {(inputs: Console_Update_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A new version is out`)
};

const es_console_update_title = /** @type {(inputs: Console_Update_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hay una versión nueva`)
};

const de_console_update_title = /** @type {(inputs: Console_Update_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eine neue Version ist da`)
};

const fr_console_update_title = /** @type {(inputs: Console_Update_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une nouvelle version est disponible`)
};

const it_console_update_title = /** @type {(inputs: Console_Update_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`È uscita una nuova versione`)
};

const nl_console_update_title = /** @type {(inputs: Console_Update_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er is een nieuwe versie`)
};

const pl_console_update_title = /** @type {(inputs: Console_Update_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jest nowa wersja`)
};

const pt_console_update_title = /** @type {(inputs: Console_Update_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saiu uma nova versão`)
};

const ru_console_update_title = /** @type {(inputs: Console_Update_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вышла новая версия`)
};

const sv_console_update_title = /** @type {(inputs: Console_Update_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En ny version finns`)
};

const tr_console_update_title = /** @type {(inputs: Console_Update_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni bir sürüm çıktı`)
};

const zh_console_update_title = /** @type {(inputs: Console_Update_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新版本已发布`)
};

const ja_console_update_title = /** @type {(inputs: Console_Update_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいバージョンがあります`)
};

/**
* | output |
* | --- |
* | "A new version is out" |
*
* @param {Console_Update_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_update_title = /** @type {((inputs?: Console_Update_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Update_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_update_title(inputs)
	if (locale === "de") return de_console_update_title(inputs)
	if (locale === "fr") return fr_console_update_title(inputs)
	if (locale === "it") return it_console_update_title(inputs)
	if (locale === "nl") return nl_console_update_title(inputs)
	if (locale === "pl") return pl_console_update_title(inputs)
	if (locale === "pt") return pt_console_update_title(inputs)
	if (locale === "ru") return ru_console_update_title(inputs)
	if (locale === "sv") return sv_console_update_title(inputs)
	if (locale === "tr") return tr_console_update_title(inputs)
	if (locale === "zh") return zh_console_update_title(inputs)
	if (locale === "ja") return ja_console_update_title(inputs)
	return en_console_update_title(inputs)
});
