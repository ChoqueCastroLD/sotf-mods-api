/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Links_EmptyInputs */

const en_settings_links_empty = /** @type {(inputs: Settings_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No links yet.`)
};

const es_settings_links_empty = /** @type {(inputs: Settings_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía no hay enlaces.`)
};

const de_settings_links_empty = /** @type {(inputs: Settings_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Links.`)
};

const fr_settings_links_empty = /** @type {(inputs: Settings_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun lien pour l’instant.`)
};

const it_settings_links_empty = /** @type {(inputs: Settings_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun link.`)
};

const nl_settings_links_empty = /** @type {(inputs: Settings_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen links.`)
};

const pl_settings_links_empty = /** @type {(inputs: Settings_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeszcze nie ma linków.`)
};

const pt_settings_links_empty = /** @type {(inputs: Settings_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum link ainda.`)
};

const ru_settings_links_empty = /** @type {(inputs: Settings_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылок пока нет.`)
};

const sv_settings_links_empty = /** @type {(inputs: Settings_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga länkar än.`)
};

const tr_settings_links_empty = /** @type {(inputs: Settings_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz bağlantı yok.`)
};

const zh_settings_links_empty = /** @type {(inputs: Settings_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有链接。`)
};

const ja_settings_links_empty = /** @type {(inputs: Settings_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだリンクはありません。`)
};

/**
* | output |
* | --- |
* | "No links yet." |
*
* @param {Settings_Links_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_links_empty = /** @type {((inputs?: Settings_Links_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Links_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_links_empty(inputs)
	if (locale === "de") return de_settings_links_empty(inputs)
	if (locale === "fr") return fr_settings_links_empty(inputs)
	if (locale === "it") return it_settings_links_empty(inputs)
	if (locale === "nl") return nl_settings_links_empty(inputs)
	if (locale === "pl") return pl_settings_links_empty(inputs)
	if (locale === "pt") return pt_settings_links_empty(inputs)
	if (locale === "ru") return ru_settings_links_empty(inputs)
	if (locale === "sv") return sv_settings_links_empty(inputs)
	if (locale === "tr") return tr_settings_links_empty(inputs)
	if (locale === "zh") return zh_settings_links_empty(inputs)
	if (locale === "ja") return ja_settings_links_empty(inputs)
	return en_settings_links_empty(inputs)
});
