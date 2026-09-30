/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_Publish_HintInputs */

const en_basecamp_settings_publish_hint = /** @type {(inputs: Basecamp_Settings_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show it in lists and search again.`)
};

const es_basecamp_settings_publish_hint = /** @type {(inputs: Basecamp_Settings_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vuelve a mostrarlo en listas y búsqueda.`)
};

const de_basecamp_settings_publish_hint = /** @type {(inputs: Basecamp_Settings_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wieder in Listen und Suche zeigen.`)
};

const fr_basecamp_settings_publish_hint = /** @type {(inputs: Basecamp_Settings_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’afficher à nouveau dans les listes et la recherche.`)
};

const it_basecamp_settings_publish_hint = /** @type {(inputs: Basecamp_Settings_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrala di nuovo in elenchi e ricerca.`)
};

const nl_basecamp_settings_publish_hint = /** @type {(inputs: Basecamp_Settings_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toon hem weer in lijsten en zoeken.`)
};

const pl_basecamp_settings_publish_hint = /** @type {(inputs: Basecamp_Settings_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokaż go znów na listach i w wyszukiwaniu.`)
};

const pt_basecamp_settings_publish_hint = /** @type {(inputs: Basecamp_Settings_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar de novo nas listas e na pesquisa.`)
};

const ru_basecamp_settings_publish_hint = /** @type {(inputs: Basecamp_Settings_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Снова показывать в списках и поиске.`)
};

const sv_basecamp_settings_publish_hint = /** @type {(inputs: Basecamp_Settings_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa den i listor och sökning igen.`)
};

const tr_basecamp_settings_publish_hint = /** @type {(inputs: Basecamp_Settings_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listelerde ve aramada yeniden göster.`)
};

const zh_basecamp_settings_publish_hint = /** @type {(inputs: Basecamp_Settings_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新显示在列表和搜索中。`)
};

const ja_basecamp_settings_publish_hint = /** @type {(inputs: Basecamp_Settings_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一覧と検索に再び表示します。`)
};

/**
* | output |
* | --- |
* | "Show it in lists and search again." |
*
* @param {Basecamp_Settings_Publish_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_publish_hint = /** @type {((inputs?: Basecamp_Settings_Publish_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Publish_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_publish_hint(inputs)
	if (locale === "de") return de_basecamp_settings_publish_hint(inputs)
	if (locale === "fr") return fr_basecamp_settings_publish_hint(inputs)
	if (locale === "it") return it_basecamp_settings_publish_hint(inputs)
	if (locale === "nl") return nl_basecamp_settings_publish_hint(inputs)
	if (locale === "pl") return pl_basecamp_settings_publish_hint(inputs)
	if (locale === "pt") return pt_basecamp_settings_publish_hint(inputs)
	if (locale === "ru") return ru_basecamp_settings_publish_hint(inputs)
	if (locale === "sv") return sv_basecamp_settings_publish_hint(inputs)
	if (locale === "tr") return tr_basecamp_settings_publish_hint(inputs)
	if (locale === "zh") return zh_basecamp_settings_publish_hint(inputs)
	if (locale === "ja") return ja_basecamp_settings_publish_hint(inputs)
	return en_basecamp_settings_publish_hint(inputs)
});
