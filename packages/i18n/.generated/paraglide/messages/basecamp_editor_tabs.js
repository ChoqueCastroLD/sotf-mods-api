/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Editor_TabsInputs */

const en_basecamp_editor_tabs = /** @type {(inputs: Basecamp_Editor_TabsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sections of the listing`)
};

const es_basecamp_editor_tabs = /** @type {(inputs: Basecamp_Editor_TabsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Secciones de la ficha`)
};

const de_basecamp_editor_tabs = /** @type {(inputs: Basecamp_Editor_TabsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bereiche der Seite`)
};

const fr_basecamp_editor_tabs = /** @type {(inputs: Basecamp_Editor_TabsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sections de la fiche`)
};

const it_basecamp_editor_tabs = /** @type {(inputs: Basecamp_Editor_TabsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sezioni della scheda`)
};

const nl_basecamp_editor_tabs = /** @type {(inputs: Basecamp_Editor_TabsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onderdelen van de pagina`)
};

const pl_basecamp_editor_tabs = /** @type {(inputs: Basecamp_Editor_TabsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sekcje strony`)
};

const pt_basecamp_editor_tabs = /** @type {(inputs: Basecamp_Editor_TabsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seções da página`)
};

const ru_basecamp_editor_tabs = /** @type {(inputs: Basecamp_Editor_TabsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Разделы страницы`)
};

const sv_basecamp_editor_tabs = /** @type {(inputs: Basecamp_Editor_TabsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sidans delar`)
};

const tr_basecamp_editor_tabs = /** @type {(inputs: Basecamp_Editor_TabsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfa bölümleri`)
};

const zh_basecamp_editor_tabs = /** @type {(inputs: Basecamp_Editor_TabsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面分区`)
};

const ja_basecamp_editor_tabs = /** @type {(inputs: Basecamp_Editor_TabsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページのセクション`)
};

/**
* | output |
* | --- |
* | "Sections of the listing" |
*
* @param {Basecamp_Editor_TabsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_editor_tabs = /** @type {((inputs?: Basecamp_Editor_TabsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Editor_TabsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_editor_tabs(inputs)
	if (locale === "de") return de_basecamp_editor_tabs(inputs)
	if (locale === "fr") return fr_basecamp_editor_tabs(inputs)
	if (locale === "it") return it_basecamp_editor_tabs(inputs)
	if (locale === "nl") return nl_basecamp_editor_tabs(inputs)
	if (locale === "pl") return pl_basecamp_editor_tabs(inputs)
	if (locale === "pt") return pt_basecamp_editor_tabs(inputs)
	if (locale === "ru") return ru_basecamp_editor_tabs(inputs)
	if (locale === "sv") return sv_basecamp_editor_tabs(inputs)
	if (locale === "tr") return tr_basecamp_editor_tabs(inputs)
	if (locale === "zh") return zh_basecamp_editor_tabs(inputs)
	if (locale === "ja") return ja_basecamp_editor_tabs(inputs)
	return en_basecamp_editor_tabs(inputs)
});
