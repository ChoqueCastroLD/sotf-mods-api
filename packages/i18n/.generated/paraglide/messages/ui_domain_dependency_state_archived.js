/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Dependency_State_ArchivedInputs */

const en_ui_domain_dependency_state_archived = /** @type {(inputs: Ui_Domain_Dependency_State_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archived`)
};

const es_ui_domain_dependency_state_archived = /** @type {(inputs: Ui_Domain_Dependency_State_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivado`)
};

const de_ui_domain_dependency_state_archived = /** @type {(inputs: Ui_Domain_Dependency_State_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archiviert`)
};

const fr_ui_domain_dependency_state_archived = /** @type {(inputs: Ui_Domain_Dependency_State_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivé`)
};

const it_ui_domain_dependency_state_archived = /** @type {(inputs: Ui_Domain_Dependency_State_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archiviata`)
};

const nl_ui_domain_dependency_state_archived = /** @type {(inputs: Ui_Domain_Dependency_State_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gearchiveerd`)
};

const pl_ui_domain_dependency_state_archived = /** @type {(inputs: Ui_Domain_Dependency_State_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zarchiwizowany`)
};

const pt_ui_domain_dependency_state_archived = /** @type {(inputs: Ui_Domain_Dependency_State_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivado`)
};

const ru_ui_domain_dependency_state_archived = /** @type {(inputs: Ui_Domain_Dependency_State_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В архиве`)
};

const sv_ui_domain_dependency_state_archived = /** @type {(inputs: Ui_Domain_Dependency_State_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arkiverad`)
};

const tr_ui_domain_dependency_state_archived = /** @type {(inputs: Ui_Domain_Dependency_State_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arşivlendi`)
};

const zh_ui_domain_dependency_state_archived = /** @type {(inputs: Ui_Domain_Dependency_State_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已归档`)
};

const ja_ui_domain_dependency_state_archived = /** @type {(inputs: Ui_Domain_Dependency_State_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アーカイブ済み`)
};

/**
* | output |
* | --- |
* | "Archived" |
*
* @param {Ui_Domain_Dependency_State_ArchivedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_dependency_state_archived = /** @type {((inputs?: Ui_Domain_Dependency_State_ArchivedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Dependency_State_ArchivedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_dependency_state_archived(inputs)
	if (locale === "de") return de_ui_domain_dependency_state_archived(inputs)
	if (locale === "fr") return fr_ui_domain_dependency_state_archived(inputs)
	if (locale === "it") return it_ui_domain_dependency_state_archived(inputs)
	if (locale === "nl") return nl_ui_domain_dependency_state_archived(inputs)
	if (locale === "pl") return pl_ui_domain_dependency_state_archived(inputs)
	if (locale === "pt") return pt_ui_domain_dependency_state_archived(inputs)
	if (locale === "ru") return ru_ui_domain_dependency_state_archived(inputs)
	if (locale === "sv") return sv_ui_domain_dependency_state_archived(inputs)
	if (locale === "tr") return tr_ui_domain_dependency_state_archived(inputs)
	if (locale === "zh") return zh_ui_domain_dependency_state_archived(inputs)
	if (locale === "ja") return ja_ui_domain_dependency_state_archived(inputs)
	return en_ui_domain_dependency_state_archived(inputs)
});
