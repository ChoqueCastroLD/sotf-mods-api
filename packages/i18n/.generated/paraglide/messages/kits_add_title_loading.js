/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Add_Title_LoadingInputs */

const en_kits_add_title_loading = /** @type {(inputs: Kits_Add_Title_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add to a kit`)
};

const es_kits_add_title_loading = /** @type {(inputs: Kits_Add_Title_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir a un kit`)
};

const de_kits_add_title_loading = /** @type {(inputs: Kits_Add_Title_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zu einem Kit hinzufügen`)
};

const fr_kits_add_title_loading = /** @type {(inputs: Kits_Add_Title_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter à un kit`)
};

const it_kits_add_title_loading = /** @type {(inputs: Kits_Add_Title_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi a un kit`)
};

const nl_kits_add_title_loading = /** @type {(inputs: Kits_Add_Title_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aan een kit toevoegen`)
};

const pl_kits_add_title_loading = /** @type {(inputs: Kits_Add_Title_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj do zestawu`)
};

const pt_kits_add_title_loading = /** @type {(inputs: Kits_Add_Title_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar a um kit`)
};

const ru_kits_add_title_loading = /** @type {(inputs: Kits_Add_Title_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить в набор`)
};

const sv_kits_add_title_loading = /** @type {(inputs: Kits_Add_Title_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till i ett kit`)
};

const tr_kits_add_title_loading = /** @type {(inputs: Kits_Add_Title_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir kite ekle`)
};

const zh_kits_add_title_loading = /** @type {(inputs: Kits_Add_Title_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加到套装`)
};

const ja_kits_add_title_loading = /** @type {(inputs: Kits_Add_Title_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットに追加`)
};

/**
* | output |
* | --- |
* | "Add to a kit" |
*
* @param {Kits_Add_Title_LoadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_add_title_loading = /** @type {((inputs?: Kits_Add_Title_LoadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Add_Title_LoadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_add_title_loading(inputs)
	if (locale === "de") return de_kits_add_title_loading(inputs)
	if (locale === "fr") return fr_kits_add_title_loading(inputs)
	if (locale === "it") return it_kits_add_title_loading(inputs)
	if (locale === "nl") return nl_kits_add_title_loading(inputs)
	if (locale === "pl") return pl_kits_add_title_loading(inputs)
	if (locale === "pt") return pt_kits_add_title_loading(inputs)
	if (locale === "ru") return ru_kits_add_title_loading(inputs)
	if (locale === "sv") return sv_kits_add_title_loading(inputs)
	if (locale === "tr") return tr_kits_add_title_loading(inputs)
	if (locale === "zh") return zh_kits_add_title_loading(inputs)
	if (locale === "ja") return ja_kits_add_title_loading(inputs)
	return en_kits_add_title_loading(inputs)
});
