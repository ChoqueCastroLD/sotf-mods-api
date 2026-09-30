/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Action_Other_VersionsInputs */

const en_builds_action_other_versions = /** @type {(inputs: Builds_Action_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other versions`)
};

const es_builds_action_other_versions = /** @type {(inputs: Builds_Action_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otras versiones`)
};

const de_builds_action_other_versions = /** @type {(inputs: Builds_Action_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere Versionen`)
};

const fr_builds_action_other_versions = /** @type {(inputs: Builds_Action_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autres versions`)
};

const it_builds_action_other_versions = /** @type {(inputs: Builds_Action_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altre versioni`)
};

const nl_builds_action_other_versions = /** @type {(inputs: Builds_Action_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere versies`)
};

const pl_builds_action_other_versions = /** @type {(inputs: Builds_Action_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inne wersje`)
};

const pt_builds_action_other_versions = /** @type {(inputs: Builds_Action_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outras versões`)
};

const ru_builds_action_other_versions = /** @type {(inputs: Builds_Action_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другие версии`)
};

const sv_builds_action_other_versions = /** @type {(inputs: Builds_Action_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andra versioner`)
};

const tr_builds_action_other_versions = /** @type {(inputs: Builds_Action_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer sürümler`)
};

const zh_builds_action_other_versions = /** @type {(inputs: Builds_Action_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他版本`)
};

const ja_builds_action_other_versions = /** @type {(inputs: Builds_Action_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ほかのバージョン`)
};

/**
* | output |
* | --- |
* | "Other versions" |
*
* @param {Builds_Action_Other_VersionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_action_other_versions = /** @type {((inputs?: Builds_Action_Other_VersionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Action_Other_VersionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_action_other_versions(inputs)
	if (locale === "de") return de_builds_action_other_versions(inputs)
	if (locale === "fr") return fr_builds_action_other_versions(inputs)
	if (locale === "it") return it_builds_action_other_versions(inputs)
	if (locale === "nl") return nl_builds_action_other_versions(inputs)
	if (locale === "pl") return pl_builds_action_other_versions(inputs)
	if (locale === "pt") return pt_builds_action_other_versions(inputs)
	if (locale === "ru") return ru_builds_action_other_versions(inputs)
	if (locale === "sv") return sv_builds_action_other_versions(inputs)
	if (locale === "tr") return tr_builds_action_other_versions(inputs)
	if (locale === "zh") return zh_builds_action_other_versions(inputs)
	if (locale === "ja") return ja_builds_action_other_versions(inputs)
	return en_builds_action_other_versions(inputs)
});
