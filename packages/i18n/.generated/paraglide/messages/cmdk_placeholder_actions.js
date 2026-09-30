/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Placeholder_ActionsInputs */

const en_cmdk_placeholder_actions = /** @type {(inputs: Cmdk_Placeholder_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type a command…`)
};

const es_cmdk_placeholder_actions = /** @type {(inputs: Cmdk_Placeholder_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribe un comando…`)
};

const de_cmdk_placeholder_actions = /** @type {(inputs: Cmdk_Placeholder_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Befehl eingeben…`)
};

const fr_cmdk_placeholder_actions = /** @type {(inputs: Cmdk_Placeholder_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tapez une commande…`)
};

const it_cmdk_placeholder_actions = /** @type {(inputs: Cmdk_Placeholder_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scrivi un comando…`)
};

const nl_cmdk_placeholder_actions = /** @type {(inputs: Cmdk_Placeholder_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Typ een opdracht…`)
};

const pl_cmdk_placeholder_actions = /** @type {(inputs: Cmdk_Placeholder_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wpisz polecenie…`)
};

const pt_cmdk_placeholder_actions = /** @type {(inputs: Cmdk_Placeholder_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Digite um comando…`)
};

const ru_cmdk_placeholder_actions = /** @type {(inputs: Cmdk_Placeholder_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Введите команду…`)
};

const sv_cmdk_placeholder_actions = /** @type {(inputs: Cmdk_Placeholder_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skriv ett kommando…`)
};

const tr_cmdk_placeholder_actions = /** @type {(inputs: Cmdk_Placeholder_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir komut yaz…`)
};

const zh_cmdk_placeholder_actions = /** @type {(inputs: Cmdk_Placeholder_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`输入命令…`)
};

const ja_cmdk_placeholder_actions = /** @type {(inputs: Cmdk_Placeholder_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コマンドを入力…`)
};

/**
* | output |
* | --- |
* | "Type a command…" |
*
* @param {Cmdk_Placeholder_ActionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_placeholder_actions = /** @type {((inputs?: Cmdk_Placeholder_ActionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Placeholder_ActionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_placeholder_actions(inputs)
	if (locale === "de") return de_cmdk_placeholder_actions(inputs)
	if (locale === "fr") return fr_cmdk_placeholder_actions(inputs)
	if (locale === "it") return it_cmdk_placeholder_actions(inputs)
	if (locale === "nl") return nl_cmdk_placeholder_actions(inputs)
	if (locale === "pl") return pl_cmdk_placeholder_actions(inputs)
	if (locale === "pt") return pt_cmdk_placeholder_actions(inputs)
	if (locale === "ru") return ru_cmdk_placeholder_actions(inputs)
	if (locale === "sv") return sv_cmdk_placeholder_actions(inputs)
	if (locale === "tr") return tr_cmdk_placeholder_actions(inputs)
	if (locale === "zh") return zh_cmdk_placeholder_actions(inputs)
	if (locale === "ja") return ja_cmdk_placeholder_actions(inputs)
	return en_cmdk_placeholder_actions(inputs)
});
