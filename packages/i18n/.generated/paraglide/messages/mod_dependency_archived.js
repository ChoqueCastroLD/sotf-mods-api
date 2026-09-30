/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Dependency_ArchivedInputs */

const en_mod_dependency_archived = /** @type {(inputs: Mod_Dependency_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archived by its creator`)
};

const es_mod_dependency_archived = /** @type {(inputs: Mod_Dependency_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivada por su creador`)
};

const de_mod_dependency_archived = /** @type {(inputs: Mod_Dependency_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vom Ersteller archiviert`)
};

const fr_mod_dependency_archived = /** @type {(inputs: Mod_Dependency_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivée par son créateur`)
};

const it_mod_dependency_archived = /** @type {(inputs: Mod_Dependency_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archiviata dal creatore`)
};

const nl_mod_dependency_archived = /** @type {(inputs: Mod_Dependency_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gearchiveerd door de maker`)
};

const pl_mod_dependency_archived = /** @type {(inputs: Mod_Dependency_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zarchiwizowane przez twórcę`)
};

const pt_mod_dependency_archived = /** @type {(inputs: Mod_Dependency_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivada pelo criador`)
};

const ru_mod_dependency_archived = /** @type {(inputs: Mod_Dependency_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор отправил в архив`)
};

const sv_mod_dependency_archived = /** @type {(inputs: Mod_Dependency_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arkiverad av skaparen`)
};

const tr_mod_dependency_archived = /** @type {(inputs: Mod_Dependency_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcısı tarafından arşivlendi`)
};

const zh_mod_dependency_archived = /** @type {(inputs: Mod_Dependency_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已被作者归档`)
};

const ja_mod_dependency_archived = /** @type {(inputs: Mod_Dependency_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者がアーカイブ済み`)
};

/**
* | output |
* | --- |
* | "Archived by its creator" |
*
* @param {Mod_Dependency_ArchivedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_dependency_archived = /** @type {((inputs?: Mod_Dependency_ArchivedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Dependency_ArchivedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_dependency_archived(inputs)
	if (locale === "de") return de_mod_dependency_archived(inputs)
	if (locale === "fr") return fr_mod_dependency_archived(inputs)
	if (locale === "it") return it_mod_dependency_archived(inputs)
	if (locale === "nl") return nl_mod_dependency_archived(inputs)
	if (locale === "pl") return pl_mod_dependency_archived(inputs)
	if (locale === "pt") return pt_mod_dependency_archived(inputs)
	if (locale === "ru") return ru_mod_dependency_archived(inputs)
	if (locale === "sv") return sv_mod_dependency_archived(inputs)
	if (locale === "tr") return tr_mod_dependency_archived(inputs)
	if (locale === "zh") return zh_mod_dependency_archived(inputs)
	if (locale === "ja") return ja_mod_dependency_archived(inputs)
	return en_mod_dependency_archived(inputs)
});
