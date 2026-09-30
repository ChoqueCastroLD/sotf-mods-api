/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Markdown_HintInputs */

const en_admin_markdown_hint = /** @type {(inputs: Admin_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown: links, lists and emphasis.`)
};

const es_admin_markdown_hint = /** @type {(inputs: Admin_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown: enlaces, listas y énfasis.`)
};

const de_admin_markdown_hint = /** @type {(inputs: Admin_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown: Links, Listen und Hervorhebungen.`)
};

const fr_admin_markdown_hint = /** @type {(inputs: Admin_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown : liens, listes et mise en valeur.`)
};

const it_admin_markdown_hint = /** @type {(inputs: Admin_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown: link, elenchi ed enfasi.`)
};

const nl_admin_markdown_hint = /** @type {(inputs: Admin_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown: links, lijsten en nadruk.`)
};

const pl_admin_markdown_hint = /** @type {(inputs: Admin_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown: linki, listy i wyróżnienia.`)
};

const pt_admin_markdown_hint = /** @type {(inputs: Admin_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown: links, listas e ênfase.`)
};

const ru_admin_markdown_hint = /** @type {(inputs: Admin_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown: ссылки, списки и выделение.`)
};

const sv_admin_markdown_hint = /** @type {(inputs: Admin_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown: länkar, listor och betoning.`)
};

const tr_admin_markdown_hint = /** @type {(inputs: Admin_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown: bağlantılar, listeler ve vurgu.`)
};

const zh_admin_markdown_hint = /** @type {(inputs: Admin_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown：链接、列表和强调。`)
};

const ja_admin_markdown_hint = /** @type {(inputs: Admin_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown：リンク、リスト、強調が使えます。`)
};

/**
* | output |
* | --- |
* | "Markdown: links, lists and emphasis." |
*
* @param {Admin_Markdown_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_markdown_hint = /** @type {((inputs?: Admin_Markdown_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Markdown_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_markdown_hint(inputs)
	if (locale === "de") return de_admin_markdown_hint(inputs)
	if (locale === "fr") return fr_admin_markdown_hint(inputs)
	if (locale === "it") return it_admin_markdown_hint(inputs)
	if (locale === "nl") return nl_admin_markdown_hint(inputs)
	if (locale === "pl") return pl_admin_markdown_hint(inputs)
	if (locale === "pt") return pt_admin_markdown_hint(inputs)
	if (locale === "ru") return ru_admin_markdown_hint(inputs)
	if (locale === "sv") return sv_admin_markdown_hint(inputs)
	if (locale === "tr") return tr_admin_markdown_hint(inputs)
	if (locale === "zh") return zh_admin_markdown_hint(inputs)
	if (locale === "ja") return ja_admin_markdown_hint(inputs)
	return en_admin_markdown_hint(inputs)
});
