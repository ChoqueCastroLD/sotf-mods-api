/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Changelog_LabelInputs */

const en_upload_changelog_label = /** @type {(inputs: Upload_Changelog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What changed (Markdown)`)
};

const es_upload_changelog_label = /** @type {(inputs: Upload_Changelog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qué ha cambiado (Markdown)`)
};

const de_upload_changelog_label = /** @type {(inputs: Upload_Changelog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was sich geändert hat (Markdown)`)
};

const fr_upload_changelog_label = /** @type {(inputs: Upload_Changelog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce qui a changé (Markdown)`)
};

const it_upload_changelog_label = /** @type {(inputs: Upload_Changelog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cosa è cambiato (Markdown)`)
};

const nl_upload_changelog_label = /** @type {(inputs: Upload_Changelog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat er veranderd is (Markdown)`)
};

const pl_upload_changelog_label = /** @type {(inputs: Upload_Changelog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co się zmieniło (Markdown)`)
};

const pt_upload_changelog_label = /** @type {(inputs: Upload_Changelog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que mudou (Markdown)`)
};

const ru_upload_changelog_label = /** @type {(inputs: Upload_Changelog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что изменилось (Markdown)`)
};

const sv_upload_changelog_label = /** @type {(inputs: Upload_Changelog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad som ändrats (Markdown)`)
};

const tr_upload_changelog_label = /** @type {(inputs: Upload_Changelog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neler değişti (Markdown)`)
};

const zh_upload_changelog_label = /** @type {(inputs: Upload_Changelog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新内容（Markdown）`)
};

const ja_upload_changelog_label = /** @type {(inputs: Upload_Changelog_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更点（Markdown）`)
};

/**
* | output |
* | --- |
* | "What changed (Markdown)" |
*
* @param {Upload_Changelog_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_changelog_label = /** @type {((inputs?: Upload_Changelog_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Changelog_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_changelog_label(inputs)
	if (locale === "de") return de_upload_changelog_label(inputs)
	if (locale === "fr") return fr_upload_changelog_label(inputs)
	if (locale === "it") return it_upload_changelog_label(inputs)
	if (locale === "nl") return nl_upload_changelog_label(inputs)
	if (locale === "pl") return pl_upload_changelog_label(inputs)
	if (locale === "pt") return pt_upload_changelog_label(inputs)
	if (locale === "ru") return ru_upload_changelog_label(inputs)
	if (locale === "sv") return sv_upload_changelog_label(inputs)
	if (locale === "tr") return tr_upload_changelog_label(inputs)
	if (locale === "zh") return zh_upload_changelog_label(inputs)
	if (locale === "ja") return ja_upload_changelog_label(inputs)
	return en_upload_changelog_label(inputs)
});
