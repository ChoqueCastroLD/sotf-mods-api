/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ query: NonNullable<unknown> }} Cmdk_Empty_ActionsInputs */

const en_cmdk_empty_actions = /** @type {(inputs: Cmdk_Empty_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No command matches “${i?.query}”.`)
};

const es_cmdk_empty_actions = /** @type {(inputs: Cmdk_Empty_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ningún comando coincide con «${i?.query}».`)
};

const de_cmdk_empty_actions = /** @type {(inputs: Cmdk_Empty_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kein Befehl passt zu „${i?.query}“.`)
};

const fr_cmdk_empty_actions = /** @type {(inputs: Cmdk_Empty_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aucune commande ne correspond à « ${i?.query} ».`)
};

const it_cmdk_empty_actions = /** @type {(inputs: Cmdk_Empty_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nessun comando corrisponde a «${i?.query}».`)
};

const nl_cmdk_empty_actions = /** @type {(inputs: Cmdk_Empty_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Geen opdracht komt overeen met ‘${i?.query}’.`)
};

const pl_cmdk_empty_actions = /** @type {(inputs: Cmdk_Empty_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Żadne polecenie nie pasuje do „${i?.query}”.`)
};

const pt_cmdk_empty_actions = /** @type {(inputs: Cmdk_Empty_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nenhum comando corresponde a “${i?.query}”.`)
};

const ru_cmdk_empty_actions = /** @type {(inputs: Cmdk_Empty_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Нет команд по запросу «${i?.query}».`)
};

const sv_cmdk_empty_actions = /** @type {(inputs: Cmdk_Empty_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inget kommando matchar ”${i?.query}”.`)
};

const tr_cmdk_empty_actions = /** @type {(inputs: Cmdk_Empty_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.query}” ile eşleşen komut yok.`)
};

const zh_cmdk_empty_actions = /** @type {(inputs: Cmdk_Empty_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`没有与“${i?.query}”匹配的命令。`)
};

const ja_cmdk_empty_actions = /** @type {(inputs: Cmdk_Empty_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.query}」に一致するコマンドはありません。`)
};

/**
* | output |
* | --- |
* | "No command matches “{query}”." |
*
* @param {Cmdk_Empty_ActionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_empty_actions = /** @type {((inputs: Cmdk_Empty_ActionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Empty_ActionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_empty_actions(inputs)
	if (locale === "de") return de_cmdk_empty_actions(inputs)
	if (locale === "fr") return fr_cmdk_empty_actions(inputs)
	if (locale === "it") return it_cmdk_empty_actions(inputs)
	if (locale === "nl") return nl_cmdk_empty_actions(inputs)
	if (locale === "pl") return pl_cmdk_empty_actions(inputs)
	if (locale === "pt") return pt_cmdk_empty_actions(inputs)
	if (locale === "ru") return ru_cmdk_empty_actions(inputs)
	if (locale === "sv") return sv_cmdk_empty_actions(inputs)
	if (locale === "tr") return tr_cmdk_empty_actions(inputs)
	if (locale === "zh") return zh_cmdk_empty_actions(inputs)
	if (locale === "ja") return ja_cmdk_empty_actions(inputs)
	return en_cmdk_empty_actions(inputs)
});
