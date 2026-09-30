/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Editor_ReadoutInputs */

const en_basecamp_editor_readout = /** @type {(inputs: Basecamp_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit listing`)
};

const es_basecamp_editor_readout = /** @type {(inputs: Basecamp_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar ficha`)
};

const de_basecamp_editor_readout = /** @type {(inputs: Basecamp_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seite bearbeiten`)
};

const fr_basecamp_editor_readout = /** @type {(inputs: Basecamp_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier la fiche`)
};

const it_basecamp_editor_readout = /** @type {(inputs: Basecamp_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifica scheda`)
};

const nl_basecamp_editor_readout = /** @type {(inputs: Basecamp_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina bewerken`)
};

const pl_basecamp_editor_readout = /** @type {(inputs: Basecamp_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edycja strony`)
};

const pt_basecamp_editor_readout = /** @type {(inputs: Basecamp_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar página`)
};

const ru_basecamp_editor_readout = /** @type {(inputs: Basecamp_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Редактирование страницы`)
};

const sv_basecamp_editor_readout = /** @type {(inputs: Basecamp_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigera sida`)
};

const tr_basecamp_editor_readout = /** @type {(inputs: Basecamp_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfayı düzenle`)
};

const zh_basecamp_editor_readout = /** @type {(inputs: Basecamp_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑页面`)
};

const ja_basecamp_editor_readout = /** @type {(inputs: Basecamp_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページを編集`)
};

/**
* | output |
* | --- |
* | "Edit listing" |
*
* @param {Basecamp_Editor_ReadoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_editor_readout = /** @type {((inputs?: Basecamp_Editor_ReadoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Editor_ReadoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_editor_readout(inputs)
	if (locale === "de") return de_basecamp_editor_readout(inputs)
	if (locale === "fr") return fr_basecamp_editor_readout(inputs)
	if (locale === "it") return it_basecamp_editor_readout(inputs)
	if (locale === "nl") return nl_basecamp_editor_readout(inputs)
	if (locale === "pl") return pl_basecamp_editor_readout(inputs)
	if (locale === "pt") return pt_basecamp_editor_readout(inputs)
	if (locale === "ru") return ru_basecamp_editor_readout(inputs)
	if (locale === "sv") return sv_basecamp_editor_readout(inputs)
	if (locale === "tr") return tr_basecamp_editor_readout(inputs)
	if (locale === "zh") return zh_basecamp_editor_readout(inputs)
	if (locale === "ja") return ja_basecamp_editor_readout(inputs)
	return en_basecamp_editor_readout(inputs)
});
