/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Changelog_OkInputs */

const en_upload_preflight_changelog_ok = /** @type {(inputs: Upload_Preflight_Changelog_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changelog written.`)
};

const es_upload_preflight_changelog_ok = /** @type {(inputs: Upload_Preflight_Changelog_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registro de cambios escrito.`)
};

const de_upload_preflight_changelog_ok = /** @type {(inputs: Upload_Preflight_Changelog_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Änderungsprotokoll geschrieben.`)
};

const fr_upload_preflight_changelog_ok = /** @type {(inputs: Upload_Preflight_Changelog_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Journal des modifications rédigé.`)
};

const it_upload_preflight_changelog_ok = /** @type {(inputs: Upload_Preflight_Changelog_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registro delle modifiche scritto.`)
};

const nl_upload_preflight_changelog_ok = /** @type {(inputs: Upload_Preflight_Changelog_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wijzigingslog geschreven.`)
};

const pl_upload_preflight_changelog_ok = /** @type {(inputs: Upload_Preflight_Changelog_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista zmian napisana.`)
};

const pt_upload_preflight_changelog_ok = /** @type {(inputs: Upload_Preflight_Changelog_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registro de mudanças escrito.`)
};

const ru_upload_preflight_changelog_ok = /** @type {(inputs: Upload_Preflight_Changelog_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Список изменений написан.`)
};

const sv_upload_preflight_changelog_ok = /** @type {(inputs: Upload_Preflight_Changelog_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ändringslogg skriven.`)
};

const tr_upload_preflight_changelog_ok = /** @type {(inputs: Upload_Preflight_Changelog_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklik günlüğü yazıldı.`)
};

const zh_upload_preflight_changelog_ok = /** @type {(inputs: Upload_Preflight_Changelog_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已填写更新日志。`)
};

const ja_upload_preflight_changelog_ok = /** @type {(inputs: Upload_Preflight_Changelog_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更履歴を記入済み。`)
};

/**
* | output |
* | --- |
* | "Changelog written." |
*
* @param {Upload_Preflight_Changelog_OkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_changelog_ok = /** @type {((inputs?: Upload_Preflight_Changelog_OkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Changelog_OkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_changelog_ok(inputs)
	if (locale === "de") return de_upload_preflight_changelog_ok(inputs)
	if (locale === "fr") return fr_upload_preflight_changelog_ok(inputs)
	if (locale === "it") return it_upload_preflight_changelog_ok(inputs)
	if (locale === "nl") return nl_upload_preflight_changelog_ok(inputs)
	if (locale === "pl") return pl_upload_preflight_changelog_ok(inputs)
	if (locale === "pt") return pt_upload_preflight_changelog_ok(inputs)
	if (locale === "ru") return ru_upload_preflight_changelog_ok(inputs)
	if (locale === "sv") return sv_upload_preflight_changelog_ok(inputs)
	if (locale === "tr") return tr_upload_preflight_changelog_ok(inputs)
	if (locale === "zh") return zh_upload_preflight_changelog_ok(inputs)
	if (locale === "ja") return ja_upload_preflight_changelog_ok(inputs)
	return en_upload_preflight_changelog_ok(inputs)
});
