/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Changelog_GroupInputs */

const en_upload_changelog_group = /** @type {(inputs: Upload_Changelog_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changelog`)
};

const es_upload_changelog_group = /** @type {(inputs: Upload_Changelog_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registro de cambios`)
};

const de_upload_changelog_group = /** @type {(inputs: Upload_Changelog_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Änderungsprotokoll`)
};

const fr_upload_changelog_group = /** @type {(inputs: Upload_Changelog_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Journal des modifications`)
};

const it_upload_changelog_group = /** @type {(inputs: Upload_Changelog_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registro delle modifiche`)
};

const nl_upload_changelog_group = /** @type {(inputs: Upload_Changelog_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wijzigingslog`)
};

const pl_upload_changelog_group = /** @type {(inputs: Upload_Changelog_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista zmian`)
};

const pt_upload_changelog_group = /** @type {(inputs: Upload_Changelog_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registro de mudanças`)
};

const ru_upload_changelog_group = /** @type {(inputs: Upload_Changelog_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Список изменений`)
};

const sv_upload_changelog_group = /** @type {(inputs: Upload_Changelog_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ändringslogg`)
};

const tr_upload_changelog_group = /** @type {(inputs: Upload_Changelog_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklik günlüğü`)
};

const zh_upload_changelog_group = /** @type {(inputs: Upload_Changelog_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新日志`)
};

const ja_upload_changelog_group = /** @type {(inputs: Upload_Changelog_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更履歴`)
};

/**
* | output |
* | --- |
* | "Changelog" |
*
* @param {Upload_Changelog_GroupInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_changelog_group = /** @type {((inputs?: Upload_Changelog_GroupInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Changelog_GroupInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_changelog_group(inputs)
	if (locale === "de") return de_upload_changelog_group(inputs)
	if (locale === "fr") return fr_upload_changelog_group(inputs)
	if (locale === "it") return it_upload_changelog_group(inputs)
	if (locale === "nl") return nl_upload_changelog_group(inputs)
	if (locale === "pl") return pl_upload_changelog_group(inputs)
	if (locale === "pt") return pt_upload_changelog_group(inputs)
	if (locale === "ru") return ru_upload_changelog_group(inputs)
	if (locale === "sv") return sv_upload_changelog_group(inputs)
	if (locale === "tr") return tr_upload_changelog_group(inputs)
	if (locale === "zh") return zh_upload_changelog_group(inputs)
	if (locale === "ja") return ja_upload_changelog_group(inputs)
	return en_upload_changelog_group(inputs)
});
