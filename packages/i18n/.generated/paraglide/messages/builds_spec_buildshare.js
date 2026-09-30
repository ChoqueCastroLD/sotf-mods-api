/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Spec_BuildshareInputs */

const en_builds_spec_buildshare = /** @type {(inputs: Builds_Spec_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare version`)
};

const es_builds_spec_buildshare = /** @type {(inputs: Builds_Spec_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versión de BuildShare`)
};

const de_builds_spec_buildshare = /** @type {(inputs: Builds_Spec_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare-Version`)
};

const fr_builds_spec_buildshare = /** @type {(inputs: Builds_Spec_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version de BuildShare`)
};

const it_builds_spec_buildshare = /** @type {(inputs: Builds_Spec_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versione di BuildShare`)
};

const nl_builds_spec_buildshare = /** @type {(inputs: Builds_Spec_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare-versie`)
};

const pl_builds_spec_buildshare = /** @type {(inputs: Builds_Spec_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja BuildShare`)
};

const pt_builds_spec_buildshare = /** @type {(inputs: Builds_Spec_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versão do BuildShare`)
};

const ru_builds_spec_buildshare = /** @type {(inputs: Builds_Spec_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия BuildShare`)
};

const sv_builds_spec_buildshare = /** @type {(inputs: Builds_Spec_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare-version`)
};

const tr_builds_spec_buildshare = /** @type {(inputs: Builds_Spec_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare sürümü`)
};

const zh_builds_spec_buildshare = /** @type {(inputs: Builds_Spec_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare 版本`)
};

const ja_builds_spec_buildshare = /** @type {(inputs: Builds_Spec_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare バージョン`)
};

/**
* | output |
* | --- |
* | "BuildShare version" |
*
* @param {Builds_Spec_BuildshareInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_spec_buildshare = /** @type {((inputs?: Builds_Spec_BuildshareInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Spec_BuildshareInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_spec_buildshare(inputs)
	if (locale === "de") return de_builds_spec_buildshare(inputs)
	if (locale === "fr") return fr_builds_spec_buildshare(inputs)
	if (locale === "it") return it_builds_spec_buildshare(inputs)
	if (locale === "nl") return nl_builds_spec_buildshare(inputs)
	if (locale === "pl") return pl_builds_spec_buildshare(inputs)
	if (locale === "pt") return pt_builds_spec_buildshare(inputs)
	if (locale === "ru") return ru_builds_spec_buildshare(inputs)
	if (locale === "sv") return sv_builds_spec_buildshare(inputs)
	if (locale === "tr") return tr_builds_spec_buildshare(inputs)
	if (locale === "zh") return zh_builds_spec_buildshare(inputs)
	if (locale === "ja") return ja_builds_spec_buildshare(inputs)
	return en_builds_spec_buildshare(inputs)
});
