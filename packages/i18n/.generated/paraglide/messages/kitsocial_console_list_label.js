/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Console_List_LabelInputs */

const en_kitsocial_console_list_label = /** @type {(inputs: Kitsocial_Console_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits you follow`)
};

const es_kitsocial_console_list_label = /** @type {(inputs: Kitsocial_Console_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits que sigues`)
};

const de_kitsocial_console_list_label = /** @type {(inputs: Kitsocial_Console_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits, denen du folgst`)
};

const fr_kitsocial_console_list_label = /** @type {(inputs: Kitsocial_Console_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits que vous suivez`)
};

const it_kitsocial_console_list_label = /** @type {(inputs: Kitsocial_Console_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit che segui`)
};

const nl_kitsocial_console_list_label = /** @type {(inputs: Kitsocial_Console_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits die je volgt`)
};

const pl_kitsocial_console_list_label = /** @type {(inputs: Kitsocial_Console_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zestawy, które obserwujesz`)
};

const pt_kitsocial_console_list_label = /** @type {(inputs: Kitsocial_Console_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits que você segue`)
};

const ru_kitsocial_console_list_label = /** @type {(inputs: Kitsocial_Console_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Наборы, на которые вы подписаны`)
};

const sv_kitsocial_console_list_label = /** @type {(inputs: Kitsocial_Console_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits du följer`)
};

const tr_kitsocial_console_list_label = /** @type {(inputs: Kitsocial_Console_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip ettiğin kitler`)
};

const zh_kitsocial_console_list_label = /** @type {(inputs: Kitsocial_Console_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你关注的套件`)
};

const ja_kitsocial_console_list_label = /** @type {(inputs: Kitsocial_Console_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー中のキット一覧`)
};

/**
* | output |
* | --- |
* | "Kits you follow" |
*
* @param {Kitsocial_Console_List_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_console_list_label = /** @type {((inputs?: Kitsocial_Console_List_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Console_List_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_console_list_label(inputs)
	if (locale === "de") return de_kitsocial_console_list_label(inputs)
	if (locale === "fr") return fr_kitsocial_console_list_label(inputs)
	if (locale === "it") return it_kitsocial_console_list_label(inputs)
	if (locale === "nl") return nl_kitsocial_console_list_label(inputs)
	if (locale === "pl") return pl_kitsocial_console_list_label(inputs)
	if (locale === "pt") return pt_kitsocial_console_list_label(inputs)
	if (locale === "ru") return ru_kitsocial_console_list_label(inputs)
	if (locale === "sv") return sv_kitsocial_console_list_label(inputs)
	if (locale === "tr") return tr_kitsocial_console_list_label(inputs)
	if (locale === "zh") return zh_kitsocial_console_list_label(inputs)
	if (locale === "ja") return ja_kitsocial_console_list_label(inputs)
	return en_kitsocial_console_list_label(inputs)
});
