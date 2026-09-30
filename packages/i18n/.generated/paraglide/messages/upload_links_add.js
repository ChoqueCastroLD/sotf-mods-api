/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Links_AddInputs */

const en_upload_links_add = /** @type {(inputs: Upload_Links_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add a link`)
};

const es_upload_links_add = /** @type {(inputs: Upload_Links_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir enlace`)
};

const de_upload_links_add = /** @type {(inputs: Upload_Links_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link hinzufügen`)
};

const fr_upload_links_add = /** @type {(inputs: Upload_Links_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter un lien`)
};

const it_upload_links_add = /** @type {(inputs: Upload_Links_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi un link`)
};

const nl_upload_links_add = /** @type {(inputs: Upload_Links_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link toevoegen`)
};

const pl_upload_links_add = /** @type {(inputs: Upload_Links_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj link`)
};

const pt_upload_links_add = /** @type {(inputs: Upload_Links_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar link`)
};

const ru_upload_links_add = /** @type {(inputs: Upload_Links_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить ссылку`)
};

const sv_upload_links_add = /** @type {(inputs: Upload_Links_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till länk`)
};

const tr_upload_links_add = /** @type {(inputs: Upload_Links_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantı ekle`)
};

const zh_upload_links_add = /** @type {(inputs: Upload_Links_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加链接`)
};

const ja_upload_links_add = /** @type {(inputs: Upload_Links_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンクを追加`)
};

/**
* | output |
* | --- |
* | "Add a link" |
*
* @param {Upload_Links_AddInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_links_add = /** @type {((inputs?: Upload_Links_AddInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Links_AddInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_links_add(inputs)
	if (locale === "de") return de_upload_links_add(inputs)
	if (locale === "fr") return fr_upload_links_add(inputs)
	if (locale === "it") return it_upload_links_add(inputs)
	if (locale === "nl") return nl_upload_links_add(inputs)
	if (locale === "pl") return pl_upload_links_add(inputs)
	if (locale === "pt") return pt_upload_links_add(inputs)
	if (locale === "ru") return ru_upload_links_add(inputs)
	if (locale === "sv") return sv_upload_links_add(inputs)
	if (locale === "tr") return tr_upload_links_add(inputs)
	if (locale === "zh") return zh_upload_links_add(inputs)
	if (locale === "ja") return ja_upload_links_add(inputs)
	return en_upload_links_add(inputs)
});
