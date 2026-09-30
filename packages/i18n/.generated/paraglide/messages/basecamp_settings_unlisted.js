/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_UnlistedInputs */

const en_basecamp_settings_unlisted = /** @type {(inputs: Basecamp_Settings_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reachable by its link, hidden from lists and search.`)
};

const es_basecamp_settings_unlisted = /** @type {(inputs: Basecamp_Settings_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accesible con su enlace, oculto en listas y búsqueda.`)
};

const de_basecamp_settings_unlisted = /** @type {(inputs: Basecamp_Settings_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Über seinen Link erreichbar, in Listen und Suche ausgeblendet.`)
};

const fr_basecamp_settings_unlisted = /** @type {(inputs: Basecamp_Settings_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accessible par son lien, masqué des listes et de la recherche.`)
};

const it_basecamp_settings_unlisted = /** @type {(inputs: Basecamp_Settings_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raggiungibile dal suo link, nascosta da elenchi e ricerca.`)
};

const nl_basecamp_settings_unlisted = /** @type {(inputs: Basecamp_Settings_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bereikbaar via de link, verborgen in lijsten en zoeken.`)
};

const pl_basecamp_settings_unlisted = /** @type {(inputs: Basecamp_Settings_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dostępny przez link, ukryty na listach i w wyszukiwaniu.`)
};

const pt_basecamp_settings_unlisted = /** @type {(inputs: Basecamp_Settings_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acessível pelo link, oculto nas listas e na pesquisa.`)
};

const ru_basecamp_settings_unlisted = /** @type {(inputs: Basecamp_Settings_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Доступен по ссылке, скрыт из списков и поиска.`)
};

const sv_basecamp_settings_unlisted = /** @type {(inputs: Basecamp_Settings_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nåbar via länken, dold i listor och sökning.`)
};

const tr_basecamp_settings_unlisted = /** @type {(inputs: Basecamp_Settings_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantısıyla erişilebilir, listelerde ve aramada gizli.`)
};

const zh_basecamp_settings_unlisted = /** @type {(inputs: Basecamp_Settings_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可通过链接访问，但不会出现在列表和搜索中。`)
};

const ja_basecamp_settings_unlisted = /** @type {(inputs: Basecamp_Settings_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンクからはアクセスできますが、一覧と検索には表示されません。`)
};

/**
* | output |
* | --- |
* | "Reachable by its link, hidden from lists and search." |
*
* @param {Basecamp_Settings_UnlistedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_unlisted = /** @type {((inputs?: Basecamp_Settings_UnlistedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_UnlistedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_unlisted(inputs)
	if (locale === "de") return de_basecamp_settings_unlisted(inputs)
	if (locale === "fr") return fr_basecamp_settings_unlisted(inputs)
	if (locale === "it") return it_basecamp_settings_unlisted(inputs)
	if (locale === "nl") return nl_basecamp_settings_unlisted(inputs)
	if (locale === "pl") return pl_basecamp_settings_unlisted(inputs)
	if (locale === "pt") return pt_basecamp_settings_unlisted(inputs)
	if (locale === "ru") return ru_basecamp_settings_unlisted(inputs)
	if (locale === "sv") return sv_basecamp_settings_unlisted(inputs)
	if (locale === "tr") return tr_basecamp_settings_unlisted(inputs)
	if (locale === "zh") return zh_basecamp_settings_unlisted(inputs)
	if (locale === "ja") return ja_basecamp_settings_unlisted(inputs)
	return en_basecamp_settings_unlisted(inputs)
});
