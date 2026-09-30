/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Tab_ManifestInputs */

const en_ranger_tab_manifest = /** @type {(inputs: Ranger_Tab_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifest diff`)
};

const es_ranger_tab_manifest = /** @type {(inputs: Ranger_Tab_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diff del manifest`)
};

const de_ranger_tab_manifest = /** @type {(inputs: Ranger_Tab_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifest-Diff`)
};

const fr_ranger_tab_manifest = /** @type {(inputs: Ranger_Tab_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diff du manifest`)
};

const it_ranger_tab_manifest = /** @type {(inputs: Ranger_Tab_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Differenze del manifest`)
};

const nl_ranger_tab_manifest = /** @type {(inputs: Ranger_Tab_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifestverschillen`)
};

const pl_ranger_tab_manifest = /** @type {(inputs: Ranger_Tab_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Różnice manifestu`)
};

const pt_ranger_tab_manifest = /** @type {(inputs: Ranger_Tab_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diferenças do manifest`)
};

const ru_ranger_tab_manifest = /** @type {(inputs: Ranger_Tab_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сравнение манифеста`)
};

const sv_ranger_tab_manifest = /** @type {(inputs: Ranger_Tab_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifestskillnader`)
};

const tr_ranger_tab_manifest = /** @type {(inputs: Ranger_Tab_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifest farkları`)
};

const zh_ranger_tab_manifest = /** @type {(inputs: Ranger_Tab_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清单差异`)
};

const ja_ranger_tab_manifest = /** @type {(inputs: Ranger_Tab_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マニフェスト差分`)
};

/**
* | output |
* | --- |
* | "Manifest diff" |
*
* @param {Ranger_Tab_ManifestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_tab_manifest = /** @type {((inputs?: Ranger_Tab_ManifestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Tab_ManifestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_tab_manifest(inputs)
	if (locale === "de") return de_ranger_tab_manifest(inputs)
	if (locale === "fr") return fr_ranger_tab_manifest(inputs)
	if (locale === "it") return it_ranger_tab_manifest(inputs)
	if (locale === "nl") return nl_ranger_tab_manifest(inputs)
	if (locale === "pl") return pl_ranger_tab_manifest(inputs)
	if (locale === "pt") return pt_ranger_tab_manifest(inputs)
	if (locale === "ru") return ru_ranger_tab_manifest(inputs)
	if (locale === "sv") return sv_ranger_tab_manifest(inputs)
	if (locale === "tr") return tr_ranger_tab_manifest(inputs)
	if (locale === "zh") return zh_ranger_tab_manifest(inputs)
	if (locale === "ja") return ja_ranger_tab_manifest(inputs)
	return en_ranger_tab_manifest(inputs)
});
