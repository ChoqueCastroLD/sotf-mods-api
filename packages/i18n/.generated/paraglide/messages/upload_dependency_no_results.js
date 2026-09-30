/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Dependency_No_ResultsInputs */

const en_upload_dependency_no_results = /** @type {(inputs: Upload_Dependency_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No mod matches.`)
};

const es_upload_dependency_no_results = /** @type {(inputs: Upload_Dependency_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ningún mod coincide.`)
};

const de_upload_dependency_no_results = /** @type {(inputs: Upload_Dependency_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Mod passt.`)
};

const fr_upload_dependency_no_results = /** @type {(inputs: Upload_Dependency_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun mod ne correspond.`)
};

const it_upload_dependency_no_results = /** @type {(inputs: Upload_Dependency_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna mod corrisponde.`)
};

const nl_upload_dependency_no_results = /** @type {(inputs: Upload_Dependency_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen mod komt overeen.`)
};

const pl_upload_dependency_no_results = /** @type {(inputs: Upload_Dependency_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żaden mod nie pasuje.`)
};

const pt_upload_dependency_no_results = /** @type {(inputs: Upload_Dependency_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum mod corresponde.`)
};

const ru_upload_dependency_no_results = /** @type {(inputs: Upload_Dependency_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подходящих модов нет.`)
};

const sv_upload_dependency_no_results = /** @type {(inputs: Upload_Dependency_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen mod matchar.`)
};

const tr_upload_dependency_no_results = /** @type {(inputs: Upload_Dependency_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eşleşen mod yok.`)
};

const zh_upload_dependency_no_results = /** @type {(inputs: Upload_Dependency_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有匹配的模组。`)
};

const ja_upload_dependency_no_results = /** @type {(inputs: Upload_Dependency_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一致するMODはありません。`)
};

/**
* | output |
* | --- |
* | "No mod matches." |
*
* @param {Upload_Dependency_No_ResultsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dependency_no_results = /** @type {((inputs?: Upload_Dependency_No_ResultsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dependency_No_ResultsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dependency_no_results(inputs)
	if (locale === "de") return de_upload_dependency_no_results(inputs)
	if (locale === "fr") return fr_upload_dependency_no_results(inputs)
	if (locale === "it") return it_upload_dependency_no_results(inputs)
	if (locale === "nl") return nl_upload_dependency_no_results(inputs)
	if (locale === "pl") return pl_upload_dependency_no_results(inputs)
	if (locale === "pt") return pt_upload_dependency_no_results(inputs)
	if (locale === "ru") return ru_upload_dependency_no_results(inputs)
	if (locale === "sv") return sv_upload_dependency_no_results(inputs)
	if (locale === "tr") return tr_upload_dependency_no_results(inputs)
	if (locale === "zh") return zh_upload_dependency_no_results(inputs)
	if (locale === "ja") return ja_upload_dependency_no_results(inputs)
	return en_upload_dependency_no_results(inputs)
});
