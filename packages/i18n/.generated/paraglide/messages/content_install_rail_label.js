/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Install_Rail_LabelInputs */

const en_content_install_rail_label = /** @type {(inputs: Content_Install_Rail_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guide sections`)
};

const es_content_install_rail_label = /** @type {(inputs: Content_Install_Rail_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Secciones de la guía`)
};

const de_content_install_rail_label = /** @type {(inputs: Content_Install_Rail_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abschnitte der Anleitung`)
};

const fr_content_install_rail_label = /** @type {(inputs: Content_Install_Rail_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sections du guide`)
};

const it_content_install_rail_label = /** @type {(inputs: Content_Install_Rail_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sezioni della guida`)
};

const nl_content_install_rail_label = /** @type {(inputs: Content_Install_Rail_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onderdelen van de gids`)
};

const pl_content_install_rail_label = /** @type {(inputs: Content_Install_Rail_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sekcje poradnika`)
};

const pt_content_install_rail_label = /** @type {(inputs: Content_Install_Rail_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seções do guia`)
};

const ru_content_install_rail_label = /** @type {(inputs: Content_Install_Rail_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Разделы руководства`)
};

const sv_content_install_rail_label = /** @type {(inputs: Content_Install_Rail_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guidens avsnitt`)
};

const tr_content_install_rail_label = /** @type {(inputs: Content_Install_Rail_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rehber bölümleri`)
};

const zh_content_install_rail_label = /** @type {(inputs: Content_Install_Rail_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`指南章节`)
};

const ja_content_install_rail_label = /** @type {(inputs: Content_Install_Rail_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ガイドのセクション`)
};

/**
* | output |
* | --- |
* | "Guide sections" |
*
* @param {Content_Install_Rail_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_install_rail_label = /** @type {((inputs?: Content_Install_Rail_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Install_Rail_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_install_rail_label(inputs)
	if (locale === "de") return de_content_install_rail_label(inputs)
	if (locale === "fr") return fr_content_install_rail_label(inputs)
	if (locale === "it") return it_content_install_rail_label(inputs)
	if (locale === "nl") return nl_content_install_rail_label(inputs)
	if (locale === "pl") return pl_content_install_rail_label(inputs)
	if (locale === "pt") return pt_content_install_rail_label(inputs)
	if (locale === "ru") return ru_content_install_rail_label(inputs)
	if (locale === "sv") return sv_content_install_rail_label(inputs)
	if (locale === "tr") return tr_content_install_rail_label(inputs)
	if (locale === "zh") return zh_content_install_rail_label(inputs)
	if (locale === "ja") return ja_content_install_rail_label(inputs)
	return en_content_install_rail_label(inputs)
});
