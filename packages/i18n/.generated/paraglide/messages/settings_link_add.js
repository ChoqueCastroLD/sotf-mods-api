/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Link_AddInputs */

const en_settings_link_add = /** @type {(inputs: Settings_Link_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add a link`)
};

const es_settings_link_add = /** @type {(inputs: Settings_Link_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir un enlace`)
};

const de_settings_link_add = /** @type {(inputs: Settings_Link_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link hinzufügen`)
};

const fr_settings_link_add = /** @type {(inputs: Settings_Link_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter un lien`)
};

const it_settings_link_add = /** @type {(inputs: Settings_Link_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi un link`)
};

const nl_settings_link_add = /** @type {(inputs: Settings_Link_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link toevoegen`)
};

const pl_settings_link_add = /** @type {(inputs: Settings_Link_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj link`)
};

const pt_settings_link_add = /** @type {(inputs: Settings_Link_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar um link`)
};

const ru_settings_link_add = /** @type {(inputs: Settings_Link_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить ссылку`)
};

const sv_settings_link_add = /** @type {(inputs: Settings_Link_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till en länk`)
};

const tr_settings_link_add = /** @type {(inputs: Settings_Link_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantı ekle`)
};

const zh_settings_link_add = /** @type {(inputs: Settings_Link_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加链接`)
};

const ja_settings_link_add = /** @type {(inputs: Settings_Link_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンクを追加`)
};

/**
* | output |
* | --- |
* | "Add a link" |
*
* @param {Settings_Link_AddInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_link_add = /** @type {((inputs?: Settings_Link_AddInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Link_AddInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_link_add(inputs)
	if (locale === "de") return de_settings_link_add(inputs)
	if (locale === "fr") return fr_settings_link_add(inputs)
	if (locale === "it") return it_settings_link_add(inputs)
	if (locale === "nl") return nl_settings_link_add(inputs)
	if (locale === "pl") return pl_settings_link_add(inputs)
	if (locale === "pt") return pt_settings_link_add(inputs)
	if (locale === "ru") return ru_settings_link_add(inputs)
	if (locale === "sv") return sv_settings_link_add(inputs)
	if (locale === "tr") return tr_settings_link_add(inputs)
	if (locale === "zh") return zh_settings_link_add(inputs)
	if (locale === "ja") return ja_settings_link_add(inputs)
	return en_settings_link_add(inputs)
});
