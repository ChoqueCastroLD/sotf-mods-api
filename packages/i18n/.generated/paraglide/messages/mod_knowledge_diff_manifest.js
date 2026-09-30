/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Diff_ManifestInputs */

const en_mod_knowledge_diff_manifest = /** @type {(inputs: Mod_Knowledge_Diff_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifest changes`)
};

const es_mod_knowledge_diff_manifest = /** @type {(inputs: Mod_Knowledge_Diff_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambios en el manifiesto`)
};

const de_mod_knowledge_diff_manifest = /** @type {(inputs: Mod_Knowledge_Diff_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Änderungen am Manifest`)
};

const fr_mod_knowledge_diff_manifest = /** @type {(inputs: Mod_Knowledge_Diff_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifications du manifeste`)
};

const it_mod_knowledge_diff_manifest = /** @type {(inputs: Mod_Knowledge_Diff_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifiche al manifest`)
};

const nl_mod_knowledge_diff_manifest = /** @type {(inputs: Mod_Knowledge_Diff_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wijzigingen in het manifest`)
};

const pl_mod_knowledge_diff_manifest = /** @type {(inputs: Mod_Knowledge_Diff_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmiany w manifeście`)
};

const pt_mod_knowledge_diff_manifest = /** @type {(inputs: Mod_Knowledge_Diff_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mudanças no manifesto`)
};

const ru_mod_knowledge_diff_manifest = /** @type {(inputs: Mod_Knowledge_Diff_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменения в манифесте`)
};

const sv_mod_knowledge_diff_manifest = /** @type {(inputs: Mod_Knowledge_Diff_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ändringar i manifestet`)
};

const tr_mod_knowledge_diff_manifest = /** @type {(inputs: Mod_Knowledge_Diff_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifest değişiklikleri`)
};

const zh_mod_knowledge_diff_manifest = /** @type {(inputs: Mod_Knowledge_Diff_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清单变化`)
};

const ja_mod_knowledge_diff_manifest = /** @type {(inputs: Mod_Knowledge_Diff_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マニフェストの変更`)
};

/**
* | output |
* | --- |
* | "Manifest changes" |
*
* @param {Mod_Knowledge_Diff_ManifestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_diff_manifest = /** @type {((inputs?: Mod_Knowledge_Diff_ManifestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Diff_ManifestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_diff_manifest(inputs)
	if (locale === "de") return de_mod_knowledge_diff_manifest(inputs)
	if (locale === "fr") return fr_mod_knowledge_diff_manifest(inputs)
	if (locale === "it") return it_mod_knowledge_diff_manifest(inputs)
	if (locale === "nl") return nl_mod_knowledge_diff_manifest(inputs)
	if (locale === "pl") return pl_mod_knowledge_diff_manifest(inputs)
	if (locale === "pt") return pt_mod_knowledge_diff_manifest(inputs)
	if (locale === "ru") return ru_mod_knowledge_diff_manifest(inputs)
	if (locale === "sv") return sv_mod_knowledge_diff_manifest(inputs)
	if (locale === "tr") return tr_mod_knowledge_diff_manifest(inputs)
	if (locale === "zh") return zh_mod_knowledge_diff_manifest(inputs)
	if (locale === "ja") return ja_mod_knowledge_diff_manifest(inputs)
	return en_mod_knowledge_diff_manifest(inputs)
});
