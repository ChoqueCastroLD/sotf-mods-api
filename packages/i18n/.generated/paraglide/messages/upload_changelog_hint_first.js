/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Changelog_Hint_FirstInputs */

const en_upload_changelog_hint_first = /** @type {(inputs: Upload_Changelog_Hint_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Optional for a first release.`)
};

const es_upload_changelog_hint_first = /** @type {(inputs: Upload_Changelog_Hint_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opcional en la primera versión.`)
};

const de_upload_changelog_hint_first = /** @type {(inputs: Upload_Changelog_Hint_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bei der ersten Veröffentlichung optional.`)
};

const fr_upload_changelog_hint_first = /** @type {(inputs: Upload_Changelog_Hint_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Facultatif pour une première version.`)
};

const it_upload_changelog_hint_first = /** @type {(inputs: Upload_Changelog_Hint_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Facoltativo per il primo rilascio.`)
};

const nl_upload_changelog_hint_first = /** @type {(inputs: Upload_Changelog_Hint_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Optioneel bij een eerste release.`)
};

const pl_upload_changelog_hint_first = /** @type {(inputs: Upload_Changelog_Hint_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opcjonalne przy pierwszym wydaniu.`)
};

const pt_upload_changelog_hint_first = /** @type {(inputs: Upload_Changelog_Hint_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opcional no primeiro lançamento.`)
};

const ru_upload_changelog_hint_first = /** @type {(inputs: Upload_Changelog_Hint_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для первого выпуска необязательно.`)
};

const sv_upload_changelog_hint_first = /** @type {(inputs: Upload_Changelog_Hint_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valfritt för en första release.`)
};

const tr_upload_changelog_hint_first = /** @type {(inputs: Upload_Changelog_Hint_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk sürümde isteğe bağlıdır.`)
};

const zh_upload_changelog_hint_first = /** @type {(inputs: Upload_Changelog_Hint_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`首次发布可不填。`)
};

const ja_upload_changelog_hint_first = /** @type {(inputs: Upload_Changelog_Hint_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`初回リリースでは任意です。`)
};

/**
* | output |
* | --- |
* | "Optional for a first release." |
*
* @param {Upload_Changelog_Hint_FirstInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_changelog_hint_first = /** @type {((inputs?: Upload_Changelog_Hint_FirstInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Changelog_Hint_FirstInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_changelog_hint_first(inputs)
	if (locale === "de") return de_upload_changelog_hint_first(inputs)
	if (locale === "fr") return fr_upload_changelog_hint_first(inputs)
	if (locale === "it") return it_upload_changelog_hint_first(inputs)
	if (locale === "nl") return nl_upload_changelog_hint_first(inputs)
	if (locale === "pl") return pl_upload_changelog_hint_first(inputs)
	if (locale === "pt") return pt_upload_changelog_hint_first(inputs)
	if (locale === "ru") return ru_upload_changelog_hint_first(inputs)
	if (locale === "sv") return sv_upload_changelog_hint_first(inputs)
	if (locale === "tr") return tr_upload_changelog_hint_first(inputs)
	if (locale === "zh") return zh_upload_changelog_hint_first(inputs)
	if (locale === "ja") return ja_upload_changelog_hint_first(inputs)
	return en_upload_changelog_hint_first(inputs)
});
