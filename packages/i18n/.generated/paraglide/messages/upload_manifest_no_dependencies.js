/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Manifest_No_DependenciesInputs */

const en_upload_manifest_no_dependencies = /** @type {(inputs: Upload_Manifest_No_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`None declared`)
};

const es_upload_manifest_no_dependencies = /** @type {(inputs: Upload_Manifest_No_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ninguna declarada`)
};

const de_upload_manifest_no_dependencies = /** @type {(inputs: Upload_Manifest_No_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine angegeben`)
};

const fr_upload_manifest_no_dependencies = /** @type {(inputs: Upload_Manifest_No_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune déclarée`)
};

const it_upload_manifest_no_dependencies = /** @type {(inputs: Upload_Manifest_No_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna dichiarata`)
};

const nl_upload_manifest_no_dependencies = /** @type {(inputs: Upload_Manifest_No_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen opgegeven`)
};

const pl_upload_manifest_no_dependencies = /** @type {(inputs: Upload_Manifest_No_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak zadeklarowanych`)
};

const pt_upload_manifest_no_dependencies = /** @type {(inputs: Upload_Manifest_No_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma declarada`)
};

const ru_upload_manifest_no_dependencies = /** @type {(inputs: Upload_Manifest_No_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не указаны`)
};

const sv_upload_manifest_no_dependencies = /** @type {(inputs: Upload_Manifest_No_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga angivna`)
};

const tr_upload_manifest_no_dependencies = /** @type {(inputs: Upload_Manifest_No_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Belirtilmemiş`)
};

const zh_upload_manifest_no_dependencies = /** @type {(inputs: Upload_Manifest_No_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未声明`)
};

const ja_upload_manifest_no_dependencies = /** @type {(inputs: Upload_Manifest_No_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`指定なし`)
};

/**
* | output |
* | --- |
* | "None declared" |
*
* @param {Upload_Manifest_No_DependenciesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_manifest_no_dependencies = /** @type {((inputs?: Upload_Manifest_No_DependenciesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Manifest_No_DependenciesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_manifest_no_dependencies(inputs)
	if (locale === "de") return de_upload_manifest_no_dependencies(inputs)
	if (locale === "fr") return fr_upload_manifest_no_dependencies(inputs)
	if (locale === "it") return it_upload_manifest_no_dependencies(inputs)
	if (locale === "nl") return nl_upload_manifest_no_dependencies(inputs)
	if (locale === "pl") return pl_upload_manifest_no_dependencies(inputs)
	if (locale === "pt") return pt_upload_manifest_no_dependencies(inputs)
	if (locale === "ru") return ru_upload_manifest_no_dependencies(inputs)
	if (locale === "sv") return sv_upload_manifest_no_dependencies(inputs)
	if (locale === "tr") return tr_upload_manifest_no_dependencies(inputs)
	if (locale === "zh") return zh_upload_manifest_no_dependencies(inputs)
	if (locale === "ja") return ja_upload_manifest_no_dependencies(inputs)
	return en_upload_manifest_no_dependencies(inputs)
});
