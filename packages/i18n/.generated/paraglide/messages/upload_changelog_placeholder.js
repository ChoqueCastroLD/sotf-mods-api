/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Changelog_PlaceholderInputs */

const en_upload_changelog_placeholder = /** @type {(inputs: Upload_Changelog_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fixed…, added…, changed…`)
};

const es_upload_changelog_placeholder = /** @type {(inputs: Upload_Changelog_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corregido…, añadido…, cambiado…`)
};

const de_upload_changelog_placeholder = /** @type {(inputs: Upload_Changelog_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Behoben…, hinzugefügt…, geändert…`)
};

const fr_upload_changelog_placeholder = /** @type {(inputs: Upload_Changelog_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrigé…, ajouté…, modifié…`)
};

const it_upload_changelog_placeholder = /** @type {(inputs: Upload_Changelog_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corretto…, aggiunto…, modificato…`)
};

const nl_upload_changelog_placeholder = /** @type {(inputs: Upload_Changelog_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opgelost…, toegevoegd…, gewijzigd…`)
};

const pl_upload_changelog_placeholder = /** @type {(inputs: Upload_Changelog_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naprawiono…, dodano…, zmieniono…`)
};

const pt_upload_changelog_placeholder = /** @type {(inputs: Upload_Changelog_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrigido…, adicionado…, alterado…`)
};

const ru_upload_changelog_placeholder = /** @type {(inputs: Upload_Changelog_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Исправлено…, добавлено…, изменено…`)
};

const sv_upload_changelog_placeholder = /** @type {(inputs: Upload_Changelog_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fixat…, lagt till…, ändrat…`)
};

const tr_upload_changelog_placeholder = /** @type {(inputs: Upload_Changelog_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düzeltildi…, eklendi…, değiştirildi…`)
};

const zh_upload_changelog_placeholder = /** @type {(inputs: Upload_Changelog_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修复了…，新增了…，调整了…`)
};

const ja_upload_changelog_placeholder = /** @type {(inputs: Upload_Changelog_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修正…、追加…、変更…`)
};

/**
* | output |
* | --- |
* | "Fixed…, added…, changed…" |
*
* @param {Upload_Changelog_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_changelog_placeholder = /** @type {((inputs?: Upload_Changelog_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Changelog_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_changelog_placeholder(inputs)
	if (locale === "de") return de_upload_changelog_placeholder(inputs)
	if (locale === "fr") return fr_upload_changelog_placeholder(inputs)
	if (locale === "it") return it_upload_changelog_placeholder(inputs)
	if (locale === "nl") return nl_upload_changelog_placeholder(inputs)
	if (locale === "pl") return pl_upload_changelog_placeholder(inputs)
	if (locale === "pt") return pt_upload_changelog_placeholder(inputs)
	if (locale === "ru") return ru_upload_changelog_placeholder(inputs)
	if (locale === "sv") return sv_upload_changelog_placeholder(inputs)
	if (locale === "tr") return tr_upload_changelog_placeholder(inputs)
	if (locale === "zh") return zh_upload_changelog_placeholder(inputs)
	if (locale === "ja") return ja_upload_changelog_placeholder(inputs)
	return en_upload_changelog_placeholder(inputs)
});
