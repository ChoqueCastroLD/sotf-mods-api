/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Act_VersionsInputs */

const en_cmdk_act_versions = /** @type {(inputs: Cmdk_Act_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View versions and changelog`)
};

const es_cmdk_act_versions = /** @type {(inputs: Cmdk_Act_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver versiones y cambios`)
};

const de_cmdk_act_versions = /** @type {(inputs: Cmdk_Act_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionen und Changelog`)
};

const fr_cmdk_act_versions = /** @type {(inputs: Cmdk_Act_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir les versions et le journal`)
};

const it_cmdk_act_versions = /** @type {(inputs: Cmdk_Act_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedi versioni e changelog`)
};

const nl_cmdk_act_versions = /** @type {(inputs: Cmdk_Act_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versies en changelog bekijken`)
};

const pl_cmdk_act_versions = /** @type {(inputs: Cmdk_Act_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersje i dziennik zmian`)
};

const pt_cmdk_act_versions = /** @type {(inputs: Cmdk_Act_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver versões e alterações`)
};

const ru_cmdk_act_versions = /** @type {(inputs: Cmdk_Act_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версии и список изменений`)
};

const sv_cmdk_act_versions = /** @type {(inputs: Cmdk_Act_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa versioner och ändringslogg`)
};

const tr_cmdk_act_versions = /** @type {(inputs: Cmdk_Act_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürümler ve değişiklik günlüğü`)
};

const zh_cmdk_act_versions = /** @type {(inputs: Cmdk_Act_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看版本与更新日志`)
};

const ja_cmdk_act_versions = /** @type {(inputs: Cmdk_Act_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョンと変更履歴`)
};

/**
* | output |
* | --- |
* | "View versions and changelog" |
*
* @param {Cmdk_Act_VersionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_act_versions = /** @type {((inputs?: Cmdk_Act_VersionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Act_VersionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_act_versions(inputs)
	if (locale === "de") return de_cmdk_act_versions(inputs)
	if (locale === "fr") return fr_cmdk_act_versions(inputs)
	if (locale === "it") return it_cmdk_act_versions(inputs)
	if (locale === "nl") return nl_cmdk_act_versions(inputs)
	if (locale === "pl") return pl_cmdk_act_versions(inputs)
	if (locale === "pt") return pt_cmdk_act_versions(inputs)
	if (locale === "ru") return ru_cmdk_act_versions(inputs)
	if (locale === "sv") return sv_cmdk_act_versions(inputs)
	if (locale === "tr") return tr_cmdk_act_versions(inputs)
	if (locale === "zh") return zh_cmdk_act_versions(inputs)
	if (locale === "ja") return ja_cmdk_act_versions(inputs)
	return en_cmdk_act_versions(inputs)
});
