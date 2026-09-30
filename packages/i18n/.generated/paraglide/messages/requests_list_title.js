/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_List_TitleInputs */

const en_requests_list_title = /** @type {(inputs: Requests_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod requests`)
};

const es_requests_list_title = /** @type {(inputs: Requests_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Peticiones de mods`)
};

const de_requests_list_title = /** @type {(inputs: Requests_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-Wünsche`)
};

const fr_requests_list_title = /** @type {(inputs: Requests_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demandes de mods`)
};

const it_requests_list_title = /** @type {(inputs: Requests_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richieste di mod`)
};

const nl_requests_list_title = /** @type {(inputs: Requests_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modverzoeken`)
};

const pl_requests_list_title = /** @type {(inputs: Requests_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prośby o mody`)
};

const pt_requests_list_title = /** @type {(inputs: Requests_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pedidos de mods`)
};

const ru_requests_list_title = /** @type {(inputs: Requests_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запросы модов`)
};

const sv_requests_list_title = /** @type {(inputs: Requests_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modönskemål`)
};

const tr_requests_list_title = /** @type {(inputs: Requests_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod istekleri`)
};

const zh_requests_list_title = /** @type {(inputs: Requests_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组请求`)
};

const ja_requests_list_title = /** @type {(inputs: Requests_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD リクエスト`)
};

/**
* | output |
* | --- |
* | "Mod requests" |
*
* @param {Requests_List_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_list_title = /** @type {((inputs?: Requests_List_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_List_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_list_title(inputs)
	if (locale === "de") return de_requests_list_title(inputs)
	if (locale === "fr") return fr_requests_list_title(inputs)
	if (locale === "it") return it_requests_list_title(inputs)
	if (locale === "nl") return nl_requests_list_title(inputs)
	if (locale === "pl") return pl_requests_list_title(inputs)
	if (locale === "pt") return pt_requests_list_title(inputs)
	if (locale === "ru") return ru_requests_list_title(inputs)
	if (locale === "sv") return sv_requests_list_title(inputs)
	if (locale === "tr") return tr_requests_list_title(inputs)
	if (locale === "zh") return zh_requests_list_title(inputs)
	if (locale === "ja") return ja_requests_list_title(inputs)
	return en_requests_list_title(inputs)
});
