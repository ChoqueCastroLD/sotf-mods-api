/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Empty_TitleInputs */

const en_console_empty_title = /** @type {(inputs: Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing here yet`)
};

const es_console_empty_title = /** @type {(inputs: Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay nada aquí`)
};

const de_console_empty_title = /** @type {(inputs: Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hier ist noch nichts`)
};

const fr_console_empty_title = /** @type {(inputs: Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien ici pour l’instant`)
};

const it_console_empty_title = /** @type {(inputs: Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora niente qui`)
};

const nl_console_empty_title = /** @type {(inputs: Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hier is nog niets`)
};

const pl_console_empty_title = /** @type {(inputs: Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeszcze nic tu nie ma`)
};

const pt_console_empty_title = /** @type {(inputs: Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada aqui ainda`)
};

const ru_console_empty_title = /** @type {(inputs: Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Здесь пока пусто`)
};

const sv_console_empty_title = /** @type {(inputs: Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget här än`)
};

const tr_console_empty_title = /** @type {(inputs: Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Burada henüz bir şey yok`)
};

const zh_console_empty_title = /** @type {(inputs: Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这里还什么都没有`)
};

const ja_console_empty_title = /** @type {(inputs: Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだ何もありません`)
};

/**
* | output |
* | --- |
* | "Nothing here yet" |
*
* @param {Console_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_empty_title = /** @type {((inputs?: Console_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_empty_title(inputs)
	if (locale === "de") return de_console_empty_title(inputs)
	if (locale === "fr") return fr_console_empty_title(inputs)
	if (locale === "it") return it_console_empty_title(inputs)
	if (locale === "nl") return nl_console_empty_title(inputs)
	if (locale === "pl") return pl_console_empty_title(inputs)
	if (locale === "pt") return pt_console_empty_title(inputs)
	if (locale === "ru") return ru_console_empty_title(inputs)
	if (locale === "sv") return sv_console_empty_title(inputs)
	if (locale === "tr") return tr_console_empty_title(inputs)
	if (locale === "zh") return zh_console_empty_title(inputs)
	if (locale === "ja") return ja_console_empty_title(inputs)
	return en_console_empty_title(inputs)
});
