/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Fact_Tested_BuildsInputs */

const en_mod_fact_tested_builds = /** @type {(inputs: Mod_Fact_Tested_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tested on`)
};

const es_mod_fact_tested_builds = /** @type {(inputs: Mod_Fact_Tested_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Probado en`)
};

const de_mod_fact_tested_builds = /** @type {(inputs: Mod_Fact_Tested_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Getestet auf`)
};

const fr_mod_fact_tested_builds = /** @type {(inputs: Mod_Fact_Tested_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Testé sur`)
};

const it_mod_fact_tested_builds = /** @type {(inputs: Mod_Fact_Tested_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Testata su`)
};

const nl_mod_fact_tested_builds = /** @type {(inputs: Mod_Fact_Tested_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Getest op`)
};

const pl_mod_fact_tested_builds = /** @type {(inputs: Mod_Fact_Tested_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Testowano na`)
};

const pt_mod_fact_tested_builds = /** @type {(inputs: Mod_Fact_Tested_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Testado em`)
};

const ru_mod_fact_tested_builds = /** @type {(inputs: Mod_Fact_Tested_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверен на`)
};

const sv_mod_fact_tested_builds = /** @type {(inputs: Mod_Fact_Tested_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Testad på`)
};

const tr_mod_fact_tested_builds = /** @type {(inputs: Mod_Fact_Tested_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test edildiği sürümler`)
};

const zh_mod_fact_tested_builds = /** @type {(inputs: Mod_Fact_Tested_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`测试版本`)
};

const ja_mod_fact_tested_builds = /** @type {(inputs: Mod_Fact_Tested_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動作確認`)
};

/**
* | output |
* | --- |
* | "Tested on" |
*
* @param {Mod_Fact_Tested_BuildsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_fact_tested_builds = /** @type {((inputs?: Mod_Fact_Tested_BuildsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Fact_Tested_BuildsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_fact_tested_builds(inputs)
	if (locale === "de") return de_mod_fact_tested_builds(inputs)
	if (locale === "fr") return fr_mod_fact_tested_builds(inputs)
	if (locale === "it") return it_mod_fact_tested_builds(inputs)
	if (locale === "nl") return nl_mod_fact_tested_builds(inputs)
	if (locale === "pl") return pl_mod_fact_tested_builds(inputs)
	if (locale === "pt") return pt_mod_fact_tested_builds(inputs)
	if (locale === "ru") return ru_mod_fact_tested_builds(inputs)
	if (locale === "sv") return sv_mod_fact_tested_builds(inputs)
	if (locale === "tr") return tr_mod_fact_tested_builds(inputs)
	if (locale === "zh") return zh_mod_fact_tested_builds(inputs)
	if (locale === "ja") return ja_mod_fact_tested_builds(inputs)
	return en_mod_fact_tested_builds(inputs)
});
