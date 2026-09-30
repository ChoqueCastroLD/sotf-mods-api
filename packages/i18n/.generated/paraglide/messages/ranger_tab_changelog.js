/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Tab_ChangelogInputs */

const en_ranger_tab_changelog = /** @type {(inputs: Ranger_Tab_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changelog`)
};

const es_ranger_tab_changelog = /** @type {(inputs: Ranger_Tab_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambios`)
};

const de_ranger_tab_changelog = /** @type {(inputs: Ranger_Tab_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Änderungen`)
};

const fr_ranger_tab_changelog = /** @type {(inputs: Ranger_Tab_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changements`)
};

const it_ranger_tab_changelog = /** @type {(inputs: Ranger_Tab_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifiche`)
};

const nl_ranger_tab_changelog = /** @type {(inputs: Ranger_Tab_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wijzigingen`)
};

const pl_ranger_tab_changelog = /** @type {(inputs: Ranger_Tab_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmiany`)
};

const pt_ranger_tab_changelog = /** @type {(inputs: Ranger_Tab_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alterações`)
};

const ru_ranger_tab_changelog = /** @type {(inputs: Ranger_Tab_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменения`)
};

const sv_ranger_tab_changelog = /** @type {(inputs: Ranger_Tab_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ändringar`)
};

const tr_ranger_tab_changelog = /** @type {(inputs: Ranger_Tab_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklikler`)
};

const zh_ranger_tab_changelog = /** @type {(inputs: Ranger_Tab_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新日志`)
};

const ja_ranger_tab_changelog = /** @type {(inputs: Ranger_Tab_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更履歴`)
};

/**
* | output |
* | --- |
* | "Changelog" |
*
* @param {Ranger_Tab_ChangelogInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_tab_changelog = /** @type {((inputs?: Ranger_Tab_ChangelogInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Tab_ChangelogInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_tab_changelog(inputs)
	if (locale === "de") return de_ranger_tab_changelog(inputs)
	if (locale === "fr") return fr_ranger_tab_changelog(inputs)
	if (locale === "it") return it_ranger_tab_changelog(inputs)
	if (locale === "nl") return nl_ranger_tab_changelog(inputs)
	if (locale === "pl") return pl_ranger_tab_changelog(inputs)
	if (locale === "pt") return pt_ranger_tab_changelog(inputs)
	if (locale === "ru") return ru_ranger_tab_changelog(inputs)
	if (locale === "sv") return sv_ranger_tab_changelog(inputs)
	if (locale === "tr") return tr_ranger_tab_changelog(inputs)
	if (locale === "zh") return zh_ranger_tab_changelog(inputs)
	if (locale === "ja") return ja_ranger_tab_changelog(inputs)
	return en_ranger_tab_changelog(inputs)
});
